import React from 'react'

import  './styles.scss'

interface BoardProps {
  playerPicked: (picked: string) => void
}

function Board({ playerPicked }: BoardProps) {

  const handleClickPicked = (value: string) => {
    playerPicked(value)
  }

  return (
    <div className="board triangle mt-32 mb-10 w-full relative">
      <img className="mx-auto" src="images/bg-triangle.svg" alt="bg-triangle"/>
      <div className="paper absolute rounded-full" onClick={() => handleClickPicked('paper')}>
        <div className="paper-board flex items-center justify-center rounded-full">
          <img src="images/icon-paper.svg" alt="icon-paper"/>
        </div>
      </div>
      <div className="scissors absolute rounded-full" onClick={() => handleClickPicked('scissors')}>
        <div className="scissors-board flex items-center justify-center rounded-full">
          <img src="images/icon-scissors.svg" alt="icon-scissors"/>
        </div>
      </div>
      <div className="rock absolute rounded-full" onClick={() => handleClickPicked('rock')}>
        <div className="rock-board flex items-center justify-center rounded-full">
          <img src="images/icon-rock.svg" alt="icon-rock"/>
        </div>
      </div>
    </div>
  )
}

export default Board
