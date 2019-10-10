import React, { Component } from 'react';
import uuid from 'uuid';
import {
    Card, CardTitle, CardDeck, CardSubtitle, CardBody, Button
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        todos: [
            { id: uuid(), title: "Running", desc: "run 1000km", date: "Oct-20-2019" },
            { id: uuid(), title: "testing0", desc: "abc0", date: "Oct-20-2019" },
            { id: uuid(), title: "testing1", desc: "ddd1", date: "Oct-30-2019" }
        ]
    }

    generateTodoCards = this.state.todos.map((todo, index) => {
        return (
            <Card className='todoItemCard'>
                <CardTitle>{todo.title}</CardTitle>
                <CardSubtitle>{todo.date}</CardSubtitle>
                <CardBody>{todo.desc}</CardBody>
            </Card>

        )
    })
    
    render() {
        return ( 
            <div>
                <Card className="todoListCard">
                    <CardTitle className="font-weight-bold">TodoList</CardTitle>
                    <CardDeck>
                        { this.generateTodoCards }
                    </CardDeck>
                </Card>
            </div>
        );
    }

}

export default AppNavbar;