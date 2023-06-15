import React from 'react'

export default function Character({ character }) {
    return (
        <div className='characterContainer'>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
            <p>Birth Year: {character.birth_year}</p>
        </div>
    )
}


