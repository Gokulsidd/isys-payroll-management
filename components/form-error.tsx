import { BsExclamationTriangle } from 'react-icons/bs';

interface FormErrorProps {
    message?: string
}

export const FormError = ({ 
    message
 } : FormErrorProps) => {
    if(!message) return null;

    return (
        <div className='w-full bg-destructive/15 p-3 rounded-md flex items-center gap-x-3 text-sm text-destructive'>
            <BsExclamationTriangle  className='w-4 h-4' />
            <p>{message}</p>
        </div>
    )
 }