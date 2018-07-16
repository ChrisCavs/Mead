import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import { authorTopStories } from '../../reducers/selectors'

class QuickLook extends React.Component {

  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount () {
    this.props.fetchUser(this.props.authorId).then(
      success => this.setState({ loading: false })
    )
  }

  render () {

    if (this.state.loading) {
      return <div></div>
    }

    return (
      <div 
        className="quick-look"
        onMouseLeave={this.props.hidePop}>
        hello
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const author = state.entities.users[ownProps.authorId]
  const topStories = authorTopStories(state, author)
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(QuickLook)