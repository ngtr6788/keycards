import Flashcard from "./components/Flashcard";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/vim">
          <Flashcard csv="vim.csv" />
        </Route>
        <Route exact path="/sublime-win">
          <Flashcard csv="sublime-win.csv" />
        </Route>
        <Route exact path="/vscode-win">
          <Flashcard csv="vscode-win.csv" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
