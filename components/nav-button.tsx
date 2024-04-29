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
        <Button variant={'ghost'} size={'sm'} onClick={onClick}>{label}</Button>
    )
 }