import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = Object.assign({},state);

  switch(action.type) {
    case RECEIVE_TODOS:
      for (var i = 0; i < action.todos.length; i++) {
          newState = Object.assign(newState, state, {[action.todos[i].id]: action.todos[i]});
      }
      return newState;
      // return action.todos.reduce((newState, el) => newState = Object.assign(newState, {[el.id]: el}));
    case RECEIVE_TODO:
      return Object.assign({}, state, {[action.todo.id]: action.todo});
    default:
      return state;
  }
};

export default todosReducer;
