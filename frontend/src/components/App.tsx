import '../styles/App.css';
import Mainframe from './mainframe';

/**
 * Root app component. Mainframe now owns all routing internally
 * (see mainframe.tsx), so App is just a thin shell.
 */
function App() {
  return (
    <div className="App">
      <Mainframe />
    </div>
  );
}

export default App;