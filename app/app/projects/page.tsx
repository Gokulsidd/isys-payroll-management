import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const Font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

import { UserButton } from "@/components/user-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import projects from "@/lib/constants";
import ProjectCard from "@/components/projects/project-card";

const Projects = () => {
    return ( 
        <div className="p-4 space-y-6">
            <div className="flex flex-col gap-y-4 sm:flex-row lg:gap-x-6 gap-x-4 sm:items-center items-start justify-between">
                <div className="flex flex-row  gap-x-4  items-center">
                    <h1 className={cn("text-[28px] leading-[32px] font-bold" , Font.className)}>Projects</h1>
                    <p className="text-muted-foreground sm:w-[40px]">{`( ${'8'} )`}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-x-4 w-full">
                    <Input  type="text" placeholder="search" className="w-full sm:w-auto lg:w-[400px]" />
                    <Button variant={'outline'} size={'icon'} className="md:flex hidden" >
                        <Image src={'/filter-2.png'} width={24} height={24} alt="filter" />
                    </Button>
                </div>
             <Button variant={"outline"} size={'lg'} className="outline-[#1DCE00] text-[#1DCE00] w-full sm:w-[150px]  lg:w-[200px]">Add Project</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-start justify-start">
                {projects.map((project) => {
                    return (
                        <ProjectCard {...project} key={project.id} />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Projects;