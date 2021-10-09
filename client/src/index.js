import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import testdata from './test-data/testdata.js'

ReactDOM.render(<App data="testdata"/>, document.getElementById('app'));