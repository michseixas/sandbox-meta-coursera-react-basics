import './App.css';
import Child from './Child';

function App() {
  const date = new Date()

  return (
    <div>
    <h1>Here is the Child component (date)</h1>
    <Child message={date.toLocaleTimeString()}/>

    </div>
  );
}
// The child's components has a prop named message defined 
// and its value is set as the current dates from 
// the component's state converted to a string format, which includes the
//  hours, minutes, and seconds of the date.


export default App;
