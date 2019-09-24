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
popularity is that it's easy to learn. Another reason is that all the major web
browsers can run JavaScript code. 

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

It's worth noting that the most useful web applications communicate with
"backend" applications. A backend application typically runs on an
internet-connected server that can do heavy data processing and store large
amounts of data. JavaScript works there, too! We'll learn more about creating
backend (often called "server-side") applications in future modules. For now,
rest assured that what you learn in this module will be foundational for the
rest of the course.

Because we have a tight deadline, we're going to have to focus. We will
prioritize the development tasks necessary to "ship an **MVP**." This is a
shorthand way of saying we're going to create a "minimal viable product." In
our case, this will be a game that, at the very least:
  - Meets the Con Solo Game Jam requirements specified above
  - Runs without errors
  - Is fun
Everything after this MVP is icing on the cake. If we plan our work carefully,
there should be time for plenty of icing.

> **On The Job** The term MVP was popularized by Eric Ries in his book The Lean
> Startup. The definition from the book is "a product with just enough features
> to satisfy early customers and provide feedback for future product
> development." The idea is that companies should spend the least amount of time
> developing a product before learning whether the product will be successful. 
> 
> This approach is also useful when developing new features for existing
> products. For example, "let's see if we should add customizable avatars to our
> users' profiles." Rather than spend several days or weeks developing a robust
> user profile customization system, a company might whip up something simple
> that lets users pick from a few, predefined cartoon characters. The company
> would then monitor the usage of this new feature and solicit feedback from
> users.
>
> This relatively cheap MVP will yield very valuable information to guide
> further development, or even scrap the idea.

 

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



	
