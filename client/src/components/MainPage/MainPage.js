import React from 'react';
import TodosContextProvider from '../../context/TodosContextProvider';
import TodoList from '../Todolist/Todolist';

function MainPage() {
  return (
    <div>
      <TodosContextProvider>
        <TodoList path="/" />
      </TodosContextProvider>
    </div>
  );
}

export default MainPage;
