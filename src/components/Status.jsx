import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import ParkNote from "./ParkNote";
  
function Status() {
    const [parkNotes, setParkNotes] = useState([]);
    
    function addParkNote(i, license) {
        setParkNotes(prevNotes => {
          return [...prevNotes,  {
              number: i,
              license: license
          }];
        });
      }
    
    function serverCheck(event) {
        event.preventDefault();
        axios.get('https://localhost:44340/api/parking/GetStatusOfParking')
        .then(function (response) {
            console.log(response.data);
            document.getElementById('message').innerHTML = "";
            let i = 0;
            let atLeastOne = false;
            for (i = 1; i <= 60 ; ++i) {
                if(response.data[i] !== "")
                {
                    atLeastOne = true;
                    addParkNote(i, response.data[i]);
                }               
              }
              if(atLeastOne === false)
              {
                document.getElementById('message').innerHTML = "The Parking is empty from vehicles";
              }
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });        
      }

    return (
        <div>
            <form className="ParkingStatus">
                <Button color='blue' onClick={serverCheck}>
                    Get Staus Of Parkinkg
                </Button>
                <div id="message"></div>
            </form>
            {parkNotes.map((noteItem, index) => {
                return (
                    <ParkNote
                        key={index}
                        id={index}
                        number={noteItem.number}
                        license={noteItem.license}
                     />
                );
            })}
        </div>
    );
}

export default Status;