import React, { Component } from 'react';

export default class ContactList extends Component {	

	render() {
		const contactListProp = this.props;
		
	  return (
					<ul>
						<li>
							{contactListProp.person}							
							<hr/>
							
							
						</li>											
					</ul>
	  	)		

	}
}
