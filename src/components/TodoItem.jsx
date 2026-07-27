import "./TodoItem.css";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-item__check"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-item__label" data-done={todo.done}>
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
