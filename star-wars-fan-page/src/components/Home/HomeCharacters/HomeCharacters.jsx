import React, { useState, useEffect } from 'react'
import CharacterShellAll from '../../Characters/CharacterShellAll/CharacterShellAll'
import { fetchApi } from '../../../shared/sharedFunctions'

export default function HomeProducts(props) {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState('loading')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApi('https://swapi.dev/api/people')
                setCharacters(data)
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
        <div className='homeDataContainter Characters'>
            <h2>Characters</h2>
            {isLoading === 'loading' && <p>Loading...</p>}
            {isLoading === 'loaded' && (
                <ul>
                    {characters.results.map((e) => (
                        <CharacterShellAll key={e.url} character={e} />
                    ))}
                </ul>
            )}
            {isLoading === 'error' && <p>Error occurred while fetching data.</p>}
        </div>
    )
}
