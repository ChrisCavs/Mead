import React from 'react'
import { Link } from 'react-router-dom'
import QuickLook from './quick_look'

class ProfileQuickLook extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      reveal: false
    }

    this.revealPop = this.revealPop.bind(this)
    this.hidePop = this.hidePop.bind(this)
  }

  revealPop () {
    this.setState({ reveal: true })
  }
  
  hidePop () {
    this.setState({ reveal: false })
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
          <h1 className="popular-story-author"
            onMouseEnter={this.revealPop} >
            {author.name}
          </h1>
        </Link>
        {quickLook}
      </div>
    )
  }
}

export default ProfileQuickLook