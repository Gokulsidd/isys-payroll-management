import { useParams, usePathname } from "next/navigation";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {


    return ( 
        <div className="flex gap-x-6 items-center border w-fit border-secondary rounded-md p-2 mb-4 cursor-pointer shadow-md">
            <p className="rounded-sm p-1 hover:bg-secondary">nav 1</p>
            <p className="rounded-sm p-1 hover:bg-secondary">nav 2</p>
            <p className="rounded-sm p-1 hover:bg-secondary">nav 3</p>
            <p className="rounded-sm p-1 hover:bg-secondary">nav 4</p>
            <ModeToggle />
        </div>
     );
}
 
export default Navbar;