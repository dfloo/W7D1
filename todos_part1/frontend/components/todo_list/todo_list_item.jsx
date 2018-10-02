import React from 'react';

const TodoListItem = ({ todo }) => (
	<div className="list-item">
		<ul>
      <li>
			     {todo.title}
      </li>
		</ul>
	</div>
);

export default TodoListItem;
