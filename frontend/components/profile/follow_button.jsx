import React from 'react'
import { connect } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/follow_actions'

class FollowButton extends React.Component {

  handleFollow() {
    if (this.props.user.currentUserFollows) {
      this.props.unFollowUser(this.props.user.id)
    } else {
      this.props.followUser(this.props.user.id)
    }
  }

  render () {
    let followText = 'Follow'
    let followClasses = 'follow-button'

    if (this.props.user.currentUserFollows) {
      followText = 'Followed'
      followClasses = 'follow-button followed'
    }

    return (
      <button
        className={followClasses}
        onClick={this.handleFollow.bind(this)}>
        {followText}
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    followUser: id => dispatch(followUser(id)),
    unFollowUser: id => dispatch(unFollowUser(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FollowButton)