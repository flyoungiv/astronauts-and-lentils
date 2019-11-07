import React from 'react'

const listItemStyle = {
  width: '1200px',
  minHeight: '60px',
  borderRadius: '4px',
  backgroundColor: 'burlywood',
  margin: '.5rem',
  display: 'flex',
  alignItems: 'center',
}

const smallColumn = {
  flex: '0 0 10%'
}

const bigColumn = {
  flex: '0 0 40%'
}

export default function ListItem(props) {

  const { flightData } = props

  return (
    <div style={listItemStyle}>
      <span style={smallColumn}>Badge</span>
      <span style={smallColumn}>{flightData.mission_name}</span>
      <span style={smallColumn}>{flightData.rocket.rocket_type}</span>
      <span style={smallColumn}>{flightData.launch_date_utc}</span>
      <span style={bigColumn}>{flightData.details}</span>
      <span style={smallColumn}>{flightData.flight_numbner}</span>
      <span style={smallColumn}><a href={flightData.links.article_link}>Article</a></span>
    </div>
  )
}