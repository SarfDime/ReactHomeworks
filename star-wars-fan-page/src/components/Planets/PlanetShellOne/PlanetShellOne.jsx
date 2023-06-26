import React from 'react'

export default function Planet({ planet }) {
    return (
        <div className='planetContainer'>
            {/* <img src="" alt="" /> */}
            <h2>{planet.name}</h2>
            <p>Terrain: {planet.terrain}</p>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Rotaion Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>

            <p>Gravity: {planet.gravity} TODO</p>
            <p>Has Surface Water: {surface_water} TODO</p>
            <ul>Residents: TODO</ul>
            <ul>Films: TODO</ul>
        </div>
    )
}

