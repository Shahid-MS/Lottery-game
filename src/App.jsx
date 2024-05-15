import "./App.css";
import Lottery from "./Components/Lottery";
import { sum } from "./Components/helper";

function App() {
  let winCondition = (ticket) =>{
    return sum(ticket) === 15;
  }
  return (
    <>
      <h1>Lottery Game</h1>
      <Lottery n = {3} winCondition={winCondition}/>
    </>
  );
}

export default App;
