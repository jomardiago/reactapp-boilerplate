import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

console.log('Running application on node environment: ', process.env.NODE_ENV);

const title = 'React with Webpack and Babel Boilerplate';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();