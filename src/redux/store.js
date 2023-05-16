import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from '../redux/slice';
import { contactsApi } from '../redux/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
});

setupListeners(store.dispatch);