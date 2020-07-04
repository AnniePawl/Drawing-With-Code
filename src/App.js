import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Tutorials from './components/tutorials/tutorials';

function App() {
	return (
		<Router>
			{/* Home Route */}
			<Route path="/" exact component={LandingPage} />

			{/* Tutorial Route */}
			<Route path="/tutorials/" component={Tutorials} />
		</Router>
	);
}

export default App;
