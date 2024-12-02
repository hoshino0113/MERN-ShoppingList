const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');


//@route GET api/items
//@desc  Get all items
router.get('/', (req, res)=> {
    Item.find()
    .sort({date: -1})
    .then(items=> res.json(items))
    .catch(err => {
        console.error('Error fetching items in API:', err.message);
        res.status(500).json({ success: false, error: 'Server Error' });
    });
});

//@route POST api/items
//@desc  Post an item
router.post('/', (req, res)=> {
    const newItem = new Item({
        name:req.body.name
        //date will be auto added based on the definition of Item
    })
    newItem.save().then(item => res.json(item)); //save the newItem to the database
});

router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(item => {
            if (!item) {
                // If item doesn't exist, send a 404 response
                return res.status(404).json({ success: false, message: 'Item not found' });
            }
            res.json({ success: true });
        })
        .catch(err => res.status(500).json({ success: false, error: err.message }));
});

module.exports = router;

