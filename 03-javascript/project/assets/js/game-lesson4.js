/* GAME FUNCTIONS */

// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fight next enemy
    if (playerInfo.health > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Battlebots! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyInfo array
      var pickedEnemyObj = enemyInfo[i];

      // set health for picked enemy
      pickedEnemyObj.health = randomNumber(40, 60);

      console.log(pickedEnemyObj);

      // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
      fight(pickedEnemyObj);
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      break;
    }
  }

  // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("You've won!");
    // increase wins
    wins++;
  } else {
    window.alert("You've lost your robot in battle!");
    // increase losses
    losses++;
  }
  // no matter what, let player know how many wins and losses they have now
  window.alert(playerInfo.name + ' now has ' + wins + ' wins and ' + losses + ' losses!');

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Battlebots! Come back soon!');
  }
};

// fight function (now with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemy) {
  // set turn order
  var isPlayerTurn = true;

  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like fight or skip this battle? Press 1 to fight and 2 to skip.');

      // convert promptFight from a string to a number
      promptFight = parseInt(promptFight);

      if (promptFight === 2) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);

        break;
      }

      // remove enemy's health by subtracting the amount set in the player.attack variable
      enemy.health = enemy.health - playerInfo.attack;
      console.log(
        playerInfo.name +
          ' attacked ' +
          enemy.name +
          '. ' +
          enemy.name +
          ' now has ' +
          enemy.health +
          ' health remaining.'
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }

      // remove players's health by subtracting the amount set in the enemy.attack variable
      playerInfo.health = playerInfo.health - enemy.attack;
      console.log(
        enemy.name +
          ' attacked ' +
          playerInfo.name +
          '. ' +
          playerInfo.name +
          ' now has ' +
          playerInfo.health +
          ' health remaining.'
      );

      // check player's health
      if (playerInfo.name <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
      // otherwise enemy attack player first
    } else {
      // remove players's health by subtracting the amount set in the enemy.attack variable
      playerInfo.health = playerInfo.health - enemy.attack;
      console.log(
        enemy.name +
          ' attacked ' +
          playerInfo.name +
          '. ' +
          playerInfo.name +
          ' now has ' +
          playerInfo.health +
          ' health remaining.'
      );

      // check player's health
      if (playerInfo.name <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }

      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like fight or skip this battle? Press 1 to fight and 2 to skip.');

      // convert promptFight from a string to a number
      promptFight = parseInt(promptFight);

      if (promptFight === 2) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);

        break;
      }

      // remove enemy's health by subtracting the amount set in the player.attack variable
      enemy.health = enemy.health - playerInfo.attack;
      console.log(
        playerInfo.name +
          ' attacked ' +
          enemy.name +
          '. ' +
          enemy.name +
          ' now has ' +
          enemy.health +
          ' health remaining.'
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
    }
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );

  // convert answer from last prompt to lower case
  shopOptionPrompt = shopOptionPrompt.toLowerCase();

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 'refill':
      playerInfo.refillHealth();
      break;
    case 'upgrade':
      playerInfo.upgradeAttack();
      break;
    case 'leave':
      window.alert('Leaving the store.');
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      shop();
      break;
  }
};

// function to set name
var getPlayerName = function() {
  var name = '';

  while (name === '' || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */

// player information
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  }
};

// enemy information
var enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */
startGame();
