const addDateTime  = new Date(); 
const date = addDateTime.toLocaleDateString();
const time = addDateTime.toLocaleTimeString();

function dateHeure (message) {
  let finalmessage = date  + " "  + time + " " +message;
  return finalmessage;
}
 
const message = dateHeure("bonjour")
alert(message); 
