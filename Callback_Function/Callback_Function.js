//A callback is a function that is executed after another function has finished executing. As we have studied earlier that functions are objects. Functions can take functions as arguments and can be returned by other functions. Functions that take another function as an argument are called higher-order functions. So, the callback function can also be defined as any function that is passed as an argument is called a callback function.It may be Synchronous or Asynchronous.

//In the real world, callbacks are most often used with asynchronous functions.

// Pretend that this response is coming from the server
const students = [
    {name: "Rishav", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"} 
]

//Asynchronous run in background
//Functions running in parallel with other functions are called asynchronous.Here use two functions setTimeout() and setInterval().

function enrollStudent(student, callback){  //here student is object
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();//upper code run then callback function call 
    }, 3000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();