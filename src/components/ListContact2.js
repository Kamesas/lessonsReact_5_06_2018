import React, { Component } from 'react';

export default class ListContact2 extends Component {	

	render() {
		const {contact} = this.props;
		
	  return (
					<ul>
						<li>
							{contact.firstName} --- 
							{contact.lastName}
						</li>					
					</ul>
	  	)		

	}
}


