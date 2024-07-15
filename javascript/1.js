function expandString(input) {
        let output = '';
        let i = 0;
    
        while (i < input.length)
         {  let char = input[i];
            let num = '';
    
            // Move to the next character to check if it's a digit
            i++;
    
            // Collect all consecutive digits
            while (i < input.length && !isNaN(input[i])) {
                num += input[i];
                i++;
            }
    
            // If no digit was found, set num to 1 (i.e., no number means a single occurrence)
            num = num === '' ? 1 : parseInt(num);
    
            // Append the character 'num' times to the output
            output += char.repeat(num);
        }
    
        return output;
    }
    // Example usage:
    const input = "aa2b3bbc2d2e2f3gh";
    const result = expandString(input);
    console.log(result); // Outputs: aaabbbbccddeeffgh

//aa2b3bbc2d2e2f3gh
//aaabbbbccddeeffgh


let output = char.repeat(num)

console.log(output)








