# Lesson 3: Update and Delete Tasks

## Introduction

It's important to recognize that Taskinator is already in good shape:

![Screenshot of Taskinator with a single To Do item](./assets/lesson-3/100-first-screenshot.jpg)

Users can create a list of as many tasks as they want. The downside is that task statuses are limited to "to do." There's currently no way to mark a task as in progress or completed. Users also can't edit a task's name or delete it if they changed their mind.

Per the next GitHub issue, there are some valuable features waiting to be added to this app:

> **Asset Needed:** Screenshot of GitHub issue

Being able to update or delete a task adds a lot more complexity. This means we'll be diving even deeper into the `event` object and event handlers. We'll also need to revisit the HTML side and learn a few new tricks like `data-*` attributes. The good news is, you've made it this far. You totally got this!

## Preview

By the end of this lesson, the Taskinator app will have changed visually to accommodate two new columns:

![Screenshot of Taskinator with two new columns: In Progress and Completed](./assets/lesson-3/200-end-screenshot.jpg)

These changes relate to the following features:

* Tasks will now have a status that defaults to "to do"

* Changing the status dropdown will move the task to the correct column (To Do, In Progress, or Completed)

* Each task will have an Edit and Delete button

* Clicking Edit will load the task's information in the form and change the button to say "Save Task"

  * Clicking Save Task will update the task's information in the corresponding column

* Clicking Delete will remove the task entirely

Sounds like a lot to take on! That's why it's helpful to pseudocode the steps necessary to get there. Try your hand at organizing these steps before moving on:

> **Asset Needed:** Learnosity dragon drop

Here's the approach that we've outlined for this lesson:

1. Create a new Git branch

2. Add two new lists in the HTML

3. Apply unique IDs to the tasks

4. Dynamically create task buttons for each task

5. Add ability to delete a task

6. Load task into form to be edited

7. Save edited task

8. Move the task based on status

9. Merge branch into `develop`

Note that we added a step to "apply unique IDs to the tasks." Since we will be updating and deleting tasks based on button clicks, we'll need some way to know which tasks are being edited. Giving each task an ID will make it easier to find and update/delete them.

We also chose to implement deleting a task before updating a task, because deleting entails fewer steps (straight-up deleting versus loading into the form and then saving). We want to get the easier option working before jumping into the more challenging one!

## Create a Branch

Take a moment to review the GitHub issue again. The expected behavior deals largely with updating tasks to varying degrees, so the name of the branch can be something similar.

Let's make that feature branch now:

1. Use the `git branch` command to verify that you are in the `develop` branch. If not, switch to `develop` before proceeding (e.g. `git checkout develop`).

2. Use the command `git checkout -b feature/updating-tasks` to create and switch to the new branch.

## Add New HTML Lists

A **Kanban board** is a tool often used in productivity apps to visually convey the current stage of all tasks in a project. This is done by defining columns that tasks can move through from left to right. Some projects may define columns for To Do, In Progress, Code Review, Testing, Completed, and Blocked. We'll keep our app simple by only using three columns: To Do, In Progress, and Completed.

> **On the Job:** There are many Kanban-style project management apps that you'll come across in your career. Some of the more popular ones that companies use are [Trello](https://trello.com/) and [Jira](https://www.atlassian.com/software/jira).

We already have HTML in place for the first column, To Do, represented by a `<section>` element with class `task-list-wrapper`. Let's revisit the HTML in `index.html` and add two more `<section>` elements underneath the first one:

```html
<!-- Tasks In Progress -->
<section class="task-list-wrapper">
  <h2 class="list-title">Tasks In Progress</h2>
  <ul class="task-list" id="tasks-in-progress"></ul>
</section>

<!-- Tasks Completed -->
<section class="task-list-wrapper">
  <h2 class="list-title">Tasks Completed</h2>
  <ul class="task-list" id="tasks-completed"></ul>
</section>
```

Note that the `<section>` elements all have the same class, but the inner `<h2>` text and `id` attributes on the `<ul>` elements are different.

Save the `index.html` file and refresh the browser. The page should now look like this:

![The To Do, In Progress, and Completed columns sit side-by-side](./assets/lesson-3/300-flexboxes.jpg)

> **Pause:** What CSS features can make a layout of columns?
>
> **Answer:** Flexbox, CSS grid, or even the `float` property.

As a quick CSS refresher, use the Chrome DevTools to inspect the columns and verify which CSS properties are being used. You'll notice that the `<main>` element has the declaration `display: flex`, allowing it to control the distribution of its content. In turn, each `<section>` element has a `flex: 1` declaration to specify that they should share space evenly.

If you haven't already, try toggling the device toolbar to see what the app looks like on a mobile screen:

![The three columns stack on top of each other](./assets/lesson-3/400-mobile-flex.jpg)

In the CSS media query, the `<section>` elements' `flex-basis` is set to `100%`, which defines a new width that takes up all available space. Thus, the elements become stacked.

> **Rewind:** A media query defines a set of CSS rules that won't be applied until a certain condition is met. For example, `@media screen and (max-width: 900px)` kicks in when the screen size is less than 900 pixels wide.

Fortunately, all of this CSS was provided ahead of time, but it's always helpful to understand what's happening, whether you wrote the code yourself or not.

In fact, this would be a good time to further refresh your memory on CSS layouts with the following quiz:

> **Asset Needed:** Learnosity quiz

## Apply Unique IDs to Tasks

Before we can implement the JavaScript logic to move tasks between columns, we need to formalize a way to uniquely identify each task that is created. Consider the following example:

![Two tasks sit in the To Do column](./assets/lesson-3/500-to-dos.jpg)

If you were to click on the Delete button under "Learn JavaScript," how would you programmatically know which task the button was referring to? This is where assigning an ID to each task would help keep track of what's what.

> **Connect the Dots:** Later on in your web development journey, you'll start using actual databases like MySQL to store your app's information. In database design, unique IDs are crucial in ensuring the correct data is being updated or deleted. Databases can be set up to create that ID for you, but understanding their value now will better prepare you for the future.

There are a few ways we could generated this ID:

* Use `Math.random()` to (hopefully) create a unique ID each time we use it.

* Get the current time in milliseconds and call that an ID.

* Create a counter that increments by one each time a task is created.

The third option more closely matches what a MySQL database would do, and it doesn't require any new JavaScript methods, so we'll go with that.

At the top of `script.js`, declare a new variable:

```js
var taskIdCounter = 0;
```

In the `createTaskEl()` function, we'll use this `taskIdCounter` variable to assign an ID to the current task being created. How would we attach the ID to an HTML element, though? There's always the `id` attribute, but we should be mindful that this attribute already serves a different purpose. It wouldn't be appropriate to use it for a counter value.

That's where `data-*` attributes come in. Also known as **custom data attributes**, these allow developers to store extra information on an HTML element without conflicting with any of the built-in attributes. For example:

```html
<div class="pet" data-type="dog" data-voice="woof">
  Spot
</div>

<div class="pet" data-type="cat" data-voice="meow">
  Kitty
</div>
```

Each `<div>` represents a pet, but the only user-facing information is the pet's name. With `data-*` attributes, however, we can store extra information about these pets. When a `<div>` is clicked, we could optionally read those `data-*` values and do something special with them.

For Taskinator, we'll add a `data-task-id` attribute to each `<li>` element. In the `createTaskEl()` function, update the code as follows:

```js
var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-title'>" + taskDataObj.title + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};
```

Since we're making HTML elements in JavaScript, we needed to use the DOM method `setAttribute()` to add our task ID. The `setAttribute()` method can be used to add or update any attribute on an HTML element, but the only attribute we need for now is `data-task-id`, which we set to the current value of `taskIdCounter`.

> **Pause:** When the first task is created, what will the value of its `data-task-id` attribute be?
>
> **Answer:** Zero, because the `taskIdCounter` starts at zero.

At the bottom of the `createTaskEl()` function, we then increment the counter by one (`taskIdCounter++`) to keep the IDs unique.

Save `script.js` and refresh the browser. Make a few tasks, then use the DevTools to inspect the DOM. You'll know everything's working correctly if you can see `data-task-id` attributes in the Elements panel:

![Chrome DevTools show two <li> elements with data-task-id attributes](./assets/lesson-3/600-data-attrs.jpg)

## Dynamically Create Buttons

## Delete a Task

## Load Task into Form

## Save Edited Task

## Move Task Based on Status

## Finalize Git Process

Our work on this GitHub issue is done, which means it's time to revisit the Git branch workflow:

1. `git status` to verify the correct files were modified

2. `git add -A` or `git add .` to stage any changed files

3. `git commit -m "add ability to update and delete tasks"`

4. `git push origin feature/updating-tasks` to push the branch to GitHub

5. `git checkout develop` to switch branches

6. `git merge feature/updating-tasks` to merge the new feature into the `develop` branch

7. `git push origin develop` to push the updated `develop` branch to GitHub

Lastly, close the corresponding GitHub issue and celebrate!

## Reflection

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
