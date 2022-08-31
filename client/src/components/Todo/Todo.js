/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react';
import { TodosContext } from '../../context/TodosContextProvider';

export default function Todo({ todo }) {
  const [input, setInput] = useState(todo.title);
  const [title, setTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { setTodolist } = useContext(TodosContext);

  useEffect(() => {
    setIsChecked(todo.status);
  }, []);

  const changeHandler = async (e) => {
    const response = await fetch(`http://localhost:3001/api/todos/checked/${todo.id}`, {
      method: 'PATCH',
    });
    if (response.ok) {
      setIsChecked(!isChecked);
    }
  };
  const editHandler = () => {
    setIsEdit(true);
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const saveHandler = async (e) => {
    console.log(JSON.stringify(input));
    const response = await fetch(`http://localhost:3001/api/todos/${todo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input }),
    });
    if (response.ok) {
      setTitle(input);
      setIsEdit(false);
    }
  };

  const deleteHandler = async (e) => {
    const response = await fetch(`http://localhost:3001/api/todos/${todo.id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setTodolist((prev) => prev.filter((el) => el.id !== todo.id));
    }
  };

  return (
    <div className={isChecked ? 'li-container checked' : 'li-container'}>
      <div className="li_div gg">
        <input onChange={changeHandler} type="checkbox" checked={isChecked} />
        {!isEdit && <label className="li_input">{title}</label> }
        {isEdit && <input onChange={inputHandler} value={input} />}
      </div>
      <div className="li_btns gg">
        {!isChecked && (!isEdit && <button onClick={editHandler} className="btn btn-dark" type="button">Edit</button>)}
        {!isChecked && (isEdit && <button onClick={saveHandler} className="btn btn-dark" type="button">Save</button>)}
        {!isChecked && <button onClick={deleteHandler} className="btn btn-danger" type="button">Delete</button>}
      </div>
    </div>
  );
}
