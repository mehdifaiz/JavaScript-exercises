//generate a random numebr (DONE!)
//user input number
//tell them if they guess is higher or lower than the generated number
//keep track of how many guesses they took before they guessed the number
//if they take more than 10 guesses they lose
const prompt=require("prompt-sync")()
let userN
let usercheck=true
let i


const randomnumber=(min, max)=>{
    
    return Math.floor(Math.random() * (max - min + 1) + min)
    //math.random generate a random number between o and 1
    //(max - min + 1) this is to determine the range of possible values and + min is to make that range start from where i want
}
const winorlose=()=>{

for(i=1; i<=10; i++){

    while(usercheck){
            userN=parseInt(prompt("Please enter a number between 1-10: "))
            if(isNaN(userN) || userN<=0 || userN>10){
                console.log("Invalid input try again")
            continue;
            }

            else{
                break;
            }
        }


    if(i===10){
    console.log("YOU LOSE")
    break;
    }
                                        
    else if(userN<rn){
    console.log("TO LOW!")
    }
    else if(userN>rn){
    console.log("TO HIGH")
    }
    else if(userN===rn){
    console.log("YOU WiN")
    console.log(`IT TOOK YOU ${i} GUESSES`)
    break;
    }
  }

}    

           
const rn =randomnumber(1, 10)
//rn stores the random number generated
winorlose()