import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
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
    </div>
  );
}

export default Home;