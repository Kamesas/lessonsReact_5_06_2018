import React, { Component } from 'react';
import ContactList from "./ContactList"
import dataBaseContactFromFile from "../components/databaseContacts"
import boxContacts from "./boxContacts"
import Article from "./Article"
import fixtures from "../fixtures"
import ContactLIst2 from "./ContactList2"

export default class PhoneBook extends Component {	

	render() {
		const contact = this.props;
		
	  return (
					<div>

						<ContactLIst2 contactFromContactLIst2="boxContacts[0]"/>

						<Article article={fixtures[0]} />

						<h2>Книга контактов</h2>
						<ContactList person={dataBaseContact[0].firstName + dataBaseContact[0].lastName}/>
						<ContactList person={boxContacts[0].id + "---" + boxContacts[0].firstName}/>


						

					</div>

	  	)		

	}
}

let dataBaseOwnContact = ["Alex", "Justin", "Mark"]

let dataBaseContact = [
  {firstName: "John", lastName: "Doe", age: 50, phone: "333 4567111"},
  {firstName: "Alice", lastName: "Smith", age: 22, phone: "333 45667933"},
  {firstName: "Mark", lastName: "Joseph", age: 45, phone: "333 33446776"},
  {firstName: "Marion", lastName: "Justin", age: 45, phone: "333 4343433345"}
];