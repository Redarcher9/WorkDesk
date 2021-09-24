import Container from 'react-bootstrap/Container';
import React, {  useEffect, useState } from "react";
import { TodoInterface } from "./createTodo";

function ViewTodos():JSX.Element {

   const [TodoList,setTodoList] = useState<TodoInterface[]|[]>([]);

   const ReadTodos = () => {
    var mystorage = window.localStorage;
    var Todolist = JSON.parse(mystorage.getItem("todolist")|| "[]");
    setTodoList(Todolist);
   } 

   useEffect(()=>{

   },[])
    
    return(
        <Container>
          <ul>
        {
          TodoList.map(Element =>{
            return (
              <li> {Element.Title} </li>
            )
          })
        }
        </ul>
        </Container>
    )
}

export default ViewTodos;