import React from 'react';
import { withRouter } from "react-router-dom";
import Faqs from "../components/home/faqs";
import Features from '../components/home/features';
import Homecard from "../components/home/homecard";
import NavigationBar from "../components/navbar/navigationbar";

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