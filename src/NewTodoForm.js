import React, { Component } from 'react'
import './NewTodoForm.css'
class NewTodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         todo:''    
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({ todo:evt.target.value})
       
    }
handleSubmit (evt){
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({
        todo:''  })
}
    render() {
        return (
  <div className="NewTodoForm">
   <form  onSubmit={this.handleSubmit} >
     <input type="text" name="todo"  value={this.state.todo} onChange={this.handleChange} />
     <button>Add ToDo</button>
  </form>   
   </div>
        )
    }
}

export default NewTodoForm

