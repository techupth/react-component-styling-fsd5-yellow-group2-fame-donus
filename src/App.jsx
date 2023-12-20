import "./App.css";

import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert status="error" />
        <br></br>
        <Alert status="warning" />
        <br></br>
        <Alert status="info" />
        <br></br>
        <Alert status="success" />
      </div>
    </div>
  );
}

export default App;
