
var b=0;

function toUpper(){
    if(b==0){
  fruits = document.querySelectorAll('#fruitt option');
    
    Array.from(fruits).forEach(function(fruit){
        fruit.innerHTML = fruit.textContent.toUpperCase();
        b=1;})
}
else{
    fruits = document.querySelectorAll('#fruitt option');
    
    Array.from(fruits).forEach(function(fruit){
        fruit.innerHTML = fruit.textContent.toLowerCase();
        b=0;})
}

}

