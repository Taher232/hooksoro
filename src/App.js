import React, { useState } from 'react';
import { moviesData } from './moviesData';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie/AddMovie';
import{Route} from 'react-router-dom';

import './App.css';

export default function App(){
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    
    <div className="App">
      <Route 
    path="/SearchMovie"
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
    <MoviesList
    moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
        
    />


    <Route path="/AddMovie" component={AddMovie}
    addNewMovie={addNewMovie}
    
    />
    
      
      </div>

      
   
  );
}


