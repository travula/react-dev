import { useState } from "react";
import AddTodo from "./addTodo.js";
import TaskList from "./taskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  function handleChangeTodo(nextTodo) {
    const fTodos = todos.filter((t) => t.id != nextTodo.id);
    let insertAt = nextTodo.id;
    //console.log("insertion at: " + insertAt);
    setTodos([
      ...fTodos.slice(0, insertAt),
      nextTodo,
      ...fTodos.slice(insertAt),
    ]);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id != todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
