import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {  Button } from "semantic-ui-react";
import axios from "axios";

  
function Checkout() {
    const [licenseNumber, setLicenseNumber] = useState("");

    function serverCheck(event) {
        event.preventDefault();

        if(licenseNumber)
        {
            axios.post('https://localhost:44340/api/parking/deleteparking?id='+licenseNumber)
                .then(function (response) {
                    console.log(response.data);
                    document.getElementById('message').innerHTML = response.data;
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });        
        }        
      }

    return (
        <div>
        <div id="message"></div>
           <form className="DeleteParking">
               <FormGroup controlId="licensePlate" bsSize="large">
                    <ControlLabel>License plate Number</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        className="checkinInput"
                        value={licenseNumber}
                        onChange={e => setLicenseNumber(e.target.value)}
                    />
                </FormGroup>

                
                <Button color='red' onClick={serverCheck}>
                    Checkout
                </Button>
            </form>
        </div>
    );
}

export default Checkout;