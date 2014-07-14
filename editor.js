//Get elements by attribute img
var buttons = document.getElementsByTagName("img");

//Anonymous function with time event setInterval
setInterval(function () {
	//queryCommandState is the method which detects the format of text wherever the cursor is placed. 
    var isBold = document.queryCommandState("Bold");
    var isItalic = document.queryCommandState("Italic");
    var isUnderline = document.queryCommandState("Underline");

    //Ternary operators that look better than if else statements.
    isBold ? buttons[0].style.opacity = 1 : buttons[0].style.opacity = 0.5;
    
    isItalic ? buttons[1].style.opacity = 1 : buttons[1].style.opacity = 0.5;

    isUnderline ? buttons[2].style.opacity = 1 : buttons[2].style.opacity = 0.5;
    
}, 100)