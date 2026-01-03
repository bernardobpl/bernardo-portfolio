import { cn } from "@portfolio/ui";

interface TodoHeaderProps {
  title?: string;
  className?: string;
}
export const TodoHeader = ({title, className}: TodoHeaderProps) => {
  if(!title) {
    return null
  }
  return (
    <h1 className={cn("text-blue-600", className)}>{title}</h1>
  )
}
