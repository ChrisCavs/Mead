import React from 'react'
import { Provider } from 'react-redux'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <h1>hey</h1>
    </Provider>
  )
}

export default Root