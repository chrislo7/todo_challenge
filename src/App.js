import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}

export default App;