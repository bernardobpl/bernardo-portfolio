import { cn } from "@portfolio/ui"
import { Todo } from "../types"

interface TodoListProps {
  todoList: Todo[]
  children: (todo: Todo) => React.ReactNode
  empty?: React.ReactNode
  className?: string
}
export const TodoList = ({todoList, children, empty, className}: TodoListProps) => {
  return (
    <div className={cn('flex flex-col gap-2 w-full items-center',className)}>
      {todoList.length === 0 ? empty : todoList.map(todo => children(todo))}
    </div>
  )
}
