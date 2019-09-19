Introduction
===
Being brave and confident, you have entered the Lo-Fi Browser Game Jam, a
competitive hackathon with some unusual constraints. Participants have a limited
amount of time to create an entertaining, browser-based game that must meet the
following requirements:
  - The game must run in a web browser
  - The game must use the provided `index.html` file
  - Only the `<title>` of `index.html` may be changed
  - Participants cannot use any CSS
  - All game logic must be in the `game.js` JavaScript file

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

> The enemy of art is the absence of limitation.
> --Orson Welles




