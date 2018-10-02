import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>
        {allTodos(props).map((todo) => <li>{todo}</li>)}
      </ul>
    </div>
  );
};

export default TodoList;
