import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import Filters from './Filters'

//import testData from '../test-data/seed-data.json'

const listContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}

export default function List() {

  const [flights, setFlights] = useState([])

  const fetchFlightData = params => {
    fetch('http://localhost:3001/flights')
      .then(response => response.json())
      .then(data => setFlights(data))
  }

  useEffect(() => {
    fetchFlightData(null)
  }, [])

  return (
    <div style={listContainerStyle}>
      <Filters />
      {flights.map(flight => (
        <ListItem flightData={flight} />
      ))}
    </div>
  )
}