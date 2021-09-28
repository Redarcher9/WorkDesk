import { Container} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import NavigationBar from "../components/navbar/navigationbar";
import {CreateTodo} from "../components/todos/createTodo";

function Todos():JSX.Element{
    return(
        <div>
            <NavigationBar/>
            <Container>
                <CreateTodo/>
            </Container>
        </div>
    )
}

export default withRouter(Todos);