import SidebarNav from "@/components/common/sidebar/SidebarNav.tsx";
import {ModeToggle} from "src/components/ui/mode-toggle.tsx"

const Sidebar = () => {
    return (
        <aside className="p-2">
            <SidebarNav/>
            <ModeToggle/>
        </aside>
    )
}

export default Sidebar