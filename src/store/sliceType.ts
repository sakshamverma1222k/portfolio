import store from "@/store/store.tsx";

export interface MenuTypes {
    name: string,
    url: string,
    icon:string
}

export type RootState = ReturnType<typeof store.getState>;