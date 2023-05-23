function biggestNumber (input){
    let index = 0;
    let currentNumber = 0;
    let biggest = input[0];
    

    while (currentNumber !== "Stop") {
        currentNumber = input[index];
        let current = Number(currentNumber);
        if (current > biggest){
            biggest = current
        }
        index++
    }   

console.log(biggest)

}
biggestNumber(["-1",
"-2",
"Stop"])





