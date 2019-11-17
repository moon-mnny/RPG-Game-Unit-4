var characters = [zombie, dragon, kraken, werewolf, chimera];
var userCharacter;
var defender;
var enemies = [];
var attackCount = 0;

var zombie = {
  name: "zombie",
  hp: 250,
  power: 10,
  button: function() {
    $(".characters").append(
      `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/zombi.png" /><p>${this.hp}</p></button>`
    );
  },
  attack: function(defender) {
    var damage = this.power + this.power * attackCount;
    console.log(attackCount);
    console.log(`${this.name} did ${damage} damage`);
    defender.hp -= damage;
    attackCount++;
    console.log(`${defender.name} hp is ${defender.hp}`);
    if (defender.hp <= 0) {
      console.log(`${defender.name} defeated!`);
    }
  },
  locate: function() {
    if (userCharacter === undefined) {
      userCharacter = this;
      $(".characters").appendTo($(".enemies"));
      $(this.button()).appendTo($(".user-character"));
    }
  }
};
var dragon = {
  name: "dragon",
  hp: "200",
  power: "40",
  button: function() {
    $(".characters").append(
      `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/dragon.png" /><p>${this.hp}</p></button>`
    );
  },
  attack: function(defender) {
    var damage = this.power + this.power * attackCount;
    console.log(attackCount);
    console.log(`${this.name} did ${damage} damage`);
    defender.hp -= damage;
    attackCount++;
    console.log(`${defender.name} hp is ${defender.hp}`);
    if (defender.hp <= 0) {
      console.log(`${defender.name} defeated!`);
    }
  }
};
var kraken = {
  name: "kraken",
  hp: "150",
  power: "70",
  button: function() {
    $(".characters").append(
      `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/kraken.png" /><p>${this.hp}</p></button>`
    );
  },
  attack: function(defender) {
    var damage = this.power + this.power * attackCount;
    console.log(attackCount);
    console.log(`${this.name} did ${damage} damage`);
    defender.hp -= damage;
    attackCount++;
    console.log(`${defender.name} hp is ${defender.hp}`);
    if (defender.hp <= 0) {
      console.log(`${defender.name} defeated!`);
    }
  }
};
var werewolf = {
  name: "werewolf",
  hp: "225",
  power: "25",
  button: function() {
    $(".characters").append(
      `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/werewolf.png" /><p>${this.hp}</p></button>`
    );
  },
  attack: function(defender) {
    var damage = this.power + this.power * attackCount;
    console.log(attackCount);
    console.log(`${this.name} did ${damage} damage`);
    defender.hp -= damage;
    attackCount++;
    console.log(`${defender.name} hp is ${defender.hp}`);
    if (defender.hp <= 0) {
      console.log(`${defender.name} defeated!`);
    }
  }
};
var chimera = {
  name: "chimera",
  hp: "180",
  power: "40",
  button: function() {
    $(".characters").append(
      `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/chimera.png" /><p>${this.hp}</p></button>`
    );
  },
  attack: function(defender) {
    var damage = this.power + this.power * attackCount;
    console.log(attackCount);
    console.log(`${this.name} did ${damage} damage`);
    defender.hp -= damage;
    attackCount++;
    console.log(`${defender.name} hp is ${defender.hp}`);
    if (defender.hp <= 0) {
      console.log(`${defender.name} defeated!`);
    }
  }
};

zombie.button();
dragon.button();
kraken.button();
werewolf.button();
chimera.button();
zombie.attack(dragon);
zombie.attack(chimera);
zombie.attack(werewolf);

// $(".character").on("click", setChar);

// $(".character").click(function(event) {
//   if (userCharacter === "") {
//     $(".characters").appendTo($(".enemies"));
//     $(this).appendTo($(".user-character"));
//     console.log($(this).val());
//     userCharacter = $(this).val();
//     console.log(userCharacter);
//   } else {
//   }
// });
