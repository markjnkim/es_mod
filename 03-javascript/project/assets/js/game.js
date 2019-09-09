var playerName = 'Clank McKrank';
var playerHealth = 100;
var playerAttack = 7;

var enemyName = 'Roborto';
var enemyHealth = 100;
var enemyAttack = 7;

// fight function
var fight = function() {
  // let user know they have begun the fight
  window.alert('Welcome to Battlebots!');

  // ask user if they'd liked to fight or run
  var promptFight = window.prompt('Would you like fight or skip this battle? Press 1 to fight and 2 to skip.');

  // convert promptFight from a string to a number
  promptFight = parseInt(promptFight);

  // if player choses to fight, fight
  if (promptFight === 1) {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );
    
    // check enemy's health
    if (enemyHealth <= 0) {
      alert(enemyName + ' has died!');
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
      alert(playerName + ' has died!');
    } else {
      alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  // if player choses to skip
  } else if (promptFight === 2) {

    alert(playerName + ' has decided to skip this fight. Goodbye!');

  // if player did not chose 1 or 2 in prompt
  } else {

    alert('You need to pick a valid option. Try again!');
    
  }
};

// run fight function to start game
fight();
