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

## Apply Unique IDs to Tasks

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
