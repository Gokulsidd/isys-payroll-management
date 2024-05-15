import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const Font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

import { UserButton } from "@/components/user-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Projects = () => {
    return ( 
        <div className="p-2">
            <div className="flex items-center justify-end">
                <UserButton name="gokulRamakrishnan" />
            </div>
            <div className="flex flex-row gap-x-6 items-center justify-between">
                <div className="flex flex-col md:flex-row  gap-x-4  md:items-end">
                    <h1 className={cn("text-[28px] leading-[32px] font-bold" , Font.className)}>Projects</h1>
                    <p className="text-muted-foreground">{`( ${'8'} )`}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-x-4">
                    <Input  type="text" placeholder="search"/>
                    <Button variant={'ghost'} size={'icon'} >Y</Button>
                </div>
            <div className="flex flex-col md:flex-row gap-x-4">
                    <Input  type="text" placeholder="search"/>
                    <Button variant={'ghost'} size={'icon'} >Y</Button>
            </div>
            </div>
        </div>
     );
}
 
export default Projects;