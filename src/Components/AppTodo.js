
import React, { PureComponent, useContext, useState } from "react";
import '../style/AppTodo.css';
import TodosContext from "../Context/Todos";
import TodoApi from '../Api/todos'



// add a task to todo list

function AppTodo(){
    const [input,inputSet]=useState('')
    const todosContext=useContext(TodosContext)

    let post=()=>{
        TodoApi.post(`/todos.json`,{work:input,done:false})
            .then(response=>response.status==200
                                ? todosContext.dispath({type:'addTodo',value:{input,name:response.data.name}})
                                : console.log("please try again!")
                )
            .catch(err=>console.log(err))
        inputSet('')
    }

    return(
        
            <div> 
                <h6>Enter the work that want to do:</h6>
                <form onSubmit={post}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" onChange={(e)=>inputSet(e.target.value)} value={input}></input>
                        <button className="btn btn-success" type="submit">submit</button>
                    </div>
                </form>
            </div>  
    )
}

export default AppTodo;





