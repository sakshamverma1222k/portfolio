import {Outlet} from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar.tsx"

const RootLayout = () => {
    return(
        <div className="flex container p-5 mx-auto">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default RootLayout