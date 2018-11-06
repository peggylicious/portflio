/* Question 1:
Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

//Define variables for the current date and time using the Date() constructor
//The getDay() method returns the day as a value between 0 - 6
var today = new Date();
var current_day = today.getDay();
var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//CHECKING: console.log("Today is : " + days_of_week[current_day]);

/************************To Get the Current Time********************************* */

//Define variables for time in hours, minutes, seconds,
//using the javascript date getter method to get the respective times
var current_hour = today.getHours();
var current_minute = today.getMinutes();
var current_second = today.getSeconds();

/*******For HTML Console***********/
function display_time(){
    if (current_hour < 12){
        console.log(`Today is : ${days_of_week[current_day]}`);
        console.log(`The time is ${current_hour}AM : ${current_minute} : ${current_second}`);
    }else{
        console.log(`Today is : ${days_of_week[current_day]}`);
        console.log(`The time is ${current_hour}PM : ${current_minute} : ${current_second}`);
    }
}
display_time();


/*******For HTML Document***********/
function get_current_time(){
    if (current_hour < 12){
    document.getElementById("display").innerHTML = `Today is : ${days_of_week[current_day]}`;
    document.getElementById("display2").innerHTML = `The time is ${current_hour} : ${current_minute} : ${current_second}AM`;
}else{
    document.getElementById("display").innerHTML = `Today is : ${days_of_week[current_day]}`
    document.getElementById("display2").innerHTML = `The time is ${current_hour} : ${current_minute} : ${current_second}PM`;
}

"The time is " + current_hour + " : " + current_minute + " : " + current_second;
}