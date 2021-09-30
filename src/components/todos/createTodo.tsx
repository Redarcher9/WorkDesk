import  {useEffect, useState } from "react";
import { Modal,Button,Form,Col,Row, Container } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Badge from 'react-bootstrap/Badge';
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/createTodoStyles.css"
import { actionCreators,State } from "../../state/state";

export const CreateTodo = ():JSX.Element => {

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

  //REDUX starts here
  const dispatch = useDispatch();
  const {readTodos,addTodo,deleteTodo,doneTodo} =bindActionCreators(actionCreators,dispatch);
  const globalstate = useSelector((state:State) => state.todo)

  const pushtodb=(yourDate:any,yourTitle:any,yourDescription:any) =>{

    if(yourDate!=="" || yourTitle!=="" || yourDescription!=="" )
      {  
          const Todo = {
            Title:Title,
            Description:Description,
            Date:startDate,
            Completed:false
          }  

          addTodo(Todo)
          handleClose()
      }
      else{
          console.log("Please make sure every field is filled.")
      }
  };


  useEffect(() =>{
    readTodos()
  },[globalstate])

  return (
    <Container>
        <Row>
          <Col xs={2} className="todoSidebar">
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
           <h4>
            In-Progress<Badge bg="secondary">{globalstate.Inprogress.length}</Badge>
           </h4> 
        </Row>
        <Row className="todoSidebar-buttons">
           <h4>
            Completed<Badge bg="secondary">{globalstate.Completed.length}</Badge>
           </h4> 
        </Row>
      </Col>
      <Col xs={10}>
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
                      <h1><Badge bg="secondary"> {globalstate.Completed.length + globalstate.Inprogress.length} </Badge></h1>
                      <h5>Total</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="success"> {globalstate.Completed.length/(globalstate.Completed.length + globalstate.Inprogress.length)*100} %</Badge></h1>
                      <h5>Progress</h5>
                  </Col>
                  
          </Row>
                        <ul style={{ listStyleType: "none",padding:"0px",margin:"0px" }}>
                        {
                          globalstate.Inprogress.map((Element,index) =>{
                            return (
                              <li key={index} >
                              <Container className="todoItem">
                                <Row>
                                  <Col xs={9}>
                                  <h3>{Element.Title} </h3>
                                  <h5>{Element.Description}</h5>
                                  </Col>
                                  <Col xs={3} style={{ justifyContent:"center",alignItems:"center",display:"flex",flex:"Row"}}>
                                      <button onClick={() => deleteTodo(index)}>
                                        <h4><Badge pill bg="danger" >
                                            Delete
                                        </Badge>{' '}
                                        </h4>
                                      </button>
                                      <button onClick={() => doneTodo(index)}>
                                      <h4>
                                      <Badge pill bg="success">
                                          Done
                                      </Badge>{' '}
                                      </h4>
                                      </button>
                                  </Col>
                                </Row>
                                </Container>
                              </li>
                            )
                          })
                        }
                        </ul>
        </Col>
      </Row>
    </Container>
  );
};