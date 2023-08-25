
import './App.css';

function Header(){
  return <h1>Hello World!! =D</h1>
}

function App() {
  return <Header />;
 
}

export default App;

// The component named app calls another component named header, 
// which displays an HTML heading with some texts. At the moment, the header 
// component code exists in the same file as the app component. To make the 
// header component isolated and reusable, I need to place it in its own file. 
// Then I can reuse it multiple times in the application anytime I want to 
// display a heading element with some texts.