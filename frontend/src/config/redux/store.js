import { createSlice, configureStore } from '@reduxjs/toolkit';
import authReducer from "./reducers/authReducer/index.js";

// STEPS for State Management
// Submit action
// Handle Action in its reducer
// Register here => reducer 


export const store = configureStore({
  reducer: {
    auth : authReducer
  }
})