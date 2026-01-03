import { cn } from '@portfolio/ui'
import { useState } from 'react'
import { Todo } from '../types'
import { TodoFooter } from './todo-footer'
import { TodoForm } from './todo-form'
import { TodoHeader } from './todo-header'
import { TodoList } from './todo-list'
import { TodoListEmpty } from './todo-list-empty'
import { TodoListItem } from './todo-list-item'


interface TodoListManagerProps {
  className?: string;
  title?: string;
  initialTodos?: Todo[];
}
export const TodoListManager = ({ className, initialTodos=[], title }: TodoListManagerProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const handleAddTodo = (name: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      name,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const handleCompleteTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
    setTodos(updatedTodos)
  }

  const handleIncompleteTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: false } : todo
    )
    setTodos(updatedTodos)
  }

  const handleChangeTodoName = (todoToChange: Todo, newName: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoToChange.id ? { ...todo, name: newName } : todo
    )
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const count = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className={cn('flex flex-col w-100 border border-black p-4 items-center', className)}>
      <TodoHeader title={title} />
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todoList={todos} empty={<TodoListEmpty />} className='mt-4'>
        {(todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onComplete={handleCompleteTodo}
            onIncomplete={handleIncompleteTodo}
            onDelete={handleDeleteTodo}
            onChangeName={handleChangeTodoName}
          />
        )}
      </TodoList>
      <hr className="my-4 border-t border-gray-300 w-full" />
      <TodoFooter
        totalCount={count}
        completedCount={completedCount}
        incompletedCount={count - completedCount}
      />
    </div>
  )
}
