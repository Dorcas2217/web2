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

   for(let i=0; i< lignes+1; i++){
    table.push([]);
    for(let j; j<colonnes+1; j++){
       table[i].push(string + "["+ i+"]"+"["+j+"]");  
    }
   }
 return table;
}

  function createHtmlTableOfStrings( createArray(nbrLignes, nbrcolonnes,initString)){
    // création des elts delimiteurs
    const div = document.createElement('div');
    
    const table = document.createElement('table');
    table.innerHTML=createArray(nbrLignes,nbrcolonnes,initString);

    div.className='table-responsive pt-5';
    div.appendChild(table);


    for(let i=0 ; i<createArray.length; i++ ){
      const tr= document.createElement('tr');
      for (let j = 0; j < createArray[0].length; j++){
        const td= document.createElement('td');
        td.innerHTML= createArray[i][j];
         tr.appendChild(td);
        
      }
    }
    return table;
  } 
  


