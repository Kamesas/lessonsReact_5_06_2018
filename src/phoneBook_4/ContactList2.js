import React, { Component } from 'react';

export default class ContactLIst2 extends Component {	

	render() {
		
		const {contactFromContactLIst2} = this.props;
		
	  return (
					<ul>
						<li>
							{contactFromContactLIst2.firstName} vs
							{contactFromContactLIst2.name}						
						</li>											
					</ul>
	  	)		

	}
}
