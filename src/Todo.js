import React, { Component } from 'react'
import './Todo.css'
 class Todo extends Component {
constructor(props) {
    super(props)

    this.state = {
         isEditing:false,
         todo:this.props.todo
      
    }
    this.Toggle=this.Toggle.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleUpdate=this.handleUpdate.bind(this)
    this.toggleComplate=this.toggleComplate.bind(this)
}
Toggle(){
    this.setState({
        isEditing:!this.state.isEditing
    })
}
   handleChange(evt){
       this.setState({[evt.target.name]:evt.target.value})
       
   }  
   handleUpdate(evt){
       evt.preventDefault();
       this.props.update(this.props.id,this.state.todo)
       this.setState({isEditing:false})

   }
   toggleComplate(){
  this.props.toggleComplate(this.props.id)
   }
    render() {
        let result;
        if(this.state.isEditing){
            result=(
     <div className="Todo Todo-edit-form">
      <form onSubmit={this.handleUpdate}>
      <input value={this.state.todo} name="todo" onChange={this.handleChange}/>
      <button>Save</button>
      </form>
      </div>
            )}
  else{
     result=(
<div className="Todo">
 <li  onClick={this.toggleComplate} className={this.props.complated ? " Todo-task completed ": "Todo-task"}>{this.props.todo}</li> 
 <button  className="Todo-buttons fa fa-edit fa-2x" onClick={this.Toggle}></button>
<button   className="Todo-buttons fa fa-trash fa-2x"  onClick={this.props.delete}></button>
                    
     </div>
             )
            }
        
        return result
           
        
    }

 }
export default Todo
