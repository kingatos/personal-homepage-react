import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "./getRepos";
import {
  fetchGithubRepos,
  fetchGithubReposSuccess,
  fetchGithubHandlerError,
} from "./githubSlice";

function* fetchGithubHandler() {
  try {
    yield delay(1000);
    const repos = yield call(getRepos);
    yield put(fetchGithubReposSuccess(repos));
  } catch (error) {
    yield put(fetchGithubHandlerError(error));
    yield call(console.error);
  }
}

export function* githubSaga() {
  yield takeLatest(fetchGithubRepos.type, fetchGithubHandler);
}
