# Mead

[Link to Live Site](https://mead-aa.herokuapp.com/)

Mead is a full-stack, single-page application built with React.js and Ruby on Rails.  Mead mirrors the familiar social blogging platform Medium.

<img src="https://i.imgur.com/ZcuL4yX.png" width="800px" />

# Features

## Mobile-first

<img src="https://i.imgur.com/AYeGtgb.png" width="300px" />

Mead was developed mobile-first, for all screen sizes and devices.

## Authentication

<img src="https://i.imgur.com/F1a7Jmc.png" width="500px" />

Users can sign up and log in to the app via a modal.

## Stories

<img src="https://i.imgur.com/duxWlzr.png" width="500px" />

Users can write their own stories and read stories from other authors.  Stories can contain images, which are handled with Rails Active Storage and the AWS s3 cloud.

## Profiles

<img src="https://i.imgur.com/G6lduyx.png" width="500px" />

<img src="https://i.imgur.com/GejYJCW.png" width="500px" />

Every user has a profile which displays key information about the user, as well as their authored stories.  From the profile, a user can edit their own stories.

## Profile Quick-Look

<img src="https://i.imgur.com/7nX7Usr.png" width="600px" />

Hovering over an author's name on the homepage or profile page will generate a profile quick-look, displaying key information about the author as well as 3 of their most recent stories.  Users can also follow/unfollow the user from this view.

## Follows and Feed

<img src="https://i.imgur.com/WfjEG1f.png" width="500px" />

As a user explores the site, they can follow the authors whose writing they enjoy most.  Once a user follows an author, that author's stories will start to appear in the user's 'feed'.  The feed is a currated list of stories that exists on the homepage of the app.

## Comments

<img src="https://i.imgur.com/oAzMnz1.png" width="500px" />

Users can comment on the stories they like.

## Claps

<img src="https://i.imgur.com/sGB4RIc.png" width="300px" />

If a user enjoys a story or comment, they can clap for it.  Claps are generated continuously up to a limit of 20 per user, and saved to the database periodically using a timeout.

## Tags

<img src="https://i.imgur.com/6Cz8zBv.png" width="400px" />

Stories can be tagged by the author, and the most common tags on the app are displayed on the homepage.  Clicking on a tag will generate a custom feed with all the stories belonging to that tag.

## Popular Stories

<img src="https://i.imgur.com/Y1uMOdH.png" width="300px" />

The most popular stories, based on user claps, are aggrogated and displayed on the homepage of the app.

## Recommended Stories

<img src="https://i.imgur.com/fBlpnCg.png" width="400px" />

As a user claps for stories they like, the app will start to recommend stories that align with the user's interests.

## Bookmarks

<img src="https://i.imgur.com/lvV8PD2.png" width="500px" />

If a user wants to save a story for later reading, they can click the bookmark icon.  Later, the user can access their bookmarks via the bookmark icon in the header.

## Search

<img src="https://i.imgur.com/BNopn2J.png" width="500px" />

Stories, authors, and tags can be searched for simultaneously using the search view, accessible via the search icon in the header.

## Useful Errors

<img src="https://i.imgur.com/GIIjwKf.png" width="500px" />

Errors are shown during sign up and story creation to indicate required/invalid fields.

## Loading Screen

<img src="https://i.imgur.com/iGfNBDU.png" width="400px" />

During fetches to the server, a loading screen is displayed as the user waits for content.