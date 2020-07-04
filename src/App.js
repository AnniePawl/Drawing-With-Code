import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Tutorials from './components/tutorials/tutorials';
import Gallery from './components/gallery/gallery';

function App() {
	return (
		<Router>
			{/* Home Route */}
			<Route path="/" exact component={LandingPage} />

			{/* Tutorial Route */}
			<Route path="/tutorials/" component={Tutorials} />

			{/* Gallery Route*/}
			<Route path="/gallery/" component={Gallery} />
		</Router>
	);
}

export default App;
