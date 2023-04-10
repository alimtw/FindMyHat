
const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;  // use Y-axis
const col = 10;  // use X-axis
var field =[[]];

function generateField(){

    for (let y=0; y < row ; y++){

        field[y] = [];

            for (let x=0; x < col; x++){    

            field[y][x] = fieldCharacter
            }       
    }
    field[0][0] =pathCharacter;    
    console.log(field);  

    for (let i=0; i < 10; i++){

       
        let yHole = Math.floor(Math.random()*10);
        let xHole = Math.floor(Math.random()*10);
        field[yHole][xHole] = hole;
        
    }

    for (let i=0; i < 1; i++){
   
        let yHat = Math.floor(Math.random()*10);
        let xHat = Math.floor(Math.random()*10);
        field[yHat][xHat] = hat;
        
    }   
       
}

generateField()

function print() {

clear();

const displayString = field.map(row=>{
    return row.join('');
}).join('\n');

console.log(displayString);

}

print();


let isPlaying = true;

while(isPlaying) {

    //original position field[0][0], press D - [0+1][0]. press U - [0-1][0], press R - [0][0+1], press L - [0][0-1]
    
    let yi = 0;
    let xi = 0;
    let dir ='';

    dir = prompt(`Which way : `).toUpperCase();
    console.log(dir);
    
    if (dir == 'D'){

    field[yi][xi] = pathCharacter;
    yi = yi+1;
    
    }

    else if (dir == 'U') {

    yi -= 1;
    field[yi-1][xi] = pathCharacter;
    
    }

    else if (dir == 'R') {

    xi += 1;
    field[yi][xi+1] = pathCharacter;
    
    }

    else if (dir == 'L') {

    xi -= 1
    field[yi][xi-1] = pathCharacter;
    
    }

    else {

    console.log (`“Enter (U, D, I or R.) please key again"`);}


console.log(yi,xi);


// If position of hat = character,  OR position of Hole = character break the while loop

/*if (field[yi][xi] = field[yHole][xHole} {
    console.log (`“Sorry, you fell down a hole!”`);
    isPlaying = false;}
}*/

/*
else if (field[yi][xi] = field[yHat][xHat]){

    console.log (`“Congrats, you found your hat!” `);
    isPlaying = false;
} 

else if ( yi < 0 || xi < 0) {

    console.log (`“Out of bounds - Game End" `);
    isPlaying = false;
}

else { console.log ("Please continue")}*/

} 


