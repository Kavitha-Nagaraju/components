import React from 'react'

function PlayersTeam(props) {
  return (
    <div className='PlayersTeam'>
    <img src={props.img} alt=""></img>
    <h1>Name : {props.Name}</h1>
    <h2>Role : {props.Role}</h2>
    <h2>Team : {props.Team}</h2>
      
    </div>
  )
}

export default PlayersTeam
