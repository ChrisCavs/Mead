import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'

const store = configureStore()
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})


// TESTS
import { signup, logout, login } from './actions/session_actions'
window.store = store
window.signup = signup
window.logout = logout
window.login = login