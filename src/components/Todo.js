import React from 'react'
import PropTypes from 'prop-types'
import CopyButtonTodo from '../containers/CopyButtonTodo'


const Todo = ({ onClick, completed, text, id }) => (
  <React.Fragment>
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
  <CopyButtonTodo text = {text}
                  id = {id + Math.random()}
  />
  </React.Fragment>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
