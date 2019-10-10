import React, { Component } from 'react';
// import './AddNewForm.css'
import uuid from 'uuid/v4'


class AddNewForm extends Component{
constructor(props){
    super(props);
    this.state={
        name: "",
        id: uuid(),
        isChecked: false,
        isEditable: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value,
    })
}

handleSubmit(evt){
    evt.preventDefault();
    this.props.addTodo(this.state);

    this.setState({
        name: "",
        id: uuid(),
        isChecked: false,
        isEditable: false,
    })
}
    render(){
        return(
        
            <form className="AddNewForm" onSubmit = {this.handleSubmit}>
                <label htmlFor="todoItem">New Todo</label>
                <input type="text"
                        id="todoItem"
                        name="name"
                        value={this.state.name}
                        onChange = {this.handleChange}
                />
                <button>Add todo</button>
            </form>
        )
    }
}

export default AddNewForm;