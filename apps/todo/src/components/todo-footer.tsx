import { cn } from "@portfolio/ui"

interface TodoFooterProps {
  totalCount: number
  completedCount: number
  incompletedCount: number
  className?: string
}
export const TodoFooter = ({totalCount, completedCount, incompletedCount, className}: TodoFooterProps) => {
  return (
    <div className={cn("flex gap-3 text-sm", className)}>
      <p>Total: {totalCount}</p>
      <p>Completed: {completedCount}</p>
      <p>Incompleted: {incompletedCount}</p>
    </div>
  )
}