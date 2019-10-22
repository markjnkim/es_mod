# Lesson 3.1 - JavaScript Basics

## Introduction

> The enemy of art is the absence of limitation.
> --Orson Welles

### Let the Games Begin

Being brave and confident, we have entered the Con Solo Game Jam, a competitive hackathon with some unusual constraints. Participants have a limited amount of time to create an entertaining, browser-based game that meets the following requirements:

- The game must run in a web browser
- The game must use the provided `index.html` file
- Only the `<title>` element of `index.html` may be changed
- Participants cannot use any CSS
- All game code must be in the `game.js` JavaScript file
- The game must be created by a single developer, in 24hrs!
- Extra points for code quality

Unfortunately, our formidable HTML and CSS skills are not going to help us here. On the bright side, we're going to learn some JavaScript!

After some reflection, meditation, and lucid dreaming, we have decided to build Robot Gladiators, an action-packed robot combat simulator. The player will coach their robot through a series of fights, gaining cash, attack power, and repairs along the way. The robot who survives with the most cash will be remembered in the browser's storage system!

Can all of this be done with JavaScript? Definitely. JavaScript is a powerful, wildly popular, general-purpose programming language. One reason for its popularity is that it's relatively easy to learn. Another reason is that all the major web browsers can run JavaScript code.

We have already learned that HTML defines a web page's structure, and CSS defines a web page's presentation. JavaScript is the third Musketeer, defining a web page's _behavior_. Together, these technologies comprise the core of front-end web development.

JavaScript enables a web page to _do things_. These things include (but are not limited to) filling out and submitting a contact form, clicking on a button that triggers a popup window, and adding/removing content on a web page without refreshing the browser. Front-end developers who understand JavaScript can create powerful, dynamic web applications with rich user interfaces. Some notable examples include:

- Netflix
- Google Photos, Google Docs, Google Sheets
- GitHub
- YouTube
- Facebook
- Twitter

If you've ever accomplished anything worthwhile in a web browser, you can thank JavaScript for that experience.

> **Urkel Says:** There are over 1.6 billion web sites in the world, and JavaScript is used on [95% of them](https://w3techs.com/technologies/history_overview/client_side_language/all).

It's worth noting that most useful web applications communicate with "back end" applications. A backend application typically runs on an internet-connected server that can do heavy data processing and store large amounts of data. JavaScript works there, too!

We'll learn more about creating back end (often called "server-side") applications in future modules. For now, rest assured that what you learn in this module will be foundational for the remainder of the course.

### The Other MVP

Because we have a tight deadline, we're going to have to focus. We will prioritize the development tasks necessary to "ship an **MVP**. Sports enthusiasts will recognize this initialization as "most valuable player." In software development, it means **minimal viable product**.

An MVP is the simplest version of a product that a developer can share with their target users to get important feedback. Once we have our MVP, we can share it with other Game Jam participants and get their feedback. From this feedback, we hope to learn:

- Is it fun?
- Does it meet the Con Solo Game Jam requirements?
- Does it run without errors?

The sooner we code our MVP, the sooner we can answer these questions and make changes to our game before the deadline.

> **On The Job** The term MVP was popularized by Eric Ries in his book The Lean Startup. The definition from the book is "a product with just enough features to satisfy early customers and provide feedback for future product development." The idea is that companies should spend the least amount of time developing a product before learning whether the product will be successful.
>
> This approach is also useful when developing new features for existing products. For example, "let's see if we should add customizable avatars to our users' profiles." Rather than spend several weeks or months developing a robust user profile customization system, a company might whip up something simple that lets users pick from a few, predefined cartoon characters. The company would then monitor the usage of this new feature and solicit feedback from users.
>
> This relatively cheap MVP will yield very valuable information to guide further development, or even scrap the idea.

We're going to use GitHub Issues and branches to help us manage our work. This is important, because we're also going to learn JavaScript while creating this game! The less we have the think about, the better.

Our old friends HTML and CSS are on the bench this round, but a lot of their concepts will come into play while we learn JavaScript:

- We wrote HTML in an `index.html` file, and CSS in `style.css` file. We'll write JavaScript in a `game.js` file.

- HTML and CSS have structure and syntax rules, as does JavaScript.

- We used Chrome to load and render our HTML and CSS. We'll use Chrome to load and run our JavaScript, too.

- We used Chrome DevTools to work with HTML and CSS. We'll also use Chrome DevTools to work with JavaScript.

## Preview

In this lesson, we're going to learn enough JavaScript to code a single round of Robot Gladiators. By the end of this lesson, the game will play like this:

1. The game will prompt the user to name their robot.
2. The player's robot will be initialized with the following properties:

- 100 health points
- 10 attack points
- 10 money points

3. The player's opponent, Roborto, will be initialized with these properties:

- 50 health points
- 12 attack points

4. The game will display "Welcome to Robot Gladiators!"
5. The game will prompt the user to either fight this round, or skip it.
6. If the player chooses to skip:
7. A penalty of 10 money points will be deducted from the player's robot.
8. The game ends.
9. If the player chooses to fight:
10. The player's robot will attack Roborto, and the player's robot's attack points will be deducted from Roborto's health points.
11. The game will display Roborto's remaining health points.
12. Roborto will attack the player's robot, and Roberto's attack points will be deducted from the player's robot's health points.
13. The game will display the player's robot's remaining health points.
14. The game ends.

So, how do we go about this? This an extremely difficult question to answer right now; we don't even know JavaScript yet! But it's good practice to reflect on a hard problem and consider some strategies for solving it, even if you don't have the tools handy. Even if you don't know what tools are!

Professional web developers are often presented with new challenges that don't come with obvious solutions. Yet they must develop solutions. So let's practice!

Some initial thoughts at this phase might be:

- I'll need to set up the files. Where do they go?
- I'll need to figure out how to make the browser prompt a user for input.
- How will I store values in JavaScript, like health points and attack points?
- There must be a way to do math in JavaScript. I wonder if it's like real life math.

You get the idea. You can break almost any problem down into a list of questions. Then, you find answers to each question.

There are many ways that we could approach creating the simple version of Robot Gladiators outlined above. But this is way we're going to do it:

1. Create a New GitHub Repository, an Issue, and branches. These are the basic steps for any new project.
2. Create our project files. We need to set up the `index.html` and `game.js` file structure according to the Con Solo instructions.
3. Use JavaScript functions to display game status to the player. JavaScript has some built-in functions that do this, but we will be creating our own functions as well to control when these messages appear.
4. Use JavaScript variables and operators to manage game data. We're going to do a little math and keep track of robot health, player money, and other game values.
5. Make decisions with JavaScript conditions. The game should allow a robot to fight if it still has health points, but not if its health points reach 0.
6. Accept user input to decide whether they would like to fight or skip the fight.

This is an ambitious project, but we have mapped out a strategy for building it without even opening our code editor! A thoughtful planning process can break almost any project down into manageable chunks, and help us identify the questions we need to answer to complete those chunks.

Let's set up our project and get started.

## Create a new GitHub repository, issues, and branches

As we do with each new project, we'll create a GitHub repository and clone it on our local machine. We'll then create a GitHub Issue to define the requirements for our MVP. Finally, we'll create branches to do our work in.

- Create a new repository in GitHub called "robot-gladiators".
  
> **Asset Needed:** Screenshot of options when creating a repository to remind students of the process

- Navigate to the "Issues" tab in the newly created repository and create the following issues for us to make feature branches from:

```md
Title: Initial game functionality - MVP

**Description**

_Must Have_
- Build a game where a player's robot can fight another robot until one of them loses.
- If the enemy robot loses first, the player's robot will move on to fight another enemy robot

_Features_
- The player's robot's name can be dynamically created by the player through the browser
- The player is given the option to skip the fight by paying a penalty fee, or continue with the fight
```

```md
Title: Add shop functionality

**Description**

- After defeating an enemy, ask the user if they would like to purchase an item from a store
- The user can either purchase health or attack points, if they can afford it
```

```md
Title: Add randomness to health and damage values

**Description**

- Start enemies at a random health value between 40 and 60
- Start enemies with a random attack value between 10 and 14
-Attack damage is random, using the robot's attack value as an upper limit (e.g. if the player's attack is 10, their damage range is 7-10)

```

```md
Title: Restructure data with JS Objects

**Description**
- Create and use JavaScript objects to organize data related to the player and data related to the enemies
- Create object methods to perform player actions
```

- Using the command line on your computer, navigate to the directory where you want to clone your repository using the `cd` command.

- Clone the repository to your computer by using `git clone`

- Use the `cd` command once more to step into the newly created directory for your repository.

Since it's been a while, let's refresh ourselves on what actions we just performed, as they are going to be used for every new project you create. First, we created a repository on GitHub to host all of the code we will be writing for this project. Then we created GitHub issues to help us keep track of the work we are going to do. Lastly, we need to get this repository onto our machines so we can actually write our code. We did this by cloning the repository to our computers, which creates a copy of our GitHub repo locally for us to work in.

Based on what we've learned previously, is it a good practice for us to work in the `master` branch of our repository? In this case, since we're starting from scratch, we _could_ work in the `master` branch with no repercussions because there's nothing for us to accidentally overwrite. But this is not always going the case, so it's better for us to built better habits for working towards best practice by creating separate git branches to perform our work in. It may seem like overkill at first, but the steps to do this are not much:

- Create a `develop` branch from the command line that will store completed work in before merging into the `master` branch. The following command will create this branch for us and move us into it (known as checking out):

```bash
git checkout -b develop
```

- Now create a feature branch for us to write our initial project code in using the same command:

```bash
git checkout -b feature/initial-game
```

> **Hint:** Don't forget to use the `git branch` command to see what the active branch is!

This branch will take us through the first three lessons of this module, as it will hold the code for our MVP.

Now we have created a branch for us to start actually writing our project's code, so let's get started by creating our project's files!

## Create Project Files and Structure

It was mentioned earlier that HTML was not going to be used in this lesson, but browsers are designed to open HTML files, so we'll be creating an HTML file that has the sole purpose of loading our JavaScript code.

Let's create our HTML file in the root of our project directory from command line using the following commands:

```bash
touch index.html
```

Then let's create our `assets` directory that will contain our application's JavaScript file. This will entail creating an `assets` subdirectory, a `js` subdirectory inside of `assets` (much like how we created a `css` directory for our stylesheets), then creating a `game.js` JavaScript file inside of the `js` folder. Sounds like a lot of steps, luckily we can chain these commands together:

```bash
mkdir assets; cd assets; mkdir js; cd js; touch game.js; cd ../../;
```

Every command we just utilized is one we've seen and used before, but never in this fashion, so let's recap. We needed to create a directory for all of our assets and then a subdirectory for our JavaScript file so we wrote out every command needed, but instead of typing each command one at a time, we were able to perform them all by writing them together and separating them with semicolons `;`. The semicolon is used to tell the command line that one command has ended and another one is about to start, so it doesn't interpret it as one run-on command.

> **Urkel Says:** Using a semicolon in programming is often referred to as a "terminator," meaning that it is used to inform the computer reading and running the code where a command ends so the next command can begin.

Now that we have all of our files created, let's go ahead and open up our project in Visual Studio Code. Remember, there's two main ways to do this:

- Open VSCode, find the menu option to open a new project folder. Then use the file navigator to locate your project and open the whole folder into the program.

- From the command line, make sure you are in the root of your project's directory and type in the following command to automatically open the whole project:

```bash
code .
```

> **Pause:** What does the period `.` mean when referring to directory and file paths?
>
> **Answer:** A single period `.` tells the machine that we are referring to the directory we are currently in. So when we say `code .`, we are commanding VSCode to load every file and folder from this directory into the program.

Once VSCode has everything loaded up, let's turn our attention to the `index.html` file and open it up in the editor, then copy and paste the following code into it:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Robot Gladiators!</title>
  </head>
  <body>
    <script src="./assets/js/game.js"></script>
  </body>
</html>
```

That looks like the boilerplate for blank web page!

There is one interesting element in the `<body>` of that page:

```html
<script src="./assets/js/game.js"></script>
```

If we recall, we've already created a JavaScript file called `game.js` in its own subdirectory. So if the JavaScript file is to be used with the HTML file, how can we incorporate it into the HTML file? We are using an HTML element we haven't encountered before, the `<script>` element, which is used for incorporating JavaScript code into the HTML file.

Notice the `src` attribute being used here. When we use `<script src="path/to/file.js"></script>`, we are instructing the HTML file to go look for a JavaScript file at that path's location and incorporate it into the HTML file.

Why would we put this towards the bottom of the HTML file, as opposed to CSS where we include the `<link>` element in the `<head>` element above all of our content? Out of all the different assets that go into a web page&mdash;images, CSS stylesheets, JavaScript&mdash;JavaScript runs the highest risk of possibly failing on load and more complicated JavaScript code could cause the browser to take a bit longer to read and run. Because it is our job to get the page to display as fast as possible, it is the best practice to put the `<script>` element at the bottom of the HTML page right before the closing `</body>` HTML tag. It is important to remember that a HTML file loads from top to bottom, meaning that if something at the top fails to load or causes the browser to run a little slow, it could lead to no HTML content showing up at all on the page. This would make users very confused and frustrated.


### Ensuring our JavaScript is loaded

We're pretty much ready to begin our journey into making our JavaScript application, but we should test that our HTML file is in fact reading our JavaScript file correctly. We can do that by adding a simple line of code that we'll be using quite a bit in this game.

Add this line of code into the `game.js` file, then save the file and open up the HTML page in the browser:

```javascript
window.alert("This is an alert! JavaScript is running!");
```

When the HTML file is opened in the browser, the first and only thing we should see is a small popup window that says "This is an alert! JavaScript is running!", something along the lines of this image:

> **Asset Needed:** Image of browser window with this alert

Also take notice of the fact that there is really nothing else we can do in this browser tab until we acknowledge the popup window and click the button associated with it. This is what's known as an **alert**, and we've just written our first line of JavaScript!

We'll get into what this code means next, but now we can move on knowing that our JavaScript is being read correctly by the HTML file. Since we just got our initial project structure created, it's a good time to commit your repository's code!

> **Connect The Dots:** We’ll get into what the above code actually means in a bit, but try and think about what it meant when we used the word `window` in that code and what it may be referring to. Also think about the `alert()` syntax and what programming concept it falls under. Is it something that stores data? Or does it perform an action?

## Use JavaScript functions to communicate with the player

So what happened in the last step when we added the `window.alert()` and opened up our HTML file in the browser? We were hit with arguably the most annoying part of being on the web, an alert dialog box! Alerts have been a staple in web development since the beginning, but where do they come from exactly? Namely, what is the `window` being mentioned in `window.alert()`? Let's dissect that code.

The first part we'll get into is the `window`, but only briefly. All we need to know for now is that the `window` is referring to the browser itself. Whenever we write JavaScript and run our code in a browser, this `window` will always be present, as we'll see later on when we use it for other purposes. The second thing to look at here is `alert()`, the part that comes after `window.`. An alert is a **function** built into the browser that allows the developer to create messages to send to the user.

> **Deep Dive:** Learn more about the [`window.alert()` function on MDN.](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

So what is a function? A function is a predefined action that we can call or invoke at a later time in our code. We just used `alert()`, which is a function provided to us by the browser, but we can also define our own functions.

After the `alert` function is listed, there is a set of parentheses with a sentence wrapped with double quotes `" "`. This can be broken down into two pieces:

- The parentheses are necessary to actually run a JavaScript function, even if there is nothing between them. When the browser reads the function name and sees the parentheses, it knows to that code and execute it.

- If there is content between the parentheses, this is what's known as "passing an argument" into the function. This means that the `alert` function was specifically created to accept varied content that will be displayed as the popup message every time it is used.

Lastly, the alert function's code is closed out by a semicolon `;`. This is to tell the browser running the code that this particular line is completed and any code that comes after it is a new piece code, these are known as **expressions**.

We'll dive further into passing arguments into a function shortly, but first let's create our own function by adding the following code to `game.js`:
​

```javascript
// this creates a function named "fight"
function fight() {
  window.alert("The fight has begun!");
}
```

Congratulations! You just wrote your first of many custom JavaScript functions. Let's dissect this syntax.

> **Asset Needed:** insert image of function diagram / notation

When we declare a function, we use the keyword, `function`, followed by the name we want to give the function. We named our function, `fight`, because we are creating a Robot Gladiators game. We can name our functions anything we want, but best practice is to name them so they describe their functionality. For example, we could name our `fight` function `x`, and we might remember what that means, but does it immediately let other developers know what the function does?

After we name our function, we need to include parentheses. This is part of the required function syntax and enables data to be passed into a function&mdash;much like the `alert()` function we just used. In our case, our function does not need input the same way that the alert does, but the parentheses are required regardless.

The _curly braces_, `{ }`, wrap the code that belongs to this function. Any code within the braces will be run by the function. Any code that is outside will not be run by the function. The code between these curly braces are what's known as a _code block._

If you haven't yet, save your file and refresh `index.html` in the browser. Did you get an alert stating that "The fight has begun!"? No. Why? We defined our function, but now we need to call it. How do we call a function?

Add the following to the bottom of `game.js`:

```js
fight();
```

> **Asset Needed:** insert screenshot of the browser with the fight() function's alert()

Then save the file and refresh `index.html` in your browser. The fight has begun!

This may seem unnecessary at the moment, why would we create a function that calls an alert when we could just call the alert? For now, that is a correct assumption, but we just set up our main function that we will be adding more and more code to throughout the build of this game. So it won't be unnecessary for long!

### Store User Input

So far we've communicated with the user in one direction, program to user. But how do we use JavaScript to ask the user for information and capture their input? This is a game, after all, the user has to have some say!

Like the alert function we used previously, the `window` has another function that we can use called a **prompt()**. Let's add this line of code to our `game.js` file at the top of the file:

```javascript
window.prompt("What is your robot's name?");
```

Now save and refresh the HTML file in the browser and we should something like this image:

> **Asset Needed:** Image of the browser with this prompt window open

We've now given the user the power to add their own information to our program. Where the `window.alert()` function sent a message from the program to the user through the browser's window, the `window.prompt()` function is used to ask the user to provide some input and send it back to the program. 

> **Deep Dive:** Learn more about the [`window.prompt()` function on MDN.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

Enter your robot's name into the input field displayed in this prompt dialog and click the "Ok" button (the name of this button may vary depending on the browser in use). The user has now provided the JavaScript program with that information and the program can use it throughout the code.

> **Important:** The `window` is a collection of functions and many other properties that is build natively into the browser. Whenever we open up our program in the browser, our JavaScript file's code is executed in the context of the `window`, so the tools and information (called "properties") it provides are always accessible by our code.
>
> When there is a collection of functionality and information that is accessed through one name (e.g. `window.alert()` or `window.prompt()`), that is what's known as an **object**, which we'll be learning more about later when we need to make our own.
>
> While our JavaScript code can access these properties of the `window` object, it is not actually part of the JavaScript language. We can use it because browsers have built this functionality into their software and put it behind the name `window`. This is what's known as a Web API (Application Programming Interface), which we'll learn a little more about throughout this project and a lot more in the coming weeks.
>
> Read more about the [`window` object on MDN.](https://developer.mozilla.org/en-US/docs/Web/API/Window)

So how do we use this data? When a user provides an answer from the prompt, where does it go?

Currently, if we were to run this program and fill out the prompt, the second we dismiss the prompt that response will be sent back to the browser but there is nothing in place to capture and store that response.

We need to be able to capture this data somehow. We can use what is known in JavaScript as an expression by editing our `window.prompt()` line in `game.js` to look like this:

```js
var playerName = window.prompt("What is your robot's name?");
```

We just used a critical part of JavaScript, **variables.**

In programming, a variable is a named location for a value that gets stored in the browser's memory when a program is run. If we refer to the above code we just placed into `game.js`, when we answer the prompt with our robot's name it will be stored in our program under the variable name `playerName`. This mean's that whenever we want to use our robot's name in our program, we can just refer to it as `playerName`. Since the data coming from the prompt is user driven, the value is unpredictable, so giving it a variable name in the JavaScript program will allow us to refer to variable data in a consistent manner by just calling upon that name.

Let's dissect basic syntax for creating a variable:

> **Asset Needed:** image/diagram of variable syntax

- **The `var` keyword:** Just like the `function` keyword we used previously, `var` is a keyword built into the JavaScript language. Whenever it is used, it tells the program that we are creating a new variable and the next word is going to be the name of the variable.

- **Variable Name:** This is the actual name that will be used to store the information assigned to the variable. The second the browser gets to this line when reading the file, it will store this name in memory so it can be recalled later in the program. The general rule of thumb for naming variables is to give them a meaningful (but not too long) name and to use camel casing when the name is more than one word, as the JavaScript language cannot interpret hyphens.

- **Assignment Operator `=`:** The assignment operator is a single equal sign that is used to set the value to a variable name. Everything on the left of the operator is to set up the variable name for the program. Everything on the right of the operator is the value being stored into the variable name. This value can come in a few different forms, called **data types**. Here are some examples of variables with different data types and an explanation of each one in the comments:

```js
// This is a String data type, it must be wrapped in double quotes (" ") or single quotes (' '). The standard is using double quotes.
var stringDataType = "This is a string";

// This is a Number data type, they can be integers (whole numbers) or have decimals (floated numbers)
var numberIntegerDataType = 10;
var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false
var booleanDataType = true;
```

There is a total of eight data types in JavaScript, some are used more than others, some you may not use at all for a while! We'll be learning more about some of the other data types as we need to use them, but it is a good idea we save this [list of data types from MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) now for future reference.

Let's turn our attention back to the variable that's holding our robot's name, `playerName`. We set up this variable in a different fashion than we did in the examples above. Rather than providing a set value to the variable, we are assigning the variable to be whatever value the `window.prompt()` function returns to us upon completion. The data type of the value returned from the prompt is still a string, however. The variable isn't assigned the prompt function, but rather the value being returned from the function.

### Use Our Variables

We've learned how to create data, but now let's use it in our application. The first thing we may want to check is that the data is there correctly.

For now, let's comment the `fight()` function's call at the bottom of the `game.js` file by putting two slashes in front of it so it looks like this:

```js
// fight();
```

What we just did was tell the browser to ignore running this function by turning it into a comment. This is a good practice when we don't want to delete code, but don't want it to run in the moment either. We'll revisit the `fight` function shortly, but for now let's add this line of code right underneath the variable declaration for `playerName` so it looks like this:

```js
var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
window.alert(playerName);
```

Save the `game.js` file and refresh the HTML page in the browser, we should see an alert come up with our robot's name in it!

Using an alert to ensure data has been entered properly is good when we're just starting off, but it's really not a realistic practice when we want to use it with multiple variables since having that many dialog boxes pop up on us can be frustrating and annoying. For this project, since we're not using any means of printing data for the use to see on the HTML page, think of the alert functionality as a way to get information to the user. It's not the best way of getting information to the developer, however.

### The Console: A Dev's Best Friend

So if an alert isn't ideal for developers to test and debug some of their code, what is? Let's go into our `game.js` file and change the alert function to look like this:

```js
var playerName = window.prompt("What is your robot's name?");
// What is this?
console.log(playerName);
```

Again, save the file and refresh the page in the browser to see what happens.

Wait a second, it seems nothing has happened at all!

Something actually has happened, but it's not for users to see. Instead it's for the developers to see behind the scenes in the browser. In Chrome, what tool have we used to debug our code before? We used DevTools!

Let's open up Chrome DevTools in our browser by right-clicking in the blank HTML document and selecting the word `Inspect` (do this after entering a name in the prompt). When it opens, you'll see the "Elements" tab selected with the HTML and CSS debugging tools. But this is JavaScript we need to look at now, so at the top of the inspector window click the tab titled "Console", and we'll see something like this:

> **Asset Needed:** Image of console at this point.

There's our robot's name! The tool we just used is what's known as the Developer Console. This is a crucial tool for developers to have at their disposal, as we can use this to test our code without interrupting the page like an alert does.

Like the `window`, the `console` is another object provided to us by the browser we can use in our JavaScript. The `console` object has it's own set of functions and properties that all interface with the browser's console window (in Chrome, it is the DevTools console tab we just used). Since the `console` is not part of the JavaScript language and is rather provided to us by the browser, it is a Web API.

> **Important:** Web APIs (Application Programming Interface) are tools provided to us to use when building applications. Sometimes the tools given to us by the JavaScript language are simply not enough, so we need to reach for a tool more specific to the problem we're trying to solve.
>
> Think about how we use tools in real life. We can't use our hands to push a nail into a piece of wood or turn a screw tightly, so we need to reach for something to help us finish the job. Something that was specifically made to solve that problem. The hammer or screwdriver don't work on their own, they work because we use our hands to power them.
>
> The same idea goes for Web APIs, they are tools that extend our programming capabilities when the tools we currently have aren't good enough for the problem we're solving.
>
> There are many Web APIs at our disposal, the most popular ones give us the ability to use JavaScript to manipulate HTML, play audio or video on a web page, and even help us with processing and securing credit card payments.
>
> If you'd like to learn more about what's available, check out the [MDN docs on Web APIs.](https://developer.mozilla.org/en-US/docs/Web/API). As we grow we'll gain a better understanding of how to use them.

As it was mentioned, using the `console` plays an integral role in writing JavaScript for all developers, no matter how experienced they are. We'll be using it more throughout our Robot Gladiators game, but first let's practice with a few more examples:

Place this code into `game.js` under the first `console.log()` we used:

```js
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);
```

When we save this file, refresh the browser window, and look at our DevTools Console tab, we'll see something like this image:

> **Asset Needed:** Image of Console showing the above logs.

We have used the `console.log()` function in a couple of different ways here. We logged a plain string sentence, which is very helpful sometimes when we run a lot of code at once and we want to trace when certain functionality executes. We logged the total of two numbers being added together (more on arithmetic operators soon). But what's going on this last log we ran?

Before we learn the official name of what action we performed, let's put it into our own words. We wanted to take the name of our robot and place it into a sentence so it reads "Our robot's name is [robot's name]". To do this, we needed to combine a string with a variable. This is what's called "string interpolation".

The way this type of action works is that we can write out our string normally, but when we need to include variable data, we need to close the string and put a plus sign `+` after the closing quotation, then write our variable name.

Here are a couple more examples:

```js
console.log(playerName + " is ready for battle!");

console.log("Your robot, " + playerName + " has won!");
```

The first example is similar to the one we used before, except we flipped where the variable was interpolated. The second one, however, needed the variable in the middle of the sentence. So notice how we had to close the first string, use the plus sign to include the `playerName` variable, then use another plus sign and continue with our string. It is important to note that when we interpolate strings that we need to include a leading or trailing space in our string so the interpolated variable doesn't run up against the word that comes before or after it.

Let's touch upon one more thing before continuing with our Robot Gladiators' game. Open the Console tab in Chrome DevTools. Notice that in the main window for the Console, there is a blinking line, almost as if we're allowed to type in it. Well, we are.

We can use the Console to write simple JavaScript and test out some different features or functionality rather than writing it into our files and doing our save/refresh actions. All we need to know is write a line of JavaScript and hit `Enter` / `Return` on our keyboards and it'll run the code.

Let's add the following to the Console:

```js
var name = "your name";
console.log(name);
```

The above code should create a variable called `name` with your name stored as the value, then the next line will `console.log()` the value of the `name` variable.

> **Deep Dive:** The Chrome DevTools window can help developers discover bugs and issues in almost every aspect of front end development, yet sometimes the amount of options it offers is overwhelming and hard to understand at first. Luckily, the team at Google have created [detailed documentation about DevTools](https://developers.google.com/web/tools/chrome-devtools) for us to use.

We've now learned how to create functions, execute functions, how to interact with the user, and store data, let's revisit our `fight()` function and start giving our robot something to do!

Make sure you commit the code you've completed so far using git!

## Manipulate data with functions, variables, and operators

While the last step was about understanding functions, storing data in variables, and putting them both to use, this step is going to be all about manipulating data using **operators**.

By the end of this step, we'll be able to execute our `fight()` function and have our robot attack an enemy and have the enemy attack our robot. So let's start by asking ourselves: What do we need in order to make this happen?

In order for our robot's to battle each other, they are going to require some type of data tracking their overall health values as the game progresses. We are also going to need to know how much attack power each robot has to determine how many of these health points should be removed when attacked. This sounds like a job for variables, so let's update our `game.js` file. And while we're at it, we'll give the enemy robot a name.

Replace everything in `game.js` so the entire file looks like this:

```js
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};

fight();
```

We've now set up our game to keep track of our player robot's information and the enemy robot's information, each receiving three variables to hold their names, health points, and attack points.

> **Pause:** What type of data is the `enemyHealth` variable holding? What about `enemyName`?
>
> **Answer:** `enemyHealth` is a "number" data type and `enemyName` is a "string" data type.

We also made a slight change to our `fight` function.

There are two methods to create a function in JavaScript:

1. **Function Declaration:** When we create a function using the `function` keyword first.

```js
// create function
function fight() {
  window.alert("Welcome to Robot Gladiators!");
}
// execute function
fight();
```

2. **Function Expression:** When we create a function by assigning it to a variable.

```js
// create function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
// execute function
fight();
```

Both of these methods are acceptable when it comes to creating functions in JavaScript and we will see them written both ways all throughout our careers; but for the sake of consistency in how we write our code, we'll use the second method and employ function expressions throughout our game. There is one main difference in how the browser interprets those two methods of creating a function, but it won't affect us throughout the Game Jam so there's no need to tackle that issue just yet.

> **Asset Needed:** Important Callout explaining the difference between expressions, declarations, and statements

### Do Math with Operators

Now we have the important data needed to have our robots battle, so let's update the `fight` function to actually make it happen. We're going to update the function to do five things when we execute it:

1. Alert users that they are starting the round (this is already done)
2. Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
3. Log a resulting message to the Console so we know that it worked.
4. Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
5. Log a resulting message to the Console so we know that it worked.

Think about the above list as a means of outlining what our function needs to perform but in a way for us to think about it that makes more sense. Before we set out on creating any function, no matter how simple it is, it is always a good plan to think about what needs to be done and to write it out in our own words before we hit the ground coding.

Another good idea is to actually put this list of actions into our code as comments, as it will help us remember the order of which we need our code to run and remind us what it is doing.

Let's update the `fight` function to look like this:

```js
var fight = function() {
  // Alert users that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the Console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable

  // Log a resulting message to the Console so we know that it worked.
};
```

Now we have in our code a set of instructions for us to follow one-by-one, so let's tackle the next two steps and get introduced to using operators!

Let's add the following code to our `fight` function:

```js
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the Console so we know that it worked.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
```

Once these are in place, save the file and refresh the page in the browser.

> **Hint:** Make sure the Chrome DevTools Console stays open while we work on our game! It'll refresh itself when we refresh the page.

If we check the Console, we can see that something has happened to the value of our enemy's health. It seems to be less than what we set it to when we created the `enemyHealth` variable. We just manipulated and reassigned a variable's value!

Let's dissect the code to better understand what happened:

```js
enemyHealth = enemyHealth - playerAttack;
```

The first thing we can see is that there is no `var` keyword here. This is because we use `var` to create new variables, but in our case, we want to update the value of a variable that already exists. If we were to use the `var` keyword, it would create a brand new `enemyHealth` variable inside of the `fight` function, meaning the `enemyHealth` variable we created at the top of the file and outside of the function will be unaffected.

> **Important:** Creating a variable inside of a function is what developers call "scoping" a variable.
>
> If a variable is created inside a function and has the same name as a variable created outside of the function or in a different function, it will not overwrite the other variables' data and they will remain untouched, but now that function can only reference the variable created inside of it.
>
> The most important thing to know about scoping at this moment is that variables created outside of a function can be referenced and used inside of the function, but variables created inside of a function only exist within that function.

On the left hand of our expression, we simply list the variable we are going to be updating. We're updating it by reassigning it a new value of the following code:

```js
enemyHealth - playerAttack;
```

The above code is what is on the right hand side of our expression. When a variable that holds a string, number, or boolean data type is listed to the right of an assignment operator `=`, it uses the value held by that variable and not the variable name itself.

In our case it would be the equivalent of writing `50 - 10`, but since the value of a variable changes, we need to use the variable name holding the value instead of the value itself.

To think about this in a more understandable fashion, we just reassigned the variable holding onto the enemy's health points by taking the current value of the enemy's health points and subtracting it by our robot's attack points.

After the attack finishes, we use `console.log()` to give ourselves some details as to what just happened. This is a good way of seeing that our code is working. If we were to call the `fight` function again, we would see the second `console.log()` would show the value of `enemyHealth` is ten points lower than the previous log.

Now that we have our robot attacking the enemy robot correctly, let's take our new knowledge and put it to use by having the enemy robot attack our robot.

Add the following into the `fight` function in the `game.js` file:

```js
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the Console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
```

All we had to do was repeat the previous two lines of code and switch the variable names around! Now we have a full working round of battle between our robot's, as they can exchange attacks.

> **Deep Dive:** Arithmetic operators in JavaScript work much like they do in every day math, which a few caveats:
>
> - **Addition (`+`):** Used to produce a sum of two or more numbers, but JavaScript also uses this operator to combine strings together (called concatenation). If a value on either side of the `+` operator is a string data type, the result will be the two values combined into a string instead of added together.
>
> ```js
> // this will be 10
> console.log(4 + 6);
>
> // this will be 46
> console.log("4" + 6);
> ```
>
> - **Exponentiation (`**`):** In every day mathematics, to multiply a number by itself multiple times can be performed using a single caret operator (`^`). In JavaScript, it is performed like this code:
>
> ```js
> // this will be 125, same as 5^3
> 5 ** 3;
> ```
>
> Besides these two main differences, the rest of the arithmetic operators behave the same way we learned how to use them in math class. For more information, check out the [MDN docs on operators.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

Our `fight` function is now starting to take form, as we can now execute it to have our robots attack each other. How does the game know when to end, though?

> **todo** Write prompt to enter `fight()` into the DevTools Console a bunch of times and see what happens

We can assume that the game ends when one of the robot's health points gets down to zero, but now we have to figure out a way to instruct our code to check for that type of event and more importantly, what to do when it happens.

## Add Conditions to our Function

A popular term that has permeated programming over the years is something called "state". State is a term used when referring to the data at a point in time for our application, a lot like how we use the word when we say something like "I am in a state of relaxation." It is a term not only used to convey what's happening now, but it can also help us decide what's going to happen next based on it.

In the real world, we use these states to determine what we want to do next. If we just exercised and worked up a sweat, the next thing we may do is take a shower or drink a glass of water. If we are feeling tired, we go to sleep. What we are really doing is performing a mental check to see where we're at, and based on that information, decide where to go from there.

In JavaScript, we can perform similar checks based on the status of our code and help the program determine where to from there. These checks are called **conditions**`, and are another crucial set of tools for us to use.

Here is what a condition looks like in JavaScript:

```js
if (10 > 2) {
  console.log("Ten is greater than two, so this runs!");
}
```

First, let's go through what that whole block of code means. Using the `if` keyword, which is built into the JavaScript language, we are telling the browser that we are going to now check for a condition to be true or false and execute a block of code based on that result.

The condition in question here is what appears between the parentheses, `10 > 2`. In this case, we are checking to see if the value of the number ten is greater than the value of the number two. If it is, then the condition is considered "true", and the code that appears between the curly braces is executed.

If we switched the condition to look like `2 > 10`, or maybe even `10 < 2`, then the result would be "false" because two is not greater than ten and ten is not less than two. Because of this, the code between the braces will not run at all.

The example we just went through is a very basic use case for conditions in JavaScript. We gave it one condition to check and a block of code to execute if that condition is true. Thinking about it, we only gave our code one direction to go based on that condition. Now let's give it two possible directions:

```js
if (2 === 10) {
  console.log("This will not run.");
} else {
  console.log("This will run instead.");
}
```

What we just used is what's known as a "control flow" statement. We used the `if` keyword to check if the number two equals the number ten (in JavaScript, three equal signs is a means to check if two values are directly equal to one another). These two numbers do not equal one another, so the first code block is skipped and runs the second code block instead. The second code block is denoted by using the JavaScript `else` keyword.

We wrote our code in a way to take a certain path depending on a condition. Now the condition used here is always going to result in the `else` block of code running, since two will never equal ten, but think about what happens the condition we're checking is the current value of our robot's health. That is a value that will be changing throughout our application, so to be able to check that value from time to time will give us the ability to change the game's direction if it gets down to zero.

> **Deep Dive:** For more information on conditional statements in JavaScript and the different operators we can use, check out the [MDN docs on conditionals.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

### Check Our Robots' Health

In our `fight` function, we currently have our two robots attacking each other, but there is no way to determine if either are still able to fight again. This means that if we wanted to, we could execute the `fight` function over and over until both of the robots' health values are way into the negatives. Since health is a value that should stop decreasing when it gets to zero, we'll need to write in a check to see if it gets there.

In the `fight` function, add the following code after we `console.log()` that our enemy has been attacked by the player:

```js
// put new code under this
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
```

When we save this file and refresh our browser, we should receive two alerts from the window. The first will be our "Welcome to Robot Gladators!" message, but after we should receive one of two messages. The message that will be displayed is dependent on the value of the `enemyHealth` variable.

If it is zero or under (notice the use of `<=` to see if it is less than or equal to zero), we will see the message "Roborto has died!", like this image displays:

> **Asset Needed:** Screenshot of "Roborto has died!" alert

If the value of `enemyHealth` is still one or greater, then a message of "Roborto still has [enemyHealth's value] left!" is displayed instead.

To test to make sure both conditions work, we can easily set the value of `enemyHealth` to be much lower, like five, to start. This way we can run our `fight` function once and Roborto will have an `enemyHealth` value that goes into the negatives.

> **Hint:** When writing conditions based on values, try running the code with different values to see how it works at those different values. But don't forget to set it back to what you want it to start at when done testing!

Now when our `fight` function executes, we perform the following tasks in this order:

- We let the user know the fight has begun
- We have our robot attack the enemy robot by subtracting our robot's `playerAttack` value by the enemy's `enemyHealth` value, resulting in our enemy's new `enemyHealth` value
- We then check to see if that last attack destroyed our robot and got its health down to zero or below by using a conditional statement.
  - If `enemyHealth` is zero or below, the enemy robot has lost
  - Else `enemyhealth` is above 0 and the enemy robot can still fight
- If the enemy robot is still alive, then have it attack the player

There is one more piece we need to add to our `fight` function for it to complete a full round of attacks. If we are checking to see if the enemy robot has died in the fight, then we also need to check if our robot has died as well!

We are going to do so by utilizing the same conditional statements we just used for our enemy robot. Add the following to the `fight` function after the enemy robot attacks our player:

```js
// put new code under this
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
```

Now when we save our `game.js` file and refresh the browser, we'll see three alert dialog windows pop up. The third alert will be in regards to our robot's status. If our robot's health (represented by the `playerHealth` variable) is zero or below, we would have received an alert letting us know our robot has died. If it is above zero, then we would have received an alert letting us know how much health our robot has left.

Again, we can edit our `playerHealth` variable data to be higher or lower when the game starts to make our conditional statement take us in one direction over the other. This way we can check what happens when the condition is true and when the condition is false.

### Get That MVP

Our Robot Gladiators game is starting to take shape! We have built the application to run one round of the game, which pits two robots against each other and checks if either robot lost, and to interact with the user through browser alerts and prompts.

Since the user interaction does not affect the outcome of the game, it is not as much of a game as it is a simulation of a battle. Since this is a Game Jam, we need to add more meaningful user interaction with the game. We'll do just that by giving them a choice of skipping the fight for a fee, or go ahead with the round of fighting.

Let's commit our code and get that MVP!

## "Stay or Go" with Control Flow

Most round-based battle games provide a list of options for a player to choose from throughout the game. These choices can change the direction the game goes in and usually affects the outcome of the game in some way.

Since we already have the logic around making our robots battle, let's add another option to the mix and allow the user to skip the fight. Before we begin coding, let's consider how we want to tackle this problem by answering these questions:

> **Hint:** All of the new code we write will go into the `fight` function.

- What can we use to ask the user if they'd like to fight or skip the fight?

- When would we ask them?

- How can we tell the code pertaining to our robots fighting to not run if a user chooses to skip the fight?

We can drive ourselves crazy thinking about all of the "what-if" scenarios we can come up with for our users, but it is important to think about the main functionality first. This is where pseudocoding really helps us decide how to tackle our problems. By asking ourselves questions like the above, even if the answers we come up with aren't 100% going to do the job, it gets us thinking critically about what we need to write into our program.

Here are some potential answers for the above questions:

- We can use a prompt to ask the user if they would like to fight or skip the fight

- We should ask users towards the beginning of the `fight` function so we can know what they want to do before they do it

- We can use an `if` statement to check how the user responded and run the code to make the robots fight only if the user answers a certain way

Notice that these answers allude to how they might be written in code, but are also readable by humans. We didn't provide too much detail as to how all three of these answers will be written, but we provided enough information for us to tackle each of them individually. Let's start by adding a `window.prompt` to our `fight` function.

Right below the first alert in the `fight` function, create a variable called `promptFight` and assign it to store the returning value of a prompt asking the user if they would like to fight or skip the battle. The code should look something like this:

```js
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
```

When we execute our `fight` function now, we'll get an alert welcoming us to the game but then we'll be asked if we'd like to fight or skip the battle. We're also giving them tighter instructions on how we expect them to answer, this way we can use value being stored in `promptFight` later in an `if` statement condition.

> **Pause:** How can we read back the response of `promptFight` to make sure it is working?
>
> **Answer:** We can use `console.log(promptFight);` to log it to the Chrome DevTools Console by writing it after we create the `promptFight` variable.

So now we have the ability to get the user's choice and use it to determine whether we should fight or skip the battle. Think about this in terms of "if this...then do that", if a user picks "FIGHT" what should happen? If the user does not pick "FIGHT", and picks "SKIP" instead, what happens then?

These are the two main answers we're looking for, but it's a prompt we're using, how can we stop a user from entering whatever they'd like? The answer is we can't stop the prompt from returning an answer we aren't explicitly looking for. Now that we know that, how do we handle a situation like this?

> **Urkel Says:** When developers write code, it is often not enough to write it in a way to only work as it was intended to work because user interaction can lead to unpredictable input and actions. A thoughtful developer builds a program that works under ideal conditions, but then adds protective code into it to help handle situations like this so the program doesn't break.
>
> These situations are known as "edge cases".

So now we have to make a decision as developers. We can set up our program to explicitly check to see if our user chose to "FIGHT" and let anything other than that mean the user has chosen to skip the fight instead. This means that if a user were to put into the prompt "tomato", the program would interpret that as the user wanting to skip the fight. This could be very confusing for the user.

At the very least it should be our job to inform them they made an incorrect decision and our program isn't designed to accept an answer like that. So what we are going to do instead is the following:

- Check if the user picked the word "FIGHT" or "fight"
  - If yes (or true), then we will continue with the battle and our robots will fight
- If the user did not pick "FIGHT"/"fight", check if the user picked "SKIP" or "skip" instead
  - If yes, penalize the player and end the `fight` function
- If the user did not pick any of the above words, then let the user know they need to pick a valid option

Previously, we used control flow statements to take us in one of two possible directions. If the player had no health, let them know they have lost. Otherwise, let them know how they are doing.

Now, we are going to provide three possible directions. First we'll check to see if `promptFight` holds one value and if it doesn't, we'll check to see if it holds a different value. If it holds neither of the values, we'll simply take them in a third direction.

Let's update our `fight` function by changing all of the code below the `promptFight` variable to look like this:

```js
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  window.alert(playerName + " has chosen to skip the fight!");
} else {
  window.alert("You need to pick a valid option. Try again!");
}
```

Let's save our `game.js` file, run our game three times, and enter a different choice each time. First time, pick "FIGHT". Second time, pick "SKIP". Lastly, enter anything you'd like that isn't the first two.

Each should yield a different result based on how we responded to the prompt. If we chose "FIGHT" or "fight", we ran the battle code that we wrote previously. If we chose "SKIP" or "skip", we left the fight; and if we chose neither, we were informed that we made an incorrect choice.

We used `if`, `else if`, and `else` keywords to have our code pick one of three directions to go based on checking to see what the value of a variable was. Let's dissect some of this syntax, starting with our initial condition:

```js
if (promptFight === "FIGHT" || promptFight === "fight")
```

Keep in mind that anything we put between the parentheses in an `if` statement is going to result in a true or false value, so when we put `promptFight === "FIGHT"` in there, we are checking to see if the value of `promptFight` is the word "FIGHT". Anything other than that value, different casing included, would result in the condition being false.

Since we cannot always count on a user using all uppercase letters when typing the word, we also want to check to see if maybe they entered the word "fight" in all lowercase letters instead. So now, within one condition check, we are seeing if _either_ of these checks result in true. If at least one of them comes back true, then the whole condition is considered true.

We made this happen by using the `||` syntax, which is known as an "OR" operator. When we use this in an `if` statement, we are telling the program to execute that code as long as at least one of the condition checks results in true. If both are false, then move on.

> **Deep Dive:** The OR `||` operator isn't the only logical operator available in JavaScript, and we'll be introduced to them throughout this game, but it is helpful to keep the [MDN docs on logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) handy as a reference.

So what happens if we don't enter "FIGHT" or "fight"? What happens if we use "Fight" instead? This is a logical question, as some users are accustomed to capitalizing everything out of habit. In our case, however, that would be considered false since we did not explicitly check for that permutation of the word. We'll explore other methods of fixing issues like this later in the game, but for now let's focus on what happens if the first `if` statement is false and the code doesn't run.

After the block (curly braces `{ }`) holding the first `if` statement's code ends, we can see something new:

```js
else if ([Condition])
```

This means that if the first `if` statement fails, then let's try another one. If the first `if` statement is true, then we'll never get to checking the `else if` statement. This is used as a fall-back condition check.

In our case, we're using `else if` to do a similar check as our `if` statement, but now we're checking to see if the user wrote in "SKIP" or "skip" instead. But what happens if the user does not pick that either?

If the user does not choose one of the values we've explicitly listed, then our code reaches the `else` block of code. Think of the `else` as a default action if all else fails.

> **Asset Needed:** Learnosity checkpoint quiz with different conditions and having students guess what'll happen

### Leave the Fight, at a Cost

We have all of the important pieces in place to make this game interactive with the user. They can pick their robot's name and they can decide if they want to go through with the battle, which will play heavily into when our robot battles multiple enemies soon. There is one issue with our logic, however. What is to stop a player from skipping all of the fights and finishing with full health?

This is a hard question to answer, as there are a lot of different answers we can provide. We could penalize a player by subtracting health points upon leaving a fight, but that doesn't make too much sense, as the whole point of leaving the fight is to retain health for the next possible battle. So rather than gauging a player's success off of how much health they have at the end, let's gauge it off of how much money they have at the end instead.

> **Legacy Lem:** Think about how old arcade games used to display "High Score" lists to rank players. Most games are not about getting to the end, but rather how high of a score they have when the game is over for them.

We're going to finish off this lesson by adding in functionality to penalize our player if they choose to skip a fight, so let's start by adding a variable to keep track of how much money they have.

At the top of `game.js` where we have declared all of our other player-based variables, create another one called `playerMoney` with an initial value of 10:

```js
var playerMoney = 10;
```

We now have the ability to keep track of how much money our player has. This will come into play later in the game when we add the ability to purchase items, but for now we will us it to penalize a player when they choose to skip a fight.

Let's go ahead an add this penalty for skipping the fight into our `fight` function. If it is to only happen when a user chooses to "SKIP" or "skip" the fight, where should we place the penalty?

In the `else if` statement checking to see if we the user picked one of those values.

Inside of the `else if` statement, we are going to add the following steps for our code to run:

- Confirm with the user that they do want to quit

- If they say "yes", subtract two from the `playerMoney` variable and create and alert that let's the user know they are leaving the game

- If they say "no", execute the `fight` function start the fight over again. This will give them the choice to fight or skip, where they can choose "fight" and keep playing.

Add the following code inside of our `else if` statement so it looks like this when it's done:

```js
else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
}
```

So we have two things to point out here:

1. What is this `window.confirm()` thing?

2. Did we just use an `if / else` statement inside of another conditional statement?

Both of these are somewhat familiar territory to us by now.

We know based on our knowledge of alerts and prompts that `window.confirm();` must be another function provided to us by the browser. It works a lot like `window.prompt();` in that it asks the user for input and stores their response into a variable, but it asks for a different type of response.

A prompt lets the user enter whatever they want, which is great for taking in information like a name or something else that isn't a simple "yes" or "no" answer. For simple "yes" or "no" questions, that's where the `confirm()` function comes in, and looks like this image:

> **Asset Needed:** Image of window.confirm() dialog in browser

In this image, we can see that we are asked to acknowledge a question or statement by clicking the "Ok" or "Cancel" buttons. If we click "Ok", the boolean value `true` is returned and stored in the variable. If we click "Cancel", the boolean value `false` returned instead.

Think about how we can use this for our game. Our user can choose to "skip" the fight, but let's ask them one more time if that's really what they want to do, since it's going to make them leave the game. If they choose to leave, then we can check to see if the `confirmSkip` value is true and take them out of the game. Otherwise, let's have them restart the `fight` function instead.

This is where the next part comes in, where we check a condition inside of another condition. This is a very common practice in programming, and we can nest conditional statements as much as we need to&mdash;within reason, of course.

Remember that with conditional statements, we're checking to see if something is true or false. So what is the value of `confirmSkip` if we choose to quit? The value is in fact `true`.

Consider these two examples:

```js
var confirmSkip = true;

if (confirmSkip === true) {
  // do something
}

if (confirmSkip) {
  // do something
}
```

The first example we are directly checking to see if the value of `confirmSkip` is the boolean value `true`, in the second one we are implicitly asking "is `true`, well... true?" They achieve the same results, but one uses less code and can be used in other ways (which we'll see and use later).

If we now run our program and choose to "skip", we will be asked if we really want to quit. If we choose to quit, then we will have 2 subtracted from our `playerMoney` variable's value and since there's nothing else to do, the program ends.

If we choose to "skip" and then decide we're not sure we'd like to quit, then the value of `confirmSkip` is false. Meaning that if we check that in our conditional statement, we are asking it "is `false` true?" The answer to that is "no", because `false` does not equal true.

> **Deep Dive:** We can use JavaScript conditional logic in a number of ways. Since JavaScript tries to define logic in simple `true` or `false` fashion, our conditions may not always fit that bill so easily. Luckily, JavaScript knows this, and can do a little magic to make certain conditions and values result in `true` or `false`.
>
> This is known as "truthy" and "falsy" values. For more information, check out the [MDN docs on truthy values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and the [MDN docs on falsy values.](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

We're all set! We now have one round of our Robot Gladiators game running and can now think about adding more features into it.

Before we move on, don't forget to add, commit, and push our code up to our GitHub feature branches!

## Reflection

We've really hit the ground running for our first game jam! Sometimes the hardest part of learning something new like JavaScript is getting started, as it is easy to spend a lot of time trying to plan every single aspect of a program before writing it. That can lead to an app never getting off the ground because too much time was spent planning.

We took a different approach and built a functional program from the start and introduced new tools and concepts as we needed to add new features in our application. Of course with every new addition, we also open ourselves up to new problems that need solving. But for every problem we come across in JavaScript, we will also be presented with a new opportunity to solve it and make our program even better!

Let's review what we've covered so far:

- We learned about the role JavaScript plays in web development.
- We used functions built into the browser to interact with the user through dialog boxes.
- We created our own JavaScript functions to execute our own actions.
- We learned how to store and manipulate data along with some of the data types we can store using JavaScript variables.
- We used the Chrome DevTools Console to help us keep track of what data we're using.
- We created JavaScript control flow statements to run certain blocks of code based on the current state of our data.

The tools we've learned so far all play critical parts in everyday JavaScript development for developers at all experience levels. They've helped us lay the groundwork for our Robot Gladiators game so we can now build upon it and make it more complex.

Next up we'll be taking our one round of battle created in the `fight` function and instructing our program to run the functionality automatically until one robot loses. If our robot wins, it will face a new enemy robot!

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.