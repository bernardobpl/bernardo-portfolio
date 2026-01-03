import { Button, cn, Input } from "@portfolio/ui";
import { Todo } from "../types";

interface TodoListItemProps {
  onComplete: (todoId: Todo['id']) => void;
  onIncomplete: (todoId: Todo['id']) => void;
  onDelete: (todoId: Todo['id']) => void;
  onChangeName: (todo: Todo, newName: string) => void;
  todo: Todo;
  className?: string;
}
export const TodoListItem = ({ onComplete, onIncomplete, onDelete, onChangeName, todo, className }: TodoListItemProps) => {
  const handleToggle = () => {
    if(todo.completed) {
      onIncomplete(todo.id);
    } else {
      onComplete(todo.id);
    }
  };

  const handleOnDelete = () => {
    onDelete(todo.id);
  };

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeName(todo, e.target.value);
  };

  return (
    <div className={cn("flex items-center gap-2 hover:bg-gray-300", className)}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <Input value={todo.name} onChange={handleOnChangeName} />
      <Button onClick={handleOnDelete}>❌</Button>
    </div>
  )
}