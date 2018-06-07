import React, { Component } from 'react';

export default class ListContact extends Component {	

	render() {
		const contact = this.props;
		
	  return (
					<ul>
						<li>
						{contact.propsFirstName} --- 
						{contact.propsLastName}
						
						</li>											
					</ul>
	  	)		

	}
}


