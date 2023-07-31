
var userClickedPattern = [];
var gamePattern = [];
var level = 0;

$(document).keydown(function(event) {

    var h1content = $("h1").text();

    if (event.key === "a" && h1content === 'Press A Key to Start' ||
        event.key === "a" && h1content === 'Game over!   Press A to try again' ) {

        setTimeout(function ()  {
            nextSequence();
        }, "100");
    }
});

$(".btn").click(function() {


    $(this).fadeOut(100).fadeIn(100);

    var userChosenColor = $(this).attr('id');
    var audio = new Audio("sounds/" + userChosenColor + ".mp3")
    audio.play();

    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    if (userClickedPattern.length === gamePattern.length && userClickedPattern.toString() === gamePattern.toString()) {
        setTimeout(function ()  {
            nextSequence()
        }, "800");
    } else if (userClickedPattern.toString() !== gamePattern.slice(0, userClickedPattern.length).toString()) {
        var wrongAudio = new Audio("sounds/wrong.mp3")
        wrongAudio.play();
        $("h1").html("Game over! <br> <br> Press A to try again" )
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200)
        
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
    }
});

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4);

    var buttonColors = ["red", "blue", "green", "yellow"];
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

        var audio = new Audio("sounds/" + randomChosenColor + ".mp3")
        audio.play();

    $("h1").text("Level " + level)
    level++
    userClickedPattern = []
}