import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';


class TodoList extends React.Component {

  constructor (props) {
    super(props);

    this.props = props;
  }

  componentDidMount() {
    // debugger;
    this.props.fetchTodos();
  }

  render () {
    const todoListItems = this.props.todos.map((todo, idx) => (
        <TodoListItem key={idx} todo={todo} />
    ));
    return (
      <div>
        <TodoForm receiveTodo={receiveTodo}/>
        <h3>Todo List goes here!</h3>
        {todoListItems}
      </div>
    );
  }
}



// const TodoList = ({todos, receiveTodo}) => {
//   const todoListItems = todos.map((todo, idx) => (
//     <TodoListItem key={idx} todo={todo} />
//   ));
//   return (
//     <div>
//       <TodoForm receiveTodo={receiveTodo}/>
//       <h3>Todo List goes here!</h3>
//       {todoListItems}
//     </div>
//   );
// };

export default TodoList;
