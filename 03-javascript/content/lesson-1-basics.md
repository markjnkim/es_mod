Introduction
===

> The enemy of art is the absence of limitation.
> --Orson Welles

Being brave and confident, you have entered the Con Solo Game Jam, a
competitive hackathon with some unusual constraints. Participants have a limited
amount of time to create an entertaining, browser-based game meets the
following requirements:
  - The game must run in a web browser
  - The game must use the provided `index.html` file
  - Only the `<title>` of `index.html` may be changed
  - Participants cannot use any CSS
  - All game code must be in the `game.js` JavaScript file
  - The game must be created by a single developer

Unfortunately, our formidable HTML and CSS skills are not going to help us here.
On the bright side, we're going to learn some JavaScript!

After some reflection, meditation, and lucid dreaming, we have decided to build
Robot Gladiators, an action-packed game of robot-vs-robot combat. The player
will coach their robot through a series of three fights, gaining cash, attack
power, and repairs along the way. The robot who survives with the most cash
remaining will be remembered in the browser's storage system.

Because we have a tight deadline, we're going to have to focus and prioritize
the development tasks necessary to "ship an MVP." This is a shorthand way of
saying we're going to create a "minimal viable product." In our case, this will
be a game that, at the very least:
  - Meets the Con Solo Game Jam requirements specified above
  - Runs without errors
  - Is somewhat enjoyable
Everything after this MVP is icing on the cake. If we plan our work carefully,
there should be time for plenty of icing.


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



	
