import { connect } from 'react-redux'
import ClapButton from './clap_button'

const mapStateToProps = (state, ownProps) => {
  const totalClaps = ownProps.story.totalClaps
  const currentUserClaps = ownProps.story.currentUserClaps

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