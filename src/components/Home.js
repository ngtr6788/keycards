import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <p>Choose which app you want to learn keyboard shortcuts</p>
      <Link className="vim" to="/vim">
        Vim
      </Link>
      <Link className="sublime" to="/sublime-win">
        Sublime (Windows)
      </Link>
      <Link className="vscode" to="/vscode-win">
        VS Code (Windows)
      </Link>
    </div>
  );
}

export default Home;
