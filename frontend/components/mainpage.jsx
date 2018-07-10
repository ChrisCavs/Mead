import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import CreateStoryContainer from './story/create_story_container'

const MainPage = () => {
  return (
    <div className="mainpage">
      <Switch>
        <ProtectedRoute path='/story/new' component={CreateStoryContainer} />
      </Switch>
    </div>
  )
}

export default MainPage