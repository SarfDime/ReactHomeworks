import React from 'react'

export default function Character({ character }) {
    return (
        <li className='characterContainer'>
            <div>
                {/* <img src="" alt="" /> */}
                <h2>{character.name}</h2>
                <p>Height: {character.height}</p>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Homeworld: {character.homeworld} TODO</p>
            </div>
            <div className='blob'></div>
        </li>
    )
}


