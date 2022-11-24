const express = require('express');
const path = require('node:path');

const { serialize, parse } = require('../utils/json');



const  router = express.Router();
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

/* GET home page. */
router.get('/', (req, res) => { 
  const paramètre= req?.query? parseInt(req.query['minimum-duration'], 10) : undefined ;
  const movies= parse(jsonDbPath,Movies);

if( typeof paramètre !== 'number' || paramètre <=0) res.status(400);

  if(paramètre){
  const films = [...movies].filter((movie)=> movie.duration>= paramètre) ;
  res.json(films);  
  }else{ 
    res.json(movies);
  }
});

router.get('/:id', (req,res)=>{
  const id = req?.params?.id ? parseInt(req.params.id, 10) : undefined;
  if (id === undefined) {
    res.sendStatus(404);
    return;
  } 


  const movie = parse(jsonDbPath,Movies);
  const indexFilm= movie.findIndex((idfilm)=>idfilm.id === id);


  if(indexFilm<0 || indexFilm>= movie.length) res.status(400);
  res.json(movie[indexFilm]);
});

router.post('/', (req, res)=>{
  const titleParam= req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const durationParam= req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  const budgetParam= req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  const linkParam= req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if( !titleParam || !durationParam || !linkParam || !budgetParam) res.status(400);
  const movies=parse(jsonDbPath,Movies);
  const lastItemIndex = movies?.length !== 0 ? movies.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? movies[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  
  const nextFilm={
    id: nextId,
    title: titleParam,
    duration:durationParam,
    budget:budgetParam,
    link:linkParam
  }

movies.push(nextFilm);
serialize(jsonDbPath,movies);
res.json(nextFilm);

});

router.delete('/:id', (req,res)=>{
  const  id=req?.params?.id ? parseInt(req.params.id,10): undefined;
  const movieDB=parse(jsonDbPath,Movies);
  const indexFilm = movieDB.findIndex((film)=> film.id===id);
  if(  indexFilm<0) {res.status(404);
  }

  const filmsSupprimeTab=movieDB.splice(indexFilm,1);
  const filmSuppime= filmsSupprimeTab[0];
  serialize(jsonDbPath,movieDB);
  res.json(filmSuppime);
});


  router.patch('/:id', (req,res)=>{
  const id=req?.params?.id ? parseInt(req.params.id,10): undefined;
  const title= req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration= req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  const budget= req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  const link= req?.body?.link?.length !== 0 ? req.body.link : undefined;
  
  if((!title && !duration && !budget && !link) ) res.status(400);
  const movieDB=parse(jsonDbPath, Movies);
  const indexFilm= movieDB.findIndex((film)=> film.id===id);
  if(indexFilm===undefined) res.status(400);

  const moviUpdate={...movieDB[indexFilm], ...req.body};
  movieDB[indexFilm]=moviUpdate;
  serialize(jsonDbPath, movieDB);
  res.json(moviUpdate);

  });

module.exports = router;



