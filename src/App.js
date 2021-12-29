import WindowsFlashcard from "./components/CardTypes/WindowsFlashcard";
import VimFlashcard from "./components/CardTypes/VimFlashcard";
import EmacsFlashcard from "./components/CardTypes/EmacsFlashcard";
import Home from "./components/Home/Home";
import Help from "./components/Help/Help";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [help, setHelp] = useState(false);

  const toggleHelp = () => setHelp(!help);

  return (
    <Router>
      <h1>Keyboard Shortcut Pop Quiz, I guess?</h1>
      <Switch>
        <Route exact path="/vim" component={VimFlashcard} />
        <Route exact path="/sublime-win">
          <WindowsFlashcard csv="sublime-win.csv" />
        </Route>
        <Route exact path="/vscode-win">
          <WindowsFlashcard csv="vscode-win.csv" />
        </Route>
        <Route exact path="/emacs">
          <EmacsFlashcard csv="emacs.csv" />
        </Route>
        <Route exact path="/emacs2">
          <EmacsFlashcard csv="emacs2.csv" />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
      <button className="help" onClick={toggleHelp}>
        Help
      </button>
      {help && <Help undoHelp={toggleHelp} />}
    </Router>
  );
}

export default App;
