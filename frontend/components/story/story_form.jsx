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
    return (
      <form className="story-form" onSubmit={this.handleSubmit}>

        <label htmlFor="title">Title</label>
        <input id="title"
          type="text"
          onChange={this.update('title')}
          value={this.state.title} />

        <label htmlFor="subtitle">Subtitle</label>
        <input id="subtitle"
          type="text"
          onChange={this.update('subtitle')}
          value={this.state.subtitle} />

        <label htmlFor="body">Body</label>
        <input id="body"
          type="text"
          onChange={this.update('body')}
          value={this.state.body} />

        <label htmlFor="image_url">Image</label>
        <input id="image_url"
          type="file"
          onChange={this.handleFile.bind(this)} />

        {preview}

        <button className="story-form-button">
          {this.props.type}
        </button>
      </form>
    )
  }
}

export default withRouter(StoryForm)
