# Lesson 4: CSS Grid

## Introduction

In recent lessons, we implemented flexbox and media queries to make the Run Buddy site mobile-responsive. 

Our next task is to add a new section to the landing page. The marketing department has requested a service plan comparison table to showcase the differences between the basic and premium plans. This new section will be placed after the "Meet the Trainers" section and before the "Reach Out" section.

## Preview

Let's take a look at the mock-up for the service plan table:

![service-plan](assets/lesson-4/100-service-mock-up.png)

We can approach this solution in a few ways. One is to use the HTML `<table>` element, but that's intended for [tabular data](https://en.wikipedia.org/wiki/Table_(information)) and not the customized table design we need.

We could also use flexbox, but this could be tricky because we need a two-dimensional table with an element that spans multiple columns (for the magazine subscription row). 

This leads us to a CSS layout model called **CSS Grid Layout**. CSS Grid&mdash;a two-dimensional model similar to flexbox&mdash;is nothing short of a revolutionary system for page layouts, and this is what we'll use. 

The best way to learn is by doing, so let's start coding!

## Set Up a New Feature

First we'll create a new feature branch by finding our GitHub issue, "Pricing table using Grid", with the corresponding branch name `feature/grid`. Before branching, remember to use `git branch` to verify the active branch.

To create the feature branch, type the following in the command line:

```
$ git checkout -b "feature/grid"
```

> **Pro Tip:** Always checkout into the stable development version, the `develop` branch, before creating a new feature branch. Branching off a different branch could insert broken or untested code, which could lead to unintended consequences.

## Why Use CSS Grid Instead of Flexbox?

Flexbox is wonderful for dealing with a single direction like a component that needs horizontal alignment, such as a `<nav>` and its navigational links or a `<div>` with three images, like this:

![image-gallery-example](assets/lesson-4/150-image-gallery-flex-css.png)

CSS Grid, on the other hand, has a two-dimensional layout model that can accommodate both columns and rows. This makes it better suited for large-scale layouts like custom websites or image galleries. 

> **Asset Needed:** Video [Introduction to CSS Grid - Jira 140](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-140)

Let's take a look at a few examples of what CSS Grid can do. 

In the following example, although we're still working with rectangle boxes, we can position and shape them to deliver custom and unique designs:

![page-layout](assets/lesson-4/200-grid-layout-css.png)

In the next example, we use CSS Grid to match the image's orientation, either portrait or landscape, and to position the images into a nicely organized gallery: 

![image-gallery](assets/lesson-4/300-image-grid-css.png)

CSS Grid even allows other tools to be used inside it, such as flexbox or even another grid or [subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid).

Before we get into CSS Grid lingo, let's pause for a quick quiz. 

> **Asset Needed**: [Learnosity Flexbox vs Grid - Jira FSFO-124](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-124) 

## But Can I Use It?

<!-- [Can I Use](https://caniuse.com/#feat=css-grid) -->

Whenever a new front-end tool is introduced, the first thing you need to determine is whether you can use it. Front-end technologies only work if browsers (both desktop and mobile) support them. But how do you determine that? 

Luckily for us, there is a website called [CanIUse.com](https://caniuse.com/#feat=css-grid) that tracks technology adoption among desktop and mobile browsers. 

Let's see how CSS Grid fares:

![Can I Use](assets/lesson-4/320-can-i-use.png)

As you can see, CSS Grid has attained a 90% adoption rate. Still, it's important to be mindful of what the experience will be like for the remaining 10% of users. Is it okay to serve them a broken page or do you need to come up with a fallback solution? 

Run Buddy's marketing department has decided that the power and simplicity of CSS Grid is worth alienating a small number of users that have been calculated to be outside their target demographic. Grid it is, then!

Take a minute to investigate other front-end technologies like flexbox and media queries on [CanIUse.com](https://caniuse.com) to see that consensus in the browser category is not easy to come by.

## Get Started with CSS Grid

So what is CSS Grid? Much like it sounds, CSS Grid is a set of vertical and horizontal lines that intersect much like a table. Elements can be positioned in the grid between the vertical or horizontal lines. 

To create a grid, we first define the container element and the width and number of columns and rows. Then we declare the height and width of the child elements that sit inside the grid. 

> **Rewind**: Many of the CSS Grid terms and parent/child relationships are similar to flexbox.

### Create the Grid Container

 A **grid container** is declared by using `display: grid` and will act as the wrapper for the grid. The direct children of the grid container are the **grid items**. These elements sit within the vertical and horizontal **grid lines**. 

Let's begin by writing some basic HTML that will establish our grid container and grid items after the "Meet the Trainers" section and before the "Reach Out" section. First let's add the class that we'll later use to style the section and then add the in-page navigation id.

In `index.html`, add the `services` class:

```html
<section id="service-plans" class="services">
</section>
```

Then add the link in the `<nav>`:

```html
  <a href="#service-plans">Service Plans</a>
```

Within the `<section>` element, add some example HTML to start the grid by adding the grid container with its class attribute and the grid items with their corresponding class attributes:

```html
<div class="service-grid-container">
  <div class="service-grid-item">One</div>
  <div class="service-grid-item">Two</div>
  <div class="service-grid-item">Three</div>
  <div class="service-grid-item">Four</div>
  <div class="service-grid-item">Five</div>
  <div class="service-grid-item">Six</div>
</div>
```

In `style.css`, add the CSS rule to set up the grid:

```css
.service-grid-container {
  display: grid;
}
```

Now add some styling to the grid items to help visualize our example: 

```css
.service-grid-item {
  width: 200px;
  height: 50px;
  background-color: orange;
  border: solid;
  color: black;
}
```

Save the files and render the grid in the browser:

![grid-example-part_1](assets/lesson-4/800-grid-example-part-1.png)

> **Asset Needed:** Image [Add labels - Jira FSFO-128 ](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-128)

Great job! We'll make sure this grid has the correct number of rows and columns in the next step. 

> **Deep Dive**: `inline-grid` and `subgrid` are also possible values of the `display` property. Here's how these differ:

> * `grid`: Creates a block-level grid container, which means it will sit alone in its own row.

> * `inline-grid`: Creates a inline-level grid container, which means it will sit besides other elements in the same row according to available space and document flow.

> * [`subgrid`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid): Creates a grid container on a grid item within a grid container. To learn more, check out the [MDN web docs about CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

Now pause to add and commit your work in the feature branch. The commit message should be related to the work you just completed, such as "added grid example."

### Format the Rows and Columns

A **grid column** is defined by the space between two adjacent vertical lines. The size of the column is determined by the `grid-template-columns` property. Conversely, a **grid row** is defined by the space between two adjacent horizontal lines whose height is determined by the `grid-template-rows` property. 

A **grid track** is a generic term for either a grid column or grid row, shown here:

![Grid Track](./assets/lesson-4/370-grid-track.png)

> **Asset Needed:** [Graphic - Add Vertical Grid Track to Image - Jira FSFO-129](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-129)

To establish the dimensions of the grid, declare either the `grid-template-columns` or `grid-template-rows`. Let's add the declaration of the `grid-template-columns` property to the `.service-grid-container` rule:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 200px 200px;
}
```

In the `grid-template-columns` declaration, we determined the width of the grid columns and the number of columns due of the number of values. 

Here's how the grid renders now:

![grid-columns](assets/lesson-4/900-grid-column-part-2-css.png)

> **Asset Needed:** Image [Label image - Jira FSFO-130](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-130)

In the image above, a single orange box defined as the area between adjacent vertical lines and horizontal lines represents a **grid cell**. 

Experiment with the number of values and width sizes to see what happens to the grid.

> **Pause**: If we set our column width to 150px or smaller, why are the column widths no longer consistent?

> **Answer**: Making the column width skinnier than the size of our HTML element, the `<div>`, will truncate the element except for the last cells on the end of the row. These ending grid cells are allowed to overlap and not hide the overflow due to the absence of an adjacent element, so they will span to 200px, the size of the element.

Now let's add the grid row declaration to the grid container's CSS rule:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 50px 50px 50px;
}
```

If we compare these two in the browser, we can see that they look identical. This is because in our first example when we only declared the `grid-template-columns`, CSS Grid was able to determine the number of rows and row heights needed based on the height of the content (50px). 

This is called the **implicit grid** due to the auto-generation of rows by CSS Grid. When we declared the rows with the `grid-template-rows` declaration, we created an **explicit grid** because we declared all the rows needed for our content. 

What if we were to increase the row height and column width by changing the declaration to the following?

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 210px 210px;
  grid-template-rows: 60px 60px 60px;
}
```

We can see that a gap was generated to fill in the extra space because the `<div>` element's height is 50px and the width is 200px. Due to the default `box-sizing` property value set to `border-content` of the grid, gaps were only created within the grid cells and not in the margins surrounding the grid container. 

You can explicitly create these gaps by using the property `grid-gap` on the grid parent element:

![Grid Gap](assets/lesson-4/1000-grid-gaps-css.png)

Congrats! You've created your first CSS grid. Let's continue learning about relative units we can assign to the `grid-template-columns` and `grid-template-rows` properties to create a responsive layout.

### Create a Responsive Grid

Currently, our grid is static. This means the column, row, and cell sizes do not change regardless of the viewport or screen size. 

To create a responsive layout, we can assign relative units to the `grid-template-columns` and `grid-template-rows` properties to allow flexible grid tracks. We can do this by using some of the values we previously covered, namely the `percent` or `rem` unit values. 

CSS Grid also introduces a relative unit length value called `fr` or **fraction**. This relative value is unique to CSS Grid and cannot be used elsewhere. It's called fraction because CSS Grid assigns the unit length based on a fraction of the available space.  

Let's use `fr` in an example:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}
```

The following image demonstrates how the available space was distributed between the two columns:

![grid-fr-unit](assets/lesson-4/1200-grid-fr-part-4-css.png)

As you can see in the `grid-template-columns` declaration, the `1fr 1fr` value creates two equal-width tracks that grow and shrink depending on the available space. Because our grid container is a block-level element and doesn't have a defined width, the entire screen was set as the width. When we reduce the screen width to 500px, the columns remain equal in size as the `fr` unit evenly distributes the available space, as shown here:

![grid-fr-responsive](assets/lesson-4/1300-grid-mobile-part-5-css.png)

In the `grid-template-rows` declaration, we set the value to `1fr 2fr 1fr`, which caused the second row to be twice the height as the other rows. In cases when there is no "available" space, a `fr` unit will be determined by CSS Grid to be the height of the content in the row with the most height. Two `fr` units in this row example will be twice this height.

### Using the repeat() Notation

When dealing with a large grid that has many adjacent rows or columns with the same values, we can use the `repeat` notation to identify the values of the row and column grid declarations. 

The following examples explore two rules that render identically; the second example uses `repeat`. 

Here's the first example:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
```

The next example uses the `repeat()` notation:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
```
Here's how this renders: 

![grid-repeat()](assets/lesson-4/1400-grid-fr-example.png)

Notice in the `repeat()` notation parentheses, the number of columns or rows is followed by a comma and then the width of the column or row. We can also use different units of length (such as px, rem, or %) or use it with other values to note other track sizes. 

Here's an example:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 1fr repeat(3, 150px) ;
  grid-template-rows: 100px repeat(4, 5rem);
}
```

The above code is equivalent to the following rule:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: 1fr 150px 150px 150px;
  grid-template-rows: 100px 5rem 5rem 5rem 5rem;
}
```

Let's take a look at how this rule is rendered by the browser:

![Grid repeat() with Mixed Units](./assets/lesson-4/1500-grid-repeat()-css.png)

> **Pause**: Explain the large gap of space located at the bottom the picture.
>
> **Answer**: The explicit grid, as defined in our `.service-grid-container` rule, created four rows even though there is only enough content for two. 

Because CSS Grid is built to create complex responsive 2D layouts, it shouldn't be surprising to hear that there is a vast number of unique grid properties and property values that help achieve customization and efficiency. Here are a few of the most popular and useful ones to remember:

* **minmax()**: Offers a range of possible values with a minimum value and a maximum value. This can be set as a column or row size value designating the possible size range for the width or height of the grid track. An example is `minmax(100px, 1fr)`.

* **auto-fit**: Often used in combination with `minmax()`; allows CSS Grid to calculate the number of columns or rows to accommodate the grid items.

* **auto**: A property value that uses CSS Grid to calculate the size of the column or row.

> **Asset Needed**: Video [Demonstration of the auto-fit property value in action Jira FSFO-104](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-104)

Let's use these in our grid to see how they affect it:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) ;
  grid-template-rows: repeat(4, minmax(25px, auto));
}
```

Save and render these properties in the browser to see how changing the viewport size alters the number of grid items on each row. This type of auto-fit scenario would work well for a large number of photos needing to automatically fit in a large photo gallery.

> **Asset Needed:** [Learnosity Checkpoint - Multiple Choice Jira FSFO-131](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-131)

## Using Grid Lines

Grid lines can be defined as the horizontal or vertical dividing lines that make up the structure of the grid. Once we've defined our grid tracks in the `grid-template-columns` and `grid-template-rows` declarations, we'll use the resulting grid lines to place our grid items. 

Examine the following image and note the numerical system used to label each grid line:

![grid-lines](assets/lesson-4/1600-grid-lines-css.png)

Notice how the vertical lines start numerically at one and increase by one from left to right.
Conversely, the horizontal lines also start at one and increase by one from top to bottom. There's also an alternative number system. This vertical grid line label starts from the right at -1 and decreases by one going right to left. The converse is also true for horizontal grid lines starting at the bottom at -1 and decreasing by one going bottom to top. 

Does it seem odd that there are two number-labeling systems for grid lines? You'll soon understand why that is.

## Position the Grid Items 

Let's redefine the grid dimensions by adding a set width and center to the page. Let's also add a grid gap of 10px:

```css
.service-grid-container {
  max-width: 940px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 10px;
}
```

>**Important:** Please note that `grid-gap` is shorthand notation for the properties `grid-row-gap` and `grid-column-gap` and can be written together in one value or separately in two values as:

>```css
>.grid-container {
>  grid-gap: <grid-row-gap> <grid-column-gap>;
>}
>```
> Where `<grid-row-gap>` can take in a static or relative unit size to declare a gap between rows. Conversely `<grid-column-gap>` declares the column gap. In the CSS rule above, the single value will be assigned to both column and row gaps. This is similar to setting one value for the `padding` property, which sets this value for all four sides of the `padding` in our CSS box model.

In the CSS rule for our grid items, let's remove the height and width declarations to allow the background color to fill the grid cell. Let's add a little padding as well and keep our font color black:

```css
.service-grid-item {
  background-color: orange;
  border: solid;
  padding: 1em;
  color: black;
}
```

Now we can start placing our grid items into the grid by creating CSS class selectors that will uniquely identify each grid item and allow us to position each item individually. Until now, we've been using grid properties on the grid parent element or grid container to define the grid. In contrast, this step defines the grid properties on the grid children or grid items. 

Because we can customize each grid item individually, we must use a class selector to target each grid item's HTML element by its class attribute. This is similar to the flexbox lesson, when we assigned properties to the parent element in order to have consistent behavior in the children elements&mdash;whether that be alignment in relation to the parent or spacing in relation to sibling elements&mdash; or when we assigned properties to the flexbox child element to control it individually for responsive behavior.

Let's start with a simple example by assigning unique classes to each grid item . We'll label them as box1, box2, etc.

```html
<div class="service-grid-container">
  <div class="service-grid-item box1">One</div>
  <div class="service-grid-item box2">Two</div>
  <div class="service-grid-item box3">Three</div>
  <div class="service-grid-item box4">Four</div>
  <div class="service-grid-item box5">Five</div>
  <div class="service-grid-item box6">Six</div>
</div>
```

Next, we can create a CSS rule for the `box1` class selector and designate the size of this item by identifying the grid lines it starts and ends on:

```css
.box1 {
  grid-column-start: 1; 
  grid-column-end: 2; 
  grid-row-start: 1; 
  grid-row-end: 3; 
}
```

This should render the following in the browser:

![grid-position](./assets/lesson-4/1700-chrome-grid.png)

> **Important:** If you want to view the grid line overlay, as shown here: 

![grid-position](./assets/lesson-4/1700-grid-row-position.png)

> The Mozilla Firefox browser has a unique set of tools for CSS Grid. One that can be particularly helpful when positioning grid items is the Overlay Grid, which you can find in Firefox's Inspector window: 

![Firefox Grid Lines ](./assets/lesson-4/3750-firefox-grid-lines.png)

Notice how the grid item was able to span two rows by defining the row start and row end properties: 

- With the first two declarations, `grid-column-start: 1` and `grid-column-end: 2`, we define the position and width of the grid track of this grid item to start on the first vertical grid line at the start or at the grid line 1 position. 

- With the `end` declaration, we define the grid track to span one column because the column will end on the adjacent grid line 2. 

The result is that the width of the defined box1 will start from grid line 1 and end at grid line 2. 

The following two declarations define the position and height of the grid item: 

- `grid-row-start: 1` defines the box1 grid item to start at the top grid line 

- `grid-row-end: 3` defines the box1 grid item to span two rows with the boundary defined to end on grid line 3

You can see the result here:

![Box1 Position](./assets/lesson-4/1750-box1-position-grid.png)

CSS Grid automatically positioned the remaining grid children by filling each row before wrapping to the following row. This default property comes from `grid-auto-flow`, which was set to `row`. 

Let's temporarily change this property to `column` by adding the CSS declaration to `grid-auto-flow: column;` for the following effect:

![grid-column-position](./assets/lesson-4/1800-grid-column-position.png)

Notice how the remaining grid items now fill the grid by column. Let's remove the `grid-auto-flow: column;` declaration for now to reset the default back to the property value of `row` for the purposes of our lesson.

There's also a shortcut notation when writing our position declarations using grid lines. Our box1 was originally written as follows:

```css
.box1 {
  grid-column-start: 1; 
  grid-column-end: 2; 
  grid-row-start: 1; 
  grid-row-end: 3; 
}
```

Using the `grid-column` and `grid-row` properties allows the start and end values to be assigned in one declaration:

```css
.box1 {
  grid-column: 1/2; 
  grid-row: 1/3; 
}
```

The value of these properties can also be stated using the negative number designations:

```css
.box1 {
  grid-column: 1/-3; 
  grid-row: 1/-2; 
}
```

This is especially useful in the case where the grid is incredibly large because the end of the grid will be -1.

The values of the `grid-column` and `grid-row` properties can even be assigned by explicitly stating how many grid cells are spanned:

```css
.box1 {
  grid-column: 1/ span 1; 
  grid-row: 1/ span 2; 
}
```

Let's add a few more CSS rules for some more grid items so we can familiarize ourselves with how to position and size grid items:

 ```css
 .box2 {
  grid-column: 3/4; 
  grid-row: 1/-1; 
}
```

Save the file and render in the browser:

![Box 2 Position](./assets/lesson-4/1899-box2-position-grid-chrome.png)

As you can see, box2 has been removed from the normal grid flow and assigned a position in the third column with the declaration `grid-column: 3/4;`. Box2 spans three rows because we declared the box to span from the top grid line to the last grid line with the declaration `grid-row: 1/-1;`. 

Here's the grid with the grid line overlay:

![Box 2 with Grid Overlay](./assets/lesson-4/1900-box2-position-grid.png)

Now what happens if we position a box that overlaps?

```css
.box3 {
  grid-column: 2/ span 2; 
  grid-row: 3/ span 1; 
}
```

In this rule, we're declaring that box3 will span two columns and sit in the third row. Save the file and render in the browser:

![Box 3 Position](./assets/lesson-4/2000-box3-position-grid-chrome.png)

As you can see, box6 moved into the first column due to the `grid-auto-flow` property, and box3 now overlaps box2.

> **Deep Dive**: CSS Grid is a robust layout model with many properties that can be used for complex positioning. To learn more, please see the following resources:
> * [MDN web docs on grid area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
> * [MDN web docs on grid auto-column/row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)

## Use Alignment Properties to Position Grid Content

Now that we know how to set up a grid and position and size grid items, let's investigate how alignment properties can position their content.

> **Important:** The `float`, `display: inline-block`, `vertical-align` and `column-*` properties have no effect on a grid item. 

The following grid properties are used on the grid container element to align the grid items on a certain axis. 

> **Rewind:** The same properties were used by flexbox!

### The justify-items Property

Arranges grid items along the row axis. This value applies to all the grid items in the grid container.

Here's how this property is written and the values it accepts: 

```css
.grid-container {
  justify-items: start | end | center | stretch;
}
```

> **Hint:** In the declaration, the "|" (or pipe) is simply separating the four possible property values that `justify-items` accepts.

* The `start` value aligns items at the start edge of the grid cell:
![Justify-Items: start](./assets/lesson-4/2200-justify-items-start.png)

* The `end` value aligns items at the end edge of the grid cell:
![Justify-Items: end](./assets/lesson-4/2300-justify-items-end.png)

* The `center` value centers items of the grid cell:
![Justify-Items: center](./assets/lesson-4/2400-justify-items-center.png)

* The `stretch` value fills the width of the cell (default value):
![Justify-Items: stretch](./assets/lesson-4/2500-justify-items-stretch.png)

### The align-items Property

Places grid items along the column axis. This value applies to all the grid items in the grid container.

Here's how this property is written and the values it accepts: 
  
  ```css
.grid-container {
    align-items: start | end | center | stretch;
  }
```

* The `start` value aligns items at the top edge of the grid cell.
![Align-Items: start](./assets/lesson-4/2600-align-items-start.png)

* The `end` value aligns items at the bottom edge of the grid cell.
![Align-Items: end](./assets/lesson-4/2700-align-items-end.png)

* The `center` value centers items of the grid cell.
![Align-Items: center](./assets/lesson-4/2800-align-items-center.png)

* The `stretch` value fills the height of the cell (default value).
![Align-Items: stretch](./assets/lesson-4/2500-justify-items-stretch.png)

### The place-items Property

This is shorthand notation that combines two declarations with one property that is space-separated. If only one value is present, this value will be assigned to both properties.

Here's how this property is written and the values it accepts: 

```css
grid-container {
  place-items: <align-items>  <justify-items>
}
```

> **Deep Dive:** Alignment can also be customized on the grid-item level using similar property axis labels. Instead of `*-items`, we will use the `*-self` post-fix for the `align-self` and `justify-self` properties. To learn more, see the [MDN web docs about grid item alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).

Let's pause for an add, commit, and push to Git. And for a quick checkpoint.

> **Asset Needed:** [Learnosity - Grid alignment - Jira 138](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-138)


Since we are finished with our grid example and our mock-up doesn't contain any orange boxes with numbers, let's remove the CSS declarations in the example's rules in our style sheet so that they look like this:

```css
.service-grid-container {

}
.service-grid-item {

}
```

## Make the Grid Match the Mock-Up

Let's use our new CSS Grid skills to implement the service plan table layout! We'll start by planning the build process.

First we'll take another look at the mockup, then add the HTML. We'll add CSS Grid properties for the grid container and grid items. Then we'll style the section and section content to match the mock-up. 

> **Important:** Remember that this section should be located after the "Meet the Trainers" section and before "Reach Out." 

Here's the mock-up:

![Service Plan Mock-up](./assets/lesson-4/100-service-mock-up.png)

### Add the HTML

We'll use the `<section>` tags with the `service-plans` id and `services` class that we added in the beginning of this lesson to contain the service plan table. 

Let's replace the example `<div class="service-grid-container">` and corresponding nested `<div>`s and add an `h2` element the "Our Service Plans" heading as follows:

```html
 <section id="service-plans" class="services">

    <h2 class="section-title secondary-border">
      Our Service Plans
    </h2>

  </section>
```

Now we'll add two more `<div>`s. We'll add a  `<div>` wrapper under the heading that will be used later in the lesson to center the service plan table in the viewport. We'll also add the grid container by using a `<div>` with the class `service-grid-container`:

```html
  <div class="service-grid-wrapper">
    <div class="service-grid-container">
      
    </div> <!-- div service-grid-container -->
  </div> <!-- div service-grid-wrapper -->
```

This isn't a lot to look at in the browser just yet, but we've laid the groundwork for the grid. 

The next step will be to add the grid item elements. We'll do this by simply adding a direct child element,  corresponding content, and box label for each box. Let's also add the `service-grid-item` class to each of these `<div>` elements for our grid properties. Just as we would do with a table, we'll start with the headers and then proceed with the body of the table. 

Take your time and approach this step by step. 

> **Pause:** Is the order in which you place the HTML important?
>
> **Answer:** Using the `grid-row` and `grid-column` properties, we can place our grid item anywhere we like explicitly. If we're relying on CSS rid to place them implicitly for us, then the order of the HTML matters.

The HTML inside your grid container should now look something like this:

```html

<!-- Headers -->
  <div class="service-grid-item">
    Basic
  </div>
  <div class="service-grid-item">
    Premium
  </div>

<!-- Body -->
  <div class="service-grid-item">
    Support Offered Between 9-5
  </div>

  <div class="service-grid-item">
    24/7 Plan Support
  </div>

  <div class="service-grid-item">
    Bi-Weekly Trainer Calls
  </div>

  <div class="service-grid-item">
    Weekly Trainer Calls
  </div>

  <div class="service-grid-item">
    N/A
  </div>

  <div class="service-grid-item">
    Discounts At Select Running Stores
  </div>

  <div class="service-grid-item">
    Subscription to Run Buddy's Health Magazine!
  </div>

  <div class="service-grid-item">
    $10/mo
  </div>

  <div class="service-grid-item">
    $25/mo
  </div>

  <div class="service-grid-item">
    Cancel At Any Time!
  </div>
```

Now that we have our HTML in place, let's look at our work in the browser:

![Grid HTML](./assets/lesson-4/3500-grid-html.png)

The design team wouldn't be thrilled with this look, but we can use our new CSS Grid skills to convert this unreadable list into an attractive chart. Let's get started! 

### Build the Grid 

Let's proceed by defining the grid in the grid container. We'll set the background color and center the grid using flexbox:

```css
/* SERVICE STYLES BEGIN */
.services {
  background: #fce138; 
}

.service-grid-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}

```

![Service Plan Center](./assets/lesson-4/3600-service-plan-center.png)

Now let's add CSS Grid by declaring it in the grid container. 

> **Pause**: How many columns and rows will our service table require?
>
> **Answer**: There are three columns and six rows.

Let's add these columns and rows using the `grid-template-columns` and `grid-template-rows` properties and the `fr` value:

```css
.service-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
```

Let's save and render in the browser to view the state of our current grid:

![Grid Columns and Rows](./assets/lesson-4/3700-grid-rows-columns.png)

Now add a few simple styles to the grid container to make the size more manageable and the background color a little easier on the eyes. Also add a border color and font color, and increase the font size:

```css
.service-grid-container {
  background: lightyellow;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border: 2px solid #024e76;
  color: #024e76;
  font-size: 18px;
}
```

Now let's save and render our work to see the following:

![Grid with style](./assets/lesson-4/3800-grid-styles.png)

The grid is coming along nicely, but the grid items aren't in the correct order or format. Let's first try to fix the dimensions of the grid by changing the size of the columns and rows to reflect the mock-up.

Let's take another look at the mock-up:

![Grid Mock-up](./assets/lesson-4/100-service-mock-up.png)

With a grid overlay, we can see the relative dimensions of our grid columns and rows: 

![Grid Overlay](./assets/lesson-4/3801-grid-styles-overlay.png)

We can see that the first column should actually be closer to 1/4 of the size of the other columns. The bottom row is also double the height of the other rows. 

> **Pause**: How do we manipulate the size of the rows and columns in the grid?
>
> **Answer**: We can designate each column or row by declaring the size in the property value. 

```css
.service-grid-container {
  background: lightyellow;
  width: 80%;
  display: grid;
  /* repeat(iterator, size) */
  grid-template-columns: 1fr repeat(2, 4fr);
  grid-template-rows: repeat(5, 1fr) 2fr;
  border: 2px solid  #024e76;
  color:  #024e76;
  font-size: 1.2rem;
}
```

Here's the grid with the rows and columns in their correct proportions. The first column is 1/4 the size of the other two columns and the bottom row is twice the height of the other rows:

![Grid format](./assets/lesson-4/3900-grid-template-props.png)

Now that our basic formatting of the grid is done, its time to style our grid items.

### Style the Grid Items

Good work! We're almost finished. In this next step, we'll use the `.service-grid-item` class selector to give each grid item some styling, including some padding, a border, and center positioning using flexbox.

Add the following to the style sheet:

```css
.service-grid-item {
  padding: 15px 0;
  border: 2px solid  #024e76;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
```

Note that the `align-items` and `justify-content` are flexbox properties used to center the content in the grid item. This can be confusing because the grid properties look so similar. Keep in mind that the alignment properties for grid on the grid-item scope uses the `self` identifier, such as `align-self` or `justify-self`. Having the `display: flex;` declaration is also a key indicator that a flexbox property will be applied in this case. To center the text or content in the grid item, we must treat the grid item as a flexbox container and the content or text as the child element that will be centered.

Let's save and render this in the browser to see if we're getting a desired effect:

![Grid Item Style](./assets/lesson-4/4000-grid-item-style.png)

This looks very close to the mock-up except the positioning needs some work.

### Position the Grid Items

To position the grid items correctly, we'll use the grid lines available in the Firefox inspector window with the Overlay Grid option.

Instead of assigning a class to every grid item individually, we'll use a column placement method, identifying each column and allowing the `grid-auto-flow` property to fill in the remaining available grid cells with the content available. 

First, let's identify the three columns:

* Column one will contain the "Cancel At Any Time!" grid item.

* Column two will contain the Basic Service Plan grid items.

* Column three will contain the Premium Service Plan grid items.

Knowing this, let's use the mock-up and place our class attribute for cancel, basic, and premium with the grid items. For now, let's ignore the "Subscription to Run Buddy's Health Magazine" grid item&mdash;we'll come back to that later.

Your HTML should now look like this: 

```html
<!-- Headers -->
  <div class="service-grid-item basic">
    Basic
  </div>
  <div class="service-grid-item premium">
    Premium
  </div>
<!-- Body -->
  <div class="service-grid-item basic">
    Support Offered Between 9-5
  </div>

  <div class="service-grid-item premium">
    24/7 Plan Support
  </div>

  <div class="service-grid-item basic">
    Bi-Weekly Trainer Calls
  </div>

  <div class="service-grid-item premium">
    Weekly Trainer Calls
  </div>

  <div class="service-grid-item basic">
    N/A
  </div>

  <div class="service-grid-item premium">
    Discounts At Select Running Stores
  </div>

  <div class="service-grid-item">
    Subscription to Run Buddy's Health Magazine!
  </div>

  <div class="service-grid-item grid-price basic">
    $10/mo
  </div>

  <div class="service-grid-item grid-price premium">
    $25/mo
  </div>

  <div class="service-grid-item cancel">
    Cancel At Any Time!
  </div>
```

Now let's add CSS rules using these class selectors to designate where the grid items will go by declaring each column in the grid:

```css
/* specific match */
.service-grid-item.basic {
  grid-column: 2 / span 1;
}
```

Notice that this CSS selector has different syntax. 

> **Pause:** Can you explain how this selector is functioning as it seems to have two different classes?
>
> **Answer:** This class selector targets the HTML elements that have both classes. In this case, it's a great example of selecting a subset of a larger collection of elements.

In this first rule, we designated that the `basic` column will be located after the second grid line and span one grid cell. That makes it the second column in the grid, as you can see here:

![Column Position](./assets/lesson-4/4100-basic-column-grid-chrome.png)

With the grid overlay, the grid looks like this:

![Column Position with Overlay](./assets/lesson-4/4101-basic-column-grid-overlay.png)

Notice how the grid items with the class `basic` filled the designated column based on their order in the HTML. The premium column is also nearly done even though we didn't declare any specific rule.

> **Pause:** What is the grid property that allowed the premium column to fill automatically?
>
> **Answer:** The `grid-auto-flow` property filled empty space with grid items in accordance to their HTML order in the HTML file. By default, this property is set to a `row` value. 

Let's add a class to the grid item for the "Subscription to Run Buddy's Health Magazine" content so we can move its position:

```html
  <div class="service-grid-item both">
    Subscription to Run Buddy's Health Magazine!
  </div>
```

Create a rule for the `.both` class selector to span the grid item over the second and third columns according to the mock-up.

It should look like this:
```css
.service-grid-item.both {
  grid-column: 2 / span 2;
}
```

In this rule, we designated that the grid item with the `.both` class attribute will span from grid line 2 for two grid cells and end on grid line 4. 

Let's save and refresh the browser to if the results are satisfactory:

![Subscription Span](./assets/lesson-4/4200-subscription-span-grid.png)

Excellent work! Our service table is coming along great.

> **Pause:** How did the subscription grid item automatically position itself into the fifth row when only the column declaration was applied? 
>
> **Answer:** Before any grid position was designated to the subscription grid item, this item was removed from the grid flow and placed at the bottom. Once a position was assigned to this grid item, this item was returned to the natural grid flow and was placed by the `grid-auto-flow` property according to its order in the HTML.

In the final step of this section, we'll position the "Cancel At Any Time!" grid item to span all the rows in the first column. Let's proceed by using a grid item property similar to one we used for the "Subscription" grid item except to span multiple rows, not columns, this time.

Your code should look like this:

```css
.service-grid-item.cancel {
  grid-row: 1 / -1;
}
```

Note that the -1 property value was used to set the ending grid line. This is a great shortcut when we know that the grid item spans the entire grid.

So why did we not need to designate a column for this grid item? CSS Grid is calculating placement and autofills in the grid areas that aren't occupied. To be explicit, we could add the `grid-column` declaration to `1`, but that isn't necessary in this case because the only option for the subscription grid item isto span the length of the grid.

Great job so far! Now that our grid items are placed properly in a formatted grid according to the mock-up, the design team is very happy with the progress made so far. They just have a few recommendations to emphasize a few key fields in the table.

### Add the Final Touches

Let's take a peek at the mock-up and see what's left to be done:

![Service Plan Mock-up](./assets/lesson-4/100-service-mock-up.png)

The design team has requested a special font change to the first column in the grid to vertically align the text with the column. Let's use the `writing-mode` property with the value of `vertical-lr` to see if this is a good option: 

```css
.service-grid-item.cancel {
  writing-mode: vertical-lr;
  grid-column: 1;
  grid-row: 1 / -1;
}
```

This should have the following result in the browser:

![Cancel writing-mode](./assets/lesson-4/4255-vertical-text.png)

This looks promising. but it's not exactly what the design team wants. So let's keep working on it. We need to find a way to flip or rotate this text to face the correct direction. Fortunately for us, the `transform` property has a rotate value we can try. Let's add the following declaration into the `transform: rotate(180deg);` rule to render the following in the browser:

![Cancel Vertical Text](./assets/lesson-4/4250-grid-vert-font.png)

Now the "Cancel" grid item looks great!

Wait a minute. Why why didn't we just rotate it from the beginning? Let's see what the "Cancel" grid item would have looked like if we had just rotated it by -90 degrees and removed the `writing-mode` property:

![Rotate Cancel Item](./assets/lesson-4/4260-rotate-cancel.png)

So this actually rotated the entire element and not just the font. Let's put the `writing-mode` property back into our rule and set the `transform` property value back to `rotate(180deg);`.

> **Deep Dive:** To learn more, see the [MDN web docs on the writing-mode property](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) and the [MDN web docs on transformations](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).

Next let's use some CSS properties to increase the headers, cancellation message, and pricing by first assigning the class attributes to the corresponding elements in the HTML, and then creating the related CSS rules with a font size of 1.5rem and a bold font-weight:

Add the following to `index.html`:

```html
<!-- Headers -->
  <div class="service-grid-item grid-head">
    Basic
  </div>
  <div class="service-grid-item grid-head">
    Premium
  </div>
  ...
  <div class="service-grid-item grid-price basic">
      $10/mo
  </div>
  <div class="service-grid-item grid-price premium">
    $25/mo
  </div>
```

Add the following to `style.css`:

```css
.grid-head, .grid-price, .service-grid-item.cancel {
  font-size: 1.5rem;
  font-weight: bold;
}
```

This rule uses three different selectors to declare font styling to emphasize their priority in the table.

> **Asset Needed:** [Learnosity-Spanning and Positioning-Jira 136](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-136)

## Make the Service Plan Grid Mobile-Responsive 

Excellent work! The design team is thrilled with our progress. However, when they view the service plan on a mobile device, some of the layout feels a little compressed:

![Mobile Screen Service Plan](./assets/lesson-4/4300-compressed-service-plan-mobile.png)

To improve the look of the service plan grid on mobile devices, they've requested some changes, such as moving the "Cancel At Any Time" item and changing some font sizes. 

Here's a mock-up of the new mobile layout:

![Mobile Service Plan Mock-up](./assets/lesson-4/4400-mobile-service-plan-request.png)

With our knowledge of media queries and grid positioning, we should be able to make these changes pretty easily. Let's leverage the work that's already been done and use the media query rule for screens less than 768px. 

Here are the steps we'll follow:

1. Change the table to two columns.

1. Move the basic column to the first column.

1. Span the Subscription grid item across columns one and two.

1. Remove the vertical font for the "Cancel At Any Time" grid item.

1. Position the "Cancel At Any Time" grid item to be in the last row.

Let's add these rules to the existing media query for screens sizes under 768px.

Try to use some of the things you've learned in this lesson to make these rules yourself:

```css
@media screen and (max-width: 768px) {
​
  .service-grid-container {
    grid-template-columns: 1fr 1fr;
  }
​
  .service-grid-item.basic {
    grid-column: 1;
  }
​
  .service-grid-item.both {
    grid-column: 1 / -1;
  }
​
  .service-grid-item.cancel {
    transform: none;
    writing-mode: unset;
    grid-column: 1 / -1;
    grid-row: -1;
  }
}
```
Let's break down this media query, rule by rule, so we can understand each integral transformation.

Let's start with the parent element rule:

```css
.service-grid-container {
    grid-template-columns: 1fr 1fr;
  }
```

 With CSS Grid and media queries, we can adjust how many rows or columns our grid needs on the fly. By setting the value of `grid-template-columns` to `1fr 1fr`, we created two equal columns for this grid.

Next we set the "basic" plan to the first column by using the following rule:

```css
.service-grid-item.basic {
  grid-column: 1;
}
```

We set the basic column as the first column instead of the second. Because we moved all of the basic grid items to start at the first column, the premium grid items naturally flowed into the second column due to implicit grid.
​
Because we transformed our grid, we need the following rule to reposition the spanning row to start at column one:

```css
.service-grid-item.both {
  grid-column: 1 / -1;
}
```

The next rule not only turned off the font manipulation but also moved this grid item and transformed it into a row: 

```css
.service-grid-item.cancel {
  transform: none;
  writing-mode: unset;
  grid-column: 1 / -1;
  grid-row: -1;
}
```

This was necessary to maximize the horizontal screen space on a mobile device screen.

The `grid-column: 1 / -1;` declaration spanned both rows starting at the first column. The `grid-row: -1;` declaration positioned this grid item on the last row. In this rule, we also set the `transform` property to `none` and the `writing-mode` property to `unset` to negate the styles that vertically transform this font.

Congrats! The new feature is now complete. Let's follow our Git workflow and add, commit, and push our work to the remote feature branch:

```bash
git add .
git commit -m "added service table comparision"
git push origin feature/grid
```

Now let's check out into the `develop` branch, pull down any new changes, merge the new feature branch locally, then push up the updated `develop` branch into the remote repo: 

```bash
git checkout develop
git merge feature/grid
git push origin develop
```

Great job. Now the rest of the team can see, test, and verify the finished feature. 

## Reflection

Well done on making it through a challenging lesson! Insight into how to make a modern website layout will make you stand out among other candidates when applying for developer jobs. Employers are looking for developers who not only know the basics of CSS and HTML but also understand how to learn new technologies and advanced tools. 

Let's revisit some of the core concepts of CSS Grid that make it a revolutionary advancement in web design:

* We learned how to declare a grid and define its rows and columns to create customizable layouts. This is a game-changing concept that makes advanced layout design responsive to mobile devices.

* We learned how to check the adoption rate of front-end technologies on different browsers. This could be an important consideration when weighing options for advanced tools for a website.

* We learned the properties and values associated with the grid parent container and grid items which allow customization of the grid's dimensions, positioning, and alignment. These save developers time and allow them to innovate. 

* We learned how conducive CSS Grid is to changing screen sizes, especially when the shape of the table needs to be altered in a media query. This level of flexibility and customization is a testament to the importance that CSS will continue to hold in the future of web development and website design. 

As you advance through this boot camp, remember that you're building a foundational practice of understanding and learning that can be built upon for your entire career. Try to view each step, each lesson, and each module as an investment in mastering the learning process. 

In the next lesson, we'll learn some advanced CSS styling properties that will make the Run Buddy website more professional and easier to use. 

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
