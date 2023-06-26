import React from 'react'

export default function Planet({ planet }) {
    return (
        <li className='planetContainer'>
            <div>
                {/* <img src="" alt="" /> */}
                <h2>{planet.name}</h2>
                <p>Terrain: {planet.terrain}</p>
                <p>Climate: {planet.climate}</p>
                <p>Population: {planet.population}</p>
            </div>
            <div className='blob'></div>
        </li>
    )
}


