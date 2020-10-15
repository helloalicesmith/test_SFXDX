import { createSelector } from 'reselect';

import { CharactersState } from './index';
import { CharactersType, CharacterDetailsType } from '../types';

export const getCharacters = (state: CharactersState): Array<CharactersType> => state.characters;
export const getSearchValue = (state: CharactersState): string => state.searchValue;
export const getCharacterDetails = (
  state: CharactersState,
): CharacterDetailsType | null => state.characterDetails;
export const getIsDetailsLoading = (state: CharactersState): boolean => state.isDetailsLoading;

export const getCharactersList = createSelector<
  CharactersState,
  string,
  Array<CharactersType>,
  Array<CharactersType>
>(
  getSearchValue,
  getCharacters,
  (searchValue: string, characters: Array<CharactersType>) => characters.filter(({ name }: CharactersType) => name.toLowerCase().includes(searchValue)),
);
