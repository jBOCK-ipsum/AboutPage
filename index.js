// indicativ of which is active and which can be clocked
// Get the container element
var btnContainer = document.getElementById("ul");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("option");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// try to change text_c when respective button is pressed
function show(param_div_id) {
  document.getElementById("text_c").innerHTML = document.getElementById(
    param_div_id
  ).innerHTML;
}
