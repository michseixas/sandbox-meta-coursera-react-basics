import logo from './logo.svg';
import './App.css';

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long"}); //specify the weekday value as long which displays the days as full words such as Monday, Tuesday, Wednesday, and so on.
  const morning = time.getHours() >= 6 && time.getHours() <=19; //morning variable that stores a Boolean value based on whether the current time is greater than or equal to 6 and less than or equal to 12
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLocaleLowerCase() === "tuesday"){
    dayMessage = `${day}, four days to go`;
  } else if (day.toLocaleLowerCase() === "wednesday"){
    dayMessage = `${day}, half way there`;
  } else if (day.toLocaleLowerCase() === "thursday"){
    dayMessage = `${day}, start planning your weekend`;
  } else if (day.toLocaleLowerCase() === "friday") {
    dayMessage = `TGI's ${day}!!  `;
  } else {
    dayMessage = "Stay calm and keep having fun!"
  }
  return (
    <div className="App">
      <h1> 
      {/* I'm accessing the string value stored inside the day message variable */}
        {dayMessage} 
      </h1>
      {/* use ternary operator to conditionally evaluate the morning variable. If true, I output a string that reads have you had breakfast yet */}
      {morning ? <h2>Have you had breakfast yet?</h2> : ''}
    </div>
  );
}

export default App;
