import React, { Component } from 'react';
import uuid from 'uuid';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, CardTitle, CardDeck, CardSubtitle, CardBody,Button } from 'reactstrap'
import './App.css';

import AppNavbar from './components/AppNavbar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {

    state = {
        todos: [
            { id: uuid(), title: "Running", desc: "run 1000km", date: "Oct-20-2019", status: 'Pending' },
            { id: uuid(), title: "This is just a test fam", desc: "Testing", date: "Oct-20-2019", status: 'Pending' },
            { id: uuid(), title: "Submit this challenge", desc: "finish this todo app", date: "Oct-11-2019", status: 'Pending' }
        ]
    }

    handleSubmit = (todo) => {
        this.setState(state => ({
            todos: [
                ...this.state.todos,
                {
                    id: todo.id,
                    title: todo.title,
                    desc: todo.desc,
                    date: todo.date,
                    status: todo.status
                }
            ]   
        }))
        console.log(this.state);
    }

    handleStatusChange = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const arr = this.state.todos;
        arr.forEach( todo => {
            console.log(todo);
            if ( todo.id === id && todo.status === "Pending") {
                todo.status = "Completed";
            }
        });
        this.setState({todos: arr});
        console.log(this.state.todos);
    }

    handleClear = (e) => {
        e.preventDefault();
        const arr = [];
        if (window.confirm("Are you sure you want to clear all todos?")) {
            this.setState({todos: arr});
        }
        console.log(this.state.todos);
    }

    generateDoneButton = (todo) => {
        if (todo.status === "Pending") {
            return (
                <Button id={todo.id} className='remove-btn' onClick={this.handleStatusChange}>Done?</Button>
            )
        } 
        else {
            return ( <div>Completed!</div> )
        }
    }

    generateTodoCards = (arr) => arr.map((todo, index) => {
        return (
            <Card id={todo.id} status="todo.status" className='todoItemCard'>
                <CardTitle>{todo.title}</CardTitle>
                <CardSubtitle>{todo.date}</CardSubtitle>
                <CardBody>{todo.desc}</CardBody>
                { this.generateDoneButton(todo) }
            </Card>
        )
    });

    generateCounts = (arr) => {
        var count = 0;
        arr.forEach(item => {
            if ( item.status === 'Pending' ) {
                count++;
            }
        });
        return (
            <div>You have {count} todos remaining.</div>
        )
    } 

    render() {
        return (
            <div className="App">
                <AppNavbar />
                <TodoInput handleSubmit={ this.handleSubmit } />
                <TodoList todos={ this.state.todos } generateTodoCards={ this.generateTodoCards } generateCounts={ this.generateCounts } handleClear={ this.handleClear }/>
            </div>
        );
    }
}

export default App;
