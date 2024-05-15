"use client"
import { Button } from "@/components/ui/button";

interface NavButtonprops {
    label: string;
    onClick: () => {}
}

export const NavButton = ({ 
    label,
    onClick
 }: NavButtonprops) => {
    return (
            <Button variant={"default"}  size={"lg"} onClick={onClick} className="w-full md:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg">
                <p className="font-normal">{label}</p>
            </Button>
    )
 }