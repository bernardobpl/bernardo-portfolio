import { cn } from "@portfolio/ui";

interface TodoListEmptyProps {
  message?: string;
  className?: string;
}
export const TodoListEmpty = ({ message, className }: TodoListEmptyProps) => {
  return (
    <div className={cn("text-gray-500", className)}>
      {message || "📝 Your list is empty"}
    </div>
  )
}