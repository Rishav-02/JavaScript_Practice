
// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

//Get request:
function getData(){
    console.log("Started getData");
    url = "fetch_info.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.text();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}
getData();

////response.text() gives plain text
//response.json() automatically change to parse and stringify
//fetch(url)- In place of url we use the path of server side language like .php,.asp,.txt,etc.
function get1Data(){
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
    return response.json();
    }).then((data)=>{     //here data pass in JS object form
       console.log(data);

       for(var x in data) {
         console.log(`${data[x].node_id}`);  
       }
    })
}
get1Data();


//Post request:
/* The response of a fetch() request is a stream object, which means that when we call the json() method, a Promise is returned since the reading of the stream will happen asynchronously. */
fetch("https://jsonplaceholder.typicode.com/posts", {
     
    // Adding method type:-
    //"POST"- to insert/create data ,"PUT"- for updating a server's data,"DELETE"- to deletion of server's data,"PATCH"- It applies partial modification to a server,default value is "GET"- Read data.
    method: "POST",
     
    // Adding body or contents to send
    //In body: we passes those data that we want to save in server.Format is Form data/JSON data/Text
    body: JSON.stringify({
        title: "Student",
        body: "BCA",
        userId: 11
    }),
     
    // Adding headers to the request
    //In headers we passes data through body of which types of Format here JSON data type.
    headers: {
        //JSON data
        "Content-type": "application/json; charset=UTF-8",
    //"Content-type": "application/x-www-form-urlencoded" this is Form data
    }
})
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
