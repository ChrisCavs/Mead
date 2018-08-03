import React from 'react'

class ModalSignupForm extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    bio: '',
    avatar: null
  }

  update = type => event => {
    this.setState({ [type]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('user[email]', this.state.email)
    formData.append('user[password]', this.state.password)
    formData.append('user[name]', this.state.name)
    formData.append('user[bio]', this.state.bio)
    if (this.state.avatar) {
      formData.append('user[avatar]', this.state.avatar)
    }

    this.props.submitAction(formData)
  }

  handleSwitch = event => {
    this.props.revealModalLogin()
  }

  handleFile = event => {
    const file = event.currentTarget.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({ avatar: file, avatarUrl: fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  render () {
    let preview
    if (this.state.avatarUrl) {
      preview = <img className="modal-preview" src={this.state.avatarUrl} />
    } else {
      preview = null
    }

    const errors = this.props.errors.map((er, i) => <li key={i}>{er}</li>)

    return (
      <form
        className="modal-form"
        onSubmit={this.handleSubmit}>

        <ul className="modal-errors">
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

        {preview}

        <button className="modal-form-button">
          {this.props.title}
        </button>

        <div className="modal-form-button-switch">
          Already have an account?
          <span 
            onClick={this.handleSwitch}
            className="guest-login">
            Sign in.
          </span>
        </div>
      </form>
    )
  }
}

export default ModalSignupForm
