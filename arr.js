const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// for(let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i]);
// }
for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result)

// [ 'Homework', 20, 'Shopping', 10, 5 ]