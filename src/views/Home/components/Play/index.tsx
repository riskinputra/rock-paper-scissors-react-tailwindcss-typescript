import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers';

import {
  setAiChoice,
  setResult,
  setPlayerChoice
} from 'slice/GameplaySlice'

import './styles.scss'

function Play() {
  const dispatch = useDispatch()
  const { playerSelected, aiSelected, result } = useSelector(
    (state: RootState) => state.gameplay
  )

  const triggerPlayAgain = () => {
    dispatch(setPlayerChoice(''))
    dispatch(setResult(''))
    dispatch(setAiChoice(''))
  }

  return (
    <div className="play md:mt-32 mt-20">
      <div className="mb-20 w-full relative flex justify-between md:justify-center items-center">
        <div className="text-center md:mr-16">
          <h3 className="mb-10 hidden md:block tracking-widest text-xl">YOU PICKED</h3>
          <div className={`${playerSelected} rounded-full mx-auto`}>
            <div className={`${playerSelected}-board flex items-center justify-center rounded-full`}>
              <img src={`images/icon-${playerSelected}.svg`} alt={`icon-${playerSelected}`}/>
            </div>
          </div>
          <h3 className="mt-5 md:hidden block tracking-widest text-xl">YOU PICKED</h3>
        </div>
        <div className="result hidden md:block mr-16 text-center">
          <h1 className="result-title text-6xl whitespace-no-wrap">
            { result }
          </h1>
          <button onClick={() => triggerPlayAgain()} className={`${result === 'YOU LOSE' ? 'lose' : null} w-full tracking-widest bg-white text-lg rounded-md py-2 cursor-pointer`}>
            PLAY AGAIN
          </button>
        </div>
        <div className="text-center">
          <h3 className="mb-10 hidden md:block tracking-widest text-xl">THE HOUSE PICKED</h3>
          <div className={`${aiSelected} rounded-full mx-auto`}>
            <div className={`${aiSelected}-board flex items-center justify-center rounded-full`}>
              <img src={`images/icon-${aiSelected}.svg`} alt={`icon-${aiSelected}`}/>
            </div>
          </div>
          <h3 className="mt-5 md:hidden block tracking-widest text-xl">THE HOUSE PICKED</h3>
        </div>
      </div>

      <div className="result md:hidden block mx-auto w-2/3 text-center">
        <h1 className="result-title text-6xl whitespace-no-wrap">
          { result }
        </h1>
        <button onClick={() => triggerPlayAgain()} className={`${result === 'YOU LOSE' ? 'lose' : null} w-full tracking-widest bg-white text-lg rounded-md py-2 cursor-pointer`}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default Play
