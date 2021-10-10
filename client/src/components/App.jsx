import React from 'react';
import MovieList from './MovieList.jsx';

const App = (props) => (
  <div>Hello World!
    {/* {console.log(props.data)} */}
    <MovieList movies = {props.data}/>
  </div>

);



export default App;