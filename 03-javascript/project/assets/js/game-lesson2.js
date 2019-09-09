var playerName = 'Clank McKrank';
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  // ask user if they'd liked to fight or run
  var promptFight = window.prompt('Would you like fight or skip this battle? Press 1 to fight and 2 to skip.');

  // convert promptFight from a string to a number
  promptFight = parseInt(promptFight);

  // if player choses to fight, fight
  if (promptFight === 1) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        alert(enemyName + ' has died!');

        // award player money for winning
        playerMoney = playerMoney + 5;

        break;
      } else {
        alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );

      // check player's health
      if (playerName <= 0) {
        window.alert(playerName + ' has died!');
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }

    // if player choses to skip
  } else if (promptFight === 2) {
    window.alert(playerName + ' has decided to skip this fight. You will now lose 2 dollars. Goodbye!');

    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;

    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert('You need to pick a valid option. Try again!');

    // run the fight function over again, but don't forget to pass the enemy's name!
    fight(enemyName);
  }
};

// fight each enemy robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Battlebots! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
  }

}
