import { fork } from "redux-saga/effects";
import allImageSaga from "./all_image";
import allCategoriesSaga from "./all_Categories";

export default function* rootSaga() {
  yield fork(allImageSaga);
  yield fork(allCategoriesSaga);
}
