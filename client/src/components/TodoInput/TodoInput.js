import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext/TodoContextProvider';

function TodoInput() {
  const { setInputValue, input, setInput } = useContext(TodoContext);
  // const [input, setInput] = useState({
  //   name: '',
  //   state: false,
  // });
  const inputHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const addFunc = () => {
    setInputValue((prev) => [...prev, input]);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="To Do"
        aria-label="To Do"
        aria-describedby="button-addon2"
        onChange={inputHandler}
        value={input.name}
        name="name"
      />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addFunc}>Добавить</button>
    </div>
  );
}

export default TodoInput;
