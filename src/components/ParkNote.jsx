import React from "react";

function ParkNote(props) {

  return (
    <div className="ParkNote">
      <h1>Parking number: {props.number}</h1>
      <p>License Plate number: {props.license}</p>
    </div>
  );
}

export default ParkNote;