// Global variables

var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var playerStats = document.getElementById ('playerStats');
var playerHP = document.getElementById('playerHP');
var bossHP = document.getElementById('bossHP');
var playerMoves = document.getElementById('playerMoves');


// Health var

var playerHP = 60;
var bossHP = 100;

// Starting battle

function beginBattle() {
    bottomRow.innerHTML = "Use the different moves of your hero above to defeat the Dark Knight.";
    stats[0].style.visibility  = "visible";
    stats[1].style.visibility = "visible";
}

// Boss attack

function bossAttack(){
    var attackChoice = Math.ceil(Math.random()*3);
    if (attackChoice == 1) {
        var hitChance = Math.round(Math.random()*20);
    
    if (hitChance <=14) {
        var dmg = Math.round(Math.random()*5)+10;
        playerHP -= dmg;
        if (playerHP < 0){
            playerHP =0;
        }
        bottomRow.innerHTML += "<br>Oh no, you got hit for " + dmg + " points of damage ! You now have " + playerHP + " hp.";  
    }
    else {
        bottomRow.innerHTML += "<br>Great, his attack missed !"
    }
}
    else if (attackChoice == 2){
        var hitChance = Math.round(Math.random()*20);
    
        if (hitChance <=12) {
            var dmg = Math.round(Math.random()*10)+10;
            playerHP -= dmg;
            if (playerHP < 0){
                playerHP =0;
            }
            bottomRow.innerHTML += "<br>Oh no, you got hit for " + dmg + " points of damage ! You now have " + playerHP + " hp.";
        }
        else {
            bottomRow.innerHTML += "<br>Great, his attack missed !"
        }
    } 

    else if (attackChoice == 3){
        var hitChance = Math.round(Math.random()*20);
    
    if (hitChance <10){
        var dmg = Math.round(Math.random()*12)+10;
        bossHP += dmg;
        bottomRow.innerHTML += " <br>The dark Knight healed " + dmg + " hp, you now has " + bossHP + " hp.";
    }
    else {
        bottomRow.innerHTML += "<br>Good news, he couldn't heal him-self !"; 
        }
    }
    if (playerHP == 00) {
        bottomRow.innerHTML += "<br><h2>Oooooh no ! The dark night has defeated you ! <br><button onclick='restartGame()'> Want to give it a new shot ? <br><button onclick='backMenu()'> Want to change character ?";
        playerMoves.style.visibility = "hidden";
    }
}

// Player attack

function attack() {
    var hitChance = Math.round(Math.random()*20);
    
    if (hitChance <18) {
        var dmg = Math.round(Math.random()*12)+10;
        bossHP -= dmg;
        if (bossHP < 0){
            bossHP =0;
        }
        bottomRow.innerHTML = "You hit the boss for " + dmg + " ponts of damage, he now has " + bossHP + " hp.";
    }
    else {
        bottomRow.innerHTML = "Your attack missed !"
    }
    if (bossHP == 0){
        bottomRow.innerHTML += "<br><h2>Congratulation on defeating the Dark Knight ! What a battle that was... <br><button onclick='restartGame()'> Kick his ass again ?<br><button onclick='backMenu()'>Change character ?";
        playerMoves.style.visibility = "hidden";
    }
    else {
        bossAttack()
    }
}

function dodge() {
    var hitChance = Math.round(Math.random()*20);
    
    if (hitChance <16){
        bottomRow.innerHTML = "What a dodge !";
    }
    else {
        bottomRow.innerHTML = "Ouch, you missed that dodge completely...";
        bossAttack()
    }
}

function heal() {
    var hitChance = Math.round(Math.random()*20);
    
    if (hitChance <10){
        var dmg = Math.round(Math.random()*12)+10;
        playerHP += dmg;
        bottomRow.innerHTML = "You successfully healed " + dmg + " hp, you now have " + playerHP + " hp.";
        bossAttack()
    }
    else {
        bottomRow.innerHTML = "Oh no, you failed to heal yourself !";
        bossAttack()
    }
}

// Restart Game

function restartGame(){
    playerHP = 60;
    bossHP = 100;
    playerMoves.style.visibility = "visible";
    beginBattle();
}

function backMenu(){
    window.location.href ='index.html';
}
