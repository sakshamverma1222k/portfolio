import {configureStore} from "@reduxjs/toolkit";
import  menuReducer from '../store/menu-slice.tsx'

const store = configureStore({
    // other store configuration options...
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        menu: menuReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;