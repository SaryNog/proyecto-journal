import {Sidebar} from "@/components/Sidebar"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-slate-100 antialiased text-slate-300
            selection:bg-blue-600 selection:text-white">
            <div className="flex">
                <Sidebar />
                <div className="p-2 w-full text-slate-900">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout