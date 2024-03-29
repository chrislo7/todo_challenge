import React, { Component } from 'react';
import uuid from 'uuid';
import {
    Button, Form, FormGroup, Label, Input, Col, Row, Card, CardTitle, CardBody
} from 'reactstrap';

import TodoList from './TodoList';

class TodoInput extends Component {
    state = {
        id: "",
        title: "",
        desc: "",
        date: "",
        status: ""
    }

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: uuid(),
            title: this.state.title,
            desc: this.state.desc,
            date: this.state.date,
            status: "Pending"
        }
        if ( newTodo.title != '' ) {
            this.props.handleSubmit(newTodo);
        }        
    };

    render() {
        return (
            <div>
            <Card className='sticky-top inputCard'>
                <CardBody>
                    <CardTitle className="font-weight-bold">Add Todo</CardTitle>
                    <Form onSubmit={ this.onSubmit }>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input 
                                        type="text" 
                                        name="title" 
                                        placeholder="Enter a Title..." 
                                        onChange={ this.onChange }
                                        required 
                                        aria-required='true'
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDate" >Date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        placeholder="date placeholder"
                                        onChange={ this.onChange }
                                        required 
                                        aria-required='true'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input 
                                type="textarea" 
                                name="desc" 
                                placeholder="Enter a description..." 
                                onChange={ this.onChange }
                                required 
                                aria-required='true'
                            />
                        </FormGroup>
                        <Button>Add Todo</Button>
                    </Form>
                </CardBody>
          </Card>
          </div>
        );
    }
}

export default TodoInput;