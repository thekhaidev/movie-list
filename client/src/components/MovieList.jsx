import React from 'react'

const MovieList = (props) => (
  <div>{console.log(props.movies)}
  <ol>
    <li>
      {props.movies[0].title}
    </li>
    <li>
      {props.movies[1].title}
    </li>
    <li>
      {props.movies[2].title}
    </li>
    <li>
      {props.movies[3].title}
    </li>
    </ol>
  </div>
)

export default MovieList