import React from 'react'
import ListEntry from './ListEntry.jsx'

const MovieList = (props) => (
  <div>
    {/* {console.log(props.movies)} */}
    <ol>
      {props.movies.map(movie => {
        return (
          <ListEntry key = {Math.random()} movie = {movie}/>
        )
      })}
    </ol>
  </div>
)

export default MovieList