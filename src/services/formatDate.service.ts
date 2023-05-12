import { format } from "date-fns";

export const formatDateService = (date: string) => {
    return format(new Date(date), "LLL dd, yyyy")
}