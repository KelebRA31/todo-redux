import React, {
  createContext, useState, useEffect, useContext, useMemo,
} from 'react';

export const TodosContext = createContext();

export default function TodosContextProvider({ children }) {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/todos')
      .then((res) => res.json())
      .then((res) => setTodolist(res));
  }, []);

  return (
    <TodosContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        todolist, setTodolist,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
