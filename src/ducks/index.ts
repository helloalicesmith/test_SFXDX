import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CharactersType } from "../types";

export interface CharactersState {
  isLoading: boolean;
  characters: Array<CharactersType>;
  searchValue: string;
}

export const initialState: CharactersState = {
  isLoading: false,
  characters: [],

  searchValue: ""
};

const characters = createSlice({
  name: "@@characters",
  initialState,
  reducers: {
    fetchCharacters: (state: CharactersState): void => {
      state.isLoading = true;
    },
    fetchCharactersSuccess: (
      state: CharactersState,
      action: PayloadAction<Array<CharactersType>>
    ): void => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    fetchCharactersError: (state: CharactersState): void => {
      state.isLoading = false;
    },

    setSearchValue: (
      state: CharactersState,
      action: PayloadAction<string>
    ): void => {
      state.searchValue = action.payload;
    }
  }
});

export const { reducer, actions } = characters;

export default reducer;
