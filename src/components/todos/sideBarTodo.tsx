import  { useState } from "react";
import { Modal,Button,Form,Col,Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Badge from 'react-bootstrap/Badge';
import { useDispatch,useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/createTodoStyles.css";
import { RootState } from '../../redux/store/store';
import {readTodo,toogleSidebar} from "../../redux/slice/todoSlice";
import { addTodo } from "../../db/todos/addTodo";

export const SideBarTodo = ():JSX.Element => {

  //REDUX starts here
  const todos = useSelector(
    (state:RootState) => state.todos
  );

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  // eslint-disable-next-line
  const [Title,setTitle] = useState(new String);
  // eslint-disable-next-line
  const [Description,setDescription] = useState(new String);
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Datesetter =(todoDate:any) =>{
    setStartDate(todoDate);
  };

  const Titlesetter = (todoTitle:any) =>{
    setTitle(todoTitle);
  };

  const Descriptionsetter = (todoDescription:any) =>{
    setDescription(todoDescription);
  };

  const saveButton =() =>{
    pushtodb(startDate,Title,Description);
  }

  const pushtodb=(yourDate:any,yourTitle:any,yourDescription:any) =>{
    if(yourDate!=="" || yourTitle!=="" || yourDescription!=="" )
      {  
          const Todo = {
            Title:Title,
            Description:Description,
            Date:startDate
          }  
          addTodo(Todo);
          dispatch(readTodo());
          console.log(todos)
          handleClose()
      }
      else{
          console.log("Please make sure every field is filled.")
      }
  };

  const toogler =(select:number) =>{
    dispatch(toogleSidebar(select))
  }

  return (
      <div>
        <Row className="todoHeader">
        <h1> Todos </h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Control type="textarea" placeholder="Your title goes here" onChange={(event)=>{Titlesetter(event.target.value)}} />
                </Col>
                <Col>
                  <DatePicker selected={startDate} onChange={(date:Date) => Datesetter(date)} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="description" onChange={(event)=> Descriptionsetter(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveButton}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Row>
        <Row id="todoSidebar-createbutton">
          <Button variant="primary" onClick={handleShow}>
            Create a TODO
           </Button>    
        </Row>
        
        <Row className="todoSidebar-buttons">
          <button onClick={()=>toogler(1)}>
           <h4>
            In-Progress
           </h4> 
           <h4>
           <Badge bg="secondary">{todos.Inprogress.length}</Badge>
           </h4>
           </button>
        </Row>
        <Row className="todoSidebar-buttons">
           <button onClick={()=>toogler(0)}>
           <h4>
           Completed  
           </h4> 
           <h4>
           <Badge bg="secondary">{todos.Completed.length}</Badge>
           </h4>
           </button>
        </Row>
        <Row style={{height:"600px"}}>

        </Row>
      </div>
  );
};