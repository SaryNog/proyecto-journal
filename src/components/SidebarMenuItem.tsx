"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  path: string,
  icon: JSX.Element,
  title: string,
}

export const SidebarMenuItem = ({path,icon, title}: Props) => {

  const currentPath = usePathname();
  return (
    <div>
        <Link href= {path}
        className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
            {/* <!-- HeroIcon - User --> */}
        <div className="text-2x1">
            {icon}
        </div>
        <small className="text-center text-sm font-medium">{title}</small>
        </Link>
    </div>
  )
}