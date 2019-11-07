import React from 'react'
import ListItem from './ListItem'

import testData from '../test-data/seed-data.json'

const listContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}

export default function List() {
  return (
    <div style={listContainerStyle}>
      {testData.map(flight => (
        <ListItem flightData={flight} />
      ))}
    </div>
  )
}