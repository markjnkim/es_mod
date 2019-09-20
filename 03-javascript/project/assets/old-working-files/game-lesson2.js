// lesson 1
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 20;
var playerAttack = 10;
var playerMoney = 10;

// lesson 2
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 20;
var enemyAttack = 12;
// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        playerMoney = playerMoney - 10;
        break;
        // debugger;
      }
    }
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
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
    enemyHealth = 10;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
