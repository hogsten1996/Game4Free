import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

export const gamesApi = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '56affdaefcmsh18e7f850921bfc5p14653djsn0942126b895b');
            headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getGames: builder.query({
            query: (category) => `api/games?category=${category}`,
        }),
    }),
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        games: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(gamesApi.endpoints.getGames.matchFulfilled, (state, { payload }) => {
            state.games = payload;  
        });
    },
});

export const dataSliceReducer = dataSlice.reducer;
export const { useGetGamesQuery } = gamesApi;

