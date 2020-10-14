import { call, put, takeEvery } from "redux-saga/effects";

import { actions } from "./index";
import Repository from "./Repository";
import { CharactersType } from "../types";

function* fetchCharacters() {
  try {
    const characters: Array<CharactersType> = yield call(Repository.fetch);

    yield put(actions.fetchCharactersSuccess(characters));
  } catch (e) {
    yield put(actions.fetchCharactersError());
  }
}

export function* mySaga() {
  yield takeEvery(actions.fetchCharacters, fetchCharacters);
}
