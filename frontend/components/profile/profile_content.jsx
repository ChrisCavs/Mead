import React from 'react'
import FollowButton from './follow_button'

const ProfileContent = ({ user, currentMatch }) => {

  let followButton
  if (!currentMatch) {
    followButton = <FollowButton user={user} addClasses="profile-view" />
  }

  return (
    <div className="profile-content">
      <div className="profile-content-left">
        <h1 className="profile-content-name">{user.name}</h1>
        <h2 className="profile-content-userSince">Member since {user.userSince}</h2>
        <div className="flex">
          <h1 className="profile-content-follow-info">{user.numFollowedUsers} Follows</h1>
          <h1 className="profile-content-follow-info">{user.numFollowers} Followers</h1>
        </div>
        {followButton}
      </div>
      <div className="profile-content-right">
        <img src={user.avatar} />
      </div>
    </div>
  )
}

export default ProfileContent