//let demo = document.getElementById();
//console.log(demo);

//getElementByClassName
/*
let links = document.getElementsByClassName("links"); //html collections
console.log(links);
console.log(Array.isArray(links)); //false
//links[0].style.background = "red";
//links[1].style.background = "purple";
//links[2].style.background = "blue";
//links[3].style.background = "hotpink";

for(let i=0;i<=links.length;i++)
{
    links[i].style.background = "crimson";
}
*/
//getElementByClassName() - getElementByClassName() method returns a collection of all elements in the document with the specified class name,
//                          as an HTMLCollection object.
// if you use the length property of the HTMLCollection object to determine the number of elements with a specified class name,
// then you can loop through all elements and extract the info;

/*
let links = document.getElementsByTagName("a"); //html collections object
//links[0].style.color = "#111";
//links[4].style.color = "crimson";

for(let i=0;i<=links.length;i++)
{
    links[i].style.color = "hotpink";
}
*/

/*
let demo = document.getElementsById("demo");
//add attributes
// setAttributes method

demo.setAttribute("class", "btn btn-danger");
demo.setAttribute("title", "title is tooltip for an element");
demo.setAttribute("name", "I an name");

console.log(demo.getAttribute)
*/
// DOMTokenList - DOMTokenList interface represents a set of space-separated tokens. Such a set is returned by Element.classList, HTMLLinkElement.relList,
//               HTMLAnchorElement.relList, HTMLAreaElement.relList

//difference between classname and classlist
// - classList - you can add or remove a class without affecting any others the element may have. But if you assign "className",
// It will wipe out any existing classes while adding the new one

//let links = document.getElementsByTagName("a");

/*
for(let i=0;i<links.length;i++){
    links[i].className = "links- " + i;
}
*/
/*-----------------For..of-------------------------------*/
// The for...of statement creates a loop iterating over iterable objects, including: built-in 
// String , Array, array-like objects (e.g.. arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

/*
const array1 = ['a','b','c'];

for(const element of array1){
    console.log(element);
}
*/
//expected output: "a"
//expected output: "b"
//expected output: "c"

/*
console.log(Array.isArray(links)); //false

[...links].forEach(function (link,i ) {
    console.log(link);
    link.className = "spread" + i;
});
*/

/*
Array.from(links).forEach(function (link,i){
    console.log(link);
    link.className = "arrayFrom-" + i;
});
*/

/*

function Jspiders(){
    return arguments;
}

let str = "hello jspiders";

let users = Jspiders("shashi", "shishra", "manu");

[...users].forEach(function(user){
    console.log(user); // will return chombu
})
*/
/*
for(let user of users){
    console.log(user);
}

for(let s of str){
    console.log(s);
}
*/

/*
let linkOld = document.getElementsByTagName("a"); //html collection
[...links].forEach(link => (link.style.background = "red"));

console.log(linkOld, "TagName way");

let linksNew = document.querySelectorAll("a"); //nodeList //css selectors like id, class, element nodelist is not an array still it is supporting foreach method
console.log(linksNew, "Query Selector way"); // 
*/

/*
let LinksOdd = document.querySelectorAll("a:nth-child(odd)");
let LinksEven = document.querySelectorAll("a:nth-child(even)");

console.log(Array.isArray(LinksOdd));
LinksOdd.forEach(odd => odd.classList.add("btn", "btn-success"));
LinksEven.forEach(even => even.classList.add("btn", "btn-danger"));
*/

/*
let template = document.querySelector(".template");
let Demo = document.querySelector("#Demo");
let p = document.querySelector("p");
console.log(template);
console.log(Demo);
console.log(p);
*/

/*
let username = document.getElementById("username");
console.log(username);
username.addEventListener("keyup", e => {
    console.log(e.target.value); // It is getting current value
})
*/

/*
let textArea = document.getElementById("textArea");
let textAreaClone = document.getElementById("textAreaClone");

console.log(textArea);
console.log(textAreaClone);

textArea.addEventListener("keyup", e=>{
    let result = e.target.value;
    textAreaClone.innerHTML = result;
})
*/

/*
let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener("keyup", e=>{
    let result = e.target.value;
    
    if(result.length<=3)
    {
        username.style.borderColor = "red";
        username.style.background = "red";
        username.style.color = "white";
    }
    else if(result.length>3)
    else if(result.length>3 && result.length<=9)
    {
         = "orange";
    }
    else if(result.length>9)
    {
        result.style.color = "green";
    }
})
*/

// prevent details - The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event
// will not occur.

/*
let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorBlock = document.getElementById('errorBlock');
console.log(username.value);

form.addEventListener("submit", e=> {
    let errorMessages = [];
    e.preventDefault();
    var name = username.value;
    var pass = password.value;
    
    if(name==="" || name===null){
        errorMessages.push("Username is required");
    }
    if(pass==="" || pass==null)
    {
        errorMessages.push("Password is required");
    }
    if(errorMessages.length>0)
    {
        errorBlock.innerHTML = errorMessages.join("");
    }
    else 
    {
        console.log(name);
        if(pass.length>=6)
        {
        console.log(pass);
        }
        else {
            console.log("password should be greater than 6 character");
        }

        username.value = "";
        password.value = "";
    }
})
*/
// BigInt is a built-in object that provides a way to represent whole numbers larger than (2^53);
// which is the largest number javaScript 

/*
let lists = document.querySelectorAll("li");
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", e=> {
    e.preventDefault();
    let item = input.value;
    console.log(item);
    lists.forEach(list => {
        list.append(item);
    });
});

for(let list of lists){
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
    btn.textContent = "Remove";
    list.appendChild(btn);
    //DOM EVENTS
    list.addEventListener("click", e=>{
        console.log(e.target);
        btn.parentElement.remove(); //remove method is used for deleting nodelist
    });
}
*/
// Bubbling - When an event happens on an element, It first runs the handlers on it, then on its parent, then al the way up on the ancestors.
//capture - ancestors -> parent -> element / The event goes down to element
//Stopping bubbling - The method for it is event.stopPropagation();

/*
let child = document.getElementById("child");
let parent = document.getElementById("parent");
let grandParent = document.getElementById("grandParent");

child.addEventListener("click", e => {
    console.log("child clicked");
    e.stopPropagation()
});

parent.addEventListener("click", e => {
    console.log("Parent Clicked");
});

grandParent.addEventListener("click", e => {
    console.log("grand Parent Clicked");
})

*/

// Git - Git is a free and open source distributed version control system designed to handle everything from small to very
// large projects with speed and efficiency. 

/*
             1. git init
             2. git config --global user.name "Santosh"
             3. git config --global user.email "santoshkumar_de@srmuniv.edu.in"
             4. git add .
             5. git commit -m "commit_name"     // m = message
                    
*/

/* 

mkdir Axisbank
cd Axisbank
touch index.html
touch mysoreBranch.js
touch kgfbranch.js
touch bangalorebranch.js
*/