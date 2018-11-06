/** Question 4:
 * Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
 */
//var word = "TEG"

/*********For Console******** */

var new_word = ""
var count = 0;
for(var i = 0; i < word.length; i++){
    var word = " teg";
    //the loop is enabled only when i is less than the length of the word
    //this is because the word count starts from 0
    count += 1;
    var letter = word[word.length - count];
    if (letter !== undefined) {
        new_word += letter;
    }
}
console.log(new_word);

/*********For HTML Document******** */
function rotate_string(word){
    for(var i = 0; i < word.length; i++){
        count += 1;
        var letter = word[word.length - count];
        if (letter !== undefined) {
            new_word += letter;
        }else{
            document.getElementsByClassName("display")[1].innerHTML = "OOps... You entered a number.";
        } 
    }
    return document.getElementsByClassName("display")[0].innerHTML = new_word;
}
