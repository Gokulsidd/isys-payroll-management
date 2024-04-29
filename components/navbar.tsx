'use client'
import { NavButton } from "@/components/nav-button";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
    const DashboardNav = ['My team' , 'My projects', 'My organisation', 'Timecard']
    const onCLick = (item: string) => {
        console.log(item)
        return item
    }
    return ( 
        <div className="flex gap-x-6 items-center justify-between border  border-secondary rounded-md py-2 px-4 mb-4 cursor-pointer shadow-md">
            <div>
            {DashboardNav.map((item) => {
                return (
                    <NavButton label={item} onClick={() => onCLick(item)} />
                )
            })}
            </div>
            {/* <ModeToggle /> */}
        </div>
     );
}
 
export default Navbar;