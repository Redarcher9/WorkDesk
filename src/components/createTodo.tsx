import  {  useEffect, useState } from "react";
import { Modal,Button,Form,Col,Row, Container } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface TodoInterface{
  Title:String,
  Description:String,
  Date:String,
  Completed:boolean
}

export const CreateTodo = ():JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  const [Title,setTitle] = useState(new String);
  const [Description,setDescription] = useState(new String);
  const [show, setShow] = useState(false);
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
  useEffect(()=>{

  },[TodoList])
  

  const getTodos =() => {
    var mystorage = window.localStorage;
    var Todolist = JSON.parse(mystorage.getItem("todolist")|| "[]");
    setTodoList(Todolist);
  }

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
        Create
      </Button>

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
      <Container>
        <ul>
        {
          TodoList.map(Element =>{
            return (
              <li> {Element.Title}  </li>
            )
          })
        }
        </ul>
      </Container>
    </div>
  );
};