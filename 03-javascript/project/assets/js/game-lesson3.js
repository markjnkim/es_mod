var wins = 0;
var losses = 0;

var playerName;
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

// function to start a new game
var startGame = function() {
  // reset player stats
  playerName = window.prompt("What is your robot's name?");
  playerHealth = 100;
  playerMoney = 10;

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

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      break;
    }
  }

  // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("You've won!");
    // increase wins
    wins++;
  } else {
    window.alert("You've lost your robot in battle!");
    // increase losses
    losses++;
  }
  // no matter what, let player know how many wins and losses they have now
  window.alert(playerName + ' now has ' + wins + ' wins and ' + losses + ' losses!');

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Battlebots! Come back soon!');
  }
};

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
        window.alert(enemyName + ' has died!');

        // award player money for winning
        playerMoney = playerMoney + 5;

        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );

      // check player's health
      if (playerName <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }

    // if player choses to skip
  } else if (promptFight === 2) {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip this fight. Goodbye!');
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }

    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert('You need to pick a valid option. Try again!');

    // run the fight function over again, but don't forget to pass the enemy's name!
    fight(enemyName);
  }
};

// go to shop between battles function
var shop = function() {

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one \"REFILL\", \"UPGRADE\", or \"LEAVE\" to make a choice.");

  // convert answer from last prompt to lower case
  shopOptionPrompt = shopOptionPrompt.toLowerCase();

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case "refill": 
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth += 20;
      playerMoney -= 7;
      break;
    case "upgrade":
      window.alert("Upgrading player's attack by 6 for 5 dollars.");
      playerAttack += 6;
      playerMoney -= 7;
      break;
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.")
      shop();
      break;
  }

}

// start first game when page loads
startGame();