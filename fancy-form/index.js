function validateform() {
  if (document.myform.Name.value == "") {
    alert("Name must be filled out");
    return false;
  }

	if (document.myform.College.value == "") {
    alert( "Please provide your College name!" );
    return false;
  }

	var emailID = document.myform.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (atpos < 1 || ( dotpos - atpos < 2 )) {
		 alert("Please enter valid email ID")
		 return false;
	}

	if(document.myform.Pwd.value < 8) {
		alert("Password must have atleast 7 characters");
		return false;
	}

	return true;
}


function clickbutton(evt) {
  var res = validateform()
  if(res == false)
  {
    console.log("executong...")
  	document.getElementById("button1").value="Ooops!!";
	}
	else {
  	document.getElementById("button1").value="Done";
	}
  return res;
}

function focusmethod() {
  document.getElementById("button1").value="Done";
}
