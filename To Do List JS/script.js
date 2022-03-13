// 1. If you click on the list item, it toggles the .done  class on and off.
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

// exercise notouch variables ---------------------------------------
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// end exercise notouch variables -----------------------------------

var everyLi = document.querySelectorAll("li"); 				// main array with all "li" elements

everyLi.forEach(liFix); 						// loop telling all "li" elements to exec "liFix" function

function liFix(elements) {                          			// function telling "elements" of the "everyLi" array to:
	elements.addEventListener("click", function(){  		// listen any click on any "element" and exec the function
		elements.classList.toggle("done");          		// toggle class "done" on clicked "element"
	})
	var btn = document.createElement("button");     		// variable declaring "btn" as a creating button element
	btn.innerText = "Delete";					// telling the creating button to have "Delete" as text
	elements.appendChild(btn);					// appending new "button" element as child of "li" parent Node
	btn.addEventListener("click", function(){			// listen any click on any "btn" element and exec the function
			btn.parentNode.remove();			// remove the parent Node (li) on clicked "btn"
		})
}

function createListElement() {						// base function of the exercise edited to support new features
	var li = document.createElement("li");
	var btn = document.createElement("button");			// variable declaring "btn" as a creating button element
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", function() {			// listen any click on any "li" element and exec the function
		li.classList.toggle("done");				// toggle class "done" on clicked "li" element
	});
	btn.innerText = "Delete";					// telling the creating button to have "Delete" as text
	li.appendChild(btn);						// appending new "button" element as child of "li" parent Node
	btn.addEventListener("click", function(){			// listen any click on any "btn" element and exec the function
			btn.parentNode.remove();			// remove the parent Node (li) on clicked "btn"
		})
}

// exercise notouch JS ----------------------------------------------
function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// exercise base calls notouch---------------------------------------
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
