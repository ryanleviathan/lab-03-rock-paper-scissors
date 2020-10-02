
export function rockPaperScissors() {
    const randomNumber = Math.ceil(Math.random() * 3);
    let rpc;
    if (randomNumber === 1)rpc = 'rock';
    if (randomNumber === 2)rpc = 'paper';
    if (randomNumber === 3)rpc = 'scissors';
    
    return rpc;
    //console.log(rpc);
}


export function willYouWin(userSelection){
    const rpc = rockPaperScissors();
    //console.log(userSelection);

    if (userSelection === 'rock' && rpc === 'scissors') {
        return 'win';
    }
    if (userSelection === 'paper' && rpc === 'rock') {
        return 'win';
    }
    if (userSelection === 'scissors' && rpc === 'paper') {
        return 'win';
    }
    if (userSelection === 'rock' && rpc === 'paper') {
        return 'lose';
    }
    if (userSelection === 'paper' && rpc === 'scissors') {
        return 'lose';
    }
    if (userSelection === 'scissors' && rpc === 'rock') {
        return 'lose';
    }
    if (userSelection === rpc) {
        return 'tie';
    }

}
