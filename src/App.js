import WindowsFlashcard from "./components/CardTypes/WindowsFlashcard";
import VimFlashcard from "./components/CardTypes/VimFlashcard";
import EmacsFlashcard from "./components/CardTypes/EmacsFlashcard";
import Home from "./components/Home/Home";
import Help from "./components/Help/Help";
import NewDeck from "./components/NewDeck/NewDeck";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
// import "./index.css";

function App() {
  const [help, setHelp] = useState(false);

  const toggleHelp = () => setHelp(!help);

  return (
    <Router>
      <h1>Keycards, a Keyboard Shortcut Pop Quiz?</h1>
      <Switch>
        <Route exact path="/vim" component={VimFlashcard} />
        <Route exact path="/sublime-win">
          <WindowsFlashcard csv="sublime-win.csv" />
        </Route>
        <Route exact path="/vscode-win">
          <WindowsFlashcard csv="vscode-win.csv" />
        </Route>
        <Route exact path="/emacs" component={EmacsFlashcard} />
        <Route exact path="/new-deck" component={NewDeck} />
        <Route exact path="/" component={Home} />
      </Switch>
      <button onClick={toggleHelp}>Help</button>
      {help && <Help undoHelp={toggleHelp} />}
    </Router>
  );
}

export default App;
