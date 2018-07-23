import React from 'react'

class LoadingComponent extends React.Component {

  state = { val: '' }

  chars = ['W', 'h', 'a', 't', '\'', 's',
          ' ', 'y', 'o', 'u', 'r',
          ' ', 's', 't', 'o', 'r', 'y', '?']

  timestamp = Date.now()

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  componentDidMount () {
    this.timeout = setTimeout(this.step, 400)
  }

  step = () => {
    requestAnimationFrame(() => {
      this.controller(this.timestamp)
    })
  }

  controller = timestamp => {
    const newTime = Date.now()
    if ((newTime - timestamp) > 100) {
      this.timestamp = newTime
      this.draw()
    } else {
      this.step()
    }
  }

  draw = () => {
    if (this.chars.length > 0) {
      const char = this.chars.shift()
      const val = this.state.val + char

      this.setState({ val }, () => {
        requestAnimationFrame(this.step)
      })
    } else {      
      this.timeout = setTimeout(this.reset, 1000)
    }
  }

  reset = () => {
    this.chars = this.state.val.split('')
    this.setState({
      val: ''
    }, () => {
      this.step()
    })
  }

  render () {
    return (
      <div className="loading-component">
        <input
          type='text'
          value={this.state.val}
          readOnly="readonly"
          autoFocus />
      </div>
    )
  }
}

export default LoadingComponent