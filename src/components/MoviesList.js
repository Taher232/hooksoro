import React from 'react';
import MovieCard from './MovieCard/MovieCard';


const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {moviesList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
  );
};

export default MoviesList;

