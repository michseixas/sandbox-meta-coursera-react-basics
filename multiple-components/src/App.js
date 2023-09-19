import "./App.css";
import Card from './component/Card';
import Btn from "./component/Btn";

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>
      <Btn />
    </div>
  );
}

export default App;
