/* eslint-disable react/prop-types */

import { useState } from "react";
import { genTicket} from "./helper";
import Ticket from "./Ticket";

const Lottery = ({ n, winCondition }) => {
  const [ticket, setTicket] = useState([0,0,0]);
  let isWinning = winCondition(ticket);


  let buyTicket = () => {
    const arr = genTicket(n);
    // console.log(arr);
    setTicket(arr);
  };

  return (
    <>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      {isWinning && <h3>Congratulation! you Won</h3>}
    </>
  );
};

export default Lottery;
