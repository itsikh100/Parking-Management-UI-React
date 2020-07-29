import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { Dropdown, Button } from "semantic-ui-react";
import axios from "axios";
  
function Checkin() {

    const [name, setName] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [ticketType, setTicketType] = useState("");

    
    const carTypeOptions = [
        {
            key: 'Motorcycle',
            text: 'Motorcycle',
            value: 'Motorcycle'
        },
        {
            key: 'Private',
            text: 'Private',
            value: 'Private'
        },
        {
            key: 'Crossover',
            text: 'Crossover',
            value: 'Crossover'
        },
        {
            key: 'SUV',
            text: 'SUV',
            value: 'SUV'
        },
        {
            key: 'Van',
            text: 'Van',
            value: 'Van'
        },
        {
            key: 'Track',
            text: 'Track',
            value: 'Track'
        }
    ]

    const ticketTypeOptions = [
        {
            key: 'VIP',
            text: 'VIP',
            value: 'VIP'
        },
        {
            key: 'Value',
            text: 'Value',
            value: 'Value'
        },
        {
            key: 'Regular',
            text: 'Regular',
            value: 'Regular'
        }
    ]

    function setTicket(e, {value})
    {
        e.persist();
        setTicketType(e.target.textContent);
    }

    function setVehicle(e, {value})
    {
        e.persist();
        setVehicleType(e.target.textContent);
    }
    
    function serverCheck(event) {
        event.preventDefault();
        if(name && licenseNumber && height && width && length && ticketType && vehicleType)
        {
            console.log("inside");
            axios.post('https://localhost:44340/api/parking/postnewparking?name='+name+'&licensenumber='+licenseNumber+'&phone='
                +phone+'&tickettype='+ticketType+'&cartype='+vehicleType+'&height='+height+'&width='+width+'&length='+length)
            .then(function (response) {
              console.log(response.data);
              document.getElementById('message').innerHTML = response.data.message;

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
           <form className="CreateParking">
                
                <FormGroup controlId="name" className="input" bsSize="large">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        autoFocus
                        required
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="licensePlate" bsSize="large">
                    <ControlLabel>License plate Number</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        required
                        className="checkinInput"
                        value={licenseNumber}
                        onChange={e => setLicenseNumber(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="phone" bsSize="large">
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl
                        autoFocus
                        required
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.text)}
                    />
                </FormGroup>

                <Dropdown 
                    id="car"
                    placeholder='Select Car Type'
                    fluid
                    required
                    selection
                    onChange={setVehicle}
                    value={vehicleType}
                    options={carTypeOptions}
                />
                <br></br>

                <Dropdown 
                    id="ticket"
                    placeholder='Select Ticket Type'
                    fluid
                    required
                    selection
                    onChange={setTicket}
                    value={ticketType}
                    options={ticketTypeOptions}
                />
                <br></br>

                <FormGroup controlId="height" bsSize="large">
                    <ControlLabel>Vehicle Height</ControlLabel>
                    <FormControl
                        autoFocus
                        required
                        type="text"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="width" bsSize="large">
                    <ControlLabel>Vehicle Width</ControlLabel>
                    <FormControl
                        autoFocus
                        required
                        type="text"
                        value={width}
                        onChange={e => setWidth(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="length" bsSize="large">
                    <ControlLabel>Vehicle Length</ControlLabel>
                    <FormControl
                        autoFocus
                        required
                        type="text"
                        value={length}
                        onChange={e => setLength(e.target.value)}
                    />
                </FormGroup>
                <Button color='green' onClick={serverCheck}>
                    Checkin
                </Button>
            </form>
        </div>
    );
}

export default Checkin;