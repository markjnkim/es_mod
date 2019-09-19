# Lesson 4: Optimize the Code with Objects

## Introduction

Now that our MVP goal has been met, we could technically submit the game as-is. However, it's still not that interesting to play multiple times, because the health and damage values are always the same. We need to update our code to generate these values randomly per our next GitHub issue:

> ## WAITING ON GITHUB ISSUE SCREENSHOT

While working on the game, other game jam attendees made some great suggestions for additional features we could add. Alas, there's not enough time to implement their suggestions, but we can at least optimize the codebase to be more scalable, making it easier to continue working on the project afterwards.

JavaScript objects will help us accomplish both tasks: the randomness and the restructuring. Like the `window` object, there are other built-in objects that come with useful methods for generating random numbers. We can even make our own objects to tie data together, which is perfect for consolidating our player and enemy stats.

It's possible the judges may look at our code, so having a more **object-oriented** structure would definitely appeal to them. In larger games and apps, building around objects can help immensely in keeping track of what data you have and how it can be accessed. Similar to our practice with functions, familiarizing ourselves with objects now will pay huge dividends later!

## Preview

There are several places where we can introduce randomness to the game:

* Start enemies at a random health value between 40 and 60

* Start enemies with a random attack value between 10 and 14

* Attack damage is random, using the robot's attack value as an upper limit (e.g. if the player's attack is 10, their damage range is 7-10)

We'll use the built-in `Math` object to perform these improvements. Afterwards, we'll consolidate all of our player variables into a single object. Consider the following diagram:

> ## NEED DIAGRAM OF OBJECT VS VARIABLES

It would be much easier to maintain the player stats if they all belonged to one object instead of having several different variables floating about. This would become even more important as the game grows in scope and more player stats are needed. We'll similarly convert our enemies into objects.

That said, here's our plan of attack for the lesson:

1. Create a new feature branch

2. Use the Math object to add randomness to the game

3. Convert player and enemy data to custom objects

4. Merge feature branch

## Create Feature Branch

Starting a new feature means we'll need a new branch. Let's revisit our Git workflow:

1. Use the `git branch` command to verify that you are in the `develop` branch. If not, switch to `develop` before proceeding (e.g. `git checkout develop`).

2. Use the command `git checkout -b feature/objects` to create and switch to the new branch.

## Use the Math Object

If we want to generate random numbers in JavaScript, we'll need the help of a built-in object called `Math`. Accessing this object is similar to accessing `console`. Both are properties of the `window` object, but we're not required to write `window.Math`.

Try console logging the `Math` object and inspect what's printed in the DevTools:

![The Math object has been expanded to show its property names](./assets/lesson-4/300-console-math.jpg)

We can see that `Math` has many properties and functions attached to it. When a function belongs to an object, though, we refer to it as a **method**.

Console log some of these properties and methods to see what they do:

```js
// prints 3.141592653589793
console.log(Math.PI);

 // rounds to the nearest whole number (4)
console.log(Math.round(4.4));

 // prints the square root (5)
console.log(Math.sqrt(25));
```

The method that we're most interested in is `Math.random()`, but this can be tricky to use and understand. Let's warm up with `Math` by first using the `Math.max()` method. Given a series of numbers, this method will return the largest.

Let's look at a few examples:

```js
// prints 100
console.log(Math.max(10, 20, 100));

// prints 0
console.log(Math.max(0, -50));
```

How does that help us with the game? Think about areas where one of our number values could dip into negative territory. Player health, enemy health, and money are all deducted from at various points, and there's a chance these values could turn negative. Does that break the game if they do? No, not really, but it also doesn't look very professional. Using something like `Math.max(0, variableName)`, we can ensure deducted values always stop at zero.

Make the following changes in the `fight()` function:

* Replace `enemyHealth = enemyHealth - playerAttack;` with `enemyHealth = Math.max(0, enemyHealth - playerAttack);`

* Replace `playerHealth = playerHealth - enemyAttack;` with `playerHealth = Math.max(0, playerHealth - enemyAttack);`

* Replace `playerMoney = playerMoney - 10;` with `playerMoney = Math.max(0, playerMoney - 10);`

Save and test the game, verifying that your `alert()` or `console.log()` methods never display a negative health or money value.

> **Pause:** How could we have prevented negative values with `if` statements instead of `Math.max()`?
>
> **Answer:**
>
>```js
>playerMoney = playerMoney - 10;
>
>if (playerMoney < 0) {
>  playerMoney = 0;
>}
>```

Now that we've gotten a taste of the `Math` object, let's dive into its random capabilities. Console log `Math.random()` a few times and you'll get some interesting numbers like 0.7353300720527607 or 0.25000120638240264.

The `Math.random()` method returns a random decimal number between 0 and 1 (but not including 1, meaning you would never get exactly 1). For this decimal number to be useful, we have to pair it with other math operations.

In the `startGame()` function, replace the line `enemyHealth = 50;` with the following:

```js
enemyHealth = Math.floor(Math.random() * 60);
```

By multiplying `Math.random()` by 60, we've now specified a random range from 0 to 59.xx (remember, `Math.random()` will never be 1, so we would never get an even 60). We don't want decimal numbers cluttering up our game, though, so we can use `Math.floor()` to round down to the nearest whole number. This means, at the start of each round, `enemyHealth` would be a random whole number from 0 to 59.

Hmmmm. This still isn't perfect. Even though the odds are low, we don't want to risk an enemy starting with zero health. Ideally, enemy health should be between 40 and 60, which we can still achieve with a little extra math!

Update the line in `startGame()` to look like this:

```js
enemyHealth = Math.floor(Math.random() * 21) + 40;
```

Okay, now this random logic is getting confusing. Let's break it down:

1. `Math.random() * 21` will give us a random decimal number between 0 and 20.xx.

2. `Math.floor()` will round this number down, so now the range is a whole number between 0 and 20.

3. We'll always add 40 to the generated number. If the random number is 0, we at least have 40. If the random number is 20, we have our upper range: 60.

Play the game again and notice how each enemy starts with a different health value! There are still other places where we could use a random number, though, making this a good use case for a function.

Add this function alongside the other functions in `game.js`:

```js
// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;

  return value;
};
```

Wait, there's a keyword in there that we haven't talked about yet. What does `return` do? Think back to how we used the `window.prompt()` method. When called, this method would give us a string that we could then store in a variable. As we write our own methods and functions, they can optionally give something back, too, using a `return` statement.

To see this in action, replace the random logic in `startGame()` with a call to the new `randomNumber()` function:

```js
enemyHealth = randomNumber();
```

Because `randomNumber()` returns a value, that returned value can be stored in the `enemyHealth` variable.

> **Deep Dive:** The `return` statement actually serves two purposes. Yes, it returns a value, but it also ends function execution right then and there. Consider the following example:
>
>```js
>var doubleIt = function(num) {
>  console.log("beginning of function");
>
>  var double = num * 2;
>
>  return double;
>
>  console.log("end of function");
>};
>
>var newNumber = doubleIt(5); // is now 10
>```
>
>The second console log, `"end of function"`, never happens, because the function has returned, or ended, before it reached that line.

We have a `randomNumber()` function in place now, but it's set up to return a random value between 40 and 60. Other areas of the game will need a random number between a different range. Fortunately, we can reuse the same `randomNumber()` function by adding **parameters**. This will be similar to the `enemyName` parameter that was added to `fight()` earlier:

```js
var fight = function(enemyName) {

};
```

In the case of `randomNumber()`, we'll actually want two parameters: one to represent the lower limit and one to represent the upper limit. We'll adjust our `Math.random()` logic to accommodate both values.

Rewrite the `randomNumber()` function like so:

```js
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
```

Yeah, um... that looks pretty confusing. Let's try breaking it down again. If we want a random number between 40 and 60, we would call the function as `randomNumber(40, 60)`. That means `min` would be 40 and `max` would be 60. We can mentally swap out those numbers if it helps:

```js
var randomNumber = function(40, 60) {
  var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

  return value;
};
```

Then start performing math operations, and suddenly we're back in familiar territory:

```js
var randomNumber = function(40, 60) {
  var value = Math.floor(Math.random() * (21)) + 40;

  return value;
};
```

Working with random numbers can definitely be tricky. Fortunately, there are many articles online that can help and can be found with a quick [Google search for "js random numbers"](https://www.google.com/search?q=js+random+numbers). For now, our `randomNumber()` function seems to do what we want. We won't need to edit it any further and can focus on where to call it.

If you haven't already, make one last change in `startGame()` to set `enemyHealth` correctly:

```js
enemyHealth = randomNumber(40, 60);
```

In the `fight()` function, we'll need to update the places where health is deducted based on attack damage. These are the same lines of code where we added `Math.max()`.

Replace the `enemyHealth` line with these two lines:

```js
// generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);
```

Do the same for `playerHealth` later in the `fight()` function:

```js
var damage = randomNumber(enemyAttack - 3, enemyAttack);

playerHealth = Math.max(0, playerHealth - damage);
```

Save and test the game in the browser, making sure the enemy health and damage values are different each time. If anything broke along the way, remember to check the console for errors. Sometimes it's easy to misplace a parentheses. For instance, `Math.floor(Math.random() * (max - min + 1) + min)` (correct) vs `Math.floor(Math.random() * (max - min + 1)) + min` (incorrect).

Once you're happy with the current state of the game, `git add`, `commit`, and `push` to save your progress. In the next step, we're going to move a lot of things around, so it's important to have this commit history!

## Convert Data to Custom Objects

*2–3 sentences describing what will be covered in this section.*

*Walk student through this step, include LBs as appropriate, etc.*

*Transitional text to next section.*


## Merge Branch

*2–3 sentences describing what will be covered in this section.*

*Walk student through this step, include LBs as appropriate, etc.*

*Transitional text to next section.*

## Reflection

*Congratulate the learner (Great work!, Congratulations! Pat yourself on the back, etc.). Recap what they accomplished during the lesson from a bigger perspective in a couple of sentences.*

*In this lesson, you added the following skills to your tool belt, knowledge base, skillset:*

- Skill learned in 1-2 sentences

- Skill learned in 1-2 sentences

- Skill learned in 1-2 sentences

- Etc.

*If this is the last lesson in a module, recap the entire module and introduce the next module.*

*If this is not the last lesson in a module, introduce the next lesson and how it will build on the skills in this lesson.*


- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
