import { Container,Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import {CreateTodo} from "../components/createTodo";

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