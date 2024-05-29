import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { StatusLabel } from "./status-label";
import { Poppins } from "next/font/google";


const Font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
  });

interface EmployeeProps {
  employeeID: string;
  name: string;
  role: string;
  dateHired: string;
  status: string;
  department: string;
  email: string;
  pnumber: string;
  projectsWorkingOn: string[];
  location: string;
}

const EmployeeCard = ({
  employeeID,
  name,
  role,
  dateHired,
  status,
  department,
  email,
  pnumber,
  projectsWorkingOn,
  location,
}: EmployeeProps) => {
  return (
    <Card className="border border-[#dfdfdf] rounded-[8px]  w-full space-y-1  shadow-main p-4">
      <div className="flex flex-row gap-x-2 justify-end items-center">
        <StatusLabel label={status} />
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none focus:outline-none hover:bg-gray-100 rounded-full  h-fit">
            <Image
              src={"/menu-vertical.png"}
              width={28}
              height={28}
              alt="option"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CardContent className="w-full items-center justify-start flex flex-col  p-2">
        <Image  src={'/emp.png'} width={72} height={72} alt="employee"/>
        <p className={cn("text-[16px] font-bold",Font.className)}>
            {name}
          </p>
        <p className="text-muted-foreground text-ellipsis whitespace-wrap overflow-hidden h-[25px]">
            {role}
          </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-4 p-4 items-start  border border-gray-200 rounded-[12px] bg-gray-100">
        <div className="flex flex-col gap-y-1 sm:flex-row w-full sm:items-center lg:text-[0.7rem] sm:justify-between px-1">
        <div className="flex flex-col items-center justify-center">
            <p className={cn("text-[12px] font-regular",Font.className)}>Department</p>
            <p className="text-ellipsis whitespace-nowrap overflow-x-hidden sm:w-fit max-w-[150px] ">{role}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className={cn("text-[12px] font-regular",Font.className)}>Date Hired</p>
            <p className="text-ellipsis whitespace-wrap overflow-x-hidden">{dateHired}</p>
        </div>
        </div>
        <div className="space-y-1 lg:text-[0.9rem]">
        <div className="flex flex-row gap-x-2 items-center justify-start">
            <Image src={'/email.png'} width={20} height={20} alt="email" />
            <p className="text-ellipsis whitespace-wrap overflow-x-hidden w-[230px]">{email}</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center justify-start">
            <Image src={'/phone.png'} width={20} height={20} alt="phone" />
            <p className="text-ellipsis whitespace-wrap overflow-x-hidden w-[170px] ">{pnumber}</p>
        </div>
        </div>
      </CardFooter>
    </Card>
  );
};


export default EmployeeCard;
