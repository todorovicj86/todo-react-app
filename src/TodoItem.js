import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleEditable = this.handleEditable.bind(this);
        this.handleCheckBoxChange=this.handleCheckBoxChange.bind(this);
    }

    handleDelete(){
        this.props.removeTodo(this.props.id);
    }

    handleEditTodo(evt){
        this.props.editTodo(this.props.id, evt)
    }

    handleSave(evt){
        this.props.saveTodo(this.props.id)
    }
    handleEditable(evt){
        this.props.isEditable(this.props.id,evt);
    }

    handleCheckBoxChange(evt){
        this.props.checkBoxChange(this.props.id,evt);
    }
    render(){
        return(
        
            this.props.editable ? 
                <div className="TodoItem">
                    <div className="TodoItem-container">
                        <input type="text"
                            value={this.props.name}  
                            onChange={this.handleEditTodo} /> 
                    </div>
                    <div className="TodoItem-container">
                        {/* <i className="far fa-trash-alt" onClick = {this.handleDelete}></i> */}
                        {/* <button onClick = {this.handleDelete} >Delete</button> */}
                        <button onClick = {this.handleSave}>Save</button>
                    </div>
                    
                </div>
            :
                <div className="TodoItem">
                    <div className =  {`TodoItem-container ${this.props.checked ? 'isChecked' : ''}`}>
                        <input
                            type="checkbox"
                            value={this.props.name}  
                            onChange={this.handleCheckBoxChange}
                            checked= {this.props.checked} /> 
                            <span>{this.props.name}</span>
                    </div>
                    <div className="TodoItem-container">
                        <i className="far fa-edit" onClick = {this.handleEditable}></i>
                        <i className="far fa-trash-alt" onClick = {this.handleDelete}></i>
                        {/* <button onClick = {this.handleDelete} >Delete</button> */}
                        
                        {/* <button onClick = {this.handleEditable} >Edit</button> */}
                    </div>
                </div>

        )
    }
}

export default TodoItem;