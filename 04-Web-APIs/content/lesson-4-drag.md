# Lesson 4 - Drag and Drop
## Introduction
@Todo screenshot of current project
@Todo Github Issue
Drag and Drop API part of window


## Preview
@Todo screenshot of project after lesson completion

@ Build Steps
    1. Create new Git branch
    2. Create “drag” event handler
    3. Create “drop” and “dragover” event handlers
    4. UI enhancements with “dragleave” event handler
    5. Merge branch into develop

## Create a New Git Branch
@Todo for the git steps

## Create Drag Event Handler
Introduce HTML attribute for draggable that allows elements to dragged.
Add this to the button element to see how it works:
> @Todo screen shot of button in a different locale

Since the elements we want to drag, ie. our task items, are dynamically created we need to add this attribute with JavaScript. 
Let's add the "draggable" attribute to our `createTaskEl()` function underneath the `listItemEl.setAttribute( "data-task-id")` expression
```js
listItemEl.setAttribute("draggable", "true");
```
Let's try out this out in the browser by saving this file and refreshing our `index.html` file in the browser.

@Todo screenshot of the moved task item

From the browser we can see our blue box can be dragged due to the ghost like image of our task item element however once we release our mouse, the task list bounces back to its original state.

We now need to figure out how to attach our element to the new location. Its no coincidence that this feature is called a drag and drop. We need to understand there are two actions taking place here, not just the dragging of the element, but also the dropping of the element to its new location. We can capture both the drag and drop behavior with a browser events called the `dragstart` and the `drop`.

The `dragstart` event is triggered when an element that has a `draggable` attribute is initially moved. Because we have multiple items we would like to attach event listener to, we must delegate the listener to the parent element. Add this line to the bottom of the `script.js` file:
```js
pageContentEl.addEventListener("dragstart", dragTaskHandler);
```
Now let's define this event handler `dragTaskHandler()` with an action to verify our event handler is operating correctly.

```js
var dragTaskHandler = function(event) {
  console.log("element is being dragged");
  console.log(event);
} 
```
@Todo screenshot of console.log and element dragging and `DragEvent` methods

So looking in console we can see that we have displayed the `DragEvent` object. 
Let's look at the `dataTransfer` property and notice that in the `files` property we can access information regarding the element. The Drag and Drop API allows for a multitude of different functionality that we can use for our task item drag/drop operation.

@Todo screen shot of console dataTransfer property

Eventhough we aren't transfer files, we can use this property to store the data of our element so the information can convey to the `drop` event. Although it appears that the actual element is being moved, in actuality the element never moved, but we need to keep a reference to it. We can use dataTransfer property to do this.

We will need to save this element's `data-task-id` attribute in the `dataTransfer` property in order for the next event to have access to this `id`.

This is the reason why we have a dragStart, to capture our data-task-id, which is what is actually being moved to the our target drop zone.

setData() example:

Let's make sure that we are only setting our setData() method to task items with a conditional 


### Dropping





## Create Drop and Dragover Events


## Enhance UI with Dragleave Event


## Finalize Git Process 


## Reflection
* More congratulations (seriously)
* Review what the student has accomplished in this lesson:
  * Specific skills learned:
  * Using the draggable attribute
  * Listening to many more events
    * Dragstart, dragover, dragleave, drop
  * Overriding browser behavior with preventDefault
  * dataTransfer object on event
  * `closest()` method to find parent elements
* Learned that “simple” UI interactions actually take a lot of work, and that dragging and dropping is a series of multiple events
  * Assure students that there are libraries that can facilitate implementing similar (or more advanced) features
* In the next lesson, we’ll put the final bow on our app by making the tasks persistent using our old friend localStorage