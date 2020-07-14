import React from 'react';
import './styles/resources.scss'


function Resources() {
  return(
    <div className='resources__container'>
      <div className= 'resources__content'>
        <h1 className >Resources</h1>

        <div className='resources__lists'>

          {/* My Resources */}
          <div className='resources__my_resources'>
            <h2 className='resources__subheading'>resources by me</h2>
            <ul>
              {/* GH Repo */}
              <li><a href="https://github.com/AnniePawl/Drawing-With-Code" target='blank'>Project GitHub Repo</a></li>
              {/* My medium article */}
              <li><a href="https://medium.com/@annapawl/drawing-with-code-716cb0b21b06 " target='blank'>Drawing with Code Medium Article </a></li>
            </ul>
          </div>

          {/* Other Resources */}
          <div className='resources__other_resources'>
            <h2 className='resources__subheading'>other great resources</h2>
            <ul>
              {/* CodePen */}
              <li>
                <a href="https://codepen.io/" target='blank'>CodePen</a><br/>
                 <p>An online code editor and community of front-end web developers. This platform allows you to test and showcase code snippets built with HTML, CSS, and JS.</p>
              </li>
              {/* Pure CSS Art Gallery */}
              <li>
                <a href='https://css-art.com/' target='blank'>Pure CSS Art Gallery</a><br/>
                <p>Awesome, self-maintained, open source gallery for CSS web art. Great place to get inspired and connect with fellow artists.</p>
              </li>
         
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resources