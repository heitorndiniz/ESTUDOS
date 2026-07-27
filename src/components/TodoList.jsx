import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, onToggle, onRemove }) {
  if (todos.length === 0) {
    return <p className="todo-list__empty">Nenhuma tarefa ainda.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
