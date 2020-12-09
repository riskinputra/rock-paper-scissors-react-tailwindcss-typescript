import React, { useState } from 'react'
import Board from './components/Board'
import Play from './components/Play'
import Rules from './components/Rules'
import './styles.scss'

function Home() {
  const [ playerSelected, setPlayerSelected ] = useState<string>('')
  const [ score, setScore ] = useState<number>(0)
  const [ showRules, setShowRules ] = useState<boolean>(false)

  const handlePlayerPicked = (value: string) => {
    setPlayerSelected(value)
  }

  const handleScore = (value: number) => {
    setScore(value)
  }

  const handlePlayAgain = () => {
    setPlayerSelected('')
  }

  const triggerRules = () => {
    setShowRules(true)
  }

  const closeRules = () => {
    setShowRules(false)
  }

  return (
    <div className="home relative w-full">
      <div className="mx-auto w-2/4 my-16 relative">
        <div className="head-info border-2 border-solid py-5 px-6 rounded-lg flex justify-between align-middle">
          <img src="images/logo.svg" alt="logo" />
          <div className="head-info--score p-2 w-1/4 rounded-lg bg-white flex items-center justify-center flex-col">
            <div className="score-title tracking-widest text-lg">SCORE</div>
            <h1 className="score-value tracking-widest text-6xl font-bold m-0 leading-none">{ score }</h1>
          </div>
        </div>
        { playerSelected === '' &&  <Board playerPicked={(picked) => handlePlayerPicked(picked)} /> }
        
        { playerSelected !== '' && <Play playerPicked={playerSelected} score={score} handleScore={(resultScore) => handleScore(resultScore)} handlePlayAgain={() => handlePlayAgain()} /> }

      </div>

      { showRules && <Rules closeRules={() => closeRules()} /> }

      <div className="rules py-2 px-8 rounded-lg border-2 border-solid tracking-widest fixed cursor-pointer" onClick={() => triggerRules()}>
        RULES
      </div>
    </div>
  )
}

export default Home
