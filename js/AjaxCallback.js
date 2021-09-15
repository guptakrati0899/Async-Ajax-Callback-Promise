let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs: " + date.getMinutes() + "Mins: " + date.getSeconds() + "Secs: ";
}

function makeAJAXCall(methodType, url, callback, async = true, data = null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(methodType + "State change called. Ready State: " + xhr.readyState + "Status: " + xhr.status);

    }
    xhr.open(methodType,url,true);
    xhr.send();
    console.log(methodType + "request sent to server at: " + showTime());
}

const getURL = "http://localhost:3000/employees/1";

function getUserDetails(data){
    console.log("Get user data at: " + showTime() + "Data: " + data);
}


makeAJAXCall("GET", getURL, true);
console.log("Made GET AJAX call to server at : " + showTime());


const deleteURL = "http://localhost:3000/employees/4";
function userDelete(data){
    console.log("User Deleted " + showTime() + "Data: "+ data)
}

makeAJAXCall("DELETE", deleteURL,userDelete,false);

const postURL = "http://localhost:3000/employees"
const emplData = {"name": "Akshara","salary":"800000"};
function userAdded(data){
    console.log("User Added:"  + showTime() + "Data: "+ data)
}

makeAJAXCall("POST",postURL,userAdded,true,emplData);