import {useSelector} from "react-redux";
import type  {RootState} from "src/store/sliceType.ts";
import {NavLink} from "react-router-dom";

const SidebarNav = () => {
    const navMenu = useSelector((state: RootState) => state.menu)
    return (
        <div>
            <div className="navbar">
                <ul className="navbar-nav flex-column w-100">
                    {
                        navMenu && navMenu.map((item, index) => (
                            <li key={index} className="nav-item">
                                <NavLink to={item.url}
                                         className={({isActive}) => (isActive ? "nav-link active fs-6 text-capitalize text-primary d-flex align-items-center" : "nav-link fs-6 text-capitalize text-primary d-flex align-items-center")}
                                         end={location.pathname.startsWith('/article')}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default SidebarNav