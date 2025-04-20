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

export default store;