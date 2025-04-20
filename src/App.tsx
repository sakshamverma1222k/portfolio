import "./index.css";
import {routes} from "@/router/routes.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "../src/context/theme-provider.tsx"

const router = createBrowserRouter(routes)

export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
