import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
    message?: string
}

export const FormSuccess = ({ 
    message
 } : FormSuccessProps) => {
    if(!message) return null;

    return (
        <div className='w-full bg-destructive/15 p-3 rounded-md flex items-center gap-x-3 text-sm text-destructive'>
            <CheckCircleIcon  className='w-4 h-4' />
            <p>{message}</p>
        </div>
    )
 }