import { Link } from "react-router-dom";

// Our Home screen. It currently has links to each of the Routes

function Home() {
  return (
    <div className="home" data-testid="home">
      <p>Choose which app you want to learn keyboard shortcuts</p>
      <Link className="btn btn-outline-dark vim mx-2" to="/vim">
        Vim
      </Link>
      <Link className="btn btn-outline-dark sublime-win mx-2" to="/sublime-win">
        Sublime (Windows)
      </Link>
      <Link className="btn btn-outline-dark vscode-win mx-2" to="/vscode-win">
        VS Code (Windows)
      </Link>
      <Link className="btn btn-outline-dark emacs mx-2" to="/emacs">
        Emacs
      </Link>
      <Link className="btn btn-outline-dark mx-2" to="/new-deck">
        New Deck
      </Link>
    </div>
  );
}

export default Home;
