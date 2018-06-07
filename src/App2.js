import React, { Component } from 'react';
import './App.css';
import PhoneBook from "./PhoneBook-5/PhoneBook"
import dataBaseContacts from "./PhoneBook-5/databaseContacts"
import ContactList from "./PhoneBook-5/ContactList"

export default class App2 extends Component {
  render() {
   
    return (
      <div>

        <PhoneBook person={dataBaseContacts[0]}/>

        <ContactList personList={dataBaseContacts}/>
        
        />

      </div>
    );
  }
}

