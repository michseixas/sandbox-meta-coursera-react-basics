
import './App.css';
import Apples from './components/Apples'
import Pears from './components/Pears'
import Bags from './components/Bags'

function App() {
  return (
    <div>
    <Bags>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bags>
    </div>
  );
}

export default App;

