'use client'
import { NavButton } from "@/components/nav-button";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
    const DashboardNav = ['Team', 'Projects', 'Organisation', 'TimeSheet', 'Reports'];
    const onCLick = (item: string) => {
        console.log(item);
        return item;
    };

    return ( 
        <div className="flex flex-col md:flex-row md:items-center w-fit h-fit justify-between border border-secondary rounded-[6px] py-2 px-4 cursor-pointer shadow-main bg-[#fefefe]">
            <div className="flex flex-wrap gap-y-2 md:gap-x-6 md:flex-nowrap md:items-center">
                {DashboardNav.map((item, index) => (
                    <NavButton key={index} label={item} onClick={() => onCLick(item)} />
                ))}
            </div>
            {/* <ModeToggle /> */}
        </div>
    );
};
 
export default Navbar;
