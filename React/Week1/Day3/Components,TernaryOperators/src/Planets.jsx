import React from 'react'

export const Planets = (props) => {
  return (
    <div>
        {props.isGasPlanet? <h1>{props.name}</h1>:<p>This list only contains names of gas planets</p>}
    </div>
  )
}
