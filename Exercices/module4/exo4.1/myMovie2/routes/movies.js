var express = require('express');
var router = express.Router();


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
]

/* GET home page. */
router.get('/', function(req, res, next) { 
  let paramètre=  parseInt(req.query['minimum-duration']);
  req?.query?.['minimum-duration']?  paramètre : undefined;
console.log(`sort by duration : ${paramètre ?? 'params not defined !!'}`);

if( typeof paramètre !== 'number' || paramètre <=0) res.status(400);

  if(paramètre){
  let films = [...Movies].filter((Movies)=> Movies.duration>= paramètre) ;
  res.json(films);  
  }else{ 
    res.json(Movies);
  }
 
});

router.get('/:id', function(req,res, next){
let id = req.params.id;
let indexFilm= Movies.findIndex((film)=> film.id===id);
 if(indexFilm<0 || indexFilm>= Movies.length) res.status(404);
res.json(Movies[indexFilm]);
});

router.post('/', function(req, res){
  let title= req?.body?.title?.length !== 0 ? req.body.title : undefined;
  let duration= req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  let budget= req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  let link= req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if( !title || !duration || !link)res.status(400);
  const lastItemIndex = Movies?.length !== 0 ? Movies.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? Movies[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  
  const nextFilm={
    id: nextId,
    title: title,
    duration:duration,
    budget:budget,
    link:link
  }

Movies.push(nextFilm);
res.json(nextFilm);

});

router.delete('/:id', function(req,res){
  let id=req?.params?.id ? req.params.id: undefined;

  let indexFilm = Movies.findIndex((film)=> film.id==id);
  if(  indexFilm<0) res.status(404);

  let filmsSupprimeTab=Movies.splice(indexFilm,1);
  let filmSuppime= filmsSupprimeTab[0];

  res.json(filmSuppime);
  });


  router.patch('/:id', function(req,res){
   let id=req?.params?.id ? req.params.id: undefined;
  let title= req?.body?.title?.length !== 0 ? req.body.title : undefined;
  let duration= req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  let budget= req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  let link= req?.body?.link?.length !== 0 ? req.body.link : undefined;
  
  if((!title && !duration && !budget && link) ) res.status(400);
  let indexFilm= Movies.findIndex((film)=> film.id==id);
  if(indexFilm==undefined) res.status(400);
  let moviUpdate={...Movies[indexFilm], ...req.body};
  Movies[indexFilm]=moviUpdate;
  res.json(moviUpdate);

  });

module.exports = router;
