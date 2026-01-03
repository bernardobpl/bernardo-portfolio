import { TodoListManager } from "./components/todo-list-manager"
import { Window } from "@portfolio/ui"

function App() {
  return (
    <div>
      <Window defaultPosition={{ x:0, y:0 }}>
        <TodoListManager className="bg-yellow-300" title="Trip"/>
      </Window>
      <Window defaultPosition={{ x:100, y:100 }}>
        <TodoListManager className="bg-green-300" title="House chores"/>
      </Window>
      <Window defaultPosition={{ x:200, y:200 }}>
        <TodoListManager className="bg-purple-300" title="Work"/>
      </Window>
    </div>
  )
}

export default App
