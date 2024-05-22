import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StatusLabel } from "@/components/projects/status-label";
import Image from "next/image";

const Font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
  });

interface ProjectCardProps {
  name: string;
  status: string;
  summary: string;
  client: string;
  started: string;
}

const ProjectCard = ({
  name,
  status,
  summary,
  client,
  started,
}: ProjectCardProps) => {
  return (
    <Card className="border border-[#dfdfdf] rounded-[8px]  w-full  shadow-main">
      <CardHeader className="flex justify-between flex-row">
        <div className="w-full flex flex-col">
          <p
            className={cn(
              "text-[1.2rem] leading-[32px] font-bold w-[200px] overflow-x-hidden whitespace-nowrap text-ellipsis",
              Font.className
            )}
          >
            {name}
          </p>
          <StatusLabel label={status}  />
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none focus:outline-none hover:bg-gray-100 rounded-full h-fit"> 
                <Image src={'/menu-vertical.png'} width={28} height={28} alt="option" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem >
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col   ">
          <p
            className={cn(
              "text-[16px] leading-[32px] font-bold",
              Font.className
            )}
          >
            Project Summary
          </p>
          <p className="text-muted-foreground text-ellipsis whitespace-wrap overflow-hidden lg:h-[140px] h-[70px]">
            {summary}
          </p>
        </div>
      </CardContent>
      <CardFooter className="w-full flex items-center justify-between">
        <p className="font-medium">{client}</p>
        <p className="font-medium text-muted-foreground">
          {started}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard
