import React from 'react'

function Article (props) {
	const {article} = props
	return(
		<div>
			<h2>{article.title}</h2>
			<p>{article.text}</p>
			<h1>sdfg</h1>
		</div>
	)
}

export default Article