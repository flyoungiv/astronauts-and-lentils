import React, { useState } from 'react'

import List from './components/List.jsx'
import DeveloperNotes from './components/DeveloperNotes.jsx'

const titleContainerStyle = {
	display: 'flex',
	justifyContent: 'center'
}

const titleStyle = {
	color: 'white',
	textAlign: 'center'
}

const buttonStyle = {
	borderRadius: '4px',
	color: 'orange',
	textAlign: 'center',
	border: 'solid 1px orange',
	margin: '1rem',
	display: 'flex',
	alignItems: 'center',
	padding: '1rem',
	cursor: 'pointer',
}

export default function App() {

	const [visible, setVisible] = useState(false)

	return (
		<>
			<div id="app" className="page-wrapper" style={titleContainerStyle}>
				<h1 style={titleStyle}>SpaceX Launches</h1>
				<div
					style={buttonStyle}
					onClick={() => setVisible(!visible)}
					visible={visible}
					setVisible={setVisible}>
					Toggle Developer Notes
				</div>
				{visible && <DeveloperNotes />}
			</div>
			<List />
		</>
	)
}
