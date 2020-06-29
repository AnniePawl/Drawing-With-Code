import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/landingPage/landingPage';

function App() {
	return (
    <Router>
      <Route path= "/" exact component={LandingPage}></Route>
    </Router>
	);
}

export default App;
