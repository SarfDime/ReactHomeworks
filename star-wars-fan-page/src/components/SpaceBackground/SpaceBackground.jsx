import React from 'react'

const SpaceBackground = ({ numberOfStars }) => {
    const generateRandomStars = () => {
        let stars = ''

        for (let i = 0; i < numberOfStars; i++) {
            const x = `${Math.floor(Math.random() * 100)}%`
            const y = `${Math.floor(Math.random() * 100)}%`
            stars += `<use href="#star-symbol" x="${x}" y="${y}" class="star star-${i + 1}"></use>`
        }

        return stars
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="space-background">
            <defs>
                <symbol id="star-symbol">
                    <circle cx="5" cy="5" r="1" />
                </symbol>
            </defs>
            <rect width="100%" height="100%"/>
            <g className="stars-scale" dangerouslySetInnerHTML={{ __html: generateRandomStars() }} />
        </svg>
    )
}

export default SpaceBackground



