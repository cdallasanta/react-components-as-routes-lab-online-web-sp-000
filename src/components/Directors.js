import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => {
        return <div key={i}>
          <h3>Name: {director.name}</h3>
          Movies:
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
}

export default Directors
