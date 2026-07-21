import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo__input"
        placeholder="Nova tarefa..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className="add-todo__button">
        Adicionar
      </button>
    </form>
  );
}

export default AddTodo;
