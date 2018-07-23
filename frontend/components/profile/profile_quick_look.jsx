import React from 'react'
import { Link } from 'react-router-dom'
import QuickLook from './quick_look'

class ProfileQuickLook extends React.Component {

  state = {
    reveal: false,
    classes: 'popular-story-author'
  }

  timedReveal = () => {
    this.timeout = setTimeout(this.revealPop, 300)
  }

  revealPop = () => {
    this.setState({ 
      reveal: true,
      classes: 'popular-story-author underline' 
    })
  }

  cancelEarly = () => {
    clearTimeout(this.timeout)
  }
  
  hidePop = () => {
    this.setState({ 
      reveal: false,
      classes: 'popular-story-author' 
    })
  }

  render () {
    let quickLook
    const author = this.props.author
    const authorUrl = `/users/${author.id}`

    if (this.state.reveal) {
      quickLook = <QuickLook authorId={author.id} hidePop={this.hidePop} />
    }

    return (
      <div className="profile-quick-look">
        <Link to={authorUrl}>
          <h1 className={this.state.classes}
            onMouseEnter={this.timedReveal}
            onMouseLeave={this.cancelEarly} >
            {author.name}
          </h1>
        </Link>
        {quickLook}
      </div>
    )
  }
}

export default ProfileQuickLook