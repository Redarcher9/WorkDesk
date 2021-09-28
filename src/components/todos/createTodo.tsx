import  {useState } from "react";
import { Modal,Button,Form,Col,Row, Container } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Badge from 'react-bootstrap/Badge';
import { TodoInterface } from "./interfaces";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/createTodoStyles.css"



export const CreateTodo = ():JSX.Element => {


  const [startDate, setStartDate] = useState(new Date());
  // eslint-disable-next-line
  const [Title,setTitle] = useState(new String);
  // eslint-disable-next-line
  const [Description,setDescription] = useState(new String);
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
  // eslint-disable-next-line
  const [TodoList,setTodoList] = useState<TodoInterface[]|[]>([]);
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
    var mystorage = window.localStorage

    if(yourDate!=="" || yourTitle!=="" || yourDescription!=="" )
      {  
          const Todo = {
            Title:Title,
            Description:Description,
            Date:startDate,
            Completed:false
          }  
          var Todolist = JSON.parse(mystorage.getItem("todolist")|| "[]");
          Todolist.push(Todo);
          mystorage.setItem('todolist',JSON.stringify(Todolist));
          getTodos();
          handleClose()
      }
      else{
          console.log("Please make sure every field is filled.")
      }
  };

  const getTodos =() => {
    var mystorage = window.localStorage;
    var Todolist = JSON.parse(mystorage.getItem("todolist")|| "[]");
    setTodoList(Todolist);
  }

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
                  <DatePicker selected={startDate} onChange={(date:any) => Datesetter(date)} />
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
            In-Progress<Badge bg="secondary">New</Badge>
           </h4> 
        </Row>
        <Row className="todoSidebar-buttons">
           <h4>
            Completed<Badge bg="secondary">New</Badge>
           </h4> 
        </Row>
      </Col>
      <Col xs={10}>
          <Row className="todoStats">
                  <Col>
                      <h1><Badge bg="warning"> 10</Badge></h1>
                      <h5>Ongoing</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="info"> 10</Badge></h1>
                      <h5>Completed</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="secondary"> 10</Badge></h1>
                      <h5>Total</h5>
                  </Col>
                  <Col>
                      <h1><Badge bg="success"> 10</Badge></h1>
                      <h5>Progress</h5>
                  </Col>
          </Row>
                        <ul style={{ listStyleType: "none",padding:"0px",margin:"0px" }}>
                        {
                          TodoList.map((Element,index) =>{
                            return (
                              <li key={index} >
                              <Container className="todoItem">
                                <Row>
                                  <Col xs={9}>
                                  <h3>{Element.Title} </h3>
                                  <h5>{Element.Description}</h5>
                                  </Col>
                                  <Col xs={3} style={{ justifyContent:"center",alignItems:"center",display:"flex",flex:"Row"}}>
                                    <h4><Badge pill bg="danger">
                                          Delete
                                      </Badge>{' '}
                                      </h4>
                                      <h4>
                                      <Badge pill bg="success">
                                          Done
                                      </Badge>{' '}
                                      </h4>
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