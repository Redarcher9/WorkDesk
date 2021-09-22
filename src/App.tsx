import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import  Home  from "./routes/home";
import  Todos  from "./routes/todos";
import Notes from "./routes/notes";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home>
        </Route>
        <Route path="/Todos">
          <Todos>
        </Route>
        <Route path="/Notes">
          <Notes>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
