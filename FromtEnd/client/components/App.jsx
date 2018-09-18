import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Others from './Others'
import Registration from './Registration'

const App = props => {
  return (
    <div>
      <h1>Minotaur Dating</h1>
      <img className='mainImage' src= './images/girl.png' />
      <div className = 'container'><Registration /></div>
      <div><Router>
        <Route path="/others" component= {Others} />
      </Router>
      </div>
    </div>
  )
}

export default App
