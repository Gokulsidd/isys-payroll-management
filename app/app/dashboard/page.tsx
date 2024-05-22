'use client'
import { DashboardCardWrapper } from "@/components/card-wrapper";
import DashboardProjectsCard  from "@/components/dashboard/projects-card";
import Navbar from "@/components/navbar";
import { TimeSheetCard } from "@/components/timesheet-card";
import { UserButton } from "@/components/user-button";
import projects from "@/lib/constants";
import { useState } from "react";

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState(projects[7]);

  const handleProjectChange = (project  : any) => {
    setSelectedProject(project);
  };


  return (
    <div className="p-4">
      <div className="w-full flex justify-between items-center mb-4 ">
        <Navbar />
        <div className="lg:block hidden">
        <UserButton name="gokulramakrishnan" />
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <DashboardCardWrapper header="TimeSheet" subHeader="last 3 months">
          <div className="flex flex-col gap-y-2">
          <TimeSheetCard name="Isys_jan_2014" status="Approved" />
          <TimeSheetCard name="Isys_Feb_2014" status="Approved" />
          <TimeSheetCard name="Isys_Mar_2014" status="Pending" />
          </div>
        </DashboardCardWrapper>
         <DashboardProjectsCard
            projects={projects}
            selectedProject={selectedProject}
            onProjectChange={handleProjectChange}
          />
        <DashboardCardWrapper header="Todays Tasks" subHeader="See all">
          <div></div>
        </DashboardCardWrapper>
        <DashboardCardWrapper header="Calender" subHeader="">
          <div></div>
        </DashboardCardWrapper>
      </div>
    </div>
  );
};

export default Dashboard;
