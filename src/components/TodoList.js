import React, { Component } from 'react';
import {
    Card, CardTitle, CardDeck, CardSubtitle, CardBody, Button
} from 'reactstrap';

class TodoList extends Component {

    render() {
        return ( 
            <div>
                <Card className="todoListCard">
                    <Button className="clear-btn" onClick={ this.props.handleClear }>Clear</Button>
                    <CardTitle className="font-weight-bold">TodoList</CardTitle>
                    {this.props.generateCounts(this.props.todos)}
                    <div className="cardContainer">
                        { this.props.generateTodoCards(this.props.todos) }
                    </div>
                </Card>
            </div>
        );
    }

}

export default TodoList;