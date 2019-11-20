import React from 'react'

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

export default function Filters() {
  return (
    <div style={filterContainerStyle}>
      {/* <form action="/action_page.php"> */}
        <div><input type="checkbox" /><span style={labelStyle}>land success</span></div>
        <div><input type="checkbox" /><span style={labelStyle}>re-used</span></div>
        <div><input type="checkbox" checked /><span style={labelStyle}>with reddit</span></div>
      {/* </form> */}
    </div>
  )
}