function password(input){
let username = input[0];
let password = input[1];
let data = input[2];
let index = 3;

while(true){
    if (data === password){
        console.log(`Welcome ${username}!`);
        break;
    }
    else {
        data = input[index]; 
        index++;
    }
}



}
password(["Gosho",
"secret",
"secret"])

