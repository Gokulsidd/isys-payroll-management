"use client";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface userButtonProps {
  imageLink?: any | undefined;
  name: string | undefined;
}

export const UserButton = ({ imageLink, name }: userButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none hover:outline-gray-300/75 rounded-[6px]">
        <div className="shadow-main lg:flex gap-x-1 items-center justify-around py-2 px-4 rounded-[8px] hidden bg-[#fefefe]">
          <p className="font-semibold text-[18px] text-[#444444] max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
            {name}
          </p>
          <div className="w-[42px] h-[42px] rounded-full bg-[#9633d0] shadow-lg flex items-center justify-center">
            <p className="text-[#fefefe] font-normal text-[22px]">G</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
