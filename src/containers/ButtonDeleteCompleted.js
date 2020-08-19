import { connect } from 'react-redux'
import ButtonDelete from '../components/ButtonDelete'
import { deleteCompleted } from '../actions'

  
  const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(deleteCompleted)
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(ButtonDelete)