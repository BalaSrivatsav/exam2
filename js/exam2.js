/*
  Do NOT uncomment the example lines of code below (rows 8-10), they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1




// Problem 2




// Problem 3
document.addEventListener('dblclick', function(){
  thumbnail.addEventListener("dblclick", function(){
    display.style.backgroundImage = "url(" + this.arc + ")";
    display.textContent = this.alt;
    this.style.opacity = 0;
  })
})

// Problem 4
// Part 1
// thumbnail.addEventListener("mouseover", function(){
//   display.style.textContent 
// }) 
document.getElementById("practice").addEventListener("mouseover", function() {
  document.getElementById("practice").style.color = "blue";
  const object = document.getElementById("practice")
  object.style.borderColor = "red";

});

// Problem 4
// Part 2
document.getElementById("practice").addEventListener("mouseout", function() {
  document.getElementById("practice").style.color = "black";
});

// Problem 5
document.getElementById("highlight").addEventListener("focus", function() {
  document.getElementById("highlight").style.color = "blue";
});
document.getElementById("highlight").removeEventListener("focus", function() {
  document.getElementById("highlight").style.color = "black";
});
// Problem 6



// Problem 7





// Problem 8



// Problem 9
thumbnail.addEventListener("click", function(){
  console.log(this.alt);
})
// let imageAltConsole = document.getElementById("alt");
// console.log(imageAltConsole.value);