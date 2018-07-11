import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import CreateStoryContainer from './story/create_story_container'
import Homepage from './homepage'

const MainPage = () => {
  return (
    <div className="mainpage">
      <Switch>
        <ProtectedRoute path='/story/new' component={CreateStoryContainer} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  )
}

export default MainPage