import {createSlice} from "@reduxjs/toolkit";
import type {MenuTypes} from "@/store/sliceType.ts";

const initialMenuState: MenuTypes[] = [
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

