import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home  from "./routes/home";
import Todos  from "./routes/todos";
import Notes from "./routes/notes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/workdesk">
          <Home/>
        </Route>
        <Route exact path="/todos">
          <Todos/>
        </Route>
        <Route exact path="/notes">
          <Notes/>
        </Route>
        <Route>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
