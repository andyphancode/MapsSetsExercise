// What does the following code return?

// new Set([1,1,2,2,3,4])

// -----------------------------------------------------------------------------------------------------------
// {1, 2, 3, 4}
// -----------------------------------------------------------------------------------------------------------

// What does the following code return?

// [...new Set("referee")].join("")

// -----------------------------------------------------------------------------------------------------------
// "ref"
// -----------------------------------------------------------------------------------------------------------

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// -----------------------------------------------------------------------------------------------------------
// {[1,2,3] => true,
//  [1,2,3] => false}
// -----------------------------------------------------------------------------------------------------------


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = array => new Set(array).size !== array.length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowels = 'aeiou';
const vowelCount = string => {
    const vowelcounter = new Map();
    Array.from(string.toLowerCase()).forEach(letter => {
        if (vowels.indexOf(letter) !== -1) {
            if(vowelcounter.get(letter) >= 1){
                vowelcounter.set(letter, vowelcounter.get(letter) + 1 )
            } else {
                vowelcounter.set(letter, 1);
            }
        }
    })
    return vowelcounter;

}