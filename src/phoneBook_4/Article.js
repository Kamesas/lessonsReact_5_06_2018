import React from 'react'

function Article (props) {
	const {ar} = props
	return(
		<div>
			<h2>{ar.title}</h2>
			<p>{ar.text}</p>
			<h1>sdfg</h1>
		</div>
	)
}

export default Article