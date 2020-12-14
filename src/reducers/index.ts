import { combineReducers } from '@reduxjs/toolkit'
import gameplayReducer from 'slice/GameplaySlice'

const rootReducer = combineReducers({
  gameplay: gameplayReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
