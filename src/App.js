import sunshine from "./sunshine.jpeg";
import moon from "./moonStars.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="sun" src={sunshine} alt="sun" />
      <h3>
        <span>D</span>
        <span>F</span>
        <span>P</span>
        <span>R</span>
      </h3>
      <p> Girl Who</p>
      <p className="keyWords">
        <span>Codes</span> | <span>Creates</span> | <span>Empowers</span> |{" "}
        <span>Inspires</span> | <span>Dreams</span>
      </p>
    </div>
  );
}

export default App;
