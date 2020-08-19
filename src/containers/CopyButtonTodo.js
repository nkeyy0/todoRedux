import { connect } from 'react-redux'
import CopyButton from '../components/CopyButton'
import { copyTodo } from '../actions'


const mapStateToProps = state => ({
    todos: state.todos
  })

const mapDispatchToProps = dispatch => ({
    onCopy: (id, text) => dispatch(copyTodo(id, text))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CopyButton)