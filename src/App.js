import React from 'react'

import List from './components/List.jsx'

const titleStyle = {
	color: 'white',
	textAlign: 'center'
}

export default function App() {
	return (
		<>
			<div id="app" className="page-wrapper">
				<h1 style={titleStyle}>SpaceX Launches</h1>
			</div>
			<List />
		</>
	)
}
