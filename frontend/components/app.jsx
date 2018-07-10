import React from 'react'
import HeaderContainer from './header/header_container'
import ModalContainer from './modal/modal_container'
import MainPage from './mainpage'

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <MainPage />
      <ModalContainer />
    </div>
  )
}

export default App
