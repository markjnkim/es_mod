# Lesson 3.1 - JavaScript Basics

## Introduction

> The enemy of art is the absence of limitation.
> --Orson Welles

## Let the Games Begin

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

In "Module 1: HTML, CSS, and Git," we learned that HTML defines a web page's structure, and CSS defines a web page's presentation. JavaScript is the third Musketeer, defining a web page's _behavior_. Together, these technologies comprise the core of front-end web development.

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

@TODO Add Deep Dive LB with link to learning about front end vs back end

## The Other MVP

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

4. The game will display "Welcome to Battlebots! Round 1"
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
6. Accept user input. We're going to ask the player a lot of questions. JavaScript has more built-in functions to help us store the player's answers.

This is an ambitious project, but we have mapped out a strategy for building it without even opening our code editor! A thoughtful planning process can break almost any project down into manageable chunks, and help us identify the questions we need to answer to complete those chunks.

Let's set up our project and get started.

## Create a new GitHub repository, issues, and branches

As we do with each new project, we'll create a GitHub repository and clone it on our local machine. We'll then create a GitHub Issue to define the requirements for our MVP. Finally, we'll create branches to do our work in.

- Create a new repository in GitHub called "robot-gladiators".
  @TODO Remind students what options to check when creating a repository (provide screenshot)

- Navigate to the "Issues" tab in the newly created repository and create an issue for us to make a branch from.
  @TODO Provide information for the issues and an explanation that it's more of a Feature than an Issue/Bug

- Using the command line on your computer, navigate to the directory where you want to clone your repository using the `cd` command.

- Clone the repository to your computer by using `git clone`
  @TODO Provide instructions/refresher on the git clone process with screenshots

- Use the `cd` command once more to step into the newly created directory for your repository.

@TODO add LB to remind students how to use command line commands such as `ls` to know which folder they need to step into

Since it's been a while, let's refresh ourselves on what actions we just performed, as they are going to be used for every new project you create. First, we created a repository on GitHub to host all of the code we will be writing for this project. Then we created GitHub issues to help us keep track of the work we are going to do. Lastly, we need to get this repository onto our machines so we can actually write our code. We did this by cloning the repository to our computers, which creates a copy of our GitHub repo locally for us to work in.

Based on what we've learned previously, is it a good practice for us to work in the `master` branch of our repository? In this case, since we're starting from scratch, we _could_ work in the `master` branch with no repercussions because there's nothing for us to accidentally overwrite. But this is not always going the case, so it's better for us to built better habits for working towards best practice by creating separate git branches to perform our work in. It may seem like overkill at first, but the steps to do this are not much:

- Create a `develop` branch from the command line that will store completed work in before merging into the `master` branch. The following command will create this branch for us and move us into it (known as checking out):

```bash
git checkout -b develop
```

- Now create a feature branch for us to write our initial project code in using the same command:

@TODO create feature branch name based on issue created in GitHub

```bash
git checkout -b feature/NAME
```

@TODO Hint LB reminding students of `git branch` to see where they are

Now we have created a branch for us to start actually writing our project's code, so let's get started by creating our project's files!

## Create Project Files and Structure

It was mentioned earlier that HTML was not going to be used in this lesson, but since we cannot open a JavaScript file directly from the @TODO explainer of browser's need for HTML.

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

- Open VSCode, find the menu option to open a new project folder. Then use their navigator to locate your project and open the whole folder into the program.

- From the command line, make sure you are in the root of your project's directory and type in the following command to automatically open the whole project:

```bash
code .
```

> **Pause:** What does the period `.` mean when referring to directory and file paths?
>
> Answer: A single period `.` tells the machine that we are referring to the directory we are currently in. So when we say `code .`, we are commanding VSCode to load every file and folder from this directory into the program.

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

> **Hint:** Using VSCode, you can scaffold out boilerplate HTML code by typing an exclamation point `!` and hitting `tab` or `enter`/`return` and it will create all of the code you need to start an HTML file! This is due to VSCode having an add-on installed by default called Emmet.
>
> Emmet has a lot more of these shortcuts to offer, save [this Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) for the full list!

There is one interesting element in the `<body>` of that page:

```html
<script src="./assets/js/game.js"></script>
```

If we recall, we've already created a JavaScript file called `game.js` in its own subdirectory. So if the JavaScript file is to be used with the HTML file, how can we incorporate it into the HTML file? We are using an HTML element we haven't encountered before, the `<script>` element, which is used for incorporating JavaScript code into the HTML file.

Notice the `src` attribute being used here. When we use `<script src="path/to/file.js"></script>`, we are instructing the HTML file to go look for a JavaScript file at that path's location and incorporate it into the HTML file.

Why would we put this towards the bottom of the HTML file, as opposed to CSS where we include the `<link>` element in the `<head>` element above all of our content? Out of all the different assets that go into a web page&mdash;images, CSS stylesheets, JavaScript&mdash;JavaScript runs the highest risk of possibly failing on load and more complicated JavaScript code could cause the browser to take a bit longer to read and run. Because it is our job to get the page to display as fast as possible, it is the best practice to put the `<script>` element at the bottom of the HTML page right before the closing `</body>` HTML tag. It is important to remember that a HTML file loads from top to bottom, meaning that if something at the top fails to load or causes the browser to run a little slow, it could lead to no HTML content showing up at all on the page. This would make users very confused and frustrated.

We can write JavaScript code in the HTML file by putting it between the opening and closing `<script>` element tags, and it is great for when we may not know if something is going to work and we don't feel like creating multiple files to simply test a small line of code, but ultimately it is best to practice "separation of concerns" and separate the three languages' code into separate files.

> **Asset Needed:** Learning Block explaining why we still need to use an HTML file to run a JS file in the browser.

### Ensuring our JavaScript is loaded

We're pretty much ready to begin our journey into making our JavaScript application, but we should test that our HTML file is in fact reading our JavaScript file correctly. We can do that by adding a simple line of code that we'll be using quite a bit in this game.

Add this line of code into the `game.js` file, then save the file and open up the HTML page in the browser:

```javascript
window.alert('This is an alert! JavaScript is running!');
```

When the HTML file is opened in the browser, the first and only thing we should see is a small popup window that says "This is an alert! JavaScript is running!", something along the lines of this image:

> **Asset Needed:** Image of browser window with this alert

Also take notice of the fact that there is really nothing else we can do in this browser tab until we acknowledge the popup window and click the button associated with it. This is what's known as an **alert**, and we've just written our first line of JavaScript!

We'll get into what this code means next, but now we can move on knowing that our JavaScript is being read correctly by the HTML file. Since we just got our initial project structure created, it's a good time to commit your repository's code!

> **On The Job:** We’ll get into what the above code actually means in a bit, but try and think about what it meant when we used the word `window` in that code and what it may be referring to. Also think about the `alert()` syntax and what programming concept it falls under. Is it something that stores data? Or does it perform an action? 

## Use JavaScript functions to communicate with the player

So what happened in the last step when we added the `window.alert()` and opened up our HTML file in the browser? We were hit with arguably the most annoying part of being on the web, an alert dialogue! Alerts have been a staple in web development since the beginning, but where do they come from exactly? Namely, what is the `window` being mentioned in `window.alert()`? Let's dissect that code.
​
The first part we'll get into is the `window`, but only briefly. All we need to know for now is that the `window` is referring to the browser itself. Whenever we write JavaScript and run our code in a browser, this `window` will always be present, as we'll see later on when we use it for other purposes. The second thing to look at here is `alert()`, the part that comes after `window.`. An alert is a **function** built into the browser that allows the developer to create messages to send to the user.

> **Deep Dive:** Learn more about the [`window.alert()` function on MDN.](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
​
So what is a function? A function is a predefined action that we can call or invoke at a later time in our code. We just used `alert()`, which is a predefined function provided to us by the browser, but we can also define our own functions.

After the `alert` function is listed, there is a set of parentheses with a sentence wrapped with double quotes `" "`. This can be broken down into two pieces:

- The parentheses are necessary to actually run a JavaScript function, even if there is nothing between them.

- If there is content between the parentheses, this is what's known as "passing an argument" into the function. This means that the `alert` function was specifically created to accept varied content that will be displayed as the popup message every time it is used.

Lastly, the alert function's code is closed out by a semicolon `;`. This is to tell the browser running the code that this particular line is completed and any code that comes after it is a new piece code, these are known as **expressions**.

We'll dive further into passing arguments into a function shortly, but first let's create our own function by adding the following code to `game.js`:
​

```javascript
// this creates a function named "fight"
function fight() {
  window.alert('The fight has begun!');
}
```

Congratulations! You just wrote your first of many custom JavaScript functions. Let's dissect this syntax.

> **Asset Needed:** insert image of function diagram / notation

When we _declare_ a function, we use the keyword, `function`, followed by the name we want to give the function. We named our function, `fight`, because we are creating a Robot Gladiators game. We can name our functions anything we want, but best practice is to name them so they describe their functionality. For example, we could name our `fight` function `x`, and we might remember what that means, but does it immediately let other developers know what the function does?

After we name our function, we need to include parentheses. This is part of the required function syntax and allows content to be passed into function&mdash;much like the `alert()` function we just used. In our case, our function does not need input the same way that the alert does, but the parentheses are required either way.

The _curly braces_, `{ }`, wrap the code that belongs to this function. Any code within the braces will be run by the function. Any code that is outside will not be run by the function. The code between these curly braces are what's known as a code block.

> **Asset Needed:** possible LB explaining brackets/braces, curly braces, etc

If you haven't yet, save your file and refresh `index.html` in the browser. Did you get an alert stating that "The fight has begun!"? No. Why? We defined our function, but now we need to call it. How do we call a function?

Add the following to the bottom of `game.js`:

```js
fight();
```

> **Asset Needed:** insert screenshot of the browser with the fight() function's alert()

Then save the file and refresh `index.html` in your browser. The fight has begun!

This may seem unnecessary at the moment, why would we create a function that calls an alert when we could just call the alert? For now, that is a correct assumption, but we just set up our main function that we will be adding more and more code to throughout the build of this game. So it won't be unnecessary for long!

### Store User Input

So far we've communicated with the user in one direction, program to user. But how do we use JavaScript to ask the user for information and capture their input?

Like the alert function we used previously, the `window` has another function that we can use called a **prompt()**. Let's add this line of code to our `game.js` file at the top of the file:

```javascript
window.prompt("What is your robot's name?");
```

Now save and refresh the HTML file in the browser and we should something like this image:

> **Asset Needed:** Image of the browser with this prompt window open

We've now given the user the power to add their own information to our program. Where the `window.alert()` function sent a message from the program to the user through the browser's window, the `window.prompt()` function is used to ask the user to provide some input and send it back to the program. Learn more about the [`window.prompt()` function on MDN.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

Enter your robot's name into the input field displayed in this prompt dialogue and click the "Ok" button (the name of this button may vary depending on the browser in use). The user has now provided the JavaScript program with that information and the program can use it throughout the code.

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

The above code should create a variable called `name` with your name stored as the value, then the next line will `console.log()` the value of the `name` variable. Let's do one more before moving on:

```js
console.log(window);
console.log(console);
```




4. Manipulate data with functions, variables, and operators

---

Manipulate our robot’s data using JavaScript operators, then create a “fight” function to store these actions so we can perform them multiple times.
Add conditions to the fight so we can check the status of our two robots in battle

5. Adding Conditions to our Function

---

6. Add Interactivity with Window Methods

---

# Reflection
