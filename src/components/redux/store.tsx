import { applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import searchTicketsSlice from "./slices/searchTicketsSlice";
import sortedCitiesListSlice from "./slices/sortedCitiesList";

const ReactReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  searchTicketsState: searchTicketsSlice.reducer,
  sortedCitiesList: sortedCitiesListSlice.reducer,
})

const myMiddleware = [compose(applyMiddleware(thunk), ReactReduxDevTools)];

const store = configureStore({
  reducer: rootReducer,
  devTools: ReactReduxDevTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myMiddleware,
      },
      serializableCheck: false,
    }),
})

export default store