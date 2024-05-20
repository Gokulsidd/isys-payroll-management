import { Badge } from "@/components/ui/badge";

interface StatusLabelProps {
    label: string;
}


export const StatusLabel = ({label}: StatusLabelProps) => {
    return (
        <p className={(label === 'Approved' || label === 'Active' || label === 'In Progress') ? 'text-emerald-500 text-[12px] font-semibold' : 'text-[12px] font-semibold text-destructive '}>{label}</p>
    )
}