import { createSlice, configureStore } from '@reduxjs/toolkit';
import authReducer from "./reducers/authReducer/index.js";
import postReducer from "./reducers/postReducer/index.js";

// STEPS for State Management
// Submit action
// Handle Action in its reducer
// Register here => reducer  stroe mein register ki baat krra


export const store = configureStore({
  reducer: {
    auth : authReducer,
    postReducer : postReducer
  }
})
