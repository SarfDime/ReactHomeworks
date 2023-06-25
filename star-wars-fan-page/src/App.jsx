import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home'
import SpaceBackground from './components/SpaceBackground/SpaceBackground';

import PlanetsAll from './components/Planets/All/All'
import PlanetsOne from './components/Planets/One/One'

import CharactersOne from './components/Characters/All/All'
import CharactersAll from './components/Characters/One/One'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <SpaceBackground numberOfStars={250} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/characters" element={<CharactersAll />} />
          <Route path="/planets" element={<PlanetsAll />} />

          <Route path="/characters/:id" element={<CharactersOne />} />
          <Route path="/planets/:id" element={<PlanetsOne />} />

          <Route
            path="*"
            element={
              <div>
                <h1>Page not found 404</h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}



