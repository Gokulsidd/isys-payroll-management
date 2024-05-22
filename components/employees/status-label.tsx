import { Badge } from "@/components/ui/badge";

interface StatusLabelProps {
    label: string;
}


export const StatusLabel = ({label}: StatusLabelProps) => {
    return (
        <p className={(label === 'Active') ? 'text-emerald-500 text-[14px]  font-semibold' : 'text-[14px] font-semibold text-destructive '}>{label}</p>
    )
}