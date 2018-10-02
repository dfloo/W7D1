import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {receiveTodos} from './actions/todo_actions';
import {receiveTodo} from './actions/todo_actions';
import allTodos from './reducers/selectors';
import fetchTodos from './util/todo_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;

  ReactDOM.render(<Root store={ store }/>, root);
});
