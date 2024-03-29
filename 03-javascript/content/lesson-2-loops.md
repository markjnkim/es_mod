# Lesson 2 - Enemy Battle Rounds
## Introduction
> **TODO Github Issue Placeholder**

Now that we created a basic `fight()` function in the last lesson, we are able to exchange attacks with the enemy robot. However we are only able to have a single battle round with one enemy robot. Let's build upon our previous work and increase our Robot Gladiators game's complexity by introducing more enemy robots and exchanging multiple rounds of attack until a combatant has been defeated. This will be considered our MVP since it can now be considered a game that can be played albeit very simply. The judges at the Con Solo game jam won't be highly impressed with our game in its current state since we are unable to determine the winner of the fight or even how to win the game, but after completing our MVP, at the very least the judges get a sense of how the game works and operates. Let's take a look at the GitHub Issue again to see where we stand in comparison to our MVP:
![Github Issue #1 - MVP](./assets/lesson-2/020-github-issue.png)
As we can see there are some essential game function we need to incorporate including:
* Fighting a robot until defeat
* Fighting another robot after defeat
* Receive the robot's name from the user
* Option to fight or skip 

> **On the Job:** The `fight()` function established a nice building block that will provide some of the basic game functionality we can build upon to create more features that will add game complexity and interest. An essential part of creating programs in JavaScript is knowing how to create and use functions as building blocks of code that can work together to accomplish a program's overarching goal.

## Preview
In this lesson we will build upon our knowledge of the `window`'s interactive methods, global and local variables, conditional statements, and the `fight()` function we created in the last lesson and introduce a new data structure called an array and native JavaScript functions. Let's map out our build process for this lesson and establish our lesson's goals.
1. Pseudocode Our Game Logic
2. Add Combatants to the Battle Using Arrays
3. Fight Enemy Robot Combatants Using For Loops
4. Fight Each Combatant Using Function Arguments
5. Battle the Combatants Until Defeated Using a While Loop
6. Improve the User Game Experience

Here is a quick example of what we can expect to see by the end of this lesson:
> **Asset Needed:** [Gif of the game interaction - Jira 161](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-161)
<!-- Fall Back Screenshot -->
![Preview of Game in Console](./assets/lesson-2/50-console-game.png)

## Pseudocode Our Game Logic

How to start is often a common question for developers. There seems to be a lot of work to be done, but how to we begin? Pseudocoding our steps will be a great starting point since this will help organize our thoughts, outline the objectives, and get our creative juices flowing. Our first goal will be to identify the different game states and write them as comments near the top of the `game.js` file.
> **Pause:** How do we win our Robot Gladiators game?
>
> **ANSWER:** Defeat all the robot enemies.

Our comments may look something similar to this:

```javascript
// Game States
// "WIN" - Player robot has defeated all enemy robots
// "LOSE" - Player robot's health is zero or less
```
Although this may seem simple, when programs get convoluted and complex, it helps to be able to jot down key parameters and game states of your program to keep them in mind. Sometimes it also helps to break down a step to smaller sub steps.
In order to "WIN" and defeat all robots we must first:


1) Face all the robots
2) Defeat each robot


In order to defeat all the robots we must be able to face each robot and then defeat each robot, so let's make our revisions to our original pseudocode step.
```javascript
// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
```
> **Urkel Says:** Some of us may have a preconceived notion that computers are very intelligent and smart because they are capable of achieving so many things but in fact, most computer's cognition abilities are actually quite low (please excuse the artificial intelligence conversation). Although very fast at executing statements, every step of decision making or logic must be explicitly written into the program. Although the human brain is slower than a computer at computations, it is masterful at cognition and adaptive learning. As you develop as a programmer, your ability to think simply like a computer will come with practice which is why pseudocoding can be helpful to translate into computer thought.
1) How do we face a robot? As we demonstrated in the first lesson, we present the `enemyName` in the `fight()` function.
2) How do we defeat each robot? By exchanging attacks in the `fight()` function the enemy robot's health points are reduced to zero or less. 

Conversely the "LOSE" game state is also important and will be something we will want to determine. As we progress in the game's development, we will find more game states that will be inflection points that will determine the game's direction or progression step. Keep in mind we can check the game's state by using conditionals that check if a robot or player has any health points. 
> **Pause:** What is the statement that will check if the robot has any health left?
>
> **ANSWER:** if(enemyHealth <= 0) 

## Add Combatants to the Battle Using Arrays
Before we continue, let's stop our program from executing the `fight()` function since we are not currently working on this function and those pesky alert dialogs can get a bit tiresome.
> **Pause:** How do you stop the `fight()` function from executing?
>
> **Answer:** Comment out the `fight()` function call at the bottom of the `game.js` file. 

We comment out a line or multiple lines of code by selecting the beginning of the line we wish to temporarily remove and add `//`. 
```js
//fight()
```
The green font indicates this line has been commented and will not execute.

We could have deleted this function call, but commenting it out is actually a better method when there is a possibility of using the line again. It is important to note that there is no need to comment the function expression since this only defines the function. The function doesn't actually execute until the last line in the `game.js` file in the `fight()` function call.

To start let's focus on the "WIN" game state. Currently we only have one robot to fight, not exactly a challenge to win the game. If we want to impress our game jam judges, we will need to bring some more game to Robot Gladiators so let's add some enemy robots to the mix.

We could declare each of our enemy robot names so our `game.js` file would look like this:
```javascript
var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";
```
Not so bad in our case since we are only introducing a couple more robots, but what if we later decide to add 100 robots or more? Typing out each enemy's variable and expression will take lots of time to type and many lines of code that will bloat our codebase. So how can we avoid that terrible scenario keep our program clean and concise. 

### Declare an Array
This is where we introduce a special new data structure called an array. Arrays are like ordered lists that can hold over 4.2 billion separate entries. That should be enough robots for our game.

Let's create our first array with our enemy robots then go over some of the properties our array offers. Please type the following into your `game.js` file by replacing the `enemyName` declaration near the top of the file with the following expression:
```javascript
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
```

Declaring an array is similar to how we declared variables previously. Once we declare a variable using the `var` keyword and then the variable name, we assign an array using the bracket syntax `[ ]` to enclose our *array elements* which are the values stored within the array. In our case the `enemyNames` array contains three array elements that are strings. The commas serve an important job to separate each array element.

Note an array element can be many different data types and is not limited to strings. Array elements can also be numbers, booleans, as well as variables and even objects, but more on that later. Eventually we will learn how we can make a two dimensional array similar to a grid by placing arrays within our array. For now let's focus on what an array can help us do in regards to our game. It can act as a single repository that stores all our enemy robot names. Please remove any other `enemyName` or `enemyName1` declarations since we will be using the array exclusively going forward for our enemy name storage.

### Access an Array

In our array expression, we declared our array and the initialized string values, but how do we retrieve the values once we've stored them in the array? Array elements are actually stored in the array at specific indexes so when a particular index is called, the value stored at that index is retrieved, similar to a file cabinet that uses tabs to retrieve a folder's contents. In the case of an array, the first index is zero and increments by one for each corresponding element. So then the second element will be at the index one and so on.

> **Urkel Says:** Arrays that start their index at zero are called "zero-indexed" arrays. These are the most common arrays in programming.


Let's type in the following statement beneath the array declaration in the `game.js` file to display the array in the console and review the results. 
```javascript
console.log(enemyNames);
```
Let's save then refresh the browser to reveal the following in the console window of the browser:
![Console Window of Array](./assets/lesson-2/100-console-array.png) 

> **Asset Needed** [Jira Issue for labeling expansion arrow](./assets/lesson-2/100-console-array.png)

As displayed in the console, the array has been expanded by clicking on the arrow to the left of the array. To the left of the array is a number. Can you guess what this number represents?
This will be the length of the array, which has three elements. Beneath is a list of the array elements. The number next to each element represents the index of the element in the array. As stated previously, the first index starts with zero and increments by one for every following element. 

To retrieve the first element in the array, we will use the following statement:
```javascript
enemyNames[0];
```
First we needed to call the array and use the bracket syntax with the index number of the element. The browser is able to interpret this notation to retrieve the element in the array at the zero index.
Please try to display each element of the array in the console by typing the statements into the `game.js` file beneath the array declaration.

Your result in the console should look similar to this:
![Console Array Elements](./assets/lesson-2/200-console-array-elements.png)
> **Asset Needed** [Jira Issue FSFO-174 - Label Array Expansion arrow in Console](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-174)

Notice how each array element is displayed with the file name and line number of each statement on the right side of the console window. This will help identify which `console.log` is being displayed which is useful when our application become very large with many `console.log` statements.

Type the following statement in the `game.js` file and explain the result:
```javascript
console.log(enemyNames[3]);
```
Note how this statement displays **undefined**. This is because at index three, there isn't an element in the array because the last element is at index two. Expanding on this point, if we try to access an array at an index that doesn't contain an element, the result will be undefined. The result is undefined because this element hasn't been declared yet.
It is important to remember the index of the last element of an array is always the number of elements minus one in other words the array's length minus one.

A JavaScript array is actually a type of object and therefore has some built in properties and methods we can use. Just think about the `window` object and the different methods we used for `alert()` and `prompt()`. The `length` property of the `Array` object contains the number of elements in an array. This is especially useful when the number of items in an array is unknown.

Type the following into the `game.js` file:
```javascript
console.log(enemyNames.length);
```
In the console, we can see that the `length` property displays the number three which is the length of the array.

![Console Array Length](./assets/lesson-2/300-console-array-length.png)

> **Pause:** So now how could we use the `length` property to find the last element in the `enemyNames` array? 
> 
> **Answer:** `enemyNames[enemyNames.length-1]` will return the last element of an array. As discussed previously, we must remove one from the total length to find the last index due to the initial index of an array being zero.

## Fight Enemy Robot Combatants Using For Loops

In the prior example, when we wished to display each element of the array in the console we had to manually write out each element and its corresponding index like so:
```javascript
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
```
Just imagine if we wanted to display each element in an array that was over 100 items in length. This would be incredibly time consuming, extremely repetitive, and very long.
Thankfully we have a statement we can use that enables us to loop through the array no matter what the length. It is here that we will introduce the `for` loop, a statement not bound to just arrays but can be generally used whenever we need the same operation done repetitively. Let's first take a general approach then we'll see why arrays go with `for` loops like peanut butter and jelly.

In this example say we would like to display the word "apple" three times in the console. Type the following `for` loop in the `game.js` file beneath our array `console.log`'s:
```javascript
for(var i = 0; i < 3; i++) {
  console.log("apple");
}
```
We should see the following in the console window:

![For Loop](./assets/lesson-2/400-console-for-loop.png)

Notice next to the word "apple" in the console is the number three. This means that this word was displayed three times into the console. Yes, our `for` loop worked! Let's breakdown the syntax now and see what makes the `for` loop special.

### For Loop Syntax

The `for` loop is a special type of statement called a **control flow** statement. The control flow is the order in which the computer executes statements in a JavaScript file or script, which normal runs sequentially from the first line to the last line of the script. Control flow statements such as conditional statements or `for` statements, change the control flow based on the statement's conditions.


> **Deep Dive:** Still not sure what [the differences are between statements, expressions, and functions? This explainer in StackOverflow may help clarify the differences.](https://stackoverflow.com/questions/9307291/difference-between-statement-and-function)

Just as with `if` statements, `for` statements also have conditions.
```js
for([initial expression]; [condition]; [increment expression]) {
   statement
}
```
When a `for` loop executes, the following occurs:
1. The **initial expression** is the first statement executed. This initializes the loop iterator or counter. This expression is also able to declare variables.

**initial expression**:
```js
var i = 0;
```
2. The **condition** statement is then evaluated. If this condition evaluates to true, the loop **statement** execute. If the condition's value is false, the `for` loop terminates. If this condition is omitted, the condition is assumed to be true.

**condition**:
```js
i < 3;
```
3. Then the **statement** executes. To execute multiple statements, use a block statement `{  }`, as used in `if-else` statements.
4. After the **statement** is executed, the **increment expression** then executes which increments the iterator, which is our variable `i`.

`IncrementExpression`:
```js
i++
```
equivalent to `i = i + 1`.

5. After the iterator increments, the `Condition` is then reevaluated and continues the loop chain.

To see the iterator in action lets display it in each loop by adding an argument in the `console.log` function with a comma.
```javascript
for(var i = 0; i < 3; i++) {
  console.log("apple", i);
}
```
Alternatively we could've have also concatenated the string and the variable as follows:
`console.log("apple " + i)`
We should see the following in the console:

![Iterator in Console](./assets/lesson-2/500-console-iterator.png)

Notice how the iterator starts at zero and ends at two which maps very similarly to our the first array we examined in the console.

![Console Window of Array](./assets/lesson-2/100-console-array.png) 

We can actually use the iterator in the for loop to map to an array's index. This allows us to iterate through an array, element by element, index by index.
Let's go ahead and see how to use a `for` loop through an array to display each element.

### For Loops and Arrays 

Replace the previous `for` loop with the following statement:
```javascript
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyName[i]);
}
```
We should get the following in the browser:

![Loop an Array](./assets/lesson-2/600-console-array-loop.png)

As can be seen, the more results we display in the console, the harder it will be to determine which statement rendered which result. By reviewing the line numbers next to the right of the displayed values, we can determine that a single line, the `for` loop, created the last three entries which also maps back perfectly to our `game.js` file. 

Congratulations, we just looped through our first array.
Run the following by replacing your `for` loop with the following code:
```javascript
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyName[i] + " is at " + i + " index");
}
```
### The Console is your Friend

The console is also where the browser will notify you if you have errors in your code. For instance here is a common error that every developer will get familiar with after a short time in programming:

![Console Error](./assets/lesson-2/700-console-error.png)

__Uncaught ReferenceError: `enemyName` is not defined__

This message from the browser is stating that the variable `enemyName` is being used, however it has never been declared so the browser is unable to execute the statement. Again we are given the file name and line number where we can find this error.
It appears that when referencing the array in the `for` loop, we mistakenly tried to reference `enemyName` as our array instead of the `enemyNames` array which we have declared. It is often a typo that can trigger an error such as this. 

> **Pro Tip:** It is good to have the mindset that console errors are actually helpful indicators that pinpoint errors. Carefully reading error messages can help rectify them more quickly.

Let's fix our code and execute our program again.
We should see the following in the console:

![Console Loop](./assets/lesson-2/800-console-loop.png)

Much better! Now that we have some familiarity with how to loop through our `enemyNames` array, let's see how we are able to apply these operations to achieve our pseudocoding objectives: 
```javascript
// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
```

## Fight Each Combatant Using Function Arguments
Great, now that we are able to access each enemy robot in the  `enemyNames` array, we must now try to have our robot fight them in the `fight()` function. Currently we have a global variable named `enemyName` inside our `fight()` function to make our robots face off and fight each other. Now that we have an `enemyNames` array, we will need to make some changes to how the robot combatants face off. Let's take a minute to think about a scenario in which as we loop through the `enemyNames` array, with each new robot or loop iteration, we could make the robots fight. Taking into account our `fight()` operation is in a function, this offers the flexibility to call this function inside our `for` loop. Now the use of functions becomes more apparent. We are able to execute this code in the `fight()` function repeatedly from within a loop. 

But how do we pass in our enemy robot into the function? Presently the function expression is only able to fight a single robot. We will use a property of functions that will allow data to be passed into the function through the argument. This will allow us to pass in a new enemy robot on every loop iteration into our `fight()` function to fight our robot like so:
```javascript
fight(enemyRobot);
```
We have used arguments several times whenever we passed information into a function whether it be a variable or a value. Here are some of the examples:
```javascript
console.log(enemyNames);      // array argument
alert("Hello");               // string argument
console.log(enemyNames[i], i); // two arguments, comma separated
```
Previously we have been using arguments with `window` methods and JavaScript functions, but now we will change our `fight()`  function to pass in an argument. Remember the function expression defines the "how" and "what" of our function's operations. If we want the function to perform differently we must change our function's definition. We would like to convert our `fight()` function to pass in an enemy robot and then fight this robot. Let's find our `fight()` expression and change the first line to the following:
```javascript
var fight = function(enemyName) {
  ... // fight function statements
}
```
We just redefined our `fight` variable to now be a function that is able to input or receive a variable. Since we are dealing the a variable placeholder in the function definition, we call this the function's *parameter*.
> **Deep Dive:** Parameters vs Arguments - Parameters are often confused with arguments due to the similarity in syntax. The main distinction between them is the purpose in relation to the function. In a function expression, a parameter serves as a variable placeholder that indicates how this variable will be used in the function. Since the use of the parameter is reserved to only the scope of the function, the name of the parameter isn't significant, but normally is related to the type or purpose of the variable as follows: 
>```javascript
>var wash = function(soapType) {
>  console.log("I wash with " + soapType);
>};
>```
>Then when we call the `wash()` function, we can enter a type of soap into the argument.
>```javascript
>wash("Irish Spring"); // => I wash with Irish Spring
>```
>Will be displayed in the console.
As shown, the argument is part of the function call and passes information into the function whether that be a variable or a value with any data type or data structure.

Let's look into the `fight()` function and note that by adding the parameter `enemyName` maps perfectly within the function to our original `enemyName` variable we used to store our enemy robot's name.

### Application Organization

Now that our `fight()` function has been corrected, let's continue with our goal to make our robot fight each of our enemy robots. Before we proceed let's make sure our app is correctly organized. Our global variables should be at the top of our `game.js` file along with our `enemyNames` array.
```javascript
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
```
Let's comment out our `console.log` statements for now to declutter our console window. Next in our `game.js` file should be the `fight()` function expression. This has to be above our `for` loop because we will be calling the `fight()` within our loop. 
If the function is not declared before the function call, we would get an error similar to the one we received earlier except a bit different.  Uncaught TypeError: fight is not a function

Now let's type the `for` loop into our `game.js` file beneath the `fight()` function as follows:
```javascript
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
```
> **Asset Needed:** [Gif displays current game state - Jira Issue](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-162)
> Fall Back with screen shots
![Successful Loop Function Call](./assets/lesson-2/900-console-fight-robots.png)

As can be seen in our console, we have successfully looped through our array and fought each robot. Congratulations! We have almost reached our MVP and successfully accomplished our objective to face and fight each enemy robot. The next objective we need to tackle is to defeat each enemy robot, then we will be able to "WIN" the game.
This is a great spot to add, commit, and push our work into the Github repo for safe keeping. 

## Battle the Combatants Until Defeated Using a While Loop

The next objective is to defeat each robot. Currently we are only able to fight each robot once. So how do we go about fighting each robot until a winner is found? Sounds a bit like we need another loop, to continue the fighting. Earlier we determined that to defeat a robot we need to fight them until their health points reduce to zero or less. Conversely we can say that we will fight the enemy robot while it is alive. This was translated into code by using the following conditional:
```javascript
if (enemyHealth > 0) // if the enemy robot has health points continue to fight
```

Thankfully we have can introduce another type of control flow statement that loops or repeatedly executes a statement(s) **while** a condition remains true. This is called the `while` loop. Very similar in concept to the `for` loop, both statements repeatedly execute a code block if a condition remains true. The code block is the statement or statements contained with the curly braces:
```js
while([Condition]) {
  statement
}
```
In a `while` statement, if the **condition** evaluates to true, the **statement** executes. Then the **condition** is reevaluated and so on. Let's write our code within the `fight()` function to look like the following:
```javascript
var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is alive 
  while(enemyHealth > 0) {
    // place fight function code block here . . .
  }
```
Within the block of the `while` loop let's move all the code from our `fight()` function. Now when the `fight()` function is called, our robot will fight the enemy robot again until defeated. Another suggestion would be to remove the  `alert("Welcome to Robot Gladiators!")` statement from our `fight()` function. This message will be unnecessary at the beginning of every fight so let's remove it for now.

Save `game.js` and reload `index.html` in Chrome.

> **Important:** Keep the console window in the browser open during the development process since errors and results will be displayed there.

![Console Fight Loop](./assets/lesson-2/1000-console-fight-loop.png)

This is partially what we want. The `while` loop in the `fight()` function appeared to have worked correctly, however only one enemy robot was fought and there doesn't seem to be any errors to speak of. A good way to debug our code is ask a few questions to start. 
  * Is our `for` loop not iterating through our `enemyNames` array correctly? 
  * Is the `while` loop not functioning as expected? 
  * Is our `fight()` function not accepting additional enemy robots? 
  
In order to resolve these questions it would be good to see some of our variable's values to explain where in the program we need to fix.  A good technique we are familiar would be to place strategic `console.log()`'s judiciously in our program. A good place to start would be in the `for` loop. 
Let's use a different technique this time to reveal our variable values. The `for` loop is an excellent place to use a new tool called the debugger. Let's type the following in the `game.js` file before the `fight()` function call:
```javascript
for (var i = 0; i < enemyNames.length; i++) {
  debugger;
  // call fight function with enemy robot
  fight(enemyNames[i]);
}
```
This is inform us if the `for` loop is actually iterating through the `enemyNames` array.
Save `game.js` and reload `index.html` in Chrome. We should see the following in the console:

![Chrome Debugger](./assets/lesson-2/1100-chrome-debugger.png)

Notice that in the middle window, we can see the script with our `debugger;` statement highlighted. This is called the Code Editor pane. To the left, is the the File Navigator pane which displays the folder tree. To the right will be the JavaScript Debugging pane. The current status notes that the `debugger` has been paused therefore the program is currently frozen unless we click the resume button. We currently are in the Sources tab of the console.

> **Asset Needed:** [Gif Debugger Tool - Jira FSFO-163](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-163)

Our main focus will be in the debugger tool panel on the right. Let's expand the Watch option. We can see the following:

![Debugger Watch Tool](./assets/lesson-2/1200-watch-debugger.png)

As we can see, this option allows us to track many variable values at once. This informs us on the current game state. We are able to see a snapshot at the precise moment the program reaches the `debugger` statement. The program is paused which allows us to see current values for some of the global variables as well as our local variable iterator `i`. One other variable that would be helpful to track would be the current array element being accessed in the `for` loop. To add this, let's click on the "+" link located next to the Watch header. Let's type the following into the input field:
```javascript
enemyNames[i];
```
Once we press enter, the Watch window is updated with our new variable value as seen here:

![Debugger Add Variable Tracker](./assets/lesson-2/1300-variable-debugger.png)

Since we are in the first iteration of the `for` loop, the `i` value is zero and the first element of the array is currently being accessed in the `for` loop. Since we placed the `debugger` statement before the `fight()` function call, we have found our robots before they go into battle. 

> **Pro Tip:** For the sake of faster testing results, we can reduce some of the health points initial values for the player and the enemy for quicker battles.

Since the health of the robots is a major inflection point in our battle, we should keep an extra eye on how these values change. Currently it appears that the `enemyHealth` value is currently at zero. 

### Debugger Controller

Notice on the very top of the JavaScript Debugging pane, there are controls that will unpause the program. Hover over each control to find a quick explanation. We will focus on the step control which looks like this:

![Debugger Step Button](./assets/lesson-2/1400-debug-step.png)

> **Deep Dive:** Other controls include resuming the program's execution as well as stepping into, out of, and over functions. For a closer look at these controls as well as the other tools such as breakpoints in the Chrome DevTools debugger take a look at [Google's DevTools JavaScript Debugger tutorial.](https://developers.google.com/web/tools/chrome-devtools/javascript/)

Let's click on the step button and progress slowly through the program executing each line one at a time. 

> **Asset Needed:** [Animation - Jira FSFO-164 Debugging Step](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-164)

We can see that the next progression, the `i` value increments by one due to the `for` statement increment expression, `i++`. Next, the `i` conditional statement is evaluated in the `for` loop, `i < enemyNames.length`. Since this conditional statement is true because `1 < 3`, we then proceed into the `fight()` function. But instead of progressing with our new robot enemy into the `while` loop, we are immediately kicked out of this function. It appears we did not satisfy the `while` loop's condition that the `enemyHealth > 0`. *Ah ha!* That is why our player robot is failing to fight the other enemy robots. We only have a single global `enemyHealth` variable set as the health for all the robots, attacking one robot is like attacking all the enemy robots, so when one is defeated, they are all defeated. To fix this, we must reset the `enemyHeatlh` value before each robot battle so a new robot can start battling at full strength. Let's reset our enemy robot's health by assigning it right before we our `fight()` function call inside the `for` loop. For simplicity sake let's choose a variable name that is more semantic than `enemyNames[i]` to store our current enemy robot. 

Please make sure your `for` loop looks similar to this:
```javascript
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
```
Let's run this in the browser and see if we have solved our problem. We should see the following in our console:

![Defeat the Robots](./assets/lesson-2/1500-console-fight-array.png)

Now that looks more like a battle! Our rounds are much longer and extensive. Excellent work! We can see our fight with each robot and the reduction in health points as the battle progresses. When an enemy robot has been defeated, a new enemy robot joins the fray at full health, just as we wanted. Let's pause and preserve our work in Github as we proceed to the end of this lesson.

### Break out of the loop

Looking at the console, there does seem to be some oddities that are not very representative of how an actual battle would occur. 
Let's fix these cases to improve the gameplay.
1) The player robot's health drops into negative numbers
2) After an enemy robot has been defeated, it is still able to attack
3) The "skip" option to function correctly

#### 1) Lose Game State

In order to prevent our player robot from attacking after our health is depleted, we need to review one of our the  objectives:
```javascript
// Game States
// "LOSE" - Player robot's health is zero or less
```
Once the player robot has been defeated, we should no longer be able to fight. To accomplish this we need to exit the `while` loop in the `fight()` function. 
In the last lesson, we created a condition to check the status of our player robot's health inside the `fight()` function:
```javascript
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
}
```
Currently the user is notified through an `window.alert()` if the player robot has been defeated. We need to add a way to stop fighting as well once this condition has been met.
Luckily we can use a keyword in JavaScript called `break`. The `break` keyword allows us to exit the 
current loop. Let's add this beneath the `window.alert` within the `if` statement so it looks like the following:
```javascript
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  break;
}
```
Now let's run our game and see what happens. Your console should now look like this:

![Robot Battle in Console](./assets/lesson-2/1600-console-break-fight-loop.png)

Although we are able to effectively exit from the `while` loop when our player robot has lot all its health, it appears that we are still able to re enter the `while` loop as shown in the last few lines of the console:

![Console While Loop Reentered](./assets/lesson-2/1700-console-break-for-loop.png)

Our player robot has reentered the `while` loop to fight the last robot even though its health is at zero. Let's change our condition of our `while` loop to prevent this from happening by adding a condition for our player robot.
```javascript
while (enemyHealth  > 0 && playerHealth > 0) 
```
With the `&&` operator, we can set the `while` loop to have two conditions that must resolve to true in order to enter the loop. Now the enemy AND the player robot must both have health in order to fight.

![Console Fight Exit](./assets/lesson-2/1800-console-while-condition.png)

#### 2) No More Cheap Shots 

Nice job, now the player robot can no longer fight when defeated. Let's move onto the next step to disable the enemy robot's ability to fight after being defeated. This seems very similar to the last step. We will need a condition to allow us to break out of the `while` loop in the `fight()` function. Let's write some pseudocode that will perform this operation.
```javascript
// if the enemy robot's health is zero or less, exit from the fight loop.
```
> **Pause:** Let's take a moment and try to translate that into JavaScript.
>
> **Answer:** 
> ```javascript
> if (enemyHealth <= 0) {
  break;
  }
> ```
From the last lesson, we have a condition that checks for the enemy robot's health, we just need to add our `break` to exit the fight loop and not allow the robot to fight after being defeated. Let's add this `break` statement to our condition's block so it looks similar to this:
```javascript
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  break;
}
```
Its time to test our code and see if the result is as we expect. Let's run our game and look in the console of the browser.
It should look similar to this:

![Console Fix Fight Anomaly](./assets/lesson-2/1900-fight-no-more.png)

Now once our enemy robot has been defeated, the `while` loop exits and we are confronted by our next robot combatant. No longer are we subject to cheap shots from defeated enemy robots. Much better!

#### 3) Give Peace a Chance 

Currently our skip function doesn't actually work quite right. As can be seen in our console here:

![Console Skip Malfunction](./assets/lesson-2/2100-console-skip.png)

Looks like although we lose money for choosing to skip, we don't actually skip, but resume fighting the same enemy robot. Just as in the previous steps, we need to break out of the `while` loop to quit fighting the enemy robot. The question is where should this `break` statement go? Let's narrow down our search and find the conditional statement we created to control the skip response in our `prompt()`. Notice we also added a `console.log` to display the current `playerMoney` value.
```javascript
else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
}
```
In the conditional statement that checks if the skip prompt has been confirmed appears to be where the logic executes for a skipped fight. 
So where in the conditional code block will the `break` statement go?
 
```javascript
if (confirmSkip) {
   window.alert(playerName + " has decided to skip this fight. Goodbye!");
   // subtract money from playerMoney for skipping
   playerMoney = playerMoney - 10;
   console.log("playerMoney", playerMoney);
   break;
 }
```
Notice if we we place our `break` statement before our other statements in our conditional code block, the VS code editor actually makes the following lines of code dim as seen here:

![VS Code Break](./assets/lesson-2/2200-vs-code-break.png)

That is because VS Code is letting us know, the code beneath the `break;` statement will never run because the `break` statement will immediately break from the loop so no other lines of code will be executed in the loop. This is why `break` statements must always be positioned at the bottom of the conditional code block.

Let's run our game and see if we have fixed our skipping issue.
The console should look something like this:

![Console Skip Fight](./assets/lesson-2/2300-console-skip-fight.png)

Great, now once we reply to "skip", we are debited 10 `playerMoney` credits as before but no longer face the same opponent. 

Now we can apply our understanding of the `break` to make a change to our conditional statements in the `while` loop regarding our fight or skip prompt.
Since we can use our `break` statement to exit out of the loop, we will rearrange our prompt for the fight or skip conditional statements. Essentially we will check to see if the prompt was replied with a skip, otherwise we will let the fight round continue.
Let' move our skip conditional statement to the top and convert it from an `else if` to just an `if` statement like so:
```javascript
// if user picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
  }
}
```
This conditional statement will follow directly after the prompt at the beginning of the `while` loop.
```javascript
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
```
The rest of the `while` loop will contain the code operations for robots to fight with the conditionals that hold crucial game logic to check for each robot's health. The reason why we don't have to check for the "fight" value is returned by the prompt is that we assume fight is the default action unless specifically commanded by the user to do otherwise.
The rest of the `fight()` function should now look similar to this:
```javascript
// remove enemy's health by subtracting the playerAttack
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  // award player money for winning
  playerMoney = playerMoney + 20;
  // leave while() loop since enemy is dead
  break;
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// remove players's health by subtracting the enemyAttack
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  // leave while() loop if player is dead
  break;
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
```
Now let's run this game in the browser to see if our game still works after our refactor.
It should look like this in the console:

![Console Break Check](./assets/lesson-2/2400-console-refactor-test.png)

Excellent work. This would be a great place to preserve our work in Github so let's do that now then proceed to the final step of this lesson.

## Improve the User Game Experience

For this last part of game improvements, let's add the following messages to notify our users about the state of the game:

* Round number 
* Game Over

Adding these messages will improve the player's experience, always a bonus with game jam judges. Earlier in this lesson we removed our welcome message: `alert("Welcome to Robot Gladiators!")` from our `fight()` function. Let's place it back into our game and add the round number.

#### Add the Round Number

We will consider a new round to start a when a new enemy robot is introduced to fight. 
Since enemy robots will be introduced in the `for` loop which iterates through the `enemyNames` array, this would seem to be a great place to start. Inside he `while` loop wouldn't be as good of an option since the enemy robot exists there in many game states due to the consecutive rounds of fighting. 
Can you think of a scenario when a new robot enemy is presented, but a new round of battle should not begin?
In the scenario when a player robot has been defeated, the `while` loop would then exit back to the `for` loop. The `for` loop would then execute if there are more enemy robots to battle. Then a new enemy robot is presented however a new round of battle should not begin since the player robot has no health. Let's introduce a conditional check to prevent this scenario. We will add the following statement to the top of our `for` loop code block:

```javascript
if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators!");
}
```
Let's change our `alert` to include the round number. 
> **Pause:** What is the relation between the iterator in the `for` loop and the round number?
>
> **Answer:** Since each new robot initiates a new round and the iterator increments at the beginning of each round, these two counters map together well. The difference is the round number starts at one where the iterator starts and zero. By increasing the iterator by one, the round number can be calculated as follows: 
> ```javascript
> window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
> ```

Notice how the `( i + 1 )` was wrapped in parentheses. What happens if we remove the parentheses? 

The parentheses are important because they allow the arithmetic operation to perform and then concatenates this sum to the string message. Without the parentheses, the `i` does not add the one but treats it like a string and concatenates the string "1", which is not what we are looking for.

What else should we place inside this conditional code block? We could proceed with placing all our code from our `for` loop into this conditional block so these steps only occur when a player has health. Let's proceed with that so our conditional statement looks like this:
```javascript
if (playerHealth > 0) {
    // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
```
Let's see how this new message functions in the game.

![Game Round Alert](./assets/lesson-2/2500-game-round-alert.png)
> **Asset Needed:** [Gif - Demo of Round Alerts Jira FSFO-167](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-167)

Our next step would be to add a message that notifies the player when the game is over when the player robot has been defeated. We can use the `else` conditional statement since this occurs only when the player robot has no health or when it has been defeated. Let's add this statement below our `if` statement:
```javascript
  else {
    alert("You have lost your robot in battle! Game Over!")
  }
```
To execute the above statement, what is the current state of the player robot?
The player robot has been defeated.

## Reflection

Great job! We now have a game that is playable and nearly complete in regards to our MVP. We are making excellent progress in our game jam so far. Seeing that we still have some time left, let's add some interesting game play features to increase game complexity and randomness since a predictable game can be a bit boring. This will go over well with the game jam judges since at the end of the day more engagement is a key metric for any game. Before we continue, let's review some of the key concepts we have covered so far in this lesson.

We learned some of the basic building blocks of JavaScript and how to implement them in an application.
  * Arrays are data structures similar to an ordered list that allows storage of data at numeric indexes.
  * The `for` and `while` loops allow for blocks of code to be executed repeatedly until their conditional statements evaluate to false which will then break the loop.
  * Using `console.log` and the `debugger` statement allows for variables to be revealed in the browser at certain moments of the program's execution.
  * A great way to start thinking about how to code is to first pseudocode the step. This will help think in terms of the computer's instruction and also give structure and organization to project building.

Going forward in this module and beyond, we will continue to use and build upon these skills and learn new skills that leverage our current knowledge.
