//JS execCommand. 2nd parameter is to show a UI; 3rd is for an extra value argument (null since no such argument is needed)
function edit () {
	text1.document.designMode = "On";
}


function bold () {
	text1.document.execCommand("bold",false,null);
}

function italic (){
	text1.document.execCommand("italic",false,null);
}

function underline () {
	text1.document.execCommand("underline",false,null);
}