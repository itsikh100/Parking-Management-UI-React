import React from "react";
import {Button} from "semantic-ui-react";

function CheckButton(props) {

    return (
        <div>
             <Button.Group className="checkButton">
                <Button positive>Check In</Button>
                <Button.Or />
                <Button>Check Out</Button>
            </Button.Group>
        </div>
    );
}

export default CheckButton;