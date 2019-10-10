import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddNewForm from './AddNewForm';
import './TodoList.css'
import {findProp} from './helpers'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state ={
            todos: [],
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.editable = this.editable.bind(this);
        this.checkBoxChange = this.checkBoxChange.bind(this);
    }

    addTodo(newtodo){
        this.setState(oldSt =>({
            todos:[...oldSt.todos, newtodo],
        }))
    }

    removeTodo(id){
        const oldTodos = [...this.state.todos];

        const newTodos = oldTodos.filter(item => item.id !== id);

        this.setState({
            todos: newTodos,
        })
    }

    editTodo(id, evt){
        const oldTodos = [...this.state.todos]
        let prop = "name";
        let value = evt.target.value

        const newState = findProp(oldTodos, value, id,  prop);

        this.setState ({
            todos: newState,
        })
    }

    
    saveTodo(id){
        const oldTodos = [...this.state.todos]
        let prop = "isEditable";
        const newState = findProp(oldTodos, false, id, prop);

        this.setState({
            todos: newState,
        })
    }

    editable(id){
        const oldTodos = [...this.state.todos]
        let prop = "isEditable";

        const newState = findProp(oldTodos, true, id,  prop);

        this.setState({
            todos: newState,

        })
    }

    checkBoxChange(id, evt){
        const oldTodos = [...this.state.todos]
        let prop = "isChecked"
        let value = evt.target.checked;

        const newState = findProp(oldTodos, value, id,  prop);
       
        this.setState({
            todos: newState,
        })
    }


    render(){
        const todolist = this.state.todos.map((todo) => (
             <li key = {todo.id}> 
                <TodoItem
                        name = {todo.name} 
                        id={todo.id}
                        key = {todo.id}
                        removeTodo = {this.removeTodo}
                        editTodo = {this.editTodo}
                        saveTodo = {this.saveTodo}
                        isEditable = {this.editable}
                        editable={todo.isEditable}
                        checkBoxChange = {this.checkBoxChange}
                        checked={todo.isChecked}
                />
            </li>
        ));
        return(
            <div className="TodoList">
                <h1>Todo List</h1>
                <p>A Simple React Todo List App</p>
                <hr/>
        
                    <ul>
                        {todolist}
                    </ul>
     
               
                <div className="TodoList-form">
                    <AddNewForm addTodo = {this.addTodo}/>
                </div>
                
            </div>
        )
    }
}

export default TodoList;