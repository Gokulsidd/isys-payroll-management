import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { StatusLabel } from "../employees/status-label";

interface customerCardProps {
    id: number
    name: string,
    email: string,
    phone: string,
    company: string,
    address: string,
    createdAt: string,
    lastContact: string,
    status: string,
    projects: string[],
}

const CustomerCard = ({
    id,
    name,
    email,
    phone,
    company,
    address,
    createdAt,
    lastContact,
    status,
    projects
}: customerCardProps ) => {
    return (
        <Card className='border border-[#dfdfdf] rounded-[8px]  w-full  shadow-main p-4'>
            <CardContent className="flex flex-col gap-y-3 ">
                <div className="flex flex-row items-center  border-b border-gray-200 w-full">
                    <div className="w-1/4 flex items-center justify-center p-1">
                        <Image src={'/customer.png'} height={52} width={52} alt="profile" />
                    </div>
                    <div className="border-l w-3/4 border-gray-200 flex flex-col items-center justify-start p-1">
                        <p className="text-[1rem] font-semibold">{company}</p>
                        <p className="text-[0.7rem] font-regular text-muted-foreground">{name}</p>
                        <p className="text-[0.7rem] font-regular text-muted-foreground">{email}</p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-y-2 w-full">
                <div className="flex flex-row items-center justify-between w-full px-2">
                    <p className='text-[1rem] font-semibold'>Projects</p>
                    <p className={'font-semibold text-muted-foreground'}>{projects.length}</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-2">
                    <p className='text-[1rem] font-semibold'>Employees</p>
                    <p className={'font-semibold text-muted-foreground'}>{4}</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-2">
                    <p className='text-[1rem] font-semibold'>Status</p>
                    <StatusLabel label={status} />
                </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CustomerCard