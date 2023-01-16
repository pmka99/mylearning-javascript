import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TodoApi from '../../Api/todos'
import TodosContext from "../../Context/Todos";
import '../../style/app.css'

// Get single task information from api And show it
export default function SingleTodos(){
    const[loading,setLoading]=useState(false);
    const[todo,setTodo]=useState(undefined);
    const todosContext=useContext(TodosContext);
    const params=useParams()

    useEffect(()=>{
        setLoading(false)
        TodoApi.get(`/todos/${params.id}.json`)
                .then(response=>(setLoading(true),setTodo(response.data),console.log(response.data),setLoading(true)))
                .catch(err=>console.log(err))
      },[])
    return(          
        <div className="container-sm" id="app1">
            <div className="card" style={{margin: '5px'}}>
            {
                
                loading
                    ? <><h6>work that you must do is <strong style={{color:'blue'}}>{todo.work}</strong></h6><p>status of work is <strong style={{color:todo.done ? 'green': 'red'}}>{todo.done?'done':'undone'}</strong></p></>
                    : <h5>Loading.........</h5>
            }
            </div>
        </div>
    )
}