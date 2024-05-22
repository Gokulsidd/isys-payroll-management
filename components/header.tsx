import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const Font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})


interface HeaderProps {
    label: string;
    subHeader: string
}

export const DashboardCardHeader = ( {label, subHeader} : HeaderProps) => {
    return (
        <div className="w-full flex flex-col md:flex-row  gap-x-2 md:gap-x-4  md:items-end">
            <h1 className={cn("text-[1.5rem] md:text-[1.7rem] leading-[32px] font-bold" , Font.className)}>{label}</h1>
            <p className="text-muted-foreground hidden sm:block">{`( ${subHeader} )`}</p>
        </div>
    )
}