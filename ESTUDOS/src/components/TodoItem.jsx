function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-item__check"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span
        className="todo-item__label"
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button
        type="button"
        className="todo-item__delete"
        onClick={() => onRemove(todo.id)}
      >
        Excluir
      </button>
    </li>
  );
}

export default TodoItem;
