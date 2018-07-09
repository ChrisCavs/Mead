import React from 'react'

class ModalSignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      bio: '',
      image_url: ''
    }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update (type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.submitAction(this.state)
  }

  render () {
    const errors = this.props.errors.map(er => <li>{er}</li>)
    return (
      <form
        className="modal-form"
        onSubmit={this.handleSubmit}>

        <ul>
          {errors}
        </ul>

        <label htmlFor="email">Email</label>
        <input id="email"
          type="text"
          onChange={this.update('email')}
          value={this.state.email} />

        <label htmlFor="password">Password</label>
        <input id="password"
          type="password"
          onChange={this.update('password')}
          value={this.state.password} />

        <label htmlFor="name">Name</label>
        <input id="name"
          type="text"
          onChange={this.update('name')}
          value={this.state.name} />

        <label htmlFor="bio">Bio</label>
        <input id="bio"
          type="text"
          onChange={this.update('bio')}
          value={this.state.bio} />

        <label htmlFor="image_url">Image url</label>
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

export default ModalSignupForm
