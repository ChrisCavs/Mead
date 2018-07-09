import React from 'react'
import { Route } from 'react-router-dom'
import HeaderContainer from './header/header_container'
import ModalContainer from './modal/modal_container'
import CreateStoryContainer from './story/create_story_container'

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path='/story/new' component={CreateStoryContainer} />
      <ModalContainer />
    </div>
  )
}

export default App
