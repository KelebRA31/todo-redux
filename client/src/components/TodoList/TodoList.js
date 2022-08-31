import React, { useContext } from 'react';
import { TodosContext } from '../../context/TodosContextProvider';
import AddTodo from '../AddTodo/AddTodo';
import Spinner from '../Spinner/Spinner';
import Todo from '../Todo/Todo';

export default function Todolist() {
  const { todolist } = useContext(TodosContext);

  return (
    <div>
      <AddTodo />
      {!todolist.length ? (
        <Spinner />

      ) : (
        <div className="row">
          <ul className="list-group">

            {todolist?.map((todo) => (<li key={todo.id} className="list-group-item li_item"><Todo todo={todo} /></li>))}
          </ul>
        </div>
      )}

    </div>
  );
}
