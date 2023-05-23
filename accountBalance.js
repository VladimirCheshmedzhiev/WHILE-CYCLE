function accountBalance (input){
let index = 0;
let deposit = 0;
let total = 0;
while (true){
    deposit = input[index];
    if (deposit == "NoMoreMoney"){
        console.log(`Total: ${total}`);
        break;
    }
    if (deposit <= 0){
        console.log(`Invalid operation!`);
        console.log(`Total: ${total}`)
        break;
    }
    console.log(`Increase: ${Number(deposit).toFixed(2)}`);
    total += Number(deposit);
    index++;
    
}

}
accountBalance(["120",
"45.55",
"-150"])
