# Lesson 5: Task Persistence

## Introduction

> **Asset Needed:** Gif of drag and drop functionality from 4.4

From a functionality standpoint, our Taskinator application is in great shape and can be used without any bugs or hiccups. The only drawback currently is that we have to create our tasks every time we reload the page. That doesn't make for a great user experience, does it? If we have to spend most of our time in Taskinator actually creating the tasks, when would we have time to get the tasks done?

In this final lesson we'll revisit our old friend, localStorage, to save our tasks as we create and update them. Then upon page load, we can load those tasks back into our Taskinator app. Adding this will fulfill our final GitHub issue. For a reminder of what that issue is, check out this screenshot of it:

> **Asset Needed:** GitHub issue

This task will involve some refactoring of our current codebase, but it will not interrupt it too much. Let's outline what we'll be working on and get started!

## Preview 

As we now know, by adding persistence with localStorage in this lesson, we'll be able to refresh the page and have our tasks remain in their corresponding status list. See this gif for a demonstration:

> **Asset Needed:** Gif of page reloading with persistence

Our UI and core Taskinator functionality won't change, but we are adding a great feature that will make the app more usable. With that said, however, adding this feature will mean that we need to restructure our data. This way, it will be easier to save and retrieve that data from localStorage.

The pseudocode steps here are a little different than the previous lessons and may be difficult to organize at first, but let's try our best and think about the best approach to accomplishing this feature:

> **Asset Needed:** Learnosity drag and drop quiz
> Create new Git branch
> Save tasks as an array of objects
> Create function to save and update tasks to localStorage
> Create function to load tasks from localStorage
> (Optional Step) Refactor createTaskEl to remove duplicate code from loadTasks
> Merge branch into develop, merge develop to master
> Deploy master on Github pages

The first part of our lesson is dedicated to getting the localStorage functionality set up and working. During this, however, we will end up creating similar functionality to code we have already written. This will leave our application with some technical debt, and it would be okay to leave the code as-is, but it leaves us a good opportunity to refactor and reuse our already existing functionality.

Let's get started by creating a feature branch for our issue!

## Create a New Git Branch

Let's review our GitHub issue pertaining to this feature one more time, then create our feature branch.

Since the issue is about persistence, let's call the feature branch `feature/task-persistence`. We'll create it now from the command line:

- Use `git branch` to ensure we are currently in the `develop` branch, as we want to use that branch's code to build upon.

- Create a new branch for this feature:

```bash
git checkout -b feature/task-persistence
```

As we know, this has created the branch and moved us into it, but we can use `git branch` one more time just to double check.

Now that we've confirmed we're in the correct branch, let's get started!

## Restructure Task Data

Currently, all of the data associated with a task is kept with its respective DOM element on the page. This means that if we were to try and save this data to localStorage, we would have to find every task item and pull the important data from it. We cannot simply use a `querySelector()` method to save the entire task item element and save it to localStorage because localStorage can only save data as a string, and DOM elements are difficult to convert to strings.

> **TODO:** Add in blurb about how we package the data as an object already, but throw it away when we get it to the DOM element

Since all of the task data is set up in a way that is difficult for us to organize and store, we are going to need a different solution when it comes to storing this data. This solution is going to have to keep each task's ID, name, type, and status packaged together, like this:

```js
var taskObj = {
  id: 1,
  name: "Add localStorage persistence",
  type: "Web",
  status: "In Progress"
}
```

We're going to have more than one task to store, obviously, so creating a variable for each one is not maintainable or organized. 

> **Pause:** What do we think would be a good solution for keeping a list of our task objects in one variable?
>
> **Answer:** An array of objects.

We are going to create a new variable in `script.js` to hold an array of task objects that looks like this:

```js
var tasks = [
  {
    id: 1,
    name: "Add localStorage persistence",
    type: "Web",
    status: "In Progress"
  },
  {
    id: 2,
    name: "Learn JavaScript",
    type: "Web",
    status: "In Progress"
  },
  {
    id: 3,
    name: "Refactor code",
    type: "Web",
    status: "To Do"
  }
];
```

This is what our `tasks` array will look like when we start adding tasks to it, but to start, we can simply create an empty array variable. Let's add the following code to `script.js` where we've declared our other variables towards the top of the file:

```js
var tasks = [];
```

We have created an empty `tasks` array, this way when we create a new task, the object holding all of its data can be added to the array. All we need to do is update the object holding our task's data to also include its ID and status, both of which are currently only written to the DOM element associated with the task.

In the `taskFormHandler()` function, let's update the `taskDataObj` variable to include one more property called "status". Since this is the data that gets sent to `createTaskEl()`, we can safely assume that the status will always have a value of "to do". A task that has just been created cannot possibly be "in progress" or "complete" yet.

Update the `taskDataObj` variable to look like this:

```js
var taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput,
  status: "to do"
}
```

Let's test that this works by adding a `console.log()` into the `createTaskEl()` function, this way we can make sure that the new property is getting to the function properly. In `createTaskEl()`, simply add anywhere in the function:

```js
console.log(taskObj);
console.log(taskObj.status);
```

Save `script.js`, refresh the app in the browser, and submit a new task. The two `console.log()` functions we added should look like this image in the console:

> **Asset Needed:** Screenshot of console with two above console.log statements

As we can see, `createTaskEl()` now receives this new `status` property in its `taskObj` argument.

> TODO: **Pro Tip:** Creating more arguments vs. adding object property in a function

The only thing missing from our task's object that we need to save is its ID. Luckily, we already have the value of the ID in the `taskIdCounter` variable and already using it in the `createTaskEl()` function. All we need to do now is add that value as a property to our `taskObj` argument variable and add the entire object to our `tasks` array.

Let's update `createTaskEl()` to have the following code below `listItemEl.appendChild(taskInfoEl);`:




## *Non-Step/Concept Section*

*Other sections can be intermingled with the Step sections as necessary. Some sections aren't a step but explain a concept instead.* 


## *Step 3*

*2–3 sentences describing what will be covered in this section.*

*Walk student through this step, include LBs as appropriate, etc.*

*Transitional text to next section.*


## *Step 4*

*2–3 sentences describing what will be covered in this section.*

*Walk student through this step, include LBs as appropriate, etc.*

*Transitional text to next section.*


### The Last Mile 

*This is ONLY the last third of the last lesson in each module. Refer to [Last Mile Copy](https://docs.google.com/document/d/1QGQIZU_sOBOemsSbbywDu1-gL0Z5JS2LAl-c8KY90Vs/) for example copy.* 

## Reflection

*Congratulate the learner. Recap what they accomplished during the lesson from a broad perspective in a couple of sentences.*

*In this lesson, you added the following skills to your tool belt, knowledge base, skillset:*

- *Skill learned in 1-2 sentences*

- *Skill learned in 1-2 sentences*

- *Skill learned in 1-2 sentences*

- *Etc.*

*If this is the last lesson in a module, recap the entire module and introduce the next module.*

*If this is not the last lesson in a module, introduce the next lesson and how it will build on the skills in this lesson.*


- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
