import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers';
import Board from './components/Board'
import Play from './components/Play'
import Rules from './components/Rules'
import './styles.scss'

function Home() {
  const { playerSelected, score } = useSelector(
    (state: RootState) => state.gameplay
  )
  const [ showRules, setShowRules ] = useState<boolean>(false)

  const triggerRules = () => {
    setShowRules(true)
  }

  const closeRules = () => {
    setShowRules(false)
  }

  return (
    <div className="home relative w-full">
      <div className="mx-auto w-10/12 md:w-2/4 md:my-16 my-10 relative">
        <div className="head-info border-2 border-solid py-5 px-6 rounded-lg flex justify-between align-middle">
          <img src="images/logo.svg" alt="logo" />
          <div className="head-info--score p-2 w-2/5 md:w-1/4 rounded-lg bg-white flex items-center justify-center flex-col">
            <div className="score-title tracking-widest text-lg">SCORE</div>
            <h1 className="score-value tracking-widest text-6xl font-bold m-0 leading-none">{ score }</h1>
          </div>
        </div>
        { playerSelected === '' &&  <Board /> }
        
        { playerSelected !== '' && <Play /> }

      </div>

      { showRules && <Rules closeRules={() => closeRules()} /> }

      <div className="relative md:block flex justify-center">
        <div className="rules py-2 px-8 mb-10 md:mb-0 rounded-lg border-2 border-solid tracking-widest md:fixed cursor-pointer" onClick={() => triggerRules()}>
          RULES
        </div>
      </div>
    </div>
  )
}

export default Home
