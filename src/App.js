import WindowsFlashcard from "./components/CardTypes/WindowsFlashcard";
import VimFlashcard from "./components/CardTypes/VimFlashcard";
import EmacsFlashcard from "./components/CardTypes/EmacsFlashcard";
import Home from "./components/Home/Home";
import Help from "./components/Help/Help";
import NewDeck from "./components/NewDeck/NewDeck";
import NewCard from "./components/NewCard/NewCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

// Our current App component will contain a title of the app +
// slogan?/description test. There will always have a Help button,
// where clicking on it displays the Help screen. The Help
// screen will pass down the ability to close the help screens
// to Help's children components, hence help state and toggleHelp

function App() {
  const [help, setHelp] = useState(false);

  const toggleHelp = () => setHelp(!help);

  return (
    <Router>
      <div className="text-center">
        <h1 className="mt-3 mb-1">Keycards</h1>
        <p>a keyboard shortcut pop quiz?</p>
        {/* The switch component will do the Routing. As of now,
        it's responsible for displaying the correct component given
        the given link */}
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
          <Route exact path="/new-card" component={NewCard} />
          <Route exact path="/" component={Home} />
        </Switch>
        <button className="btn btn-info mt-3" onClick={toggleHelp}>
          Help
        </button>
        {/* Help screen display. Can be toggled. */}
        {help && <Help undoHelp={toggleHelp} />}
      </div>
    </Router>
  );
}

export default App;
