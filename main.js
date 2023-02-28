function problem_5(num1, num2){
    return num1/num2;
}

function problem_10(num1, num2) {
    return num1 == num2;
}

function problem_13(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}


function load() {
    
    let a = 5, b = 2;

    let res1 = problem_5(a, b);

    let res2 = problem_10(a, b);
    
    let res3 = problem_13(a, b);
    

    const results = {
        problem_5: res1,
        problem_10: res2,
        problem_13: res3
    };

    console.log(results);
}