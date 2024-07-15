
const stringWithNumbers = "Hello123World456";
let stringWithoutNumbers = '';


for (let char of stringWithNumbers) {
  if (isNaN(char)) {
    stringWithoutNumbers += char;
  }
}
console.log(stringWithoutNumbers);