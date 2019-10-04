# Introduction

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

# Preview

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

# Create a new GitHub repository, issues, and branches

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

# Create Project Files and Structure

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

That looks like the boilerplate for blank web page! There is one interesting element in the `<body>` of that page:

```html
<script src="./assets/js/game.js"></script>
```

We weren't told anything about a `game.js` file. We know that the `.js` extension means that it's a JavaScript file. But we weren't given a `game.js` file! We'll have to make one. We'll also have to learn some JavaScript...

## Use JavaScript functions to communicate with the player

​
So what happened in the last step when we added the `window.alert()` and opened up our HTML file in the browser? We were hit with arguably the most annoying part of being on the web, a popup! Alerts have been a staple in web development since the beginning, but where do they come from exactly? Namely, what is the `window` being mentioned in `window.alert()`? Let's dissect that code.
​
The first part we'll get into is the `window`, but only briefly. All we need to know for now is that the `window` is referring to the browser itself. Whenever we write JavaScript and run our code in a browser, this `window` will always be present, as we'll see later on when we use it for other purposes. The second thing to look at here is `alert()`, the part that comes after `window.`. An alert is a **function** built into the browser that allows the developer to create messages to send to the user.
​
So what is a function? A function is a predefined action that we can call or invoke at a later time in our code. We just used `alert()`, which is a predefined function provided to us by the browser, but we can also define our own functions. Let's create our own function right now by adding the following code to `game.js`:
​

```js
// this creates a function named "fight"
function fight() {
  window.alert('The fight has begun!');
}
```

Congratulations! You just wrote your first of many custom JavaScript functions. Let's dissect this syntax.

@TODO insert image of function diagram / notation

When we _declare_ a function, we use the keyword, `function`, followed by the name we want to give the function. We named our function, `fight`, because we are creating a Robot Gladiators game. We can name our functions anything we want, but best practice is to name them so they describe their functionality. For example, we could name our `fight` function `x`, and we might remember what that means, but does it immediately let other developers know what the function does?

@TODO explain parentheses

The _curly braces_, `{ }`, wrap the code that belongs to this function. Any code within the braces will be run by the function. Any code that is outside will not be run by the function.

@TODO possible LB explaining brackets/braces, curly braces, etc

If you haven't yet, save your file and refresh `index.html` in the browser. Did you get an alert stating that "The fight has begun!"? No. Why? We defined our function, but now we need to call it. How do we call a function?

Add the following to the bottom of `game.js`:

```js
fight();
```

@TODO insert screenshot of fight() call

Then save the file and refresh `index.html` in your browser. The fight has begun!

@TODO we can pass arguments to our functions
@TODO refactor fight to accept an argument

```js
// this creates a function named "fight"
function fight(message) {
  window.alert(message);
}
fight('The fight has begun!');
```

@TODO functions are awesome because they allow us to reuse code
@TODO try calling fight multiple times, with different messages
​

4. Manipulate data with functions, variables, and operators

---

Manipulate our robot’s data using JavaScript operators, then create a “fight” function to store these actions so we can perform them multiple times.
Add conditions to the fight so we can check the status of our two robots in battle

5. Adding Conditions to our Function

---

6. Add Interactivity with Window Methods

---

# Reflection
