import React, { Component } from 'react';
import {
    Card, CardTitle, CardDeck, CardSubtitle, CardBody, Button
} from 'reactstrap';

class AppNavbar extends Component {
    render() {
        return ( 
            <div>
                <Card className="todoListCard">
                    <CardTitle className="font-weight-bold">TodoList</CardTitle>
                    <CardDeck>
                        <Card className='todoItemCard'>
                            <CardTitle>Running</CardTitle>
                            <CardSubtitle>October 11th 2019</CardSubtitle>
                            <CardBody>
                                Run a 1000km marathon
                            </CardBody>
                        </Card>
                        <Card className='todoItemCard'>
                            <CardTitle>Coding</CardTitle>
                            <CardSubtitle>October 13th 2019</CardSubtitle>
                            <CardBody>
                                Code 1 line in project
                            </CardBody>
                        </Card>
                        <Card className='todoItemCard'>
                            <CardTitle>Gym</CardTitle>
                            <CardSubtitle>October 20th 2019</CardSubtitle>
                            <CardBody>
                                Gym 24 hours on the 20th
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Card>
            </div>
        );
    }

}

export default AppNavbar;