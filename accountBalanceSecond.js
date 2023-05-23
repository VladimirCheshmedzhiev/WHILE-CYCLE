function accountBalance (input){
    let index = 0;
    let total = 0;
    let currentInput = input[index];


    while (currentInput !== "NoMoreMoney"){

        let inputAsNumber = Number(currentInput);

        if (inputAsNumber < 0){
            console.log(`Invalid operation!`);
            break;
        }    
        else {
            total += inputAsNumber;
            console.log(`Increase: ${Number(inputAsNumber).toFixed(2)}`);
        }
        
        index++;
        currentInput = input[index];
        
    }
    console.log(`Total: ${total.toFixed(2)}`)   
}
    accountBalance(["120",
    "45.55",
    "-150"])