import Container from 'react-bootstrap/Container';
import {  useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators,State } from "../../state/state";
import {  Row } from 'react-bootstrap';
import "../styles/createTodoStyles.css"
import { deleteTodo, doneTodo } from '../../state/action-creators';
import { stateInterface } from "../../state/interfaces/interfaces";
import Button from '@restart/ui/esm/Button';

export const ViewTodos =():JSX.Element =>{
   //REDUX starts here
  const dispatch = useDispatch();
  const {deleteTodo,doneTodo} =bindActionCreators(actionCreators,dispatch);
  const globalstate = useSelector((state:State) => state.todo)

  const [todolist,setTodolist]=useState<stateInterface>({
    Inprogress:[],
    Completed:[]
  })

   useEffect(()=>{
     setTodolist(globalstate)
   },[globalstate]);
    
    return(
        <Container>
          

          <Row>
        {
           todolist.Inprogress.map((Element,index)=>{
            return (
                        <div className="todoItem" key={index} >
                          <div className="text">
                            <h4>{Element.Title}</h4>
                            <p>{Element.Description}</p>
                          </div>     
                          <button onClick={()=>deleteTodo(index)}>
                            Delete
                          </button>
                          <button onClick={()=>doneTodo(index)}>
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

export default ViewTodos;