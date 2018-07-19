import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import CreateStoryContainer from './story/create_story_container'
import EditStoryContainer from './story/edit_story_container'
import Homepage from './homepage'
import Show from './story/show'
import ProfileShow from './profile/profile_show'
import Search from './search/search'
import TagShow from './tags/tag_show'
import BookmarkShow from './bookmark/bookmark_show'

const MainPage = () => {
  return (
    <div className="mainpage">
      <Switch>
        <ProtectedRoute path='/stories/new' component={CreateStoryContainer} />
        <ProtectedRoute path='/stories/:id/edit' component={EditStoryContainer} />
        <ProtectedRoute path='/users/:id' component={ProfileShow} />
        <ProtectedRoute path='/stories/:id' component={Show} />
        <ProtectedRoute path='/search' component={Search} />
        <ProtectedRoute path='/tags/:name' component={TagShow} />
        <ProtectedRoute path='/bookmarks' component={BookmarkShow} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  )
}

export default MainPage