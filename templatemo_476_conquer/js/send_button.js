function changeButtonStyle() {
   var css = "#tmNavbar ul li a:hover { background-color: #ffffff; color: #000000; }";
   var style = document.createElement("style");

   style.appendChild(document.createTextNode(css));
   document.getElementsByTagName("head")[0].appendChild(style);
}

function send_button() {

	var errorMessage = "";

	var x=document.getElementById("name").value;
	var y=document.getElementById("mail").value;
	var z=document.getElementById("subject").value;
	var c=document.getElementById("comment").value;
	
	if (x == ""){
		errorMessage += "Name is missing";
	}
	if (y == " ") {
		errorMessage += "\nMail is missing";
	}
	if (z == ""){
		errorMessage += "\nSubject is missing";
	}
	if (c == ""){
		errorMessage += "\nComment is missing";
	}

	if (errorMessage.length == 0){
		alert("Name :" + x + "\nEmail: " + y + "\nSubject: " + z + "\ncomment : " + c );
	} else {
		alert(errorMessage);
	}

}

function changeButtonText() {
	var textChange = document.getElementById("green-button").value;
	if(textChange.value == "Green Button") textChange.value == "Red Button";
	else textChange.value == "See Details";

	


	
}





