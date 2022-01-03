import WindowsFlashcard from "./components/CardTypes/WindowsFlashcard";
import VimFlashcard from "./components/CardTypes/VimFlashcard";
import EmacsFlashcard from "./components/CardTypes/EmacsFlashcard";
import Home from "./components/Home/Home";
import Help from "./components/Help/Help";
import NewDeck from "./components/NewDeck/NewDeck";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [help, setHelp] = useState(false);

  const toggleHelp = () => setHelp(!help);

  return (
    <Router>
      <div className="text-center">
        <h1 className="mt-3 mb-1">Keycards</h1>
        <p>a keyboard shortcut pop quiz?</p>
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
        <button className="btn btn-info mt-3" onClick={toggleHelp}>
          Help
        </button>
        {help && <Help undoHelp={toggleHelp} />}
      </div>
    </Router>
  );
}

export default App;
