/** Question 4:
* Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
*/

/************For Console*************/

/************For HTML Document*************/
function calArea(){
    //Calculte Area of a triangle (given all sides) using Heron's Formula
    var a = document.getElementsByClassName("display")[0].value;
    var b = document.getElementsByClassName("display")[1].value;
    var c = document.getElementsByClassName("display")[2].value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    var s = 0.5 * (a + b + c)
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("display_here").innerHTML = area;
}
