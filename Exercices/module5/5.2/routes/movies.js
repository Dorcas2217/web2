const express = require('express');



const {
  readAllMovies, 
  readMovieSelected, 
  addMovie, deleteMovie, modifieMovie
} = require('../models/films');


const  router = express.Router();





/* GET home page. */
router.get('/', (req, res) => { 
  const paramètre= req?.query? parseInt(req.query['minimum-duration'], 10) : undefined ;

  if( paramètre <=0) res.status(400);
  const resultat = readAllMovies(paramètre);

  res.json(resultat)
});

router.get('/:id', (req,res)=>{
  const resultat = readMovieSelected(req.params.id);
 
  if(resultat===undefined) res.status(400);
  
  res.json(resultat);    
});

router.post('/', (req, res)=>{
  const titleParam= req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const durationParam= req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  const budgetParam= req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  const linkParam= req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if( !titleParam || !durationParam || !linkParam || !budgetParam) res.status(400);
  const resultat = addMovie(titleParam,durationParam,linkParam,budgetParam);
  if(!resultat) res.status(400);
res.json(resultat);

});

router.delete('/:id', (req,res)=>{
  const resultat = deleteMovie(req.params.id);
  if(!resultat) res.status(400);
  res.json(resultat);
});


  router.patch('/:id', (req,res)=>{
    const titleParam= req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const durationParam= req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
    const budgetParam= req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
    const linkParam= req?.body?.link?.length !== 0 ? req.body.link : undefined;
    const idParam = req?.params?.id? req.params.id:undefined;

    if( !titleParam && !durationParam && !linkParam && !budgetParam) res.status(400);
    

    const resultat = modifieMovie(idParam,titleParam,durationParam,budgetParam,linkParam);
    if(!resultat) res.sendStatus(400);
    res.json(resultat);
  });

module.exports = router;



