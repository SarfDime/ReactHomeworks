import React, { useRef, useState } from 'react'
import soundFile from './sounds.mp3'

let startTimeOut = null

export function StarWarsOpening() {
    const [audio] = useState(new Audio(soundFile))

    const animatedTitleRef = useRef(null)
    const buttonRef = useRef(null)
    const skipButtonRef = useRef(null)
    const animatedText = useRef(null)


    const startOpening = () => {
        const title = animatedTitleRef.current
        const text = animatedText.current
        const button = buttonRef.current
        const skipButton = skipButtonRef.current

        button.classList.add("disabled")
        button.disabled = true

        startTimeOut = setTimeout(() => {
            title.style.opacity = 1
            skipButton.classList.remove("disabled")

            setTimeout(() => {
                playSound()
                button.style.display = "none"
            }, 200)
            setTimeout(() => {
                title.style.animation = 'titleAnimation 9s linear forwards'
                    text.style.animation = 'crawlAnimation 50s linear forwards'
                    setTimeout(() => {
                        text.style.display = 'none'
                        stopSound()
                    }, 70000)
                    setTimeout(() => {
                        skipButton.classList.add("disabled")
                        skipButton.disabled = true
                        setTimeout(() => {
                            skipButton.style.display = "none"
                        }, 300)
                        stopSound()
                    }, 65000)
            }, 400)
        }, 2000)
    }

    const stopOpening = () => {
        clearTimeout(startTimeOut)
        const title = animatedTitleRef.current
        const text = animatedText.current
        const skipButton = skipButtonRef.current

        const button = buttonRef.current
        button.style.display = "none"

        skipButton.classList.add("disabled")
        skipButton.disabled = true
        setTimeout(() => {
            skipButton.style.display = "none"
        }, 300)

        title.style.animation = 'none'
        title.style.display = 'none'
        text.style.animation = 'none'
        text.style.display = 'none'
        stopSound()
    }

    const playSound = () => {
        audio.play()
    }

    const stopSound = () => {
        audio.pause()
        audio.currentTime = 0
    }

    return (
        <div className="opening-container">
            <button ref={buttonRef} onClick={startOpening} className="start">
                <h1>CLICK TO START</h1>
            </button>
            <button ref={skipButtonRef} onClick={stopOpening} className="skip disabled">
                skip intro
            </button>
            <h1 ref={animatedTitleRef} className='title'>STAR WARS</h1>
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
    )
}
