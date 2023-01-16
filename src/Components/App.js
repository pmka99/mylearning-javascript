import '../style/app.css'
import React, { Component, useState,useReducer, useEffect,lazy,Suspense } from 'react';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosContext from '../Context/Todos';
import AuthContext from '../Context/auth';
import Header from './Layout/Header';
import AppReducer from '../Reducer/AppReducer';
import TodoApi from './../Api/todos'
import Home from '../Routes/Home';
import About from '../Routes/About';
import { Route, Routes} from 'react-router-dom';
import ContactUs from '../Routes/ContactUs';
import NotFound from '../Routes/NotFound';


const SingleTodos=lazy(()=>import('../Routes/Todos/Single'))


function App(){

  const[state,dispath]=useReducer(AppReducer,{todos:[],loginStatus:true,statusNav:false})
  
  return(
    <AuthContext.Provider value={{state,dispath}}>
      <TodosContext.Provider value={{state,dispath}}>
        <Header /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />}>
            <Route path='address' element={<h4 style={{color:'violet'}}>My company address</h4>} />
            <Route path='email' element={<h4 style={{color:'violet'}}>My company Email</h4>} />
          </Route>
          <Route path='/todos/single/:id' element={<Suspense><SingleTodos /></Suspense>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
                           
      </TodosContext.Provider>
    </AuthContext.Provider>
      
  )

}

export default App;
