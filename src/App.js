import Flashcard from "./components/Flashcard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/vim">
          <p>Work in progress... Come back later.</p>
          <Link to="/" className="backhome">
            Go back to home screen
          </Link>
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
