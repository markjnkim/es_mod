# Detailed Lesson Outline for 4.4
## Introduction
* Screenshot of what the project looks like currently
* Screenshot of the Github Issue
* The app is now working but now let’s think about how to improve the user’s experience by including drag and drop to move tasks between lists
* Give an example of an application that has this feature
* Expectations of users to have this feature has set a high bar that we should try to attain
* We can accomplish this task with native JavaScript, Drag and Drop API
* Even though this is some new tech, we should be familiar with the syntax, using objects, methods, and event listeners
* Allude to other situations that this tool can come in handy like drag and drop files on a desktop, calendar, gaming etc.

## Preview

* Video/gif of dragging action
* Let students know that we’re entering new territory and will provide the pseudocode steps for them.
    1. Create new Git branch
    2. Create “drag” event handler
    3. Create “drop” and “dragover” event handlers
    4. UI enhancements with “dragleave” event handler
    5. Merge branch into develop

## 1. Create a New Git Branch

* Direct students to review GitHub issue one more time
* Create a new feature branch based on issue

## 2. Create Drag Event Handler

* Explain that making an HTML element draggable requires a special attribute called “draggable”
  * Demo it by going into the HTML file and adding draggable=”true” to the header’s h1 element
* Update createTask function to set “draggable” attribute to “true” for each task list item
  * Test it out, point out that while we can drag it and it follows our cursor, it snaps back when we release it
* Explain the overall process for drag/drop and that we need to make elements draggable, but also make other elements able to receive dropped elements
  * We do this with JavaScript browser events
* Create event listener for “dragstart” that calls dragTaskHandler function
  * Have students console.log something in the event so they can see when it triggers
  * Explain that for this to work correctly, we need to capture the pertinent data from the element we’re dragging. 
  * Highlight that, once dragging starts, we’re not actually dragging the DOM element (even though we see it visually), so we need to save some sort of reference to it
  * Compare to dragging files from your desktop to a website and how we’re basically mimicking the same behavior within the page
* In dragTaskHandler, use dataTransfer.setData() method to save the current task-id on the drag event
* Wrap this method call in an if statement that checks for matches("li.task-item")
  * Explain/rewind that this is necessary due to event delegation

## 3. Create Drop and Dragover Events

* Remind students that using this technology requires two main parts
  * Initiating the drag (which we’ve done!)
  * Allowing the drop
* Add “drop” event listener and create dropTaskHandler function
  * Start off by just adding a console.log() into the handler
  * Run the drag and drop in the browser with the console open, show that nothing happens. Why?
* Explain that the native drag and drop behavior in the browser is to take a file and load it into the browser
  * Demonstrate by dragging a photo from the desktop over the page and letting the browser open the file, overwriting the browser tab
  * We need to stop this from happening by using a different event, “dragover”
* Add “dragover” event listener and dropzone DragHandler function with event.preventDefault() in it
  * Pause/rewind: what did preventDefault do with forms?
* Run the code again and point out that the drop event is working now, as we can see our console.log() message
* Add more to the drop event handler
  * event.preventDefault() to stop Firefox from loading 0.0.0.0
  * Use dataTransfer.getData method to read task id we set in drag handler
  * Use querySelector to grab task element with that ID and save it to variable
  * Identify our dropzone element by finding the closest element with “.task-list” (the parent UL)
  * Update our task element’s select dropdown status to match the ID of which task list we’re dropping it
    * Switch case refresher
  * Append/move the task element from one list to the targeted dropzone list
* Have students test it out in the browser, then watch for errors in the console. Point out that an error still occurs when you drop between the lists
* Add if statement in dropTaskHandler to check if we’re NOT dropping into an element that matches “.page-content”
  * If we’re not, go ahead with drop function

## 4. Enhance UI with Dragleave Event

* Congratulate students on building a drag/drop app, but highlight that, visually, it’s not apparent to users that things are working
  * We can change the CSS to show when a list is being dragged over
* In dropzoneDragHandler, have students console log event.target and then event.target.closest(".task-list") to show how we can capture the UL element
* On the closest element, use setAttribute() to add a dashed border
  * Point out that closest() and setAttribute() can be “chained” and explain how chaining methods works
* Test in browser and note that the border never goes away
* Pose question: when would we remove the border?
  * We’ll need a new event listener!
* Add “dragleave” listener that calls dragLeaveHandler
* Create dragLeaveHandler function
  * Use closest() again to find UL element
  * Use removeAttribute() to clear style
* Point out that “leave” doesn’t fire if “drop” occurred, so we’ll need to remove the style attribute in dropTaskHandler as well
  * Use removeAttribute method to get rid of style for the dropzone element
## 5. Finalize Git Process
* Git add, commit, push
* Merge branch into develop
* Close GitHub issue
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

 
