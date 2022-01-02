import { Link } from "react-router-dom";
// import "./Home.css";

function Home() {
  return (
    <div className="home" data-testid="home">
      <p>Choose which app you want to learn keyboard shortcuts</p>
      <Link className="vim" to="/vim">
        Vim
      </Link>
      <Link className="sublime-win" to="/sublime-win">
        Sublime (Windows)
      </Link>
      <Link className="vscode-win" to="/vscode-win">
        VS Code (Windows)
      </Link>
      <Link className="emacs" to="/emacs">
        Emacs
      </Link>
      <Link className="btn btn-outline-dark mx-2" to="/new-deck">
        New Deck
      </Link>
    </div>
  );
}

export default Home;
