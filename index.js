for(i=0;i<7;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function (){
            var alpha=this.innerText;
            playsound(alpha);
            buttonAnimation(alpha);
        });

    }
document.addEventListener("keydown",function(event){
    var x=event.key;
    playsound(x);
    buttonAnimation(x);
});
function playsound(x)
{
    switch(x)
    {
        case "w":
            var sound=new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound=new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound=new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound=new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            var sound=new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        default:
            alert("wrong choice");
    }
}

function buttonAnimation(x)
{
    var activeButton=document.querySelector("."+x);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },200);
}