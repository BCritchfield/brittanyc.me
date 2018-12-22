let  GameManager = {
    setGameStart: function(classType) {
        console.log("here");
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch(classType) {
            case "Human":
            player = new Player(classType, 100, 100, 100, 100);
            break;
            case "Vulcan":
            player = new Player(classType, 100, 100, 100, 100);
            break;
            case "Klingon":
            player = new Player(classType, 100, 100, 100, 100);
            break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src = "img/player-icons/' + 
        classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType +
        '</h3><p class = "health-player">Health: ' + player.health + '</p><p>Intelligence: ' + player.intelligence + 
        '</p><p>Strength: ' + player.strength + 
        '</p><p>Agility: ' + player.agility + 
        '</p><p>Phaser Power: ' + player.phaserPower + '</p>';
    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "GameManager.setFight()">Search for an enemy!</a>';
        getArena.style.visibility = "visible";

    },
    
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //all enemies
        let enemy0 = new Enemy('Borg', 100, 100, 100, 100);
        let enemy1 = new Enemy('Romulan', 100, 100, 100, 100);
        //modify when adding more enemies
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        //TODO: refactor, create list of enemies and choose random index
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy0;
                break;
            case 1:
                enemy = enemy1;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src = "img/enemy-icons/' + enemy.enemyType.toLowerCase() + '.jpg" alt = "' + enemy.enemyType + 
        '"class = "img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class = "health-enemy">Health: ' +
        enemy.health + '</p><p>Intelligence: ' + enemy.intelligence + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' +
        enemy.agility + '</p><p>Phaser Power: ' + enemy.phaserPower + '</p></div>';
    }
    
}