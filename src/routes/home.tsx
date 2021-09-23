import React from 'react';
import { withRouter } from "react-router-dom";
import Faqs from "../components/faqs";
import Features from '../components/features';
import Homecard from "../components/homecard";
import NavigationBar from "../components/navigationbar";

function Home():JSX.Element {
    return(
        <div>
            <NavigationBar/>
            <Homecard/>
            <Features/>
            <Faqs/>
        </div>
            
    )
}

export default withRouter(Home);