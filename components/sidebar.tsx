import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


const Sidebar = () => {
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
    ]
    return ( 
        <nav className="flex flex-col items-center px-4 pt-10 gap-y-10 justify-start h-full border border-r-gray-200">
            {routes.map((route) => {
                return (
                   <TooltipProvider>
                    <Tooltip key={route.label} delayDuration={0}>
                    <TooltipTrigger>
                    <Link href={route.href}>
                        <div className="hover:bg-secondary p-1 rounded-sm">{route.icon}</div>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-1.5" >
                        {route.label}
                    </TooltipContent>
                   </Tooltip>
                   </TooltipProvider>
                )
            })}
        </nav>
     );
}
 
export default Sidebar;