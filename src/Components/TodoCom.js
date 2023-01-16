import React, { Component, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import '../style/TodoList.css'
import TodosContext from "../Context/Todos";
import TodoApi from '../Api/todos'
import { NavLink } from "react-router-dom";

// show every task of todo list with Options(edit||delete||change done/undone)

function TodoCom({item}){
    const[show,setShow] = useState(false)
    const[text,setText] = useState('')
    const todosContext = useContext(TodosContext)

    let deleteComponent=()=>{
        TodoApi.delete(`/todos/${item.id}.json`)
            .then(response=>(fu1(),todosContext.dispath({type:'deleteComponent',value:item.id})))
            .catch(err=>console.log(err))
    }

    // after any operation fu1() Update state with api
    let fu1=()=>{
        TodoApi.get(`/todos.json`)
            .then(response=>todosContext.dispath({type:'okStatus',value:Object.entries(response.data)}))
            .catch(err=>console.log(err))
    }

    let edit=()=>{
        TodoApi.put(`/todos/${item.id}.json`,{work:text,done:item.done})
            .then(response=>(fu1(),todosContext.dispath({type:'edit',value:{idTarget:item.id,text}})))
            .catch(err=>console.log(err))
        setShow(!show)
    }

    let changeDone=()=>{
        TodoApi.put(`/todos/${item.id}.json`,{work:item.work,done:!item.done})
            .then(response=>(fu1(),todosContext.dispath({type:'changeDone',value:item.id}))) 
            .catch(err=>console.log(err))
    }

    

    return(
            <Card id="card1">
                <div className="row">
                    <div className="col-sm-5">
                        <NavLink to={`/todos/single/${item.id}`}>{item.work}</NavLink>  
                    </div>
                    <div className="col-sm-7">
                        <button className="btn btn-sm btn-primary btnP1" onClick={deleteComponent}>delete</button>
                        <button className="btn btn-sm btn-primary btnP2" onClick={()=>setShow(!show)}>edit</button>
                        <button className="btn btn-sm btn-primary btnP3" style={{background:item.done? 'orange': 'green'}} onClick={changeDone}>{!item.done 
                                                                                            ? 'make done'
                                                                                            :'make undone'}</button>                              
                    </div> 
                </div>
                {
                show
                    ? <div className="row">
                        <form onSubmit={e=>(edit(),e.preventDefault())}>
                            <div className="input-group mt-3">
                                <input type="text" className="form-control" onChange={(e)=>setText(e.target.value)}></input>
                                <button className="btn btn-success" type="submit">submit</button>
                            </div>
                        </form>             
                      </div>
                    :''
                }    
            </Card>
        )
}


export default TodoCom;