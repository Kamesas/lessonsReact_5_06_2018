import React from 'react';
import PhoneBook from './PhoneBook'

export default class ContactList extends React.Component {	

	render() {
		
		const {personList} = this.props	
		const mapPersonList = personList.map((currentValue, index) => 
				<li key={index} ><PhoneBook person={currentValue}/></li>
			)

		return (
			<ul>
				{mapPersonList}
				{console.log(mapPersonList)}
			</ul>
		);
	}
}