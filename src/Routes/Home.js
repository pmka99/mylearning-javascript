import { useContext,useEffect, useState } from "react"
import AppTodo from "../Components/AppTodo"
import TodoList from "../Components/TodoList"
import TodoApi from "../Api/todos"

import TodosContext from "../Context/Todos"


export default function Home(){

    const[loading,setLoading]=useState();

    const todosContext=useContext(TodosContext)

    // get new information from api and update todo list in Context
    useEffect(()=>{
        setLoading(false)
        TodoApi.get(`/todos.json`)
                .then(response=>(setLoading(true),todosContext.dispath({type:'initValue',value:Object.entries(response.data)})))
                .catch(err=>console.log(err))
      },[])
    
    return(
        <div id="app1" className='container-sm'>
            {
            todosContext.state.loginStatus
                ? loading
                    ? <TodoList />
                    : <h4>loading .......</h4>
                : <h4>You must be login</h4>
            }
        </div>
    )
}