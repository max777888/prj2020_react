import React, { Component } from 'react'
class TodoList extends Component {   
   constructor(props) {
        super(props);
        console.log("in constructor");
        console.log(this.props.todos);
        this.state={todos:this.props.todos};
    }

    deleteTodos=(id)=>{
        let todos=this.state.todos.filter(todo=>{
          return todo.id!==id;
        })
        this.setState({
           todos: todos
        })
      }


     render() {
        console.log("render the shit");
        const todoItems=[];
        const todos=this.state.todos;
        console.log(todos);
        
      
        todos.forEach(todo=>{
             console.log("push item");
                todoItems.push(
               <div key={todo.id}>
                 <li>{todo.name} <button className="btn btn-delete"  
                  onClick={()=>{this.deleteTodos(todo.id)}}> X
               </button>
                 </li>
               </div>
             )
           });
      

        return (
        <ul className="list-group">
            {todoItems}
        </ul>
    )
 }
}
export default TodoList