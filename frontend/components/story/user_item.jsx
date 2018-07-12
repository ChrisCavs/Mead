import React from 'react'
import MainIndexItemData from '../main/main_index_item_data'

class UserItem extends React.Component {

  handleFollow () {
    if (this.props.user.currentUserFollows) {
      this.props.unFollowUser(this.props.user.id)
    } else {
      this.props.followUser(this.props.user.id)
    }
  }

  render () {
    const user = this.props.user
    const story = this.props.story

    let followText = 'Follow'
    let followClasses = 'follow-button'
  
    if (this.props.user.currentUserFollows) {
      followText = 'Followed'
      followClasses = 'follow-button followed'
    }
    
    return (
      <div className="user-item">
        <img className="user-item-image" src={user.avatar} />
  
        <div className="user-item-details">
          <div className="user-item-details-container">
            <h1 className="story-form-author-name">
              {user.name}
            </h1>
            <button 
              className={followClasses}
              onClick={this.handleFollow.bind(this)}>
              {followText}
            </button>
          </div>
          <MainIndexItemData
            date={story.date}
            time_estimate={story.time_estimate} />
        </div>
      </div>
    )
  }
}

export default UserItem