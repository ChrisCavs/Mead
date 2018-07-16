import React from 'react'
import MainIndexItemData from '../main/main_index_item_data'
import { Link } from 'react-router-dom'
import FollowButton from '../profile/follow_button'

const UserItem = ({ user, story }) => {

  const userUrl = `/users/${user.id}`
  
  return (
    <div className="user-item">
      <img className="user-item-image" src={user.avatar} />

      <div className="user-item-details">
        <div className="user-item-details-container">
          <Link 
            className="story-form-author-name"
            to={userUrl} >
            {user.name}
          </Link>
          <FollowButton user={user} />
        </div>
        <h1 className="user-item-details-bio">{user.bio}</h1>
        <MainIndexItemData
          date={story.date}
          time_estimate={story.time_estimate} />
      </div>
    </div>
  )
}

export default UserItem