game = document.querySelector("#game")
character = document.querySelector("#character")
obstacle = document.querySelector("#obstacle")
startButton = document.querySelector(".startButton")
diffButton = document.querySelector(".diffBUtton")
counterUI = document.querySelector(".counter")
var counter = 0
var selector = 0
var setHardMode = false;

startButton.addEventListener("click", function(){
    obstacle.classList.add("obstacleMove")
    game.classList.add("backgroundAnimation")
    startButton.style.display = "none"
    if (counter != 0){
        location.reload()
    }
    var checkDead = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        let blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
        
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            obstacle.classList.remove("obstacleMove")
            obstacle.style.display = "none"
            startButton.style.display = "block"
            startButton.innerHTML = "You lost :(\n Click to try again"
            game.classList.remove("backgroundAnimation")
            clearInterval(checkDead)
            clearInterval(runAnimation)
            clearInterval(increaseLevel)
        }else{
            counter++
            counterUI.innerHTML = counter++
        }
    }, 10)
    var runAnimation = setInterval(function(){
        if(character.style.backgroundImage == "url(\"IMG/running_mario.png\")"){
            character.style.backgroundImage = "url(\"IMG/standing_mario.png\")"
        }else{
            character.style.backgroundImage = "url(\"IMG/running_mario.png\")"
        }  
    }, 200)
    document.addEventListener('click', function(){
        if(character.classList != "animate"){
            character.classList.add("animate")
        }
        setTimeout(function(){
            character.classList.remove("animate")
        }, 500)
    })
    if( setHardMode === true){
        var increaseLevel = setInterval(function(){
            console.log("hi")
            animationSpeed = 1 - (counter/50000)
            obstacle.style.animationDuration = animationSpeed + "s"
        }, 1000)
    }
})

diffButton.addEventListener("click", function(){
    if(selector === 0){
        setHardMode = true
        selector = 1
        diffButton.classList.add("activeHard")
    }else{
        setHardMode = false
        selector = 0
        diffButton.classList.remove("activeHard")
    }
})

