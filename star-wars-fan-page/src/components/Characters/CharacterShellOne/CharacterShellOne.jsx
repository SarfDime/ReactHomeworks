import React from 'react'

export default function Character({ character }) {
    return (
        <li className='characterContainer'>
            {/* <img src="" alt="" /> */}
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>mass: {character.mass}</p>
            <p>hair color: {character.hair_color}</p>
            <p>skin color: {character.skin_color}</p>
            <p>eye color: {character.eye_color}</p>

            <p>species: {character.species} TODO</p>
            <p>vehicles: {character.vehicles} TODO</p>
            <p>starships: {character.starships} TODO</p>
            <p>Homeworld: {character.homeworld} TODO</p>
        </li>
    )
}


