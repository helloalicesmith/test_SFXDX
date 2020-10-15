import { call, put, takeEvery } from 'redux-saga/effects'

import { CharactersType, CharacterDetailsType } from '../types'

import Repository from './Repository'

import { actions } from './index'

function* fetchCharacters() {
  try {
    const characters: Array<CharactersType> = yield call(Repository.fetch)

    yield put(actions.fetchCharactersSuccess(characters))
  } catch (e) {
    yield put(actions.fetchCharactersError())
  }
}

function* fetchCharacterDetails(action: ReturnType<typeof actions.fetchCharacterDetails>) {
  try {
    const characterDetails: CharacterDetailsType = yield call(Repository.fetchCharacter, action.payload)

    yield put(actions.fetchCharacterDetailsSuccess(characterDetails))
  } catch (e) {
    yield put(actions.fetchCharacterDetailsError())
  }
}

export function* mySaga() {
  yield takeEvery(actions.fetchCharacters.type, fetchCharacters)
  yield takeEvery(actions.fetchCharacterDetails.type, fetchCharacterDetails)
}
