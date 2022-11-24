const express = require('express');
const path = require('node:path');

const { serialize, parse } = require('../utils/json');
const jsonDbPath = path.join(__dirname , '/../data/movies.json');


const Movies = [
    { id: 1,
    title: 'movie1',
    duration:3,
    budget: 100,
    link: 'https://stackoverflow.com'
  },
  { id: 2,
    title: 'movie2',
    duration:1,
    budget: 200,
    link: 'https://stackoverflow.com'
  },
  
  {  id: 3,
    title: 'movie3',
    duration:5,
    budget: 300,
    link: 'https://stackoverflow.com'
  
  }
  ];

  function readAllMovies(valeur) {
  const parametre= parseInt(valeur, 10) ;
  const movies= parse(jsonDbPath,Movies);

  if( typeof parametre !== 'number' || parametre <=0) 
  return undefined;

  if(parametre !== undefined){
  const films = [...movies].filter((movie)=> movie.duration>= parametre) ;
    return(films);   
  }
    return (movies);  
  };

  
  function readMovieSelected(id){
    const idParams = parseInt(id, 10);

    if (idParams === undefined) return undefined;
  
    const movie = parse(jsonDbPath,Movies);
    const indexFilm= movie.findIndex((idfilm)=>idfilm.id === idParams);

    if(indexFilm<0 || indexFilm>= movie.length) return undefined;
  return movie[indexFilm];
  };


  function addMovie(titleParam, durationParam, budgetParam, linkParam){
    if(!titleParam || !durationParam || !budgetParam || !linkParam) return undefined;
     
    const movies= parse(jsonDbPath, Movies);
    const nextFilm={
      id: getNextId,
      title: titleParam,
      duration:durationParam,
      budget:budgetParam,
      link:linkParam
    }
  
  movies.push(nextFilm);
  serialize(jsonDbPath,movies);
  return (nextFilm);
  };

  function getNextId(){
    const movies=parse(jsonDbPath,Movies);
    const lastItemIndex = movies?.length !== 0 ? movies.length - 1 : undefined;
    const lastId = lastItemIndex !== undefined ? movies[lastItemIndex]?.id : 0;
    const nextId = lastId + 1;

    return nextId;
  }