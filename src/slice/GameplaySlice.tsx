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
    setScore(state, action: PayloadAction<number>) {
      state.score = action.payload
    },
    setAiChoice(state, action: PayloadAction<string>) {
      state.aiSelected = action.payload
    },
    setResult(state, action: PayloadAction<string>) {
      state.result = action.payload
    }
  }
})

export const {
  setPlayerChoice,
  setScore,
  setAiChoice,
  setResult
} = gameplaySlice.actions

export default gameplaySlice.reducer
