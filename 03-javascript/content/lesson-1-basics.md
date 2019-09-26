Introduction
===

> The enemy of art is the absence of limitation.
> --Orson Welles

Let the Games Begin
---
Being brave and confident, we have entered the Con Solo Game Jam, a
competitive hackathon with some unusual constraints. Participants have a limited
amount of time to create an entertaining, browser-based game that meets the
following requirements:
  - The game must run in a web browser
  - The game must use the provided `index.html` file
  - Only the `<title>` element of `index.html` may be changed
  - Participants cannot use any CSS
  - All game code must be in the `game.js` JavaScript file
  - The game must be created by a single developer, in 24hrs!

Unfortunately, our formidable HTML and CSS skills are not going to help us here.
On the bright side, we're going to learn some JavaScript!

After some reflection, meditation, and lucid dreaming, we have decided to build
Robot Gladiators, an action-packed robot combat simulator. The player
will coach their robot through a series of fights, gaining cash, attack
power, and repairs along the way. The robot who survives with the most cash
will be remembered in the browser's storage system!

Can all of this be done with JavaScript? Definitely. JavaScript is a powerful,
wildly popular, general-purpose programming language. One reason for its
popularity is that it's relatively easy to learn. Another reason is that all
the major web browsers can run JavaScript code. 

In "Module 1: HTML, CSS, and Git," we learned that HTML defines a web page's
structure, and CSS defines a web page's presentation. JavaScript is the third
Musketeer, defining a web page's *behavior*. Together, these technologies
comprise the core of front end web development. 

JavaScript enables a web page to *do things*. Front end developers who
understand JavaScript can create powerful, dynamic web applications with rich
user interfaces. Some notable examples include:
  - Netflix
  - Google Photos, Google Docs, Google Sheets
  - GitHub
  - YouTube
  - Facebook
  - Twitter
If you've ever accomplished anything worthwhile in a web browser, you can thank
JavaScript for that experience.

**Urkel:** There are over 1.6 billion web sites in the world, and JavaScript is
used on [95% of them](https://w3techs.com/technologies/history_overview/client_side_language/all).

It's worth noting that most useful web applications communicate with
"backend" applications. A backend application typically runs on an
internet-connected server that can do heavy data processing and store large
amounts of data. JavaScript works there, too!

We'll learn more about creating backend (often called "server-side")
applications in future modules. For now, rest assured that what you learn in
this module will be foundational for the remainder of the course.

The Other MVP
---
Because we have a tight deadline, we're going to have to focus. We will
prioritize the development tasks necessary to "ship an **MVP**. Sports 
enthusiasts will recognize this initialization as "most valuable player." In
software development, it means **minimal viable product**.

An MVP is the simplest version of a product that a developer can share with their
target users to get important feedback. Once we have our MVP, we can share it
with other Game Jam participants and get their feedback. From this feedback, we
hope to learn:

  - Is it fun?
  - Does it meet the Con Solo Game Jam requirements?
  - Does it run without errors?

The sooner we code our MVP, the sooner we can answer these questions and make
changes to our game before the deadline.

> **On The Job** The term MVP was popularized by Eric Ries in his book The Lean
> Startup. The definition from the book is "a product with just enough features
> to satisfy early customers and provide feedback for future product
> development." The idea is that companies should spend the least amount of time
> developing a product before learning whether the product will be successful. 
> 
> This approach is also useful when developing new features for existing
> products. For example, "let's see if we should add customizable avatars to our
> users' profiles." Rather than spend several weeks or months developing a robust
> user profile customization system, a company might whip up something simple
> that lets users pick from a few, predefined cartoon characters. The company
> would then monitor the usage of this new feature and solicit feedback from
> users.
>
> This relatively cheap MVP will yield very valuable information to guide
> further development, or even scrap the idea.

We're going to use GitHub Issues and branches to help us manage our work. This
is important, because we're also going to learn JavaScript while creating this
game! That's a lotThe less we have the think about, the better.

Our old friends HTML and CSS are on the bench this round, but a lot of their 
concepts will come into play while we learn JavaScript:

- We wrote HTML in an `index.html` file, and CSS in `style.css` file. We'll
  write JavaScript in a `game.js` file.
- HTML and CSS have structure and syntax rules, as does JavaScript.
- We used Chrome to load and render our HTML and CSS. We'll use Chrome to load
  and run our JavaScript, too.
- We used Chrome Dev Tools to work with HTML and CSS. We'll also use Chrome Dev
  Tools to work with JavaScript.

Preview
===
In this lesson, we're going to learn enough JavaScript to code a single round of
Robot Gladiators. By the end of this lesson, the game will play like this:

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
  1. A penalty of 10 money points will be deducted from the player's robot.
  2. The game ends.
7. If the player chooses to fight:
  1. The player's robot will attack Roborto, and the player's robot's attack
     points will be deducted from Roborto's health points.
  2. The game will display Roborto's remaining health points.
  3. Roborto will attack the player's robot, and Roberto's attack points will be
     deducted from the player's robot's health points.
  4. The game will display the player's robot's remaining health points.
8. The game ends.

So, how do we go about this? This an extremely difficult question to answer
right now; we don't even know JavaScript yet! But it's good practice to reflect
on a hard problem and consider some strategies for solving it, even if you
don't have the tools handy. Even if you don't know what tools tools are!

Professional web developers are often presented with new challenges that don't
come with obvious solutions. Yet they must develop solutions. So let's practice! 

Some initial thoughts at this phase might be:
  - I'll need to set up the files. Where do they go?
  - I'll need to figure out how to make the browser prompt a user for input.
  - How will I store values in JavaScript, like health points and attack points?
  - There must be a way to do math in JavaScript. I wonder if it's like real
    life math.
You get the idea. You can break almost any problem down into a list of
questions. Then, you find answers to each question.

There are many ways that we could approach creating the simple version of
Robot Gladiators outlined above. But this is way we're going to do it:

1. Create a New GitHub Repository, an Issue, and branches. These are the basic
   steps for any new project.
2. Create our project files. We need to set up the `index.html` and `game.js`
   file structure according to the Con Solo instructions. 
3. Use JavaScript functions to display game status to the player. JavaScript
   has some built-in functions that do this.
4. Use JavaScript variables and operators to manage game data. We're going to
   do a little math and keep track of robot health, player money, and other
   game values.
5. Make decisions with JavaScript conditions. The game should allow a robot to
   fight if it still has health points, but not if its health points reach 0.
6. Accept user input. We're going to ask the player a lot of questions.
   JavaScript has more built-in functions to help us store the player's answers.

This is an ambitious project, but we have mapped out a strategy for building it
without even opening our code editor!  A thoughtful planning process can break
almost any project down into manageable chunks, and help us identify the
questions we need to answer to complete those chunks.

Let's set up our project and get started.

1. Create a New GitHub Repository, Issue, and branches
---
As we do with each new
project, we'll create a GitHub repository and clone
it on our local machine. We'll then create a GitHub Issue to define the
requirements for our MVP. Finally, we'll create branches to do our work in.


2. Create Project Files and Structure
---

Let's take a look at the HTML file we're given:


```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Submission Title</title>
</head>
<body>
  <script src="./assets/js/game.js"></script>
</body>
</html>
```

That looks like the boilerplate for blank web page! There is one interesting
element in the `<body>` of that page:

```
  <script src="./assets/js/game.js"></script>
```

We weren't told anything about a `game.js` file. We know that the `.js`
extension means that it's a JavaScript file. But we weren't given a `game.js`
file! We'll have to make one. We'll also have to learn some JavaScript...



	
3. Use JavaScript functions to communicate with the player
---

4. Manipulate data with functions, variables, and operators
---
Manipulate our robot’s data using JavaScript operators, then create a “fight” function to store these actions so we can perform them multiple times.
Add conditions to the fight so we can check the status of our two robots in battle

5. Adding Conditions to our Function
---

6. Add Interactivity with Window Methods
---

Reflection
===

 

