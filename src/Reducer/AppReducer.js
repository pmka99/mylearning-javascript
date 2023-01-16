

function AppReducer(state,action){
    let value=action.value
    switch (action.type) {
        case 'initValue':
            return initValue(state,value)
            
        case 'edit':
            return edit(state,value)

        case 'deleteComponent':
            return deleteComponent(state,value)

        case 'changeDone':
            return changeDone(state,value)

        case 'addTodo':
            return addTodo(state,value)

        case 'changeNav':
            return changeNav(state,value)

        case 'changeLoginStatus':
            return changeLoginStatus(state)

        case 'okStatus':
            return okStatus(state,value)

        default:
            break;
    }
}

export default AppReducer;

let initValue=(state,value)=>{
    let arr=value.map(item=>{return{id:item[0],work:item[1].work,done:item[1].done}})
    let nav=arr.filter(item=>item.done==false).length==0?true:false 
    return{
        ...state,
        todos:arr,
        statusNav:nav
    }
}

let edit=(state,{idTarget,text})=>{
    let arr=state.todos.map(item=>item.id==idTarget
                                            ? {id:item.id,work:text,done:item.done}
                                            : {id:item.id,work:item.work,done:item.done}
    );
    return{
        ...state,
        todos:arr 
    }
}

let deleteComponent=(state,value)=>{
    let arr=state.todos.filter(item=>item.id!==value);
    return{
        ...state,
        todos:arr 
    }
}

let changeDone=(state,value)=>{
    let arr= state.todos.map(item=>item.id==value
                                            ? {id:item.id,work:item.work,done:!item.done}
                                            : {id:item.id,work:item.work,done:item.done}         
    );
    return{
        ...state,
        todos:arr 
    }
}

let addTodo=(state,{input,name})=>{
    let arr=[...state.todos,{id:name,work:input,done:false}]
    return{
        ...state,
        todos:arr
    }
}

// change status of navbar to be done or undone
let changeNav=(state,value)=>{
    return{
        ...state,
        statusNav:value
    }
}

let changeLoginStatus=(state)=>{
    return{
        ...state,
        loginStatus:!state.loginStatus
    }
}

// after any operation fu1() Update state with api
let okStatus=(state,value)=>{
    let arr=value.map(item=>{return{id:item[0],work:item[1].work,done:item[1].done}})
    return{
        ...state,
        todos:arr
    }
}

