import React, { useState, useEffect } from 'react';
import PlanetsShellAll from '../../Planets/PlanetShellAll/PlanetShellAll';
import { fetchApi } from '../../../shared/sharedFunctions'

export default function HomePlanets(props) {
    const [planets, setPlanets] = useState([]);
    const [isLoading, setIsLoading] = useState('loading')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApi('https://swapi.dev/api/planets')
                setPlanets(data)
                setIsLoading('loaded')
                props.apiDone(true)
            } catch (error) {
                console.error('Error fetching data:', error)
                setIsLoading('error')
            }
        }

        fetchData()
    }, [])

    return (
        <div className='homeDataContainter Planets'>
            <h2>Planets</h2>
            {isLoading === 'loading' && <p>Loading...</p>}
            {isLoading === 'loaded' && (
                <ul>
                    {planets.results.map((e) => (
                        <PlanetsShellAll key={e.url} planet={e} />
                    ))}
                </ul>
            )}
            {isLoading === 'error' && <p>Error occurred while fetching data.</p>}
        </div>
    )
}
