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
      {flights.map(flight => (
        <ListItem key={flight.flight_number} flightData={flight} />
      ))}
    </div>
  )
}