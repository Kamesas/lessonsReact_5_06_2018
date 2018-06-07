import React, { Component } from 'react';

export default class PhoneBook extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state  = {
	// 		moreShowd: true
	// 	}
	// }
	state  = {
		moreShowd: false
	}

	showMore = () => {
		console.log('more info');
		this.setState({
			moreShowd: !this.state.moreShowd 
		});
	};

	render() {

		const {person} = this.props	
		const blockMore = this.state.moreShowd 
												&&  
													<ul>
														<li>Email --- {person.email}</li>							
														<li>Компания --- {person.company}</li>
													</ul>											
		
	  return (
					<div>
					
						<h1>PhoneBook #5</h1>

						<ul>
							<li>Имя --- {person.firstName}</li>
							<li>Фамилия ---{person.name}</li>
							<li>Номер --- {person.numPhone} 
								<button onClick={this.showMore} >{this.state.moreShowd ? "close" : "show"}</button>
							</li>
							{blockMore}						
						</ul>


					</div>

	  	)		

	}
}