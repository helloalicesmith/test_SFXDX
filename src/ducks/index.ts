import { createSlice } from "@reduxjs/toolkit";

export interface CharactersState {
  isLoading: boolean;
}

export const initialState: CharactersState = {
  isLoading: false
};

const characters = createSlice({
  name: "@@characters",
  initialState,
  reducers: {
    charactersFetch: (state: CharactersState): void => {
      state.isLoading = true;
    }
  }
});

export const { reducer, actions } = characters;

export default reducer;
