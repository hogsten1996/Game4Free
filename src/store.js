import { configureStore } from "@reduxjs/toolkit";
import { gamesApi, dataSliceReducer } from './reducers/api';

export const store = configureStore({
    reducer: {
        gameApi: gamesApi.reducer,
        data: dataSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware)
});

export default store;
