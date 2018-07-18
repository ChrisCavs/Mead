import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

    let stories = {}
    Object.values(window.currentUser.stories).forEach(story => {
      stories[story.id] = story
    })

    const preloadedState = {
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user },
        stories
      },
      session: { id: window.currentUser.user.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})
