function handleClick() {
//    if (i === 0) {
    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();
    alert("I got clicked!");
//    }
}

for (var i=0 ;i<document.getElementsByTagName(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}