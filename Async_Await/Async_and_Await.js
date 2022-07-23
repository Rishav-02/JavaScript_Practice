/* async function myFunction(){
    return "Hello";
}
is same as:

function myFunction(){
    return Promise.resolve("Hello");
}   */

async function fun1(){
    console.log('Inside fun1 function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

}

console.log("Before calling fun1");
let a = fun1();
console.log("After calling fun1");
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file");