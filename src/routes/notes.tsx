import React from 'react';
import { withRouter } from "react-router-dom";
import NavigationBar from "../components/navbar/navigationbar";

function Notes():JSX.Element {
    return(
        <div>
            <NavigationBar/>
            <h1>This is Notes Section</h1>
        </div>
    )
}

export default withRouter(Notes);