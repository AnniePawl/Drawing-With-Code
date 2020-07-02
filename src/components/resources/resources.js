import React from 'react';
import './styles/resources.scss'


function Resources() {
  return(
    <div className='resources__container'>
      <div className= 'resources__content'>
      <h1 className >Resources</h1>
      <ul>
        <li>CodePen</li>
        {/* https://codepen.io/ */}
        <li>Drawing with Code Medium Article </li>
      </ul>
      </div>
    </div>
  )
}

export default Resources