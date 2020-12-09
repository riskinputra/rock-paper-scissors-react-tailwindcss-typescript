import React, { useState, useEffect } from 'react';
import './styles.scss'
interface PlayProps {
  playerPicked: string
  score: number
  handleScore: (resultScore: number) => void
  handlePlayAgain: () => void
}

function Play({ playerPicked, score, handleScore, handlePlayAgain }: PlayProps) {
  const [ aiPicked, setAiPicked ] = useState<string>('')
  const [ result, setResult ] = useState<string>('')

  const triggerPlayAgain = () => {
    handlePlayAgain()
    setResult('')
    setAiPicked('')
  }

  useEffect(() => {
    (async function() {
      try {
        const triggerAiPicked = () => {
          const randomPicked = Math.floor(Math.random() * Math.floor(3));
      
          if (playerPicked !== '') {
            switch (randomPicked) {
              case 0:
                setAiPicked('scissors')
                break;
              case 1:
                setAiPicked('paper')
                break;
              default:
                setAiPicked('rock')
                break;
            }
          }
        }
      
        const setFinalResult = () => {
          switch (true) {
            case playerPicked === aiPicked:
              setResult('DRAW')
              break;
            case playerPicked === 'scissors' && aiPicked === 'paper':
              setResult('YOU WIN')
              break;
            case playerPicked === 'paper' && aiPicked === 'rock':
              setResult('YOU WIN')
              break;
            case playerPicked === 'rock' && aiPicked === 'scissors':
              setResult('YOU WIN')
              break;
            default:
              setResult('YOU LOSE')
              break;
          }
        }
      
        const triggerScore = () => {
          switch (result) {
            case 'YOU WIN':
              handleScore(score + 1)
              break;
            case 'YOU LOSE':
              handleScore(0)
              break;
            default:
              handleScore(score + 0)
              break;
          }
        }
        if (aiPicked === '') {
          triggerAiPicked()
        }
        if (aiPicked !== '' && result === '') {
          setFinalResult()
        }
        triggerScore()
      } catch (error) {
        console.error('error', error)
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerPicked, aiPicked, result])

  return (
    <div className="play mt-32 mb-10 w-full relative flex justify-center items-center">
      <div className="text-center mr-16">
        <h3 className="mb-10 tracking-widest text-xl">YOU PICKED</h3>
        <div className={`${playerPicked} rounded-full`}>
          <div className={`${playerPicked}-board flex items-center justify-center rounded-full`}>
            <img src={`images/icon-${playerPicked}.svg`} alt={`icon-${playerPicked}`}/>
          </div>
        </div>
      </div>
      <div className="result mr-16 text-center">
        <h1 className="result-title text-6xl whitespace-no-wrap">
          { result }
        </h1>
        <button onClick={() => triggerPlayAgain()} className={`${result === 'YOU LOSE' ? 'lose' : null} w-full tracking-widest bg-white text-lg rounded-md py-2 cursor-pointer`}>
          PLAY AGAIN
        </button>
      </div>
      <div className="text-center">
        <h3 className="mb-10 tracking-widest text-xl">THE HOUSE PICKED</h3>
        <div className={`${aiPicked} rounded-full`}>
          <div className={`${aiPicked}-board flex items-center justify-center rounded-full`}>
            <img src={`images/icon-${aiPicked}.svg`} alt={`icon-${aiPicked}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Play
