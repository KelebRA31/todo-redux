import React from 'react';
import TodoContextProvider from '../context/TodoContext/TodoContextProvider';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

function Main() {
  return (
    <div>
      <TodoContextProvider>
        <TodoInput setInputValue={setInputValue} />
        <TodoList inputValue={inputValue} setInputValue={setInputValue} />
      </TodoContextProvider>
    </div>
  );
}

export default Main;
