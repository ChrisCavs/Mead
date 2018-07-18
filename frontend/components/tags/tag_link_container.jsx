import React from 'react'
import TagLink from './tag_link'

const TagLinkContainer = ({tags, containerClasses}) => {
  
  const tagLinks = tags.map((tag, i) => {
    return <TagLink key={i} tag={tag} />
  })

  return (
    <div className={containerClasses}>
      <h1 className="main-index-title">Common Tags</h1>
      <div className="tag-links-flex">
        {tagLinks}
      </div>
    </div>
  )
}

export default TagLinkContainer