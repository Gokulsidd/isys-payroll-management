import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-button";

interface cardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonUrl: string;
    showSocial?: boolean
}


export const CardWrapper = ( { 
    children,
    headerLabel,
    backButtonLabel,
    backButtonUrl,
    showSocial
 } : cardWrapperProps ) => {
    return (
        <Card className="w-full h-full sm:h-fit sm:w-[400px] p-4 sm:p-0 shadow-md bg-white sm:rounded-md" >
            <CardHeader><AuthHeader label={headerLabel} /></CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonUrl} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
 }