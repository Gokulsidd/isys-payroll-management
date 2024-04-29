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
        <Card className="w-[400px] shadow-md bg-white" >
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