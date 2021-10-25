
/*
---Test JSON Files---
Website URL
https://www.dnd5eapi.co/api/monsters/bandit

Local URL
scripts/bandit.json
*/

//Fetch bandit json file
fetch('../scripts/bandit.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(obj) {
    var action = 1;
    actionName = obj.actions[action].name;
    damageRoll = obj.actions[action].damage[0].damage_dice;
    attackBonus = obj.actions[action].attack_bonus;
    showDie();
  })
  .catch(function(error) {
    console.error('Something Went Wrong');
    console.error(error);
  });

//show dice roll
function showDie(){
  document.getElementById("dice").innerHTML = actionName;
}

//button push
function inputted() {
  roll("1d20+");
  roll(damageRoll);
}

//Change HTML to Value
function roll(input) {
  console.log("Roll(); was Called");

  //import json string
  var str = input;

  //find d and + in string
  var d = str.indexOf("d");
  var bonus = str.indexOf("+")

  //coordinates for slice(); on string
  var sliceOne, sliceTwo, sliceThree;

  //Changing Slice Positions on String
  switch (d) {
    case 1:
      sliceOne = 1;
      sliceTwo = 2;
      break;
    case 2:
      sliceOne = 2;
      sliceTwo = 3;
      break;
    case 3:
      sliceOne = 3;
      sliceTwo = 4;
      break;
    case 4:
      sliceOne = 4;
      sliceTwo = 5;
      break;
    default:
      console.log("#D# is Broken");
  }
  switch (bonus) {
    case 1:
      sliceThree = 1;
      break;
    case 2:
      sliceThree = 2;
      break;
    case 3:
      sliceThree = 3;
      break;
    case 4:
      sliceThree = 4;
      break;
    case 5:
      sliceThree = 5;
      break;
    default:
      console.log("Bonus Switch is Broken");
  }

  //Assign, Slice, and Add Intergers
  var diceCount = str.slice(0, sliceOne);
  var diceType = str.slice(sliceTwo, sliceThree);

  var diceBonus;
  var msgTag;
  var rolls;

  var is20 = str.slice(0, bonus);
  if (is20 == "1d20") {
    diceBonus = attackBonus;
    msgTag = " To Hit";
    rolls = "roll"
  } else {
    diceBonus = parseInt(str.slice(bonus+1, str.length));
    msgTag = " Damage";
    rolls = "damage"
  }

  //Rolling Random Number and Assigning it
  var roll = [];
  var add = 0;
  for (var i = 0; i < diceCount; i++) {
    roll.push(Math.floor(Math.random() * diceType)+1);
    add = add + roll[i];
  }

  //adding up the final numbers
  var output = add + diceBonus;

  //Logs for Debugging
  console.log("You roll " + diceCount + "d" + diceType + " + " + diceBonus);
  console.log("You rolled: " + add);
  console.log("Your Bonus: " + diceBonus);
  console.log("Your total: " + output);
  console.log();

  document.getElementById(rolls).innerHTML = output + msgTag;
}
