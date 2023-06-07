import React, { useState } from 'react'

import './main.scss'

const initialMovies = [
    {
        id: 1,
        title: 'The Dark Knight',
        year: 2008,
        description: `Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes. —Leon Lombardi`,
        img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_The%2520Dark'
    },
    {
        id: 2,
        title: 'Inception',
        year: 2010,
        description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. —Warner Bros. Pictures",
        img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0_tt_3_nm_5_q_Ince'
    },
    {
        id: 3,
        title: 'The Godfather',
        year: 1972,
        description: "The aging patriarch of a powerful crime family transfers control to his reluctant son.",
        img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520godf'
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        year: 1994,
        description: "The lives of several interconnected individuals in the criminal underworld collide in this nonlinear narrative.",
        img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_pulp%2520fi'
    },
    {
        id: 5,
        title: 'The Shawshank Redemption',
        year: 1994,
        description: `Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. —J-S-Golden`,
        img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
        url: 'https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=VM441W2JMXBTMNF3JXXB&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1'
    },
    {
        id: 6,
        title: 'Fight Club',
        year: 1999,
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        img: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0137523/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_fight',
    },
    {
        id: 7,
        title: 'The Matrix',
        year: 1999,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against the controllers of it.",
        img: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_The%2520Matr',
    },
    {
        id: 8,
        title: 'Forrest Gump',
        year: 1994,
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        img: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_0_tt_1_nm_7_q_Forre',
    },
    {
        id: 9,
        title: 'The Silence of the Lambs',
        year: 1991,
        description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        img: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0102926/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_Silence'
    },
    {
        id: 10,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg',
        url: 'https://www.imdb.com/title/tt0120737/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_The%2520lord',
    }
]

function Main() {
    const [movies, setMovies] = useState([...initialMovies]);

    function randomiseMovies(arr) {
        const randomMovies = [...arr]

        for (let i = randomMovies.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [randomMovies[i], randomMovies[j]] = [randomMovies[j], randomMovies[i]];
        }

        const selectedMovies = randomMovies.slice(0, 5)
        return selectedMovies
    }

    function generateMovies(arr) {

        let randomisedMovies = randomiseMovies(arr)

        return (randomisedMovies.map((movie) => {
            return (
                <li key={movie.id}>
                    <a
                        className='image'
                        href={movie.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ '--url': `url("${movie.img}")` }}
                    ></a>
                    <div>
                        <a>
                            <h2>{movie.title}</h2>
                        </a>
                        <h4>{movie.year}</h4>
                        <p>{movie.description}</p>
                    </div>
                </li>
            )
        }))
    }

    const handleRefreshMovies = () => {
        const updatedMovies = randomiseMovies(initialMovies)
        setMovies(updatedMovies)
    }

    return (
        <main>
            <section>
                <button onClick={handleRefreshMovies}>refresh movies</button>
            </section>
            <ul>{generateMovies(movies)}</ul>
        </main>
    )
}

export default Main