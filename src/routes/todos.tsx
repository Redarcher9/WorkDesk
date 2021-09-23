import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import NavigationBar from "../components/navigationbar";

function Todos():JSX.Element{
    return(
        <div>
            <NavigationBar/>
            <Container>
                <Button variant="primary"> Create </Button>
            </Container>
        </div>
    )
}

export default withRouter(Todos);