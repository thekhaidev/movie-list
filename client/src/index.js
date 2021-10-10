import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './test-data/testdata.js'

ReactDOM.render(<App data={movies}/>, document.getElementById('app'));