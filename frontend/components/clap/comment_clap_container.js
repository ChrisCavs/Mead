import { connect } from 'react-redux'
import ClapButton from './clap_button'

const mapStateToProps = (state, ownProps) => {
  const totalClaps = ownProps.comment.totalClaps
  const currentUserClaps = ownProps.comment.currentUserClaps
  const 
  return {
    totalClaps,
    currentUserClaps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createClap: (data) => dispatch(createClap(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClapButton)