import React from 'react'

class ModalSignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      bio: '',
      avatar: null
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
    const formData = new FormData()
    formData.append('user[email]', this.state.email)
    formData.append('user[password]', this.state.password)
    formData.append('user[name]', this.state.name)
    formData.append('user[bio]', this.state.bio)
    formData.append('user[avatar]', this.state.avatar)

    this.props.submitAction(formData)
  }

  handleFile (e) {
    this.setState({ avatar: e.currentTarget.files[0]})
  }

  render () {
    const errors = this.props.errors.map((er, i) => <li key={i}>{er}</li>)
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

        <label htmlFor="avatar">Avatar</label>
        <input id="avatar"
          type="file"
          onChange={this.handleFile.bind(this)} />

        <button className="modal-form-button">
          {this.props.title}
        </button>
      </form>
    )
  }
}

export default ModalSignupForm
