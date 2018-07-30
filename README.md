# Mead

[Live](https://mead-aa.herokuapp.com/)

![](https://i.imgur.com/ZcuL4yX.png)

Mead is a full-stack, single-page application built with React.js and Ruby on Rails.  Mead mirrors the familiar social blogging platform Medium.

## Features

### Mobile-first

![](https://imgur.com/AYeGtgb)

Mead was developed mobile-first, for all screen sizes and devices.

### Authentication

![]()

Users can sign up and log in to the app via a modal.

### Stories

![](https://imgur.com/duxWlzr)

Users can write their own stories and read stories from other authors.  Stories can contain images, which are handled with Rails Active Storage and the AWS s3 cloud.

### Profiles

![](https://imgur.com/G6lduyx)
![](https://imgur.com/GejYJCW)

Every user has a profile which displays key information about the user, as well as their authored stories.  From the profile, a user can edit their own stories.

### Profile Quick-Look

![](https://imgur.com/7nX7Usr)

Hovering over an author's name on the homepage or profile page will generate a profile quick-look, displaying key information about the author as well as 3 of their most recent stories.  Users can also follow/unfollow the user from this view.

### Follows and Feed

![](https://imgur.com/WfjEG1f)

As a user explores the site, they can follow the authors whose writing they enjoy most.  Once a user follows an author, that author's stories will start to appear in the user's 'feed'.  The feed is a currated list of stories that exists on the homepage of the app.

### Comments

![](https://imgur.com/oAzMnz1)

Users can comment on the stories they like.

### Claps

![](https://imgur.com/sGB4RIc)

If a user enjoys a story or comment, they can clap for it.  Claps are generated continuously up to a limit of 20 per user, and saved to the database periodically using a timeout.

### Tags

![](https://imgur.com/3SncGvJ)

Stories can be tagged by the author, and the most common tags on the app are displayed on the homepage.  Clicking on a tag will generate a custom feed with all the stories belonging to that tag.

### Popular Stories

![](https://imgur.com/Y1uMOdH)

The most popular stories, based on user claps, are aggrogated and displayed on the homepage of the app.

### Recommended Stories

![](https://imgur.com/fBlpnCg)

As a user claps for stories they like, the app will start to recommend stories that align with the user's interests.

### Bookmarks

![](https://imgur.com/lvV8PD2)

If a user wants to save a story for later reading, they can click the bookmark icon.  Later, the user can access their bookmarks via the bookmark icon in the header.

### Search

![](https://imgur.com/BNopn2J)

Stories, authors, and tags can be searched for simultaneously using the search view, accessible via the search icon in the header.

### Useful Errors

![](https://imgur.com/GIIjwKf)

Errors are shown during sign up and story creation to indicate required/invalid fields.

### Loading Screen

![](https://imgur.com/iGfNBDU)

During fetches to the server, a loading screen is displayed as the user waits for content.