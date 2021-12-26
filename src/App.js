import WindowsFlashcard from "./components/WindowsFlashcard";
import VimFlashcard from "./components/VimFlashcard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/vim" component={VimFlashcard} />
        <Route exact path="/sublime-win">
          <WindowsFlashcard csv="sublime-win.csv" />
        </Route>
        <Route exact path="/vscode-win">
          <WindowsFlashcard csv="vscode-win.csv" />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
