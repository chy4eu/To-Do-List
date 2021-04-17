

// Create a "close" button and append it to each list item
var myClosebtn = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myClosebtn.length; i++) {
  var btn = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  myClosebtn[i].appendChild(btn);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// Alert if the add button is clicked without any input.
var submit = document.getElementById('button');
var input = document.getElementById('input');

var ul = document.querySelector('ul');
submit.addEventListener('click', () =>{

var item = input.value;
	if (item.length == "") {
		alert('Please enter your list');
	}
// Create a new list item and add "close" button to it.
	else{
		newLi = document.createElement('li');
		newLi.appendChild(document.createTextNode(item));
		ul.appendChild(newLi);
		input.value = "";

		var btn = document.createElement("BUTTON");
		var txt = document.createTextNode("\u00D7");
		btn.className = "close";
		btn.appendChild(txt);
		myClosebtn[i].appendChild(btn);
}
	for (i = 0; i < close.length; i++) {
  		close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
  }
}
	});

