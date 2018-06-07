import React, { Component } from 'react';

export default class Person extends Component {	

	render() {

		const contactsProps = this.props
				
	  return (
					 <li>
		        <p>
		          {contactsProps.person.firstName} <br />
		          {contactsProps.person.lastName} <br />
		          {contactsProps.person.phone}
		        </p>
		      </li>
	  	)		

	}
}