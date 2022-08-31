import React, { useContext } from 'react';
import { TodosContext } from '../../context/TodosContextProvider';

export default function AddTodo() {
  const { setTodolist } = useContext(TodosContext);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const response = await fetch('http://localhost:3001/api/todos', options);
    const data = await response.json();
    if (data) {
      setTodolist((prev) => [...prev, data]);
    }
  };

  return (
    <div>
      <form className="form-group flex-fill mb-2 form-class" onSubmit={SubmitHandler}>
        <input id="todo-input" type="text" className="form-control" name="title" placeholder="Введите значение" />
        <button className="btn btn-primary mb-2 ml-2" type="submit">Add todo</button>
      </form>
    </div>
  );
}
