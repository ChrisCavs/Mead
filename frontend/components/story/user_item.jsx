import React from 'react'
import MainIndexItemData from '../main/main_index_item_data'

const UserItem = ({ user, story }) => {
  debugger
  return (
    <div className="user-item">
      <img className="user-item-image" src={user.avatar} />

      <div className="user-item-details">
        <div className="user-item-details-container">
          <h1 className="story-form-author-name">
            {user.name}
          </h1>
          <button className="follow-button">Follow</button>
        </div>
        <MainIndexItemData
          date={story.date}
          time_estimate={story.time_estimate} />
      </div>
    </div>
  )
}

export default UserItem