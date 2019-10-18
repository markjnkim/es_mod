# Lesson 2: Working With Forms

## Introduction

> **Asset Needed:** Image or gif of application in current state

Taskinator is really starting to take shape! We not only have our HTML in place, but we also have added the ability to interact with the HTML elements to create new tasks for our task list. 

While this is a great start, our ability to add new tasks to a task list isn't fully realized just yet. What good is a task list that keeps adding the same preset task content?

In this lesson, we'll be adding functionality to our application that will allow us to create our own custom tasks by filling out an HTML form.

Let's take a look at the GitHub issue we created to review what we'll work on next:

> **Asset Needed:** GitHub Issue screenshot

The last lesson was about using browser events to dynamically create new HTML content and append it to the page. We'll be adding to that in this lesson by adding the ability to read data entered into HTML form elements and using that data to create new tasks. By the end of this lesson, we'll have our MVP for this application!

## Preview 

By the end of this lesson, our application will allow users to fill out a form and create a new task based on the form's input content.

> **Asset Needed:** Screenshot of what the project will look like at the end of the lesson

Just like the last lesson, our path to matching the image above will involve the following features:

- A new task can be created by filling out the form with a task name and picking what type of task it is.

- The user can submit as task by either pressing the "Add Task" button or pressing the `Enter` key on a keyboard.

- If one of the form fields is left empty, the task will not be created.

As far as features go, there isn't a terrible amount to add here, but the features getting added to the application are features seen and used throughout modern web development.

Like the last lesson, adding features are done most efficiently when tackled in a certain order, so let's use pseudocode to help outline the steps we will take:

> **Asset Needed:** Learnosity pseudocode drag and drop order
> - Create a New Git branch
> - Add Task Form to HTML
> - Handle Form Submission
> - Capture Form Inputs
> - Create New Task and Organize Functionality
> - Address Usability Concerns
> - Merge branch into develop

Don't be concerned if the order tripped you up a bit, it gets easier with time and experience. A main reason of using pseudocode is to get a loose plan in place for us to follow, even if that plan needs to be changed or corrected later on. We now have an idea of what each step will entail at a high level, even if we don't know all of the details just yet.

Let's start with the usual and create our new Git feature branch!

## Create a New Git Branch

This is a good time for us to review our GitHub issue pertaining to this feature one more time, then let's create our feature branch.

Since the issue is all about submitting form data, let's call the feature branch `feature/form-submit`. We'll create it now from the command line:

- Use `git branch` to ensure we are currently in the `develop` branch, as we want to use that branch's code to build upon.

- Create a new branch for this feature:

```bash
git checkout -b feature/form-submit
```

As we know, this has created the branch and moved us into it, but we can use `git branch` one more time just to double check.

Now that we've confirmed we're in the correct branch, let's get started!

## Add Task Form to HTML

In order for us to be able to create new tasks with unique content, we'll first need to implement an HTML form that will allow us to create that content. Keep in mind that creating the form in HTML will only allow us to enter content to be submitted, capturing that content is going to be done in JavaScript right after. 

Let's not concern ourselves with the "how does this work?" part just yet and focus on getting the form set up to look like this image:

> **Asset Needed:** Mock-up of the header with the form

We currently just have a button that triggers an event to create a new task, but we are going to add form elements to go along with that button. Let's start by adding a `<form>` element in our `<header>`.

Update the `<header>` element to look like this under the `<p>` element:

```html
<form id="task-form">
  <div class="form-group">
    <button class="btn" id="save-task">Add Task</button>
  </div>
</form>
```

Obviously we aren't done yet, but let's take a moment and point out a few things about the form elements we just added.

We gave the `<form>` element an `id` attribute. This won't come into play just yet, but if we think about what we learned in the last lesson, we can assume this attribute will be used in our JavaScript code.

We also wrapped the `<button>` element in a `<div>` with a class of `form-group`. We're going to use this to wrap all of our form elements with this `<div>` to make styling it easier.

> **Rewind:** Remember that when it comes to styling HTML elements, it is easier to wrap the element in a container element. HTML elements designed for content, such as `<p>`, `<a>`, `<button>`, and `<input>` are sometimes hard to control when it comes to layout, so wrapping them in a container element whose sole purpose is to handle where it goes on the page makes it a little bit easier at times.

### Add Task Input

At this point, even with adding the `<form>` and `<div>` elements around the `<button>`, our header should look almost the same. The good thing is that it's now set up for us to add more content, so let's do that by adding an `<input>` element to capture our task's name.

Add the following right after the opening `<form>` tag:

```html
<div class="form-group">
  <input type="text" name="task-name" class="text-input" placeholder="Enter Task Name" />
</div>
```

Save `index.html` and refresh the page in the browser, we should see something like this image:

> **Asset Needed:** Image of input and button in form

By adding the class of `text-input` to the `<input>` element, we were able to override all of the browser's default styles for the element and make it look more in line with our app's style. 

### Add Task Type Dropdown

Now we have the ability to write in a task name, but we're going to add one more form element; something that'll help us keep track of what type of project it is. We'll use an HTML element that's new to us called `<select>`.

In between the `<div>` elements that hold the text input and the button, add this HTML:

```html
<div class="form-group">
  <select name="task-type">
    <option value="" disabled selected>Pick a project type</option>
    <option value="Print">Print</option>
    <option value="Web">Web</option>
    <option value="Mobile">Mobile</option>
  </select>
</div>
```

Save `index.html` and refresh the browser, we now have another form element that allows us to select from a predetermined list of options. This is the first time we've come across this type of form element, so let's point out a few of the particulars:

- `<select>` is used to tell the browser we're about to create this type of dropdown list, but we use `<option>` elements in between the `<select>` tags to create the possible choices for that dropdown.

- Every option should have a `value` attribute accompanying it, as this value will be used in our JavaScript later to read the option we've picked. 

- Adding the `disabled` and `selected` properties to the first option makes it so when the page is loaded, that option shows up first but also has a style that tells the user that this isn't a valid option.

We used the options of "Print", "Web", and "Mobile" here because those are common types of projects we may be working on, but since this is a personal project for us, we can feel free to customize those options to fit our needs.

One thing also to note, this new element looks pretty bad when we compare it to the other form elements on the page. Elements like this, along with radio and checkbox inputs, get a lot of default styling from the browser whether we like it or not. Luckily, the style sheet we're using has a CSS class ready for us, so let's implement it!

Add the following class to the `<select>` element to look like this:

```html
<select name="task-type" class="select-dropdown"> 
```

If we save our file and refresh the browser, it should look a lot better, like this image:

> **Asset Needed:** Screenshot of header with form styled

We won't go too deep into the magic behind making this look good, but feel free to inspect it in Chrome DevTools. The key to styling an element like this is using the `appearance` CSS property, which tells a browser how to interpret the element. In this case, we're using that property to tell the browser to do absolutely nothing with the element and we'll style it ourselves.

Our form is all set! Now that we have the HTML in place for us to fill out the form, let's jump back into our JavaScript file and make it functional! 

Don't forget to add, commit, and push your feature branch!

> **Deep Dive:** To learn more, check out the [MDN docs on the `<select>` element.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)


## Handle Form Submission




## Capture Form Inputs

*2–3 sentences describing what will be covered in this section.*

*Walk student through this step, include LBs as appropriate, etc.*

*Transitional text to next section.*

## Create New Task and Organize Functionality


## Add Input Validation


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
