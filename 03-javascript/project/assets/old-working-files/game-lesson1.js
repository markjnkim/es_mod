// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 20;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName);
// console.log(playerHealth, playerAttack, playerMoney);
// console.log('You can put regular sentences in these.');

// lesson 2
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
// var enemyHealth = 50;
// var enemyAttack = 12;

// console.log(enemyNames);
// // console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// console.log(enemyNames[3]);
// for(var i = 0; i < 3; i++) console.log("apple " + i);
// for(var i = 0; i < enemyNames.length; i++) console.log(enemyNames[i]);

var enemyHealth = 20;
var enemyAttack = 12;
var printEnemy = function(enemy, index) {
  console.log(enemy, index);
}
// fight function
var fight = function(enemyName) {
  // let user know they have begun the fight
  while(enemyHealth > 0) {
    // window.alert('Welcome to Battlebots!');

    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player choses to fight, fight
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
        // break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
      // if player choses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        // break;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
      // if player did not chose 1 or 2 in prompt
    } else {
      // break;
      window.alert('You need to pick a valid option. Try again!');
  }
}
};
for(var i = 0; i < enemyNames.length; i++) {

  fight(enemyNames[i]);
  debugger;
  // printEnemy(enemyNames[i], i)
  // console.log(enemyNames[i], i);
}
// run fight function to start game
// fight();
