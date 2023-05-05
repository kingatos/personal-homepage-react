import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./components/SectionHeader/ThemeSwitch/themeSlice";
import githubSlice from "./components/SectionPortfolio/githubSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeSlice,
    github: githubSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
