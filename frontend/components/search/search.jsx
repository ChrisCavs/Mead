import React from 'react'
import { connect } from 'react-redux'
import { fetchAllUsersAndStories } from '../../actions/search_actions'
import SearchResults from './search_results'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      loading: true,
      inputClasses: 'search-input',
      iconClasses: 'search-icon',
      query: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.update = this.update.bind(this)
  }

  handleClick (e) {
    this.setState({
      inputClasses: 'search-input active',
      iconClasses: 'search-icon hide-icon'
    })

    this.props.fetchAllUsersAndStories().then(
      success => this.setState({ loading: false })
    )

    window.onClick = () => {
      this.setState({
        loading: true,
        inputClasses: 'search-input',
        iconClasses: 'search-icon',
        users,
        stories
      })
    }
  }

  update (e) {
    this.setState({ query: e.target.value })
  }

  render () {
    let searchResults = <SearchResults query={this.state.query} />
    
    if (this.state.loading) {
      searchResults = <div></div>
    }

    return (
      <div className="search-container">
        <img 
          className={this.state.iconClasses}
          onClick={this.handleClick}
          src={window.search} />
        
        <input 
          type='text'
          className={this.state.inputClasses}
          onChange={this.update}
          value={this.state.query}
          autoFocus />

        {searchResults}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsersAndStories: () => dispatch(fetchAllUsersAndStories())
  }
}

export default connect (
  null,
  mapDispatchToProps
)(Search)