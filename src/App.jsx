import TodoList from "/src/componets/TodoList"
import Todoinput from "/src/componets/TodoInput"
import { useState } from "react"

function App() {
const [todos, setTodos] = useState([])


function handleAddTodos(newTodo) {
  const newTodoList = [...todos, newTodo]
  setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  setTodos(newTodoList)
}
function handleEditTodo(index){

}

  return (
    <>
      <Todoinput handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
