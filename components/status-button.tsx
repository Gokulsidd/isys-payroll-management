'use client'

import { Badge } from "./ui/badge";

interface StatusButtonProps {
    label: string;
    
}


export const StatusButton = ({ label } : StatusButtonProps) => {
    return (
        <Badge variant={'outline'} className={(label === 'Approved' || label === 'Active' || label === 'In Progress') ? 'bg-[#e3ffe2] text-emerald-500 border border-emerald-500' : 'bg-destructive/15 text-destructive border border-destructive'}>{label}</Badge>
    )
}