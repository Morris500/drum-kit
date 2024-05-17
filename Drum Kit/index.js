
var drumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumbutton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var click = this.innerHTML;

makesound (click);
animation (click);
});
}

document.addEventListener("keypress", function(){
   var keypress = event.key;

makesound (keypress);
animation (keypress);
/*   switch (keypress) {
     case "w":
       var audio = new Audio("sounds/tom-1.mp3")
       audio.play();
       break;
       case "a":
       var audio = new Audio("sounds/tom-2.mp3")
       audio.play();
         break;
       case "s" :
       var audio = new Audio("sounds/tom-3.mp3")
         audio.play();
           break;
           case "d":
           var audio = new Audio("sounds/tom-4.mp3")
           audio.play();
             break;
             case "j":
             var audio = new Audio("sounds/snare.mp3")
             audio.play();
               break;
               case "k":
               var audio = new Audio("sounds/crash.mp3")
               audio.play();
                 break;
                 case "l" :
                 var audio = new Audio("sounds/kick-bass.mp3")
                 audio.play();
                   break;
     default: console.log(keypress);
}
*/
});

function makesound (key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;
      case "a":
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
        break;
      case "s" :
      var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
          break;
          case "d":
          var audio = new Audio("sounds/tom-4.mp3")
          audio.play();
            break;
            case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
              break;
              case "k":
              var audio = new Audio("sounds/crash.mp3")
              audio.play();
                break;
                case "l" :
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                  break;
    default: console.log(key);

  }
}

  function animation (key) {
    var activebutton =  document.querySelector("." + key);
  activebutton.classList.add("pressed");


  setTimeout(boy, 100);
  function boy() {activebutton.classList.remove("pressed");}

 }
