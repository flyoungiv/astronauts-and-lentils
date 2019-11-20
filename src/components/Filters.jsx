import React, { useState, useEffect } from 'react'

const filterContainerStyle = {
  width: '1200px',
  backgroundColor: 'white',
  height: '80px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const labelStyle = {
  textTransform: 'uppercase'
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
      <div><input type="checkbox" onChange={() => setLandSuccess(!landSuccess)} /><span style={labelStyle}>land success</span></div>
      <div><input type="checkbox" onChange={() => setReused(!reused)} /><span style={labelStyle}>re-used</span></div>
      <div><input type="checkbox" onChange={() => setWithReddit(!withReddit)} /><span style={labelStyle}>with reddit</span></div>

    </div>
  )
}