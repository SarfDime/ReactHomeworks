import React, { useRef, useState } from 'react'
import soundFile from './sounds.mp3'

export function StarWarsOpening() {
    const [audio] = useState(new Audio(soundFile))
    const [isPlaying, setIsPlaying] = useState(false)

    const animatedElementRef = useRef(null)
    const buttonRef = useRef(null)
    const animatedText = useRef(null)

    const handleButtonClick = () => {
        const element = animatedElementRef.current
        const text = animatedText.current
        const button = buttonRef.current
        button.classList.add("disabled")
        button.disabled = true

        setTimeout(() => {
            element.style.opacity = 1
            setTimeout(() => { playSound() }, 200)
            setTimeout(() => {
                element.style.animation = 'titleAnimation 7s linear forwards'
                setTimeout(() => {
                    text.style.animation = 'crawlAnimation 60s linear forwards'
                    setTimeout(() => {
                        text.style.display = 'none'
                        stopSound()
                    }, 70000)
                }, 400)
            }, 400)
        }, 2000)
    }

    const playSound = () => {
        audio.play()
        setIsPlaying(true)
    }

    const stopSound = () => {
        audio.pause()
        audio.currentTime = 0
        setIsPlaying(false)
    }

    return (
        <div className="opening-container">
            <button ref={buttonRef} onClick={handleButtonClick} className='start'><h1>CLICK TO START</h1></button>
            <h1 ref={animatedElementRef} className='title'>STAR WARS</h1>
            <div className='farFarAway'>
                <div ref={animatedText} className="text">
                    <h2>EPISODE IV.V - THE REACT AWAKENS</h2>
                    <p>A long time ago in a react enviorment far, far away...</p>
                    <p>
                        It is a period of frontend development. Rebel coders, striking from hidden bases, have won their first victory against the evil Empire.
                        During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate project, the DEATH COMPONENT.
                    </p>
                    <p>
                        Pursued by the Empire's sinister agents, Princess Reacta races home aboard her starship, carrying the stolen plans that can save her people and restore peace to the galaxy.
                        Unbeknownst to Reacta, her droid companion, JSX-D2, hides a vital message within its components that could unlock the secrets of the React Force.
                        As Reacta ventures forth, she encounters a young, talented developer named Luku Skystalker, who possesses the rare ability to harness the power of React and create stunning user interfaces.
                        Together, they embark on a journey to seek out the legendary Jedi master, Obi-Wan Hocodobi,
                        who holds the key to mastering the React Force and bringing balance to the frontend.
                    </p>
                    <p>
                        Meanwhile, the sinister Sith Lord, Dork Sidious, senses a disturbance in the code and seeks to crush the Rebel Alliance and their React revolution.
                        Will Reacta, Luku Skystalker, and their band of Rebel coders prevail against the Empire's dark designs? Will they master the ways of the React Force and bring harmony to the frontend galaxy?
                    </p>
                    <p>
                        Find out in this epic saga of "Star Wars: Episode IV.V - The React Awakens," where the force of components meets the battle for beautiful UIs!
                    </p>
                </div>
            </div>
        </div>
    );
};

