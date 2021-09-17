// for the mouse click
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonPressed = this.innerHTML;
   makeSound(buttonPressed);
   animate(buttonPressed);
});
}
// for the key press
document.addEventListener("keypress",function(event){
var keyPressed = event.key;// to enable upper case.
keyPressed = keyPressed.toLowerCase();
makeSound(keyPressed);
animate(keyPressed);
});

function makeSound(key){
  switch (key) {
    case  "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio ("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
      break;

    default:
}
};
//adding animation
function animate(currentkey){
  var tobeanimated = document.querySelector("." + currentkey);
  tobeanimated.classList.add("pressed");//adding class
  setTimeout(function(){ tobeanimated.classList.remove("pressed"); }, 30);
}
