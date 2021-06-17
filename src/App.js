import React, { useState } from 'react';
import { moviesData } from './moviesData';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie/AddMovie';
import{Route} from 'react-router-dom';
import NavBar from "./components/NavBar";

import './App.css';

export default function App(){
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  const [searchByName, setSearchByName] = useState("");


  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    
    
<div className="App">
      <NavBar setSearchByName={setSearchByName} searchByName={searchByName} />
      <Route exact path="/" render={() => <p> this is home page </p>} />

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


