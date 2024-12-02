import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
}from 'reactstrap';

import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'


class ItemModal extends Component {
    state = {
        modal: false, // off by default
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        }); 
    }

    onChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault(); //prevent the form from submitting
        const newItem = {
            //id : uuidv4(), //id determined by mongoDB
            name: this.state.name
        }

        this.props.addItem(newItem) //add item via addItem action

        this.toggle();//close the modal
    }


    render(){
        return (
            <div><Button color='dark' 
                         style={{marginBottom : '2rem'}} 
                         onClick={this.toggle}>
                         Add Item
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to my shopping list!
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type = "text" name="name" id="item" 
                                       placeholder="Add shopping item" onChange={this.onChange} />
                                <Button color = "warning" style={{marginTop: '2rem'}}>
                                    Add Item!
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);