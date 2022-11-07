var el = document.querySelector(".box");
const position = { left: 0, top: 0 };

el.addEventListener("click", clickedBox, false);

function clickedBox() {
    if (position.left == 0 && position.top == 0) {
        el.style.left = "600px";
        position.left = 600;
    } else if (position.left == 600 && position.top == 0) {
        el.style.top = "300px";
        position.top = 300;
    } else if (position.left == 600 && position.top == 300) {
        el.style.left = "0px";
        position.left = 0;
    } else if (position.left == 0 && position.top == 300) {
        el.style.top = "0px";
        position.top = 0;
    }
}
// exercise-6
// var loader = document.getElementById("loader");
// var button = document.getElementById("button");
// button.addEventListener("click", function() {
//     loader.classList.toggle('loading')
// })


// exercise-7



//loader.className ="";
var red = document.querySelector('div#loader .red');
var blue = document.querySelector('div#loader .blue');
var green = document.querySelector('div#loader .green');



function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}
var cahngeColor = 1;
// Toggle button code. Don't edit.
var loader = document.getElementById("loader");
var button = document.getElementById("button");
button.addEventListener("click", function() {
    if (loader.className === "loading") {

        loader.className = "";
        if (cahngeColor < 2) {
            red.style.background = randomColor()
            blue.style.background = randomColor()
            green.style.background = randomColor()
        }
    } else {
        loader.className = "loading";
    }
})

//loader.className ="";

// მგონი ეს ჯობია 
// var red = document.querySelector('div#loader .red');
// var blue = document.querySelector('div#loader .blue');
// var green = document.querySelector('div#loader .green');



// function randomColor() {
//     return '#' + Math.random().toString(16).substr(-6);
// }

// // Toggle button code. Don't edit.
// var loader = document.getElementById("loader");
// var button = document.getElementById("button");
// button.addEventListener("click", function() {
//     if (loader.className === "loading") {
//         loader.className = "";
//     } else {
//         red.style.background = randomColor()
//         blue.style.background = randomColor()
//         green.style.background = randomColor()
//         loader.className = "loading";

//     }
// })