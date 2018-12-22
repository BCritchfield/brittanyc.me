let enemy;

function Enemy(enemyType, health, intelligence, strength, agility){
    this.enemyType = enemyType;
    this.health = health;
    this.intelligence = intelligence;
    this.strength = strength;
    this.agility = agility;
    this.phaserPower = 10;
}