import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'

// TEST IMPORTS
import { signup, logout, login } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)

  // TESTS
  window.store = store
  window.signup = signup
  window.logout = logout
  window.login = login
})
