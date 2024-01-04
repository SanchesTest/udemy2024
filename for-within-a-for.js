let result = '';
const length = 7;

for(let i = 0; i < length; i++) {
    for(let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

// *
// **
// ***
// ****
// *****
// ******

first: for(let i = 0; i < 3; i++) {
    console.log(`first: ${i}`);
    for(let j = 0; j < 3; j++) {
        console.log(`second: ${j}`);
        for(let k = 0; k < 3; k++) {
            if(k === 2) continue first; // если true переходим к условию где обьявлена метка, еще есть break
            console.log(`third: ${k}`);
        }
    }
}

//https://www.udemy.com/course/javascript_full/learn/lecture/30882734#overview