import React, { useState, useEffect } from 'react'

const filterContainerStyle = {
  width: '1200px',
  backgroundColor: 'rgba(255,255,255,.4)',
  height: '80px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0
}

const labelContainerStyle = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '16px',
}

const labelStyle = {
  textTransform: 'uppercase',
  color: 'white'
}

export default function Filters(props) {

  const { setFilters } = props

  const [landSuccess, setLandSuccess] = useState()
  const [reused, setReused] = useState()
  const [withReddit, setWithReddit] = useState()

  useEffect(() => {
    setFilters({
      landSuccess: landSuccess,
      reused: reused,
      withReddit: withReddit
    })
  }, [landSuccess, reused, withReddit, setFilters])

  return (
    <div style={filterContainerStyle}>
      <div style={labelContainerStyle}>
        <label style={labelStyle}>land success
          <input type="checkbox" onChange={() => setLandSuccess(!landSuccess)} />
          
        </label>
        <label style={labelStyle}>re-used
          <input type="checkbox" onChange={() => setReused(!reused)} />
          
        </label>
        <label style={labelStyle}>with reddit
          <input type="checkbox" onChange={() => setWithReddit(!withReddit)} />
          
        </label>
      </div>
    </div>
  )
}