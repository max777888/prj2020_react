import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'
import {Component} from 'react'

export default class App extends Component{
  state={
   'todos':[
       {'name':'Walk the dog', 'id': 0},
       {'name':'Bake a cake', 'id': 1},
        {'name':'Study for the test', 'id': 2}
        ]
      }
render(){
  return(
    <div>
     <h1>To-do list app using React </h1>
     <ToDoList todos={this.state.todos}/>
   </div>
  )
 }
}