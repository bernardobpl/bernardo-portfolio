import { Button, cn, Input } from "@portfolio/ui"
import { FormEvent } from "react"

const NEW_TODO_INPUT = "newTodoInput";

interface TodoFormProps {
  onAdd: (name: string) => void
  className?: string;
}
export const TodoForm = ({ onAdd, className }: TodoFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    const input = form.elements.namedItem(NEW_TODO_INPUT) as HTMLInputElement;
    onAdd(input.value)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className={cn(className)}>
      <Input name={NEW_TODO_INPUT} type="text" placeholder="Enter todo name" />
      <Button type="submit" className="ml-2">Add Todo</Button>
    </form>
  )
}