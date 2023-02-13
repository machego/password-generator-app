const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
 "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
 ".","?","/"];


let randomLeftText = document.getElementById('random-left-text');
let randomRightText = document.getElementById('random-right-text');

const genPassword = () => {
   randomLeftText.innerHTML = ""
   randomRightText.innerHTML = ""
    
    for (let i = 0; i <= 14; i++) {
        let charLeft = Math.floor(Math.random() * characters.length);
        let charRight = Math.floor(Math.random() * characters.length);
        randomLeftText.innerHTML += characters[charLeft];
        randomRightText.innerHTML += characters[charRight];
    }  
}











