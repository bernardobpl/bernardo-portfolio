import { useState } from 'react'
import { Button } from '@portfolio/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Todo App</h1>
      <p>Count: {count}</p>
      <Button />
    </div>
  )
}

export default App
