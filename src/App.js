import useScanner from "./useScanner";
import "./App.css";

function App() {
  useScanner();
  return (
    <div className="App">
      <input onChange={(en) => console.log({ onChange: en })} />
    </div>
  );
}

export default App;
