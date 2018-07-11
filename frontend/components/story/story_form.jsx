import React from 'react'
import { withRouter } from 'react-router-dom'

class StoryForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props.story

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  update (name) {
    return e => {
      this.setState({ [name]: e.target.value })
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('story[title]', this.state.title)
    formData.append('story[subtitle]', this.state.subtitle)
    formData.append('story[body]', this.state.body)
    if (this.state.image) {
      formData.append('story[image]', this.state.image)
    }
    
    this.props.submitAction(formData).then(
      success => this.props.history.push('/'),
      failure => console.log(failure)
    )
  }

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({ image: file, imageUrl: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  render () {
    // const errors = this.props.errors.map(er => <li>{er}</li>)
    let preview
    if (this.state.imageUrl) {
      preview = <img className="story-preview" src={this.state.imageUrl} />
    } else {
      preview = null
    }
    const currentUser = this.props.currentUser

    return (
      <div className="story-form-container">
        <div className="story-form-author-container">
          <img className="header-image" src={currentUser.avatar} />
          <div className="story-form-author-detail">
            <p className="story-form-author-name">{currentUser.name}</p>
            <p className="story-form-author-draft">Draft</p>
          </div>
        </div>
        <form className="story-form" onSubmit={this.handleSubmit}>

          <input
            className="story-form-title"
            type="text"
            onChange={this.update('title')}
            value={this.state.title}
            placeholder="Title" />

          <input
            className="story-form-subtitle"
            type="text"
            onChange={this.update('subtitle')}
            value={this.state.subtitle}
            placeholder="Subtitle" />

          <textarea
            className="story-form-textarea"
            onChange={this.update('body')}
            placeholder="Tell your story..."
            value={this.state.body}
            autoFocus >
          </textarea>

          <input
            type="file"
            onChange={this.handleFile.bind(this)} />

          {preview}

          <button className="story-form-button modal-form-button">
            {this.props.type}
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(StoryForm)
