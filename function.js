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

// Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба. Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

function calculateVolumeAndArea(num) {
    if(Number.isInteger(num) && num > 0) {
        const size = num * num * num; // Объем куба = Длина ребра * Длина ребра * Длина ребра
        const cubeFace = num * num; // Площадь одной грани = Длина ребра * Длина ребра
        const length = cubeFace * 6 // Площадь полной поверхности куба = Площадь одной грани * Количество граней
        return `Объем куба: ${size}, площадь всей поверхности: ${length}`;
    } else {
        return "При вычислении произошла ошибка";
    }
}

console.log(calculateVolumeAndArea(15));

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(num) {
    if(Number.isInteger(num) && num > 0 && num <= 36) {
        return Math.ceil(num / 4);
    } else if(!Number.isInteger(num) || num < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else {
        return "Таких мест в вагоне не существует";
    }
}
console.log(getCoupeNumber(10));


// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки

function getTimeFromMinutes(num) {
    if (isNaN(num) || typeof num !== 'number' || num < 0 || num > 600 || num % 1 !== 0) {
        return "Ошибка, проверьте данные";
    } else {
        let hours = Math.floor(num / 60);
        let minutes = num % 60;

        let nameHour = (hours === 1 || hours === 21) ? 'час' : (hours > 1 && hours < 5) || (hours > 21 && hours < 25) ? 'часа' : 'часов';
        let nameMinutes = (minutes === 1) ? 'минута' : (minutes > 1 && minutes < 5) ? 'минуты' : 'минут';

        return `${hours} ${nameHour} ${minutes} ${nameMinutes}`;
    }
}
console.log(getTimeFromMinutes(0));


// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0

function findMaxNumber(num1, num2, num3, num4) {
    // Проверяем, что все аргументы - числа, и что их количество равно 4
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' || typeof num4 !== 'number') {
        return 0; // Если какой-то из аргументов не является числом, возвращаем 0
    } else {
        // Используем Math.max для нахождения максимального числа из заданных
        return Math.max(num1, num2, num3, num4);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11)); 



