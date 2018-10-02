const fetchTodos = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'GET'
  });
};

export default fetchTodos;
