import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import CreateStoryContainer from './story/create_story_container'
import Homepage from './homepage'
import Show from './story/show'
import ProfileShow from './profile/profile_show'

const MainPage = () => {
  return (
    <div className="mainpage">
      <Switch>
        <ProtectedRoute path='/stories/new' component={CreateStoryContainer} />
        <ProtectedRoute path='/users/:id' component={ProfileShow} />
        <ProtectedRoute path='/stories/:id' component={Show} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  )
}

export default MainPage