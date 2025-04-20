import RootLayout from "@/pages/RootLayout.tsx";
import Home from '../pages/Home.tsx'

export const routes = [
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {index: true, element: <Home/>},
        ]
    }
]