import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          {item.firstname}
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>First Name:</strong> {item.firstname}
            </li>
            <li>
              <strong>Last Name:</strong> {item.lastname}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
