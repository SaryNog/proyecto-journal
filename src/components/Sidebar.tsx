import { IoBrowsersOutline, IoCalendarOutline, IoHome, IoPersonOutline } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem"
import { BiMessageAltDetail } from "react-icons/bi";

const menuItem =[
    {
        path: "/dashboard/main",
        icon: <IoHome/>,
        title: "Home"
    },
    {
        path: "/dashboard/messages",
        icon: <BiMessageAltDetail/>,
        title: "Messages"
    },
    {
        path: "/dashboard/calendar",
        icon: <IoCalendarOutline/>,
        title: "Calendar"
    },
    {
        path: "/dashboard/profile",
        icon: <IoPersonOutline/>,
        title: "Profile"
    }
];

export const Sidebar = () => {
    return(
    <div>
        <style>
        {/* .pattern {
    /* From - https://bgjar.com/meteor */} 
        </style>
    <div
        className="bg-gray-50 dark:bg-slate-900 h-screen pattern"
    >
    <nav
        className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
    >
        {
            menuItem.map( (item) => (
            <SidebarMenuItem
                key = {item.path}
                path= {item.path}
                icon = {item.icon}
                title = {item.title}
            />
            ))
        }

        </nav>
        </div>
    </div>
    )
}
