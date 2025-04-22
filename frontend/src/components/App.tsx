import '../styles/App.css';
import Sidebar from './mainframe';
import { projectList } from "./SelectProject";

/**
 * Mainframe perspective
 */
function App() {
  return (
    <div className="App">
      <header className="homepage-container">
      </header>
      <Sidebar projects={projectList} />
    </div>
  );
}

export default App;