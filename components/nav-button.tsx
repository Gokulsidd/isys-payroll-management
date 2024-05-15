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
            <Button variant={"default"}  size={"lg"} onClick={onClick}>
                <p className="font-normal">{label}</p>
            </Button>
    )
 }