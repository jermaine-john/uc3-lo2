function addFruit()
{

var newFruit = document.getElementById("fruitName").value;
const addFruit = document.querySelector("#fruitt");

addFruit.innerHTML += "<option>" + newFruit +"</option>";
}