import React from 'react'
import link from '../images/link.svg'

const listItemStyle = {
  width: '1200px',
  minHeight: '60px',
  borderRadius: '4px',
  backgroundColor: 'rgba(255,255,255,.9)',
  margin: '.5rem',
  display: 'flex',
  alignItems: 'center',
}

const smallColumn = {
  flex: '0 0 10%',
}

const bigColumn = {
  flex: '0 0 40%',
  padding: '24px',
}

const patchStyle = {
  width: '50%',
  padding: '10%',
}

const linkStyle = {
  width: '20%',
}

export default function ListItem(props) {

  const { flightData } = props

  return (
    <div style={listItemStyle}>
      <span style={smallColumn}>
        <img alt="badge" src={flightData.links.mission_patch_small} style={patchStyle} />
      </span>
      <span style={smallColumn}>{flightData.mission_name}</span>
      <span style={smallColumn}>{flightData.rocket.rocket_type}</span>
      <span style={smallColumn}>{flightData.launch_date_utc.substring(0,9)}</span>
      <span style={bigColumn}>{flightData.details}</span>
      <span style={smallColumn}>{flightData.flight_number}</span>
      <span style={smallColumn}>
        <a href={flightData.links.article_link}><img alt="link" style={linkStyle} src={link} /></a>
      </span>
    </div>
  )
}