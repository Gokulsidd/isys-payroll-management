'use client'
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useParams, usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            label: 'Dashboard',
            href: '/app/dashboard',
            icon: <Image src={'/dashboard.png'} height={25} width={25} alt="dashboard"/>
        },
        {
            label: 'Projects',
            href: '/app/projects',
            icon: <Image src={'/projects.png'} height={25} width={25} alt="dashboard"/>
        },
        {
            label: 'Employees',
            href: '/app/employees',
            icon: <Image src={'/employee.png'} height={25} width={25} alt="dashboard"/>
        },
        {
            label: 'Customers',
            href: '/app/customers',
            icon: <Image src={'/customers.png'} height={25} width={25} alt="dashboard"/>
        },
        {
            label: 'Timecard',
            href: '/app/timecard',
            icon: <Image src={'/timecard.png'} height={25} width={25} alt="dashboard"/>
        },
        {
            label: 'Reports',
            href: '/app/reports',
            icon: <Image src={'/reports.png'} height={25} width={25} alt="dashboard"/>
        },
    ];

    return ( 
        <nav className="flex flex-col items-center sm:items-start px-4 pt-24 gap-y-4 sm:justify-start h-full w-[250px] border border-r-secondary shadow-xl bg-[#fefefe]">
            {routes.map((route) => {
                const isActive = pathname === route.href;
                return (
                    // <TooltipProvider key={route.label}>
                    //     <Tooltip delayDuration={0}>
                    //         <TooltipTrigger>
                                <Link href={route.href} key={route.label}>
                                    <div className={`flex min-w-[200px] gap-x-4 items-center  justify-start hover:bg-secondary dark:bg-slate-50 dark:hover:bg-white p-4 rounded-sm ${isActive ? 'bg-secondary border dark:bg-slate-50 border-inherit' : ''}`}>
                                        {route.icon}
                                        <span className="ml-2 sm:ml-0 font-semibold">{route.label}</span>
                                    </div>
                                </Link>
                    //         </TooltipTrigger>
                    //         <TooltipContent side="right" className="ml-1.5">
                    //             {route.label}
                    //         </TooltipContent>
                    //     </Tooltip>
                    // </TooltipProvider>
                );
            })}
        </nav>
     );
}
 
export default Sidebar;
