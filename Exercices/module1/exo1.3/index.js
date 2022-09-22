let click= document.getElementById("btn");
let cpt=0;

click.onclick=function(){
    cpt++;
    console.log(cpt);
    if(cpt>=5 && cpt<=9){
        click.innerHTML="bravo";

    }else
    if(cpt>=10){
        click.innerHTML="maître";
    }

}



