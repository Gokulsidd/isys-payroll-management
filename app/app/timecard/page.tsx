"use client";

import { DatePickerWithRange } from "@/components/timeSheet/date-ragnge-picker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const Font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TimeCard = () => {
    return ( 
        <div className="p-4 space-y-6">
            <div className="flex flex-row  gap-x-4  items-center justify-between">
                <h1
                    className={cn(
                    "text-[28px] font-bold",
                    Font.className
                    )}
                >
                    TimeSheet
                </h1>
                <DatePickerWithRange />
                <Button variant={"outline"} size={'lg'} className="outline-[#1DCE00] text-[#1DCE00] w-full sm:w-[150px]  lg:w-[200px]">Add Row</Button>
            </div>
            <div>
            </div>
        </div>
 );
}
 
export default TimeCard;