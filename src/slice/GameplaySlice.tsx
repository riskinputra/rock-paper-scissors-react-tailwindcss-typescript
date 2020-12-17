import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerType {
  playerSelected: string
  score: number
}
interface ResultType {
  result: string
}
interface AIType {
  aiSelected: String
}

type GamePlay = PlayerType & AIType & ResultType

let initialState: GamePlay = {
  playerSelected: '',
  score: 0,
  result: '',
  aiSelected: ''
}

const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    setPlayerChoice(state, action: PayloadAction<string>) {
      state.playerSelected = action.payload
    },
    setScore(state) {
      switch (state.result) {
        case 'YOU WIN':
          state.score = state.score + 1
          break;
        case 'YOU LOSE':
          state.score = 0
          break;
        default:
          state.score = state.score + 0
          break;
      }
    },
    setAiChoice(state, action: PayloadAction<string>) {
      state.aiSelected = action.payload
    },
    setResult(state, action: PayloadAction<string>) {
      state.result = action.payload
    },
    aiTrigger(state) {
      const randomPicked = Math.floor(Math.random() * Math.floor(3))

      if (state.playerSelected !== '') {
        switch (randomPicked) {
          case 0:
            state.aiSelected = 'scissors'
            break;
          case 1:
            state.aiSelected = 'paper'
            break;
          default:
            state.aiSelected = 'rock'
            break;
        }
      }
    },
    setFinalResult(state) {
      switch (true) {
        case state.playerSelected === state.aiSelected:
          state.result = 'DRAW'
          break;
        case state.playerSelected === 'scissors' && state.aiSelected === 'paper':
          state.result = 'YOU WIN'
          break;
        case state.playerSelected === 'paper' && state.aiSelected === 'rock':
          state.result = 'YOU WIN'
          break;
        case state.playerSelected === 'rock' && state.aiSelected === 'scissors':
          state.result = 'YOU WIN'
          break;
        default:
          state.result = 'YOU LOSE'
          break;
      }
    }
  }
})

export const {
  setPlayerChoice,
  setScore,
  setAiChoice,
  setResult,
  setFinalResult,
  aiTrigger
} = gameplaySlice.actions

export default gameplaySlice.reducer
