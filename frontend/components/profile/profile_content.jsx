import React from 'react'

const ProfileContent = ({ user }) => {
  return (
    <div className="profile-content">
      <div className="profile-content-left">
        <h1 className="profile-content-name">{user.name}</h1>
        <h2 className="profile-content-userSince">Member since {user.userSince}</h2>
        <div className="flex">
          <h1 className="profile-content-follow-info">{user.numFollowedUsers} Follows</h1>
          <h1 className="profile-content-follow-info">{user.numFollowers} Followers</h1>
        </div>
      </div>
      <div className="profile-content-right">
        <img src={user.avatar} />
      </div>
    </div>
  )
}

export default ProfileContent