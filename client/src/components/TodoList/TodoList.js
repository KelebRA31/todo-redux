import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext/TodoContextProvider';

function TodoList() {
  const { inputValue, setInputValue } = useContext(TodoContext);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <ul className="list-group">
        {inputValue?.map((elem, index) => (
          <li className="list-group-item" key={elem.id}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              id="Checkbox"
              value={elem.state}
              onClick={() => setInputValue((prev) => prev.map((el, i) => {
                if (index === i) {
                  return { ...el, state: !el.state };
                }
                return el;
              }))}
              // checked={handleClick}
            />
            <label className="form-check-label" htmlFor="firstCheckbox" style={elem.state ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{elem.name}</label>
            <button type="button" className="btn btn-light" onClick={() => setInputValue(inputValue.filter((el, i) => i !== index))}>Изменить</button>
            <button type="button" className="btn btn-danger" onClick={() => setInputValue(inputValue.filter((el, i) => i !== index))}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
