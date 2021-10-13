import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

const App = (props) => (
  <div><h1>Hello World!</h1>
    {/* {console.log(props.data)} */}
    <SearchBar />
    <MovieList movies = {props.data}/>
  </div>

);



export default App;