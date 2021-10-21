import Container from 'react-bootstrap/Container';
import {  useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  Row } from 'react-bootstrap';
import "../styles/createTodoStyles.css";
import { RootState } from '../../redux/store/store';
import {readTodo} from "../../redux/slice/todoSlice";
import { deleteTodo,doneTodo } from "../../db/todos/";

export const ViewTodos =():JSX.Element =>{
   
  //REDUX starts here
  const todos = useSelector(
    (state:RootState) => state.todos
  );

  useEffect(()=>{
    dispatch(readTodo())
  },[])

  const dispatch = useDispatch();
    
  const deleteTodoItem = (index:number)=>{
    deleteTodo(index);
    dispatch(readTodo())
  }

  const doneTodoItem = (index:number)=>{
    doneTodo(index);
    dispatch(readTodo())
  }
  
   

   if(todos.selected == 1){
    return(
        <Container>
          <Row>
        {  
           todos.Inprogress.length > 0 && todos.Inprogress.map((Element,index)=>{
            return (
                        <div className="todoItem" key={index} >
                          <div className="text">
                            <h4>{Element.Title}</h4>
                            <p>{Element.Description}</p>
                          </div>     
                          <button onClick={()=>deleteTodoItem(index)}>
                            Delete
                          </button>
                          <button onClick={()=>doneTodoItem(index)}>
                            Done
                          </button>
                        </div>
            )
          })
        }
          </Row>
        </Container>
    )
  }
  else{
    return(
      <Container>
        <Row>
      {  
         todos.Completed.length > 0 && todos.Completed.map((Element,index)=>{
          return (
                      <div className="todoItem" key={index} >
                        <div className="text">
                          <h4>{Element.Title}</h4>
                          <p>{Element.Description}</p>
                        </div>     
                      </div>
          )
        })
      }
        </Row>
      </Container>
  )

  }
}


export default ViewTodos;