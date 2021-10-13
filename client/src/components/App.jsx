import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div><h1>Hello World!</h1>
        {/* {console.log(props.data)} */}
        <SearchBar />
        <MovieList movies = {this.props.data}/>
      </div>
    );
  }
}


export default App;