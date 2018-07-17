import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import { authorTopStories } from '../../reducers/selectors'

class QuickLook extends React.Component {

  constructor (props) {
    super(props)
    this.state = { 
      loading: true,
      classes: 'quick-look show'
    }

    this.handleUnmounting = this.handleUnmounting.bind(this)
  }

  componentDidMount () {
    this.props.fetchUser(this.props.authorId).then(
      success => this.setState({ loading: false })
    )
  }

  handleUnmounting () {
    this.setState({ classes: 'quick-look' }, () => {
      setTimeout(this.props.hidePop, 200)
    })
  }

  render () {

    if (this.state.loading) {
      return <div className="quick-look"></div>
    }

    return (
      <div 
        className={this.state.classes}
        onMouseLeave={this.handleUnmounting}>
        
        <div className="quick-look-content">
          hello
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const author = state.entities.users[ownProps.authorId]
  const recentStories = authorRecentStories(state, author)
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