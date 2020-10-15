import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CharactersType, CharacterDetailsType } from '../types';

export interface CharactersState {
  isLoading: boolean;
  characters: Array<CharactersType>;
  characterDetails: CharacterDetailsType | null;
  isDetailsLoading: boolean;
  searchValue: string;
}

export const initialState: CharactersState = {
  isLoading: false,
  characters: [],
  characterDetails: null,
  isDetailsLoading: false,

  searchValue: '',
};

const characters = createSlice({
  name: '@@characters',
  initialState,
  reducers: {
    fetchCharacters: (state: CharactersState): void => {
      state.isLoading = true;
    },
    fetchCharactersSuccess: (
      state: CharactersState,
      action: PayloadAction<Array<CharactersType>>,
    ): void => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    fetchCharactersError: (state: CharactersState): void => {
      state.isLoading = false;
    },

    setSearchValue: (
      state: CharactersState,
      action: PayloadAction<string>,
    ): void => {
      state.searchValue = action.payload;
    },

    fetchCharacterDetails: (
      state: CharactersState,
      _action: PayloadAction<string>,
    ): void => {
      state.isDetailsLoading = true;
    },
    fetchCharacterDetailsSuccess: (
      state: CharactersState,
      action: PayloadAction<CharacterDetailsType>,
    ): void => {
      state.characterDetails = action.payload;
      state.isDetailsLoading = false;
    },
    fetchCharacterDetailsError: (state: CharactersState): void => {
      state.isDetailsLoading = false;
    },
  },
});

export const { reducer, actions } = characters;

export default reducer;
