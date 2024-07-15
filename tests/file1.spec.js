function mayuri(input) {
    let output = '';
    let i = 0;
    while (i < input.length) {
        let char = input[i];
        let count = '';
        i++;
console.log(i)
console.log(char[i])
console.log(count)
//

        // Collect the number that follows the character
        while (i < input.length && !isNaN(input[i])) {
            count += input[i];
            i++;
        }

        // Convert count to a number, default to 1 if not specified
        count = parseInt(count) || 1;

        // Append the character 'count' times to the output string
        output += char.repeat(count);
    }
    return output;
}
// Example usage
let input = 'aa2b2e22f2g3h';
let output = mayuri(input);
console.log(output); // aaabbeeeffggh

