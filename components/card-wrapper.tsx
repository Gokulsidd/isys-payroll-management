'use client'

import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { DashboardCardHeader } from "./header";

interface cardWrapperProps {
    children: React.ReactNode;
    header:string;
    subHeader: string;
    dropDown?: React.ReactNode
}


export const DashboardCardWrapper = ({
    children,
    header,
    subHeader,
    dropDown
} : cardWrapperProps) => {
    return (
        <Card className="min-h-[400px]  shadow-main rounded-[6px] p-2 border border-secondary bg-[#fefefe]">
            <div className="flex w-full items-center justify-between">
            <CardHeader>
                <DashboardCardHeader label={header} subHeader={subHeader}/>
            </CardHeader>
            <div className="pr-8">{dropDown}</div>
            </div>
            <CardContent>{children}</CardContent>
        </Card>
    )
}