import React from 'react';

import TopBar from './components/header/Header'
import Intro from './components/Intro/Intro'
import Contact from './components/contact/Contact'
import FooterBar from './components/footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'

import { Grommet, Main } from 'grommet';
import THEME from './styles/theme';
import './styles/app.scss'

function App() {
	return (
		<div className="app">
			<Grommet className="grommet" theme={THEME}>
				<TopBar />
				<Main>
					<Intro/>
					<AboutMe/>			
					<Contact/>
				</Main>
				<FooterBar/>
			</Grommet>
		</div>
	);
}

export default App;
