import React from 'react'

class StoryForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      subtitle: '',
      body: '',
      image_url: ''
    }
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

  componentDidMount () {
    if (this.props.title === 'edit') {
      this.setState({
        title: this.props.story.title,
        subtitle: this.props.story.subtitle,
        body: this.props.story.body,
        image_url: this.props.story.image_url,
      })
    }
  }

  render () {
    const errors = this.props.errors.map(er => <li>{er}</li>)

    return (
      <form className="story-form" onSubmit={this.handleSubmit}>
        <ul>
          {errors}
        </ul>

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

        <label htmlFor="image_url">Image Url</label>
        <input id="image_url"
          type="text"
          onChange={this.update('image_url')}
          value={this.state.image_url} />

        <button className="modal-form-button">
          {this.props.title}
        </button>
      </form>
    )
  }
}

export default StoryForm
