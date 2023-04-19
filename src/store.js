import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./components/SectionHeader/ThemeSwitch/themeSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSlice,

    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;