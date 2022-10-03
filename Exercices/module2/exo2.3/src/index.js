import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import 'animate.css';

const nbrLignes = document.querySelector('#lignes');
const nbrcolonnes = document.querySelector('#colonnes');
const initString = document.querySelector('#string');
const input = document.querySelector('value');


input.addEventListener('click', createHtmlTableOfStrings);

function createArray (lignes,colonnes,string){
    let table= []

   for(let i=0; i< nbrLignes; i++){
    table.push([]);
    for(let j; j<nbrcolonnes; j++){
       table[i].push(string + "["+ i+"]"+"["+j+"]");  
    }
   }
 return table;
}

  function createHtmlTableOfStrings(createArray(nbrLignes, nbrcolonnes,initString)){
    ligne = createArray.ligne;
    colonne = createArray.colonne;
    string= createArray.string;
    const ligneHtml= document.querySelector('tr');
    for (let i = 0; i < createArray.length; i++) {
        for (let j = 0; j < array.length; j++) {
           ligneHtml.innerHTML=createArray[i][j];

        }
        
    }
   
    
  } 
  


