const usdCurr = 38.23; // курс валют
const eurCurr = 41.93; // курс валют

const discount = 0.9; // скидка

// вычислим курс
function convert(amount, curr) {
    return (curr * amount).toFixed(2); // возвращаем результат
}

// вычислим скидку
function promotion(result) {
    console.log(result * discount);
}

console.log(convert(1000, usdCurr)); // курс долар
console.log(convert(1000, eurCurr)); // курс евро

const res = convert(1000, usdCurr); // результат с скидкой

promotion(res); // в result попадает число с convert


function getMathResult(num, col) {
    if(typeof col !== 'number' || col <= 0) {
        return num;
    } else {
        let res = '';
        for(let i = 1; i < col + 1; i++) {
            i !== col ? res += `${num * i}---` :  res += `${num * i}`;   
        } 
        return res;
    }
}
console.log(getMathResult(10, 5));