import React from 'react'
import { withRouter } from 'react-router-dom'

class StoryForm extends React.Component {

  state = Object.assign({}, this.props.story, {errors: []})

  update = name => event => {
    this.setState({ [name]: event.target.value })
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps.story)
  }

  inputsEmpty = () => {
    return Object.values(this.state).includes('')
  }

  handleSubmit = event => {
    if (this.inputsEmpty()) {
      this.setState({ errors: ["Please fill in all fields"]})
      return
    }

    event.preventDefault()
    let redirectUrl = '/'

    const formData = new FormData()
    formData.append('story[title]', this.state.title)
    formData.append('story[subtitle]', this.state.subtitle)
    formData.append('story[body]', this.state.body)
    formData.append('story[all_tags]', this.state.tags)

    if (this.state.image) {
      formData.append('story[image]', this.state.image)
    }

    if (this.state.id) {
      formData.append('story[id]', this.state.id)
      redirectUrl = `/stories/${this.state.id}`
    }

    const copyState = this.state
    
    this.props.submitAction(formData).then(
      success => this.props.history.push(redirectUrl),
      failure => this.setState(copyState)
    )
  }

  handleFile = event => {
    const file = event.currentTarget.files[0]
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
      this.setState({ image: file, imageUrl: fileReader.result })
    }

    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  render () {
    const errors = this.props.errors
      .concat(this.state.errors)
      .map((er,i) => <li key={i}>{er}</li>)

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

        <ul className="story-form-errors">
          {errors}
        </ul>

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
            className="story-form-tags"
            type='text'
            onChange={this.update('tags')}
            value={this.state.tags}
            placeholder="Comma seperated tags, such as 'art, history'" />

          <p className="story-form-label">Select a cover image:</p>
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
