const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_COMPLETED' :
      console.log('delete');
      return state.filter(t => !t.completed)

     case 'COPY_TODO' :
       console.log('copy');
       return [
        ...state,
        {id: action.id + 1,
        text: action.text,
        completed:false}
      ]
    default:
      return state;
  }
}

export default todos
