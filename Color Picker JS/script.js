// 1. Write code so that the colour inputs match the background generated on the first page load. 
// 2. Display the initial CSS linear gradient property on page load.
// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// initial exercise vars notouch
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// personal vars
var button = document.getElementById("btn");

// 1st and 2nd tast - Function call to override default color inputs values at loading, passively completing second task.
setGradient();

// main exercise function
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value	+ ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// personal function to get and apply random color to css
function getRandColor() {
	// stolen variable for random color
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + randomColor1	+ ", " + randomColor2 + ")";
	css.textContent = body.style.background + ";";
	color1.value = randomColor1;
	color2.value = randomColor2;
}

// main exercise base calls
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// personal calls
button.addEventListener("click", getRandColor);