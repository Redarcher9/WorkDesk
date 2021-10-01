import  {useEffect, useState } from "react";
import { Col,Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/createTodoStyles.css";
import { actionCreators,State } from "../../state/state";

export const StatsTodo = ():JSX.Element => {
  //REDUX starts here

  const dispatch = useDispatch();
  const {readTodos} =bindActionCreators(actionCreators,dispatch);
  const globalstate = useSelector((state:State) => state.todo)

  const getPercentage =():number=> {
    const percentage = Math.round(globalstate.Completed.length/(globalstate.Completed.length + globalstate.Inprogress.length)*100);
    if(!(Number.isInteger(percentage)))
        return 0;
    else
        return Math.round(percentage)
  }
  useEffect(()=>{
    readTodos();
   },[]);


  return (
      <div>
          <Row className="todoStats">
                  <Col>
                      <h1><Badge bg="warning">{globalstate.Inprogress.length}</Badge></h1>
                      <h5>Ongoing</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="info"> {globalstate.Completed.length}</Badge></h1>
                      <h5>Completed</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="secondary">{globalstate.Completed.length + globalstate.Inprogress.length} </Badge></h1>
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