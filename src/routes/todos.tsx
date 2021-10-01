import { Col,Row,Container} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import NavigationBar from "../components/navbar/navigationbar";
import {SideBarTodo} from "../components/todos/sideBarTodo";
import { StatsTodo } from "../components/todos/StatsTodo";
import ViewTodos from '../components/todos/viewTodo';

function Todos():JSX.Element{
    return(
        <div>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col xs={2} className="todoSidebar">
                        <SideBarTodo/>
                    </Col>
                    <Col xs={10}>
                        <StatsTodo/>
                        <ViewTodos/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(Todos);