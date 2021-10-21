import  {useEffect, useState } from "react";
import { Col,Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useDispatch,useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/createTodoStyles.css";
import { RootState } from '../../redux/store/store';
import {readTodo} from "../../redux/slice/todoSlice";

export const StatsTodo = ():JSX.Element => {
  //REDUX starts here
    //REDUX starts here
  const todos = useSelector(
    (state:RootState) => state.todos
  );

  const dispatch = useDispatch();

  const getPercentage =():number=> {
    const percentage = Math.round(todos.Completed.length/(todos.Completed.length + todos.Inprogress.length)*100);
    if(!(Number.isInteger(percentage)))
        return 0;
    else
        return Math.round(percentage)
  }
  useEffect(()=>{
   },[]);


  return (
      <div>
          <Row className="todoStats">
                  <Col>
                      <h1><Badge bg="warning">{todos.Inprogress.length}</Badge></h1>
                      <h5>Ongoing</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="info"> {todos.Completed.length}</Badge></h1>
                      <h5>Completed</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="secondary">{todos.Completed.length + todos.Inprogress.length} </Badge></h1>
                      <h5>Total</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="success"> {getPercentage()} %</Badge></h1>
                      <h5>Progress</h5>
                  </Col>
                  
            </Row>
            
      </div>
  );
};