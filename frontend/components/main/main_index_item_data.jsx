import React from 'react'

const MainIndexItemData = ({ date, time_estimate }) => {
  return (
    <div className="item-data">
      <h1 className="item-data-date">{date}</h1>
      <span className="item-data-dot"></span>
      <h1 className="item-data-time">{time_estimate}</h1>
    </div>
  )
}

export default MainIndexItemData