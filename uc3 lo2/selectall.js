function slctAll(){
    fruits = document.querySelectorAll('#fruitt option');
    
    Array.from(fruits).forEach(function(fruit){
        console.log(fruit);
    })
}