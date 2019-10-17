# Detailed Lesson Outline for 4.1
## Introduction
- Introduce the concept of working on personal projects as a means of learning and building a personal portfolio.
- We’ve learned the fundamentals of JavaScript without using any graphical content, but now we’ll be introducing that part of it
- We’ll be building a Personal Task Tracker application by leveraging HTML, CSS, JavaScript, and Web APIs
  - Include screenshot of final product
- Highlight what we’ll learn overall:
  - We’ll learn how to use the DOM for dynamic HTML
  - We’ll use browser events to capture user actions and manipulate data with it
  - Use advanced HTML attributes to help with our application’s logic
  - We’ll add to the user experience by creating drag and drop functionality
  - We’ll use localStorage to add persistence to our application 
  - Deploy our website using GitHub pages to share your app
  
## Preview
- Screenshot of what the project will look like at the end of this lesson
- Analyze the details of the mock-up
  1. Using JavaScript, we’ll make the button on the page react to being clicked
    - When it is clicked, it will add another task to our list by creating an HTML element
- Ask students to pseudocode how they might build this. Consider the functions and user interaction APIs that you already know about
  1. Emphasize that this exercise is valuable, even if it is not accurate. Tie into the on-the-job importance of thinking about a problem in-depth prior to starting, so you can map out your blindspots.  
- Define the steps that we chose to build the page:
  1. Set up project with Git
  2. Build out the HTML and CSS according to mock-up
  3. Use JavaScript to select the button on the page and add an event listener to it
  4. Use the button to dynamically create a new HTML list item element to add to the task list
- Encouraging statement to transition into applying these steps to build the task list and button.


## 1. Set up project with Git
- Direct students to create a new repo
- Direct students to create high-level GitHub issues:
  1. Create a task list with an "add task" button
  2. Create a form to collect input values for each task
  3. Add the ability to update task properties
  4. Add drag and drop capabilities to task items
  5. Update code to save/persist task list data
- Direct students to create a develop branch from master
- Direct students to create a feature branch named after GitHub issue

## 2. Build the HTML and CSS
- Create file structure with HTML page, assets folder with css, images, js. CSS and image assets provided
- Use Code’s html5 template by typing html:5 and hitting tab 
- Direct student to copy and paste starter HTML containing:
  - Header
    - “Add task” button
  - Main
    - Unordered list
      - Starter task item
  - Footer
- Highlight the elements with the save-task and task-to-do ids, and why the ids are necessary
- Note the script tag, and explain that this will load our javascript file, as it did in the previous module

## 3. Use JavaScript to Capture Button Click
- Introduce the DOM, and how it’s an object-oriented representation of HTML markup
  - An HTML element is the markup
  - A DOM element is the object representation
- Explain the need for a unique identifier when we need to select an HTML element of the page
Add ID `save-task` to button  
- Instruct student to use querySelector(“#save-task”) to select the save-task button and assign the result to a variable
- console.log() the variable
  - Describe the “HTML” logged to the console
- Highlight that the selector syntax (“#save-task”) is the same as selecting the element in CSS
- Introduce addEventListener() and its parameters
  - Introduce term “callback”
- Instruct student to create an anonymous function as the second argument, which will console.log(“I’ve been clicked!”) to the console
- Explain that this is an “anonymous function,” and that it only exists in the scope in which it is defined
- Instruct student to save, refresh, and click the button, observing the console output in DevTools
- Instruct student to add a `debugger` statement before the console.log(“I’ve been clicked.”) line and refresh the page
  - Note the scope of the break point, and how the function is anonymous
  - Instruct student to hit the “play” button the debugger, but leave the break point
- Instruct the student to name the function, and run the debugger again. Note that the function scope is now “named”
- Instruct the student to extract the named function into a function expression, and update the callback to use the function variable
  - Note that you do not use the parentheses when you reference a function this way. If you do, you’ll call it immediately
  - Instruct student to move the <script> to the head of index.html, and save/refresh. The page will break because the script will run without a DOM to operate on. See console errors and explain.

## 4. Add List Items on Button Click
- Create a new variable to capture the UL element
- Demo changing the UL’s textContent property to something like “<li>hello</li>”
- Explain that we can create LI elements dynamically
- In the click handler, create a new variable with document.createElement("li")
  - Console log element to show that it exists “in memory”
- Change the textContent of this DOM element
- Save / reload. Where is the new <li> element? It only exists in memory because we didn’t append it to another DOM element. It will only be rendered if it’s part of the DOM.
- Use appendChild to add it to the UL
  - Rewind about parent/child relationships
- Highlight that the LI doesn’t look great; it needs styling
- Use className property to add a class to each LI
  - Point out how you would add multiple class names

## 5. Finalize Git Process
- Git add, commit, push
- Merge branch into develop
- Close GitHub issue

## Refection
- More congratulations
- Review what the student has accomplished in this lesson:
  - Specific skills learned:
    - How to access a DOM element with JavaScript
    - How to listen for and handle click events
    - How to use an anonymous function as a “callback”
    - How to dynamically create DOM elements and append them to other DOM elements
    - How to alter the content and attributes of DOM elements (textContent, className)

- Explain that in the next lesson the student will capture input from the user to create robust tasks with a title and a type.

 
