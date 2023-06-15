import React, { Component } from 'react'
import Character from '../Character/Character'

class CharactersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://swapi.dev/api/people')
            const data = await response.json();
            this.setState({ characters: data.results });
        } catch (error) {
            console.error('Error fetching character data:', error)
        }
    }

    render() {
        const { characters } = this.state;

        return (
            <div className='starWars'>
                <h1>Star Wars Characters</h1>
                {characters.map((character, index) => (
                    <Character key={index} character={character} />
                ))}
            </div>
        )
    }
}

export default CharactersPage
