
## Summarize current state of the game
We created a fight function with conditional statements that is able to use robot’s attack to diminish the health and fight a robot
Although the robots are able to fight, we can only fight a single robot, one time
This lesson we will add engagement for multiple rounds for multiple robots
To win the game jam, judges will be looking for more complexity and interesting gameplay
Learn new data types(arrays) and functions(loops) - for and while
Preview
Video Demo through multiple rounds and multiple robots(show console response to fighting)
Pseudo steps for advancing the game using logical conditions
When is a robot defeated?
When is the user defeated?
How do you know you won?
What happens after you win?
What happens after you lose?
How do you win the game?
How to translate pseudocode into code - functions or conditionals?
Important - ability to translate game logic into programming logic 
Define the steps that we chose to complete our MVP:
On The Job LB - what is an MVP?
Winning the game means defeating all the robots, so let’s add robots
Face all the robots and fight/flight each one
Multiple Battle Rounds for each Enemy
ROUND 1: FIGHT!
1.  Add Combatants  - Arrays
Preview the pseudocode/build steps in this lesson to reach the goal. Win the game. We need to survive all the robots.
Let’s make more robots to make this game longer and more interesting.
Present the problem
Show how to do it without arrays first. 
Declare each robot, then fight each robot.
Present the solution
Intro to new data structure - array
Prevalence of arrays or lists in everyday lives
Data tables
Email list
To do list
Search
Will help keep our code DRY
What else can arrays do?
Video Animation- File cabinet with number tabs visual representation
number
What data types can go into an array?
How long can an array be?
What is the purpose of an array?
How to access an array and console.log results
Indices
syntax
Use Example - array fruit - access different fruit
fruitBasket[0]
fruitBasket[-1]
One minute coding challenge: console.log (“apple”) from array
Declaring empty arrays
How to insert element into an array
Concatenate arrays
Create a list of enemies by using an array	
2. Loop Through Each Combatant - For Loop
Present the problem
Manually present each robot in the fight() function from the array
enemies[0], enemies[1], etc . . .
Unreliable due to static nature. When array length changes, code needs to change
Present the solution
We need to loop through the array reliably . . .
Intro to for() loop
Display universal nature - do something repeatedly
for() syntax - screen shot with labels
Declare Iterator
for() loop example with console.log(“apple”) multiple times, manually then looped
Use cases
Arrays
Count
Search
Manipulate
Counters
Do something multiple times
Special Purpose of Arrays
Array.length
Array methods intro - Array object
Deep Dive LB - Array methods - length, pop, shift, unshift, join, split, push
VIDEO of looping through an array - animation
Conditionals in loop
Prompt for condition to fight or skip
Using break; to end loop
Using debugger inside a loop
VIDEO showing how to use Chrome DevTools
Reseting health points at end of the loop
Important LB - while loop - break condition
1 min challenge. Here is a count up loop. Make it countdown.
Coding challenge - change the fight() while loop
Now the fight() call is inside the loop.
3. Fight Each Combatant - Argument
Present the problem
Declare each robot in the fight()
Declare each robot, then fight each robot
Present the solution
Use the argument to pass in the combatant
Setting up our fight() with parameters
DEEP DIVE LB - arguments vs parameters
   4. Fight Each Combatant Until Defeated - While loop fight()
Pseudocode the logic and build process for  this step (key points) 
health is zero or less means combatant is dead) which will  break the loop
If ( healthPts <= 0; ) break;
Introduce while loop for the fight function
In order to find the winner of our battles, we need to keep fighting
Pseudo code the conditions to know when a round is over
Could write the code multiple times or use a while loop
Comparison b/n while and for loops
A loop that is able to execute code many times in accordance to a condition statement
Pause LB what happens if the condition is never met?
User interface - prompt() fight or flight?
Award a win?
Deep Dive LB 
do/while, continue 
Important/Shortcut LB
+=, ++, --, -=
Reseting health points back to full health for next robot
Save progress with Git
Add,s commit, push
On the Job LB - loops and arrays are fundamental used daily by developers 
Reflection
More congratulations
Review what the student has accomplished in this lesson:
Created more gameplay complexity with control and different opponents
First pseudocode steps for game logic 
How to translate pseudocode into programming logic
Specific skills learned:
Learned how to loop until a condition is met.
Use arguments to pass in data to compute in a function
Difference between loops while vs for
Arrays are lists that store data
Looping through arrays
Function arguments
Debugger in a loop
Explain that in the next lesson the student will create new functions that will optimize game control and add new user interface with shop()

