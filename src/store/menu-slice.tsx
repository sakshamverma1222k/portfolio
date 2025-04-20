import {createSlice} from "@reduxjs/toolkit";

const initialMenuState = [
    {
        name: "Home",
        url: "/",
        icon: "",
    },
    {
        name: "Orders",
        url: "/order",
        icon: "",
    },
];

const menuSlice = createSlice({
    name: "menu",
    initialState: initialMenuState,
    reducers: {}
});

export default menuSlice.reducer;

