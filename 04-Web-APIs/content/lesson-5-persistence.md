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

Since all of the task data is set up in a way that is difficult for us to organize and store, we are going to need a different solution when it comes to storing this data. This solution is going to have to keep each task's ID, name, type, and status packaged together, like this:

```js
var taskObj = {
  id: 1,
  name: "Add localStorage persistence",
  type: "Web",
  status: "In Progress"
}
```

The nice thing about packaging up our task into an object is that we've already started this process of organizing the task data into an object. We did it in the second lesson when we sent the task's data from `taskFormHandler()` to `createTaskEl()` as an argument. All we need to do now is update that object to hold more information. 

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

Let's test that this works and add a `console.log()` into the `createTaskEl()` function, this way we can make sure that the new property gets to the function properly. In `createTaskEl()`, simply add anywhere in the function:

```js
console.log(taskObj);
console.log(taskObj.status);
```

Save `script.js`, refresh the app in the browser, and submit a new task. The two `console.log()` functions we added should look like this image in the console:

> **Asset Needed:** Screenshot of console with two above console.log statements

As we can see, `createTaskEl()` now receives this new `status` property in its `taskObj` argument.

> TODO: **Pro Tip:** Creating more arguments vs. adding object property in a function

The only thing missing from our task's object that we need to save is its ID. Luckily, we already have the value of the ID in the `taskIdCounter` variable and already using it in the `createTaskEl()` function. All we need to do now is add that value as a property to our `taskObj` argument variable and add the entire object to our `tasks` array, but how do we actually add something to an array? Let's find out.

Let's update `createTaskEl()` to have the following code below `listItemEl.appendChild(taskInfoEl);` and above `taskIdCounter++;`:

```js
taskObj.id = taskIdCounter;

tasks.push(taskObj);
```

There won't be any visible difference on the page because of this update, but we can still test to make sure it works.

Save `script.js`, refresh the page, and create a task or two. After a successful task creation, visit the DevTools console and simply type in `console.log(tasks)`. When we hit `Enter` to run the log function, we should get back a printed list of the tasks in an array of objects, like this image shows:

> **Asset Needed:** Image of `tasks` array in console

As we can see, the tasks we're adding to the page are also being stored into the `tasks` array now with all of the information important to each one. We have two actions happening here.

First, we need to add the ID of the task we just put on the page to the task's object. Remember, we're now managing two lists of tasks. One that goes on the page and one that stays in an array of objects as `tasks`. This means that when we edit or delete a task, we need to not only remove it from the page, but from the `tasks` array as well. This way the data we see on the page stays in sync with the data that will be stored in localStorage. 

We did this by adding an `id` property to the `taskObj` argument and giving it a value of whatever `taskIdCounter` is at that moment. This way, whatever ID is added to the DOM element we just created gets added to the task's object as well, and we can use that ID later on to identify which task has changed for both the DOM and the `tasks` array.

> **Important:** Just as we can update the value of a property of an object by accessing its property and reassigning it, we can also create new properties as needed. 

Once we give the task its ID value, we then have to actually get that object into the `tasks` array, so we used an array method called `push()`. This method will take whatever content is between the parentheses and add it to the end of whatever array the `.push()` is chained off of.

This method is one that developers use a lot, so let's go through a couple of examples:

```js
var pushedArr = [1, 2, 3];

pushedArr.push(4); 
// pushedArr is now [1,2,3,4]

pushedArr.push("Taskinator"); 
// pushedArr is now [1,2,3,4,"Taskinator"]

pushedArr.push(10, "push", false); 
// pushedArr is now [1,2,3,4,"Taskinator",10,"push",false]

```

> **Deep Dive:** For more information on this method, check out the [MDN documentation on `push()`.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

So we've now added the ability to save a task not only to the page, but in our array as well. But we don't only add tasks, do we? We also update them and remove them, so we're going to have to update our `completeEditTask()`, `taskStatusChangeHandler()`, `dropTaskHandler()`, and `deleteTask()` functions as well.

### Find and Edit Array Data

We need to keep the data presented by the DOM and the data stored in the `tasks` array in sync. Because of this, we are going to update a few of our functions that currently handle updating and deleting tasks from the DOM to also update or delete that task in the `tasks` array. 

We are going to do this by looking up that task in the array but its ID value. Once we find it, we'll update its object properties or remove it or remove it from the `task` array entirely. How do we find an element in an array by its ID? Well, we're going to have to look at each task in the array and check to see if it has an `id` property equal to the ID of the task we just updated.

This sounds like it involves using a `for` loop, and we _could_ use a `for` loop to get this job done. The thing is, we already know how to use `for` loops, so let's use a different tool this time around and learn something new. This tool is one that's specifically made for iterating through an array as well, so it's good to know we have options.

In the `completeEditTask()` function, add this code underneath the two `querySelector()` methods so it looks like this: 

```js
// THIS CODE IS ALREADY IN PLACE
taskSelected.querySelector("h3.task-name").textContent = taskName;
taskSelected.querySelector("span.task-type").textContent = taskType;

// find task in tasks array and update values
tasks.forEach(function(task) {
  if (task.id === parseInt(taskId)) {
    task.name = taskName;
    task.type = taskType;
  }
});
```

Whoa, what is this crazy syntax? Are we passing a function into a method as an argument?

The answer is yes, we are passing a function as an argument. And this syntax is a little strange, so let's figure out what this is doing.

The `forEach()` method is another array method and is used to perform an action on each element of the array one at a time. The name `forEach` literally means "for each element in this array", and the function we pass in as an argument is a callback function.

> **Pause:** Where else have we used a callback function?
>
> **Answer:** All of our event handlers are used as callback functions. Remember, a callback function is a function that we provide to another function to execute on our behalf. For example, we don't ever execute `taskFormHandler()` in our JavaScript code, but we give the DOM that function to execute on our behalf when the form is submitted.

The callback function used in a `forEach()` method has a specific format when it comes to what arguments it will use:

- The first argument will always represent the element at that iteration of the array, the array[i] value if we were to think about this in `for` loop terms. That's why in ours, it's labelled `task`, the singular version of `tasks`, because it represents a single task in our tasks array. This argument is required.

- The second argument is optional to use, but it will always represent the current index `i` of the loop. We don't need to use that value in our code so we can leave it out.

Here is an example of `forEach()` that we can copy and paste into our Chrome DevTools console to see how it works:

```js
var kitchenItemsArr = ["Oven","Table","Sink","Fridge","Toaster"];

kitchenItemsArr.forEach(function(item, index) {
  console.log("This is the element of array[i]: ", item);
  console.log("This is the current index: ", index);
  console.log("============");
});
```

When we run this in the console, it should look like this image:

> **Asset Needed:** Console showing this forEach

We used the third `console.log()` statement to help break up the content so it's easier to see that we are executing the function once per item in the array. While we can use `for` loops as well in this case, sometimes using a more array specific method can be helpful. At the end of the day it's up to personal preference and comfort.

> **Pro Tip:** We will be using a lot of callback functions in methods. It is very easy to make a syntax error and forget to include the method's closing parenthesis `)`, since most of the code spans multiple lines.
>
> A good way of learning the syntax is to write it all on one line first, then add the callback function's code after, like this:
>
> ```js
> kitchenItems.forEach(function() {});
> ```

Now that we know how to use the `.forEach()` method, let's see what's happening inside of its callback function. At each iteration, we are checking to see if that individual task's `id` property matches the `taskId` argument we passed into `completeEditTask()`. 

The only problem is `taskId` is a string and `tasks.id` is a number; so when we compare the two, we need to make sure that we are comparing a number to a number. This is why we wrap the `taskId` with a `parseInt()` function and convert it to a number for the comparison. If the two ID values match, we have confirmed that the task at that iteration of the `forEach()` loop is the one we want to update, so let's go ahead and do that by reassigning that task's `name` and `type` property to the new content submitted by the form when we finished editing it. 

With this `forEach()` loop, the code in the `if` statement should only run once. If there were eight tasks in our list, the `forEach()` method's callback function will run on all eight, but the `if` statement's code block should run only one of the eight times, as we are looking to only update one task in the array.

Let's test this out to make sure it works before we move on to the others. Add `console.log(tasks)` below the `forEach()` method and see if the array's content changes after editing a task's name. It should look something like this image:

> **Asset Needed:** Image of array before and after `forEach()` in console, highlighting differences

Now that we got the `completeEditTask()` function to update the `task` array, let's turn our attention to the other functions that deal with updating tasks as well, starting with `taskStatusChangeHandler()`.

In `completeEditTask()`, we focused on updating a task's name or type. Here, we only need to worry about updating a task's status. We use a `forEach()` again, but with a different property to reassign.

At the bottom of the `taskStatusChangeHandler()` function, add the following code:

```js
tasks.forEach(function(task) {
  if (task.id === parseInt(taskId)) {
    task.status = statusValue;
  }
});
```

Add another `console.log(tasks);` after the `forEach()` so we can verify that it's working. Save `script.js`, create a task, and update its status through the task's `<select>` dropdown. The console should display an updated `tasks` array after this action is complete and reflect that task's new status. We can't test it via drag and drop just yet, as we haven't added this update functionality to its handler function. Let's do that now.

Let's add the following code to the bottom of `dropTaskHandler()`:

```js
tasks.forEach(function(task) {
  if (parseInt(id) === task.id) {
    task.status = statusSelectEl.value.toLowerCase();
  }
});

console.log(tasks);
```

Save `script.js`, create a task or two, and test if this works by dragging and dropping a task item into a different list. The `console.log()` we added should reflect that our task's object in the `tasks` array has been updated. 

That wraps it up for taking care of updating tasks, now let's handle deleting them from the `tasks` array!

### Remove Task from Array

We just used a `forEach()` to help us update a task object in the `tasks` array, and we could use that here too, but it would require adding multiple steps to get there. Instead, we are going to use a different array method called `filter()`.

Let's find the `deleteTask()` function and add this code to the bottom of it:

```js
tasks = tasks.filter(function(task) {
  if (parseInt(taskId) !== task.id) {
    return true;
  }
});
```

This `filter()` method is a newer addition to the array method family. It has similar features to the `forEach()` method as they both utilize callback functions to execute on each element in the array, but there are a couple of interesting things to point out.

Notice how we are reassigning the `tasks` array to this `filter()` method? This method's purpose is to take an array and create a brand new one based on the array it's chained off of. If we didn't have the `tasks =` in front of it, the method would execute just fine but its result would not get stored anywhere.

So how does this create a new array? Where does the "filter" part of it come into play? See the `return true` statement inside of the `if` statement? That's what instructs the callback function what to place into the new array and what to keep out of it.

This may seem confusing in the context of our tasks, so let's look at an example that's a little more explicit:

```js
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filteredNumArr = numberArr.filter(function(number) {
  if (number !== 5) {
    return true;
  }
});
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numberArr);

// [1, 2, 3, 4, 6, 7, 8, 9, 10]
console.log(filteredNumArr);
```

If we run the code above in the DevTools console, we can see that the `filter()` method took the values of `numberArr` and created a new array with the number 5 missing. 

The callback function of a `filter()` is designed to specifically check a condition and return true or false based on the result of that condition. If we return `true`, the value of the array at that iteration is returned and added to the new array that's stored in the variable. If `false` or nothing is returned at all, then that value is ignored and will not be added to the new array.

In our example above, we are iterating through our array of numbers and at each iteration, we check to see if the value at that iteration is not equal to the number five. If it isn't, then we keep that value in the new array. But when the iteration's value is five and it checks, it won't be added to the new array because `5 !== 5` results in a false condition.

> TODO: **Deep Dive:** Array methods and documentation 

Let's turn our attention back to our `deleteTask()` function. The `filter()` method we used here checks to see if the ID of the task we're deleting does not match the task object's `id` property at that iteration of the loop. If it doesn't match, then that's not the one we deleted and gets sent into the new array being saved in `tasks`. If the IDs do match, then we have identified the one we want to delete, and that task's object does not make it to the new array.

Let's add a `console.log(tasks);` after the `filter()` method and test to see if it works. It should log a new array that does not include the task object of the one that was just deleted.

> **Asset Needed:** Image of console with tasks array before and after delete

So this was a lot of code to learn for functionality that has no effect on the page, but keep in mind what we're building towards. By storing all of our task's data as an array of objects in our JavaScript code, it will now be easier for us to save that data to localStorage.

Don't forget to add, commit, and push our code to the GitHub feature branch!

## Save Tasks to localStorage

Well our task data is all prepared and ready to be saved, so let's actually save it! This task is actually relatively small, but there's still something that we need to consider, how do we know _when_ to save our data? 

The answer is simply any time our data changes. 

We'll start off by creating a function for saving tasks to localStorage, then we'll have that function be executed every time we add, update, or delete any tasks. Right above the `addEventListener()` methods at the bottom of `script.js`, let's create a function called `saveTasks`:

```js
var saveTasks = function() {

}
```

The content of this function is going to be light, very light actually. It's only going to consist of one method being executed. Which one do we think it is? Here's a hint, it's a localStorage method.

> **Pause:** What method is used for saving data to localStorage? `setData()` or `getData()`?
>
> **Answer:** `localStorage.setData()` is used to save data to localStorage.

Let's add the following code to the `saveTasks()` function:

```js
localStorage.setItem("tasks", tasks);
```

That's all we need to do! Simple, right? Well, we won't know until we execute the function and test it, so let's add the function call to our create, update, and delete task functions:

Add `saveTasks()` in the following functions:

- In `createTaskEl()` anywhere after the `tasks.push(taskObj)` method.

- In `completeEditTask()` anywhere after the `task.forEach()` method.

- In `taskStatusChangeHandler()` at the end of the function.

- In `deleteTask()` at the end of the function.

- In `dropTaskHandler()`, right after the `tasks.forEach()` method.

Now that we have everything in place, let's test it. Save `script.js`, create a task or two, and open DevTools.

> **Pause:** In Chrome DevTools, how do we navigate to see what's in localStorage?
>
> **Answer**: The "Application" tab, in the `Storage -> Local Storage` menu on the left-hand side.

Right now, our localStorage for this application should look something like this image in DevTools:

> **Asset Needed:** Image of Application tab in DevTools with non-stringified data

Well this is not what we were expecting, now is it? We packaged up our data so neatly, we even logged it to the console to make sure it looked right, so why is localStorage storing it as `[object Object]`? 

Unfortunately, localStorage has a drawback. It's limited in what types of data it can store, one type of data to be exact. That type of data is strings.

This means that if we store a number in localStorage, it'll get turned into a string. If we store the boolean `true`, it'd end up as "true" instead. So what happens with objects and arrays? 

Since objects and arrays are not simple data values and can be comprised of multiple data types, they can't easily be converted to strings the same way numbers and booleans are. Objects and arrays are simply too complex for a computer to effectively turn into a string automatically.

Because of this, however, JavaScript has a couple of built-in tools that allow us to do this type of conversion ourselves. Let's edit the `saveTasks()` function to look like this instead:

```js
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

Let's try saving a task or two again. The result should look like this image:

> **Asset Needed:** 


- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
