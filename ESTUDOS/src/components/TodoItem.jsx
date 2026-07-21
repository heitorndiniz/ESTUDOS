function TodoItem() {
  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-item__check" />
      <span className="todo-item__label">Tarefa de exemplo</span>
      <button type="button" className="todo-item__delete">
        Excluir
      </button>
    </li>
  );
}

export default TodoItem;
