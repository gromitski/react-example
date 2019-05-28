import React from 'react';
import {myFavouriteAdjective} from './common';


function SimpleComponent() {
  const timestamp = Date.now();

  return (
      <p>I am a {myFavouriteAdjective} component! <code>{timestamp}</code></p>
  )
}

export default SimpleComponent;
