/* Set global variables */
var wins = 0;
var losses = 0;

// if local storage values exist for wins and losses, use them
if (localStorage.getItem('wins')) {
  wins = localStorage.getItem('wins');
}

if (localStorage.getItem('losses')) {
  losses = localStorage.getItem('losses');
}

// set initial player info
var player = {
  name: 'Botty Monroe',
  hp: 100,
  money: 120,
  attack: 5
};

// set initial enemy info
var enemies = [
  {
    name: 'Roboto The Mad',
    hp: 120,
    attack: 5
  },
  {
    name: 'Boltsy',
    hp: 100,
    attack: 5
  },
  {
    name: 'Cranky Clank',
    hp: 120,
    attack: 5
  }
];

// reset game
function newGame() {
  var confirmNewGame = confirm('Do you want to start a new game?');

  if (confirmNewGame === false) {
    alert('Thank you for playing! Refresh the page to start again!');
    return false;
  }

  // reset player stats
  player = {
    name: 'Botty Monroe',
    hp: 100,
    money: 120,
    attack: 5
  };

  // reset enemy stats
  enemies = [
    {
      name: 'Roborto Tha Damaja',
      hp: 120,
      attack: 5
    },
    {
      name: 'Boltsy',
      hp: 100,
      attack: 5
    },
    {
      name: 'Cranky Clank',
      hp: 120,
      attack: 5
    }
  ];

  // pick new enemy to fight
  pickEnemy();
}

function pickEnemy() {
  // if no enemies, end the game
  if (!enemies.length) {
    alert('No enemies left!');
    return newGame();
  }

  // pick enemy from array
  var randomEnemyIndex = Math.floor(Math.random() * enemies.length);
  var currentEnemy = enemies[randomEnemyIndex];
  alert(currentEnemy.name + ' is your next robo opponent!');
  
  // remove enemy from list
  enemies.splice(randomEnemyIndex, 1);
  console.log(enemies);

  // send enemy into battle
  fight(currentEnemy);
}

// fight an enemy that was picked in pickEnemy()
function fight(enemy) {
  
  while (player.hp > 0 && enemy.hp > 0) {

    var coinFlip = Math.round(Math.random());
    console.log('Coin:' + coinFlip);

    // whoever wins coinflip gets to attack first
    if (coinFlip) {
      
      // check if player wants to run or fight
      var wantsToFight = fightOrRun();

      if (wantsToFight) {
        enemy.hp -= player.attack;
        alert('You attacked ' + enemy.name + '. They now have ' + enemy.hp + ' health left.');
      } 
      else {
        alert('You decided to RUN from this fight, you will lose 10 dollars');
        player.money -= 10;
        return endFight();
      }
    } 
    else {
      player.hp -= enemy.attack;
      alert('You were attacked attacked by ' + enemy.name + '. You now have ' + player.hp + ' health left.');
    }

    // check if one of them died
    if (enemy.hp <= 0) {
      alert(enemy.name + ' has been destroyed!\n ' + player.name + ' wins this battle.');
      return endFight();
    } else if (player.hp <= 0) {
      alert(player.name + '(you) have been destroyed!\n ' + enemy.name + ' wins this battle.');
      return endFight();
    }

    // retaliate
    if (!coinFlip) {
      console.log('player retaliates');
      // check if player wants to run or fight
      var wantsToFight = fightOrRun();

      if (wantsToFight) {
        enemy.hp -= player.attack;
        alert('You attacked ' + enemy.name + '. They now have ' + enemy.hp + ' health left.');
      } else {
        alert('You decided to RUN from this fight, you will lose 10 dollars');
        player.money -= 10;
        return endFight();
      }

      enemy.hp -= player.attack;
      alert('You attacked ' + enemy.name + '. They now have ' + enemy.hp + ' health left.');
    } else {
      console.log('enemy retaliates');
      player.hp -= enemy.attack;
      alert('You were attacked attacked by ' + enemy.name + '. You now have ' + player.hp + ' health left.');
    }

    // check if one of them died
    if (enemy.hp <= 0) {
      alert(enemy.name + ' has been destroyed!\n ' + player.name + ' wins this battle.');
    } else if (player.hp <= 0) {
      alert(player.name + '(you) have been destroyed!\n ' + enemy.name + ' wins this battle.');
    }
  }

  endFight();
}

// ask user if they want to fight or run and return true or false
function fightOrRun() {
  // ask if player wants to run or fight
  var fightPrompt = prompt('Would you like to fight or run? Type "FIGHT" or "RUN" to pick.');

  // convert to lowercase
  fightPrompt = fightPrompt.toLowerCase();

  if (fightPrompt === 'fight') {
    return true;
  } else if (fightPrompt === 'run') {
    return false;
  } else {
    alert("You didn't pick one of the valid choices, try again!");
    fightOrRun();
  }
}

// end of fight
function endFight() {
  // check if player lost
  if (player.hp <= 0) {
    // increase losses and store it
    losses++;
    localStorage.setItem('losses', losses);

    alert('You have lost your robot in battle. You now have ' + wins + ' wins and ' + losses + ' losses.');

    return newGame();
  } else {
    // increase wins
    wins++;
    localStorage.setItem('wins', wins);

    alert('You have lost your robot in battle. You now have ' + wins + ' wins and ' + losses + ' losses.');

    //

    // ask if player wants to visit the store?
    var visitStorePrompt = prompt(
      'Would you like to visit the store or jump into the next battle? Use "STORE" or "FIGHT" to pick.'
    );

    // convert answer to lower case
    visitStorePrompt = visitStorePrompt.toLowerCase();

    switch (visitStorePrompt) {
      case 'store':
        return store();
      case 'fight':
        return pickEnemy();
      default:
        alert('You need to pick a valid option, try again!');
        return endFight();
    }
  }
}

// choice => "refill", "upgrade", "exit"
function store() {
  if (player.money >= 20) {
    var choice = prompt(
      'Would you like to refill your health, upgrade your attack, or exit the store? Use the words "REFILL", "UPGRADE", or "EXIT" to make your pick!'
    );

    switch (choice.toLowerCase()) {
      case 'refill':
        player.money -= 20;
        player.hp += 20;
        console.log(
          player.name + ' chose to refill and now has $' + player.money + ' and ' + player.hp + ' health points.'
        );
        break;
      case 'upgrade':
        player.money -= 20;
        player.attack += 20;
        console.log(
          player.name + ' chose to refill and now has $' + player.money + ' and ' + player.attack + ' attack points.'
        );
        break;
      case 'exit':
        return pickEnemy();
      default:
        alert('Type a valid option for the store!');
        return store();
    }
  } else {
    alert(player.name + ' does not have enough money!');
  }

  pickEnemy();
}

newGame();
