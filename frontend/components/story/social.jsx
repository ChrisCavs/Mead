import React from 'react'
import ClapButton from '../clap/clap_button'

const Social = ({ story }) => {
  return (
    <div className="story-social">

      <ClapButton content={story} type="Story" />

      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  )
}

export default Social