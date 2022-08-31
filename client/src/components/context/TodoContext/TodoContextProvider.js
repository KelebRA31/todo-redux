import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [inputValue, setInputValue] = useState([{
    name: '',
    state: false,
  }]);
  const [input, setInput] = useState({
    name: '',
    state: false,
  });
  return (
    <TodoContext.Provider
      value={{
        inputValue,
        setInputValue,
        input,
        setInput,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
