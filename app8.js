
answer1;

function outerFun(a){
  function innerFun(b){
 return a+b;
  }
  return innerFun(30);
 }
 let add =outerFun(5);
 console.log(add);
 

 answer2;

 let arr=[1,2,3,4,5];
function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}
let val= 4;
let result= searchArray(arr,val);
console.log(result);


answer 3;

function addPara( ) {

  let paragraph = document.createElement("p");

  paragraph.innerText = " PAkistan is my beautiful country , i love my country alottt, Allah protect my country from evil eyes ,Ameenn, Summa Ameen , Pakistan Zindabad";
  paragraph.style.color="white";
  paragraph.style.backgroundColor= "green ";
  paragraph.style.fontSize =" 20px";
  paragraph.style.margin=" 20px";
  paragraph.style.padding=" 40px";
  document.body.appendChild(paragraph);

}
addPara( );


answer 4; 


let list = document.getElementsByTagName("ul");
function addItem() {
  
  let newItemText = document.getElementById("newItem").value;
  
  
  let newItem = document.createElement("li");
  

  let newText = document.createTextNode(newItemText);
  newItem.appendChild(newText);
  
 let list = document.getElementById("myList");
  list.appendChild(newItem);
}

answer 5;



function changeBgColor() {
 
  let element = document.getElementById("myStyle");

   element.style.backgroundColor = " red";
}


answer 6;

let myObj = {
  name: "rizwan",
  fName: "khan",
  age: 20,

};
saveObjectToLocalStorage("myKey", myObj);
function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}


answer 7;



let student = {
  name: "ahmed",
  age: 15,
  subject: "math"
};


localStorage.setItem("myKey", JSON.stringify(student));

let retrievedStudent = getObjectFromLocalStorage("myKey");

console.log(retrievedStudent);

function getObjectFromLocalStorage(key) {
  
  let obj = JSON.parse(localStorage.getItem(key));
  return obj;
}



answer 8:

let mySelf = {
  name: "Aleena",
  age: 25,
  email: "aleena@gmail.com"
};

let newObject = saveObjectToLocalStorage(mySelf);

console.log(newObject);
function saveObjectToLocalStorage(obj) {
  for (let key in obj) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  }

  let newSelf = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    newSelf[key] = JSON.parse(localStorage.getItem(key));
  }
  return newSelf;
}