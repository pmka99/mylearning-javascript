
import React, { Component, PureComponent, useContext, useState } from "react";
import TodosContext from "../Context/Todos";



import TodoCom from "./TodoCom";
import '../style/TodoList.css'

// show all of todolist

function TodoList(){
    const todosContext=useContext(TodosContext)
     
    let todos=todosContext.state.statusNav ? todosContext.state.todos.filter(item=>item.done==true) : todosContext.state.todos.filter(item=>item.done==false)
    let status1=todosContext.state.statusNav ?  '' : 'active'
    let status2=todosContext.state.statusNav ?  'active' : ''

     
    return(
            <>
                <div className="nav justify-content-center">
                    <a className={`nav-link nav-item ${status1}`} href="#" onClick={()=>todosContext.dispath({type:'changeNav',value:false})}>undone</a>
                    <a className={`nav-link nav-item ${status2}`} href="#" onClick={()=>todosContext.dispath({type:'changeNav',value:true})}>done</a> 
                    
                </div>
                <div id="block1">
                {
                    todos.map((item)=><TodoCom key={item.id} item={item} />)  
                }
                </div>
            </>   

    )
} 
    



export default TodoList;