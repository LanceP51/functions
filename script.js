// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
        console.log ("ChickenMonkey") //multiples of 5 and 7
    }
    else if (currentNumber % 5 === 0) {
        console.log("Chicken") // multiples of 5
    }
    else if (currentNumber % 7 === 0) {
        console.log("Monkey") //multiples of 7
    }
    else{
        console.log(currentNumber)
    }
}

                                         // battle of the bands

let bandNumber = 1

const takeNumber = function (bandName) {
    const bandSentence = `${bandNumber} ${bandName}`
    bandNumber++
    return bandSentence
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

                                              // Cookout

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (i=0; i<foods.length; i++){
    grill(foods[i])}

console.log (cookedFood)

                                            // walrus sentence

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i=0; i <= theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // buildMeUp = buildMeUp + " " + (theWordArray[i])
            // or ... buildMeUp += `${theWordArray[i]} `
        if (i%3 === 0 && i!=0) {
            buildMeUp = buildMeUp +`! `+(theWordArray[i])
            console.log(buildMeUp)
        }
        else {
            buildMeUp = buildMeUp +` `+(theWordArray[i])
            console.log (buildMeUp)
        // Print buildMeUp to the console
        
    }

}
}
// Invoke the function and pass in the array
// addExcitement(sentence)










                                            //    add exclamation

function addExcitement (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i <= theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // buildMeUp = buildMeUp +` ` + (theWordArray[i])
        if (i % 3 === 0 && i!=0) {
            buildMeUp = buildMeUp + punctuation + " " + (theWordArray[i])
            console.log(buildMeUp)
        }
        else {
            buildMeUp = buildMeUp +" "+(theWordArray[i])
            console.log (buildMeUp)
        // Print buildMeUp to the console
    }
}
}
// addExcitement(sentence, "?")






                                //  Repeating

function addExcitement (theWordArray, punctuation, multiply) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i <= theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // buildMeUp = buildMeUp +` ` + (theWordArray[i])
        if (i % 3 === 0 && i!=0) {
            buildMeUp = buildMeUp + punctuation.repeat(multiply) + " " + (theWordArray[i])
            console.log(buildMeUp)
        }
        else {
            buildMeUp = buildMeUp +" "+(theWordArray[i])
            console.log (buildMeUp)
        // Print buildMeUp to the console
    }
}
}
addExcitement(sentence, "?", 4)