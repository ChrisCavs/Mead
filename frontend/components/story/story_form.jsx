import React from 'react'

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
    this.props.submitAction(this.state)
  }

  render () {
    // const errors = this.props.errors.map(er => <li>{er}</li>)
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
          onChange={this.handleFile.bind(this)}
          value={this.state.image_url} />

        <button className="story-form-button">
          {this.props.type}
        </button>
      </form>
    )
  }
}

export default StoryForm
