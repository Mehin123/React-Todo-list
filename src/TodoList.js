import React, { Component } from 'react'
import Todo from './Todo.js'
import NewTodoForm from './NewTodoForm.js'
import uuid from 'uuid/v4'
import './TodoList.css'
 class TodoList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
           todos:[]   
         }
         this.addTodo=this.addTodo.bind(this)
         this.deleteTodo=this.deleteTodo.bind(this)
         this.update=this.update.bind(this)
         this.toggleComplate=this.toggleComplate.bind(this)
     }
     addTodo (newTodo){
         let newerTodo = {...newTodo, id:uuid(),complated:false}
         this.setState(  {
             todos:[...this.state.todos, newerTodo]
         })
         }
         deleteTodo (id){
             this.setState({
                 todos:this.state.todos.filter(todo=> todo.id !==id) 
             })
         }
         update(id,updateTodo){
             const updatedItem=this.state.todos.map(todoItem=> {
                if(todoItem.id === id){
                    return {...todoItem,todo:updateTodo}
                }
                    else{
                        return todoItem;
                    }
                })
                this.setState({todos:updatedItem})
             }
             toggleComplate(id){
          const complatedItem=this.state.todos.map(todoItem=>{
              if(todoItem.id ===id){
                  return {...todoItem,complated:!todoItem.complated}
              }
              else{
                  return todoItem;
              }
          })
          this.setState({todos:complatedItem})       
             }
             
         
    render() {
        return (
            <div className="TodoList">
        
           <h1>To Do List!</h1> <span>Simple React Todo List App.</span>
          
            <ul >
            {this.state.todos.map (todoItem => 
            <Todo delete={()=> this.deleteTodo(todoItem.id)} 
            id={todoItem.id} 
            key={todoItem.id} 
            todo={todoItem.todo} 
            update={this.update}
            complated={todoItem.complated}
            toggleComplate={this.toggleComplate}
            /> 
             )}  
              </ul> 
              <NewTodoForm add={this.addTodo}/>  
         
            </div>
        )
    }
}

export default TodoList
