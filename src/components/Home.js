import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <p>Choose which app you want to learn keyboard shortcuts</p>
      <Link to="/vim">Vim</Link>
      <br />
      <Link to="/sublime-win">Sublime (Windows)</Link>
      <br />
      <Link to="/vscode-win">VS Code (Windows)</Link>
    </div>
  );
}

export default Home;
