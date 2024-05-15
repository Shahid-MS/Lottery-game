/* eslint-disable react/prop-types */
import TicketNum from "./TicketNum";
import "./Ticket.css"

const Ticket = ({ ticket }) => {
//   console.log(ticket);
  return (
    <div className="Ticket">
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
};

export default Ticket;
