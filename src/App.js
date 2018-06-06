import React, { Component } from 'react';
import './App.css';
import Body from './components/body'
import ListContact from "./components/ListContact"
import ListContact2 from "./components/ListContact2"
import datebaseContact from "./components/databaseContacts"

class App extends Component {
  render() {
   
    return (
     <div>
      <h2>ListContact from const</h2>
      <ListContact propsFirstName={users[0].firstName} propsLastName={users[0].lastName}/>
      <ListContact propsFirstName={users[1].firstName} propsLastName={users[1].lastName}/>
      <hr/>

      <h2>ListContact2 from file datebaseContact.js</h2>
      <ListContact2 contact={datebaseContact[2]} />
      <ListContact2 contact={datebaseContact[3]} />
      <hr/>

      <Body/>         
     </div>
    );
  }
}

const users  = [
          {firstName: "John", lastName: "Doe", age: 50, phone: "333 4567111"},
          {firstName: "Alice", lastName: "Smith", age: 22, phone: "333 45667933"},
          {firstName: "Mark", lastName: "Joseph", age: 45, phone: "333 33446776"},
          {firstName: "Marion", lastName: "Justin", age: 45, phone: "333 4343433345"}
      ] 


export default App;
