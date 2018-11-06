/** Question 3:
 *  Write a JavaScript program to get the current date.  Go to the editor
 *  Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
/******For Console********/

var todays_date = new Date();
var month = todays_date.getMonth();
var day = todays_date.getDate();
var year = todays_date.getFullYear();
//For mm-dd-yyyy, mm/dd/yyyy
console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);
console.log('\n');
//dd-mm-yyyy, dd/mm/yyyy
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);

/****** For HTML Document ********/
function getCurrentDate(){
    var x = document.getElementsByClassName("display1");
    x[1].innerHTML = `${month}/${day}/${year}`;
    //[0].innerHTML = `${month}/${day}/${year} <br> ${month}-${day}-${year} <br><br>`;
    //OR
    //document.getElementsByClassName("display1")[1].innerHTML = `${month}/${day}/${year}`;
}

