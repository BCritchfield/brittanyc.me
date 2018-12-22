let player;

function Player(classType, health, intelligence, strength, agility){
    this.classType = classType;
    this.health = health;
    this.intelligence = intelligence;
    this.strength = strength;
    this.agility = agility;

    this.phaserPower = 10;
}

let PlayerMoves = {
    calcAttack: function() {
        //TODO: add randomness so top doesn't always get first
        let getPlayerAgility = player.agility * player.intelligence;
        let getEnemyAgility = enemy.agility * enemy.intelligence;
    
    let playerAttack = function() {
        let baseDamage = player.strength * player.agility;
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let outputDamage = baseDamage + offsetDamage;
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility/10)/2) + 1;
        return [outputDamage, numberOfHits];

    }


    let enemyAttack = function() {
        let baseDamage = enemy.strength * enemy.agility;
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let outputDamage = baseDamage + offsetDamage;
        let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility/10)/2) + 1;
        return [outputDamage, numberOfHits];

    }

    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    if (getPlayerAgility >= getEnemyAgility) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health =- totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " +
            playerAttackValues[1] + " times.");

        if (enemy.health <= 0){
            alert("You win! Refresh to play again");
            getEnemyHealth.innerHTML = 'Health: 0';
            getPlayerHealth.innerHTML = 'Health: ' + player.health;

        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            //enemy attacks
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health =- totalDamage; 
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("You loose! Refresh browser to play again");
                getPlayerHealth.innerHTML = "Health: 0";
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
            } else {
                getPlayerHealth.innerHTML = "Health: " + player.health;

            }

        }

    }
     else if (getEnemyAgility > getPlayerAgility) {
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health =- totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " +
            enemyAttackValues[1] + " times.");

        if (player.health <= 0){
            alert("You loose! Refresh to play again");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;

        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            //player attacks
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health =- totalDamage; 
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("You win! Refresh browser to play again");
                getEnemyHealth.innerHTML = "Health: 0";
                getPlayerHealth.innerHTML = "Health: " + player.health;
            } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.health;

            }

        }

    }
}
}