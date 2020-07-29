import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'semantic-ui-css/semantic.min.css';
import * as CheckForm from "./components/CheckForm";
import {Button} from "semantic-ui-react";
import Header from "./components/Header";
import Empty from "./components/Empty";


class App extends Component {
  state = {
    selectedButtonType: ''
  };

  render(){

    console.log(this.state.selectedButtonType);
      return(
          <div>
          {this.renderButtons()}
          {this.renderSelectedButton(this.state.selectedButtonType)}
      </div>
      );
  }

  renderButtons(){
    return(
      <div>
      <Header />
      <Button.Group className="checkButton">
        <Button onClick={e => {this.setState({ selectedButtonType: e.target.textContent})}} positive>Checkin</Button>
        <Button.Or />
        <Button onClick={e => {this.setState({ selectedButtonType: e.target.textContent})}}>Checkout</Button>
        <Button.Or />
        <Button onClick={e => {this.setState({ selectedButtonType: e.target.textContent})}} positive>Status</Button>
      </Button.Group>     
      </div>
      
    );
  }

  renderSelectedButton(selectedButtonType){
    if(!selectedButtonType)
      return <Empty />

    const Check = CheckForm[selectedButtonType];

    return <Check />
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
