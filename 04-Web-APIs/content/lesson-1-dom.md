# Lesson 4.1 - The DOM

## Introduction
>Far and away the best prize that life offers is the chance to work hard at work worth doing.
>
>-Theodore Roosevelt

We have become adept at using GitHub Issues in our last few projects to track our progress and help focus our attention and energy at the highest priority tasks at hand. We gotten so proficient, we'd like to use it for all our productivity needs, but wouldn't it be a little strange to make a "Do Laundry" or "Clean out the Garage" as a GitHub Issue. This is meant for issues related to the repo, not your life. Plus, its public for all the world to see, so having a private to-do list seems more appropriate. 

This may be a great candidate for a personal project. 
> **On the Job:** Especially as new developers, personal projects are important ways to demonstrate to potential employers not only a dev's ability and skill, but show off creativity, passion, and personality. Having a well rounded portfolio illustrates your talent, potential, and capability to finish projects. 

Let's see what the end product of our app should look like at the end of the module.
> **Asset Needed:** [Gif of the app at the end of the module Jira Issue FSFO-192](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-192).

Having learned the fundamentals of JavaScript, we will now use those key concepts to manipulate the behavior of a webpage and demonstrate why JavaScript is a fundamental pillar of front-end development. In this module we will be building the Taskinator, a personal task tracker application that will combine all our knowledge of front-end development with HTML, CSS, and JavaScript. We will also be introducing some new built-in browser Web APIs.

Let's highlight some of the main concepts we’ll learn:
  - The Document Object Model or the DOM to create, manipulate, and delete HTML
  - Browser events will be used to capture user actions and manipulate data
  - Introduce advanced HTML attributes to help with our application’s logic
  - Add drag and drop functionality 
  - Persist our tasks in `localStorage`
  - Deploy our website using GitHub pages 


## Preview
> **Asset Needed:** Screenshot of the app at the end of the lesson.
> **@TODO** - Analyze the details of the mock-up
  1. Using JavaScript, we’ll make the button on the page react to being clicked
    - When it is clicked, it will add another task to our list by creating an HTML element
> **Asset Needed:** [Learnosity Jira Issue FSFO-193 - Put the pseudocode steps in order](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-193)
Ask students to pseudocode how they might build this. Consider the functions and user interaction APIs that you already know about
  1. Emphasize that this exercise is valuable, even if it is not accurate. Tie into the on-the-job importance of thinking about a problem in-depth prior to starting, so you can map out your blindspots.  
- Define the steps that we chose to build the page:
  1. Set up project with Git
  2. Build out the HTML and CSS according to mock-up
  3. Use JavaScript to select the button on the page and add an event listener to it
  4. Use the button to dynamically create a new HTML list item element to add to the task list
- Encouraging statement to transition into applying these steps to build the task list and button.

## Project Setup With Git
> **@TODO** Git stuff


## Build the HTML and CSS
> **Assets Needed:** the style.css and image is downloaded from the Up and Running Section

Now that we have our development environment with Git, let's create the file structure for our project:
- assets folder
- `index.html`
- css folder
- `script.js`
- js folder 
- images folder
Add the `style.css` and image file downloaded from Canvas to their proper folders.
> **@TODO** screen shot of the folder tree

Let's open the `index.html` file and create our boilerplate HTML markup.
> **Asset Needed:** Learnosity - Key tags necessary for a functioning HTML page.

Luckily we can use a VS Code shortcut to get the initial boilerplate HTML markup.
Type this in the `index.html` file:
`html:5` and press Enter
So what just happened? 
We used a shortcut to autocomplete the boiler plate using HTML 5 by using a tool called Emmet.
> **Deep Dive:** **@TODO** Emmet cheatsheet link

So now let's edit and add a few tags to our HTML page and use relative paths to link our project files.
- edit the `<link>` tag
- add the `<script>` tag
- change the title

So now your index.html file should look like this:
> **@TODO** code block of the new tags

### Add the Markup

Let's another look at the mock-up to see what our markup might look like.

> **@TODO** Screenshot of the mock-up for lesson 1

Based on what the image above shows us, how many main "blocks" of HTML do we think we are going to need? Luckily, the design seems to already do this for us with its use of background colors, so let's dissect it:

- The area at the top with the dark teal background is a block that holds the title of the application and a little more information about it, so we can use a `<header>` element to hold that information.

- The middle area is going to contain everything with the white background. Since it is going to hold the most important content for our application, we can use the aptly named `<main>` element to hold that content.

- The area at the bottom of the page is going to obviously use the `<footer>` element.

To visualize this, take a look at the following image to see everything outlined:

> **@TODO** Screen shot of mock-up with outline of three main sections/blocks

So now that we have our three main content sections identified, let's go ahead and start adding them to the page one-by-one, starting with the `<header>` element.

Let's start by creating our `<header>` element inside the opening `<body>` element tag so it looks like this:

```html
<body>
  <header>

  </header>

  <script src="./assets/js/script.js"></script>
</body>
```

Now that we have our initial `<header>` element set up, let's add a few more elements to complete this section. Any idea what three elements we will need?

- Add an `<h1>` element
  - Make it say "Taskinator" in between the tags
  - Give it a class attribute value of `page-title`
- Add a `<p>` element with text content saying something along the lines of:
```
Click the button below to add a new task!
```
- Lastly, add a `<button>` element for adding tasks
  - Make it say "Add Task" between the tags
  - Give it a class of `btn`

When we're all done adding these elements to our `<header>`, let's save the `index.html` file and open it in the browser. It should look like this:

```html
<header>
    <h1 class="page-title">Taskinator</h1>
    <p>Click the button below to add a new task!</p>
    <button class="btn" >Add Task</button>
  </header>
```
Let's save the `index.html` file and refresh the browser.

> **@TODO** Screenshot of header at this point

Wow, that looks pretty good considering we haven't written any of our own CSS just yet. How did that happen?

Remember that CSS file we had to download and put into our `css` project folder earlier? You may have noticed that the `style.css` file wasn't empty. As a matter of fact, it has already been completed for us! All we need to do is use the right class names to apply styles to our HTML elements as we build the project.

> **On the Job NEEDED:** Callout about developers not always having the bandwidth to create all of the styles when building an app (this is what UX/UI teams are for!). Allude to Bootstrap and external CSS frameworks.

Now let's proceed with the next block of HTML content which will be the `<main>` element that will contain our list of tasks. So how should we proceed here? Let's look at what the finished application's `<main>` element is going to look like to help us determine what to do:

> **Asset Needed:** Finished `<main>` element with three task lists

Our final product is going to consist of three lists based on their status, each having their own headline and list elements. Now that know that, how do we keep each one packaged together?

This image may help identify what we need:

> **@TODO** Screenshot of task list that's outlined with labels identifying the need for a wrapper to contain our HTML elements

In the image above we can see that a wrapper is used to contain the title and the task list.
Now that we know what we need for this section let's add them to our markup inside of the `<main>` element:

- `<section>` with the class attribute `task-list-wrapper`

The following elements will all be inserted into the `<section>` element we just created:

- `<h2>` with the class attribute `list-title` with the title, "Tasks To Do"
- `<ul>` with the class attribute `task-list`
- In the `<ul>` let's add an `<li>` with class attribute `task-item` with some content like "A task is going to be added soon!"

The finished product should look something like this code:

```html
<main class="page-content">
  <section class="task-list-wrapper">
    <h2 class="list-title">Tasks To Do</h2>
    <ul class="task-list">
      <li class="task-item">A task is going to be added soon!</li>
    </ul>
  </section>
</main>
```
To finish our markup, let's also add the `<footer>`:
```html
<footer>
  &copy;2020 by Taskinator
</footer>
```
Now let's save our work and refresh the page in the browser.
Compare your page to the mockup above to see if we have correctly created our markup.

Let's add, commit and push our feature branch up to GitHub.

> **Deep Dive:** The project looks great so far by using the style sheet provided to us. While we won't be rehashing too much CSS throughout this project, it is a good idea to study the style sheet and see how they are being used throughout the application.
>
> There are some more advanced techniques being used, but we already know a lot of what's going on here.
>
> Don't forget there's always Chrome DevTools to help see what CSS is in place as well!

## Capture a Button Click
Nice work, the app looks great so far, but if we try to click the button; nothing happens. We would like to have this button add a task to our task list as shown here:
> **Asset Needed:** [Gif adding task to task list Jira Issue FSFO-191](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-191)

So how do we get our button to work? Let's answer the following questions to guide the thought process:

- What is executing our script file? How does our JavaScript know how to run?

- What allows us to use the built-in methods of the browser? 

Our script is running in the browser which can interpret JavaScript and execute our code. We have been using the Browser APIs to access the built-in methods of the browser namely the `window` object. 

We've used functions provided by the browser's `window` object previously, like `alert()` and `prompt()`, but now we need to use some properties that the `window` provides for us, particularly properties that pertain to the HTML of our application.

Browsers refer to the HTML code that makes up a web page as a **document**, so with this knowledge let's use our Chrome DevTools Console detective skills to see if browser knows anything about `document`.

```js
console.log(window.document)
```
> **@TODO** screenshot of the window.document raw HTML

As you can see from the screen shot we can see our JavaScript representation of our `index.html` file. This is how we can establish the link between JavaScript and HTML. This is important in order for our JavaScript to modify HTML and CSS. 

Again note that window.document looks like HTML, but its actually the JavaScript representation. That leads us the Document Object Model which is also known as the DOM. 

### DOM

The DOM is an object that contains properties and methods we can use to manipulate our HTML elements and CSS properties. 
> **Deep Dive:** DOM Tree nodes, which are organized in a hierarchy with parent and child nodes which relate to the parent and child HTML elements we are familiar with.

There's not much we can do with window.document, but the DOM offers methods that we can use to find other elements within this document using JavaScript.
One of the methods we will use to find our target elements is the `querySelector()`.
Let's use this to find our `<button>` and `console.log` our results. Let's type the following directly into the console.
```js
window.document.querySelector("button");
```
@Todo why reference document?

Note here that as previously, we don't have to type window as a prefix to our document statement because we are in the context of the `window` just as we did with the `Math` object.
> **@TODO** screen shot

Although the console's return looks like raw HTML, it's actually an object representation of this element meaning it has access to properties and methods such as `textContent`.
Let's type the following into the console to see the result:

```js
document.querySelector("button").textContent;
```

> **TODO** screen shot of result
As we can see from this result, we are able to use a built-in property of a DOM element so clearly we are dealing with objects here.

Great job, we were able to select our button, but what happens if we start adding more buttons to the page? Our querySelector currently would only be able to find the first button in the document. So how do we uniquely identify this button from the rest? We can use a familiar attribute called the `id`. Let's add the `id` "save-task" attribute to our `button` element in the `index.html` file so the element now looks like this:
```html
<button class="btn" id="save-task">Add Task</button>>
```
Now let's update our `querySelector()` to look for the `id` instead of the generic element. Type the following into the console to see what the result looks like:
```js
document.querySelector("#save-task");
```
The result should like exactly like our previous result in the console.

Having successfully targeted our HTML element, now we can add this code into our JavaScript file, the `script.js`. 
We will need to assign our element object representation to a variable.
> **Pro Tip:** @TODO best practices 

```js 
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
```
To see our expression in action we need to save our script file and refresh the `index.html` in the browser.

> **Important:** @TODO can't open script directly in the browser.

As we can see our `buttonEl` variable now represents our `button` element we displayed in the console earlier.



<!-- 
In the Chrome DevTools Console tab, type `console.log(window);` and hit `Enter`:
. 
> **Pro Tip:** We can reveal the `window` object without the `console.log` expression because we are in the Console tab. 

> **@TODO** Screenshot of the window object in the console

Now that we have our `window` object on full display for us with all of it's methods and properties, try and find one property called `document` and click on it to open it up.

So what are we looking at here? It seems like the `document` property is its own object as well! Let's filter out a lot of noise from the other `window` properties and just focus on what the `document` has to offer by typing the following into the Console:

```js
window.document
``` -->

Luckily we can use the Document Object Model otherwise know as the DOM to give us an object representation of the HTML in JavaScript. This is how

## Add Items with the Click of a Button



## Commit with Git



## Reflection