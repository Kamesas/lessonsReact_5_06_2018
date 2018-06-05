import React, { Component } from 'react';

export default class Body extends Component {

	render() {

		const currentTime = new Date();
		const arrForMapFunc = ['HTML', "CSS", "JS", "React"];

		return (
			<div>
				<div>{currentTime.toTimeString()}</div>
				<ul>
					{arrForMapFunc.map((currentValue, index) => <li key = {index} >{index} --- {currentValue}</li>)}
				</ul>
			</div>
		);
	}

}

// map метод позволяющий перебрать массив и выполнить над его элементами какие-либо действия, создать при этом новый массив не меняя предыдущий

// let не позволяет обьявить себя повторно, в отличие от var и ↓↓↓ 
// let на допускает всплытие переменной, т.е. сначала переменная обьявляется в документе и только потом используется
// let видны только внутри скобок {} в которых они обьявлены
// const не меняет своего значения, но массив и обьект занесенные в const могут менятся