
import './App.css';
import hellogrumpy from './hellogrumpy.jpeg'

function Somephoto(props){
  const userPhoto = <img src={hellogrumpy} />;
  return userPhoto;

}

function App() {
  return (
    <div>
    <h1>Hello World!</h1>
    <Somephoto/> 
    </div>
  );
}

export default App;
