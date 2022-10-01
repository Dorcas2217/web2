
let divred = document.querySelector('.red');
let divorange= document.querySelector('.orange');
let divgreen= document.querySelector('.green');

const colorSequence = ['red', 'orange', 'green', 'orange'];
let i = 0; 
const emptyColor="";

const delayBetweenChange=1000;

setInterval(changeColorWithDelay,delayBetweenChange);

function changeColorWithDelay (){
        if(i==colorSequence.length){
            i=0;
        }

        if(colorSequence[i]==="red"){
            divred.style.backgroundColor ="red";
            divgreen.style.backgroundColor=emptyColor;
            divorange.style.backgroundColor=emptyColor;
        }else
        if(colorSequence[i]==="orange"){
            divorange.style.backgroundColor="orange";
            divred.style.backgroundColor=emptyColor;
            divgreen.style.backgroundColor=emptyColor;
		}  else
		if(colorSequence[i]==="green"){
            divgreen.style.backgroundColor="green";
            divred.style.backgroundColor=emptyColor;
            divorange.style.backgroundColor=emptyColor;
        } 
        i++;
      
    }
     changeColorWithDelay();






