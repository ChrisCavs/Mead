import React from 'react'
import { authoredStoriesForUser } from '../../reducers/selectors'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import ProfileContent from './profile_content'
import MainIndex from '../main/main_index'

class ProfileShow extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id)
  }

  render () {
    if (!this.props.user || !this.props.userStories) {
      return <div></div>
    }

    return (
      <div className="profile-show">
        <ProfileContent user={this.props.user} />
        <MainIndex stories={this.props.userStories} editButton={true} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const user = state.entities.users[id]
  let userStories

  if (user) {
    userStories = authoredStoriesForUser(state, user)
  }

  return {
    user,
    userStories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow)