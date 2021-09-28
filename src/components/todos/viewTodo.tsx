import Container from 'react-bootstrap/Container';
import {  useEffect, useState } from "react";
import { TodoInterface } from "./interfaces";
import {  Row } from 'react-bootstrap';
import "../styles/createTodoStyles.css"

function ViewTodos():JSX.Element {

   const [TodoList,setTodoList] = useState<TodoInterface[]|[]>([]);

   useEffect(()=>{
    const ReadTodos = ():void => {
      var mystorage = window.localStorage;
      var Todolist = JSON.parse(mystorage.getItem("todolist")|| "[]");
      setTodoList(Todolist);
     } 
      ReadTodos();
   },[]);
    
    return(
        <Container>
          <Row>
              <h1>Todo List</h1><ul>
        {
          TodoList.map(Element =>{
            return (
              <li> {Element.Title} </li>
            )
          })
        }
        </ul>
          </Row>
          
        </Container>
    )
}

export default ViewTodos;