import sunshine from "./sunshine.jpeg";
import moon from "./moonStars.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex gap-y-4">
          <div className="flex flex-row">
            <img src={sunshine} className="App-logo" alt="sun" />
            <img src={moon} className="App-logo" alt="moon" />
          </div>
          <p>Welcome to DFPR's World!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
