var buttons = document.getElementsByTagName("img");

setInterval(function () {
    var isBold = document.queryCommandState("Bold");
    var isItalic = document.queryCommandState("Italic");
    var isUnderline = document.queryCommandState("Underline");

    isBold ? buttons[0].style.opacity = 1 : buttons[0].style.opacity = 0.5;
    
    isItalic ? buttons[1].style.opacity = 1 : buttons[1].style.opacity = 0.5;

    isUnderline ? buttons[2].style.opacity = 1 : buttons[2].style.opacity = 0.5;
    
}, 100)