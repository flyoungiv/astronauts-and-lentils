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

const headerRowStyle = {
  width: '1200px',
  minHeight: '60px',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  backgroundColor: 'rgba(255,255,255,.9)',
  margin: '.5rem',
  marginTop: 0,
  display: 'flex',
  alignItems: 'center',
  color: '#3366cc',
  fontWeight: 'bold',
}

const smallColumn = {
  flex: '0 0 10%',
}

const badgeHeader = {
  flex: '0 0 10%',
  textAlign: 'center'
}

const bigColumn = {
  flex: '0 0 40%',
  padding: '24px',
}

export default function List() {

  const [flights, setFlights] = useState([])
  const [filters, setFilters] = useState({})

  const fetchFlightData = params => {
    fetch(`${process.env.REACT_APP_SERVER}/flights?${params}`)
      .then(response => response.json())
      .then(data => setFlights(data))
  }

  useEffect(() => {
    const params = `landSuccess=${filters.landSuccess}&reused=${filters.reused}&withReddit=${filters.withReddit}`
    fetchFlightData(params)
  }, [filters])

  return (
    <div style={listContainerStyle}>
      <Filters
        setFilters={setFilters}
      />
      <div style={headerRowStyle}>
        <span style={badgeHeader}>Badge</span>
        <span style={smallColumn}>Rocket Name</span>
        <span style={smallColumn}>Rocket Type</span>
        <span style={smallColumn}>Launch Date</span>
        <span style={bigColumn}>Details</span>
        <span style={smallColumn}>ID</span>
        <span style={smallColumn}>Article</span>
      </div>
      {flights.map(flight => (
        <ListItem key={flight.flight_number} flightData={flight} />
      ))}
    </div>
  )
}