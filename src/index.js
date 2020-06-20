import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//fonts
import './styles/fonts/Roboto-Regular.ttf'
import './styles/fonts/Roboto-Bold.ttf'
import './styles/fonts/LibreBaskerville-Regular.ttf'

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
