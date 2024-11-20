import React, {Component} from "react";
import { Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid'

class ShoopingList extends Component {
    //Hard coded data for now, later use Redux to connect to backend
    state = {
        items: [
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Steak'},
            {id: uuid(), name: 'Bread'}
        ]
    }

    render (){
        const {items} = this.state
        return (
            <Container>
                <Button 
                color = "dark" 
                style={{marginBottom:'2rem'}} 
                onClick={() =>{
                    const name = prompt('Enter Item')
                    if (name) {
                        this.setState(state=>({
                            items: [...state.items, {id: uuid(), name}]
                        }));
                    }}
                }
                >Add Item</Button>
            </Container>
        );
    }
}

export default ShoopingList;