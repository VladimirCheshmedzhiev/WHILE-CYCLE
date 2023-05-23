function graduation (input){
    let index = 1;
    let student = input[0];
    let year = 1;
    let currentGrade = 0;
    let fails = 0;
    let average = 0;
    let totalGrades = 0;

    while (true){
        
        currentGrade = Number(input[index]);
        if (currentGrade < 4){
            fails += 1;
        }
        if (fails > 1) {
            year -= 1
            console.log(`${student} has been excluded at ${year} grade`);
            break;
        }
        totalGrades += currentGrade;
        average = totalGrades / year
        if (year == 12){
            	console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);
                break;
        }
        year += 1;
        index++
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])





