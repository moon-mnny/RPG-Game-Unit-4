var characters = [
  (zombie = {
    name: "zombie",
    hp: 250,
    power: 10,
    button: function() {
      $(".characters").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/zombi.png" /><p>${this.hp}</p></button>`
      );
    },
    user: function() {
      $(".user-character").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/zombi.png" /><p>${this.hp}</p></button>`
      );
    },
    enemy: function() {
      $(".enemies").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/zombi.png" /><p>${this.hp}</p></button>`
      );
    },
    defender: function() {
      $(".defender").append(
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
    }
  }),
  (dragon = {
    name: "dragon",
    hp: "200",
    power: "40",
    button: function() {
      $(".characters").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/dragon.png" /><p>${this.hp}</p></button>`
      );
    },
    user: function() {
      $(".user-character").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/dragon.png" /><p>${this.hp}</p></button>`
      );
    },
    enemy: function() {
      $(".enemies").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/dragon.png" /><p>${this.hp}</p></button>`
      );
    },
    defender: function() {
      $(".defender").append(
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
  }),
  (kraken = {
    name: "kraken",
    hp: "150",
    power: "70",
    button: function() {
      $(".characters").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/kraken.png" /><p>${this.hp}</p></button>`
      );
    },
    user: function() {
      $(".user-character").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/kraken.png" /><p>${this.hp}</p></button>`
      );
    },
    enemy: function() {
      $(".enemies").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/kraken.png" /><p>${this.hp}</p></button>`
      );
    },
    defender: function() {
      $(".defender").append(
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
  }),
  (werewolf = {
    name: "werewolf",
    hp: "225",
    power: "25",
    button: function() {
      $(".characters").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/werewolf.png" /><p>${this.hp}</p></button>`
      );
    },
    user: function() {
      $(".user-character").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/werewolf.png" /><p>${this.hp}</p></button>`
      );
    },
    enemy: function() {
      $(".enemies").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/werewolf.png" /><p>${this.hp}</p></button>`
      );
    },
    defender: function() {
      $(".defender").append(
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
  }),
  (chimera = {
    name: "chimera",
    hp: "180",
    power: "40",
    button: function() {
      $(".characters").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/chimera.png" /><p>${this.hp}</p></button>`
      );
    },
    user: function() {
      $(".user-character").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/chimera.png" /><p>${this.hp}</p></button>`
      );
    },
    enemy: function() {
      $(".enemies").append(
        `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/chimera.png" /><p>${this.hp}</p></button>`
      );
    },
    defender: function() {
      $(".defender").append(
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
  })
];
var userCharacter;
var defender;
var enemies = [];
var attackCount = 0;
function start() {
  zombie.button();
  dragon.button();
  kraken.button();
  werewolf.button();
  chimera.button();
  userCharacter;
  defender;
  enemies = [];
  attackCount = 0;
}

function locate(clickedChar) {
  if (userCharacter === undefined) {
    userCharacter = clickedChar;
    $(".characters").empty();
    for (var i = 0; i < characters.length; i++) {
      if (characters[i] !== userCharacter) {
        enemies.push(characters[i]);
      }
    }
    userCharacter.user();
    console.log("your character is " + userCharacter);
    console.log("your enemies are " + enemies);
    console.log(defender);
    for (var i = 0; i < enemies.length; i++) {
      console.log(enemies[i]);
      console.log(enemies[i].hp);
      enemies[i].enemy();
    }
  } else {
    debugger;
    defender = clickedChar;
    console.log(defender);
    defender.defender();
  }
}
function chooseDefender(clickedChar) {
  if (userCharacter !== undefined && defender === undefined) {
    defender = clickedChar;
    defender.defender();
  }
}
start();

$("#zombie").click(function() {
  console.log("Button Clicked");
  chooseDefender(zombie);
  locate(zombie);
});
$("#dragon").click(function() {
  console.log("Button Clicked");
  chooseDefender(dragon);
  locate(dragon);
});
$("#kraken").click(function() {
  console.log("Button Clicked");
  chooseDefender(kraken);
  locate(kraken);
});
$("#werewolf").click(function() {
  console.log("Button Clicked");
  chooseDefender(werewolf);
  locate(werewolf);
});
$("#chimera").click(function() {
  console.log("Button Clicked");
  chooseDefender(chimera);
  locate(chimera);
});
$(".attack").click(function() {
  userCharacter.attack(defender);
});
// var characters = [zombie, dragon, kraken, werewolf, chimera];
// var zombie = {
//   name: "zombie",
//   hp: 250,
//   power: 10,
//   button: function() {
//     $(".characters").append(
//       `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/zombi.png" /><p>${this.hp}</p></button>`
//     );
//   },
//   attack: function(defender) {
//     var damage = this.power + this.power * attackCount;
//     console.log(attackCount);
//     console.log(`${this.name} did ${damage} damage`);
//     defender.hp -= damage;
//     attackCount++;
//     console.log(`${defender.name} hp is ${defender.hp}`);
//     if (defender.hp <= 0) {
//       console.log(`${defender.name} defeated!`);
//     }
//   }
// };
// var dragon = {
//   name: "dragon",
//   hp: "200",
//   power: "40",
//   button: function() {
//     $(".characters").append(
//       `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/dragon.png" /><p>${this.hp}</p></button>`
//     );
//   },
//   attack: function(defender) {
//     var damage = this.power + this.power * attackCount;
//     console.log(attackCount);
//     console.log(`${this.name} did ${damage} damage`);
//     defender.hp -= damage;
//     attackCount++;
//     console.log(`${defender.name} hp is ${defender.hp}`);
//     if (defender.hp <= 0) {
//       console.log(`${defender.name} defeated!`);
//     }
//   }
// };
// var kraken = {
//   name: "kraken",
//   hp: "150",
//   power: "70",
//   button: function() {
//     $(".characters").append(
//       `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/kraken.png" /><p>${this.hp}</p></button>`
//     );
//   },
//   attack: function(defender) {
//     var damage = this.power + this.power * attackCount;
//     console.log(attackCount);
//     console.log(`${this.name} did ${damage} damage`);
//     defender.hp -= damage;
//     attackCount++;
//     console.log(`${defender.name} hp is ${defender.hp}`);
//     if (defender.hp <= 0) {
//       console.log(`${defender.name} defeated!`);
//     }
//   }
// };
// var werewolf = {
//   name: "werewolf",
//   hp: "225",
//   power: "25",
//   button: function() {
//     $(".characters").append(
//       `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/werewolf.png" /><p>${this.hp}</p></button>`
//     );
//   },
//   attack: function(defender) {
//     var damage = this.power + this.power * attackCount;
//     console.log(attackCount);
//     console.log(`${this.name} did ${damage} damage`);
//     defender.hp -= damage;
//     attackCount++;
//     console.log(`${defender.name} hp is ${defender.hp}`);
//     if (defender.hp <= 0) {
//       console.log(`${defender.name} defeated!`);
//     }
//   }
// };
// var chimera = {
//   name: "chimera",
//   hp: "180",
//   power: "40",
//   button: function() {
//     $(".characters").append(
//       `<button class="character" id="${this.name}"><p>${this.name}</p><img src="assets/images/chimera.png" /><p>${this.hp}</p></button>`
//     );
//   },
//   attack: function(defender) {
//     var damage = this.power + this.power * attackCount;
//     console.log(attackCount);
//     console.log(`${this.name} did ${damage} damage`);
//     defender.hp -= damage;
//     attackCount++;
//     console.log(`${defender.name} hp is ${defender.hp}`);
//     if (defender.hp <= 0) {
//       console.log(`${defender.name} defeated!`);
//     }
//   }
// };
