var zombie = {
  name: "zombie",
  hp: "250",
  power: "10",
  move: function() {
    userCharacter.push($(this));
    console.log(userCharacter);
  }
};
var dragon = {
  name: "dragon",
  hp: "200",
  power: "40"
};
var kraken = {
  name: "kraken",
  hp: "150",
  power: "70"
};
var werewolf = {
  name: "werewolf",
  hp: "225",
  power: "25"
};
var chimera = {
  name: "chimera",
  hp: "180",
  power: "40"
};
var characters = [zombie, dragon, kraken, werewolf, chimera];
var userCharacter = "";
var enemies = [];

$(".character").click(function(event) {
  if (userCharacter === "") {
    $(".characters").appendTo($(".enemies"));
    $(this).appendTo($(".user-character"));
    console.log($(this).val());
    userCharacter = $(this).val();
    console.log(userCharacter);
  } else {
  }
});
