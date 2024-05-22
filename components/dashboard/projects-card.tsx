"use client";

import projects from "@/lib/constants";
import { DashboardCardWrapper } from "../card-wrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { StatusButton } from "../status-button";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface Project {
  id: string;
  name: string;
  client: string;
  status: string;
  summary: string;
  started: string;
  team: { id: string; name: string; role: string }[];
}

interface DashboardProjectCardProps {
  projects: Project[];
  selectedProject: Project | null;
  onProjectChange: (project: Project) => void;
}

const Font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const DashboardProjectCard = ({
  projects,
  selectedProject,
  onProjectChange,
}: DashboardProjectCardProps) => {
  return (
    <DashboardCardWrapper
      header="Projects"
      subHeader={`${projects.length} `}
      dropDown={<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {selectedProject?.name || "Select Project"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            {projects.map((project) => (
              <DropdownMenuItem
                key={project.id}
                onSelect={() => onProjectChange(project)}
              >
                <span>{project.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>}
    >
      {selectedProject && (
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="border border-[#dfdfdf] rounded-[8px]  min-h-[324px] ">
            <CardHeader>
              <div className="w-full flex flex-col">
                <p
                  className={cn(
                    "text-[22px] leading-[32px] font-bold",
                    Font.className
                  )}
                >
                  {selectedProject.name}
                </p>
                <StatusButton label={selectedProject.status}  />
              </div>
            </CardHeader>
            <CardContent>
            <div className="w-full flex flex-col   ">
                <p
                  className={cn(
                    "text-[20px] leading-[32px] font-semibold",
                    Font.className
                  )}
                >
                  Project Summary
                </p>
                <p className="text-muted-foreground text-ellipsis whitespace-wrap overflow-hidden h-[140px]">{selectedProject.summary}</p>
              </div>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
                <p className="font-medium">{selectedProject.client}</p>
                <p className="font-medium text-muted-foreground">{selectedProject.started}</p>
            </CardFooter>
          </Card>
          <Card className="border border-[#dfdfdf] rounded-[8px]   min-h-[324px] ">
            <CardHeader className="w-full flex flex-row items-center justify-between">
                <p className={cn(
                    "text-[22px] leading-[32px] font-bold",
                    Font.className
                  )}>Team</p>
                <p className="  text-muted-foreground">{`${selectedProject.team.length} members`}</p>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3">
                {selectedProject.team.map((member) => {
                    return (
                        <div className="flex gap-x-4" key={member.id}>
                            <p className="hidden sm:block w-[42px] h-[42px] rounded-full bg-gray-300 shadow-xl" ></p>
                            <div className="flex flex-col items-start">
                                <p className="font-medium text-[18px]">{member.name}</p>
                                <p className="font-medium text-[14px] text-muted-foreground md:w-[150px] overflow-x-hidden whitespace-nowrap text-ellipsis">{member.role}</p>
                            </div>
                        </div>
                    )
                })}
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardCardWrapper>
  );
};

export default DashboardProjectCard;
