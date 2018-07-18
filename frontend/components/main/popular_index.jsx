import React from 'react'
import PopularIndexItem from './popular_index_item'

class PopularIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = { classes: this.props.higherClass }

    this.popular = React.createRef()

    this.checkPosition = this.checkPosition.bind(this)
  }

  componentDidMount () {
    if (this.props.higherClass === 'right-popular') {
      window.addEventListener('scroll', this.checkPosition)
    }
  }

  componentWillUnmount () {
    if (this.props.higherClass === 'right-popular') {
      window.removeEventListener('scroll', this.checkPosition)
    }
  }

  checkPosition (e) {
    const elPos = this.popular.current.getBoundingClientRect().top
    const winPos = window.scrollY || window.pageYOffset

    if (winPos > elPos + 240) {
      this.setState({ classes: this.props.higherClass + ' fixed'})
    } else if (winPos <= elPos + 240) {
      this.setState({ classes: this.props.higherClass})
    }
  }

  render () {
    const stories = this.props.stories    
    const mappedStories = stories.map((story, i) => {
      return <PopularIndexItem key={i} num={i} story={story} />
    })

    return (
      <div ref={this.popular} className={"popular-index " + this.state.classes}>
        <h1 className="main-index-title">
          Popular on Mead
      </h1>

        {mappedStories}
      </div>
    )
  }
}

export default PopularIndex