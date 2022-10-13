import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import 'animate.css';

const nbrLignes = document.querySelector('#lignes').value;
const nbrcolonnes = document.querySelector('#colonnes').value;
const initString = document.querySelector('#string').value;
// const input = document.querySelector('value');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
 
  const main = document.querySelector('main');
  main.appendChild(createHtmlTableOfStrings());
});

function createArray (lignes,colonnes,string){
    const table= [];
   for(let i=0; i< lignes; i+=1){
    table.push([]);
    for(let j=0; j<colonnes; j+=1){
       table[i].push(`${string}[${i}][${j}]`);  
    }
   }
 return table;
}

function createHtmlTableOfStrings(){
    // création des elts delimiteurs
    // demande au prof comment supprimer un repositori
    
     
    const div = document.createElement('div');
    
    const table = document.createElement('table');
    const jsTable = createArray(nbrLignes,nbrcolonnes,initString);

    div.className='table-responsive pt-5';
    
    for(let i=0 ; i<jsTable.length; i += 1 ){
      const tr= document.createElement('tr');
      for (let j = 0; j < jsTable[0].length; j+=1){
        const td= document.createElement('td');
        td.innerHTML= jsTable[i][j];
         tr.appendChild(td);
        
      }
      table.appendChild(tr);
    }
    
    div.appendChild(table);
    return div;
  } 
  


