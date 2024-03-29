# Lesson 2: Flexing Our Muscles

## Introduction

Development of Run Buddy version 2.0 is now in full swing! In Lesson 1, we took a peek at what the client wants to see in this version. Then we switched gears to establish a Git workflow so we can make updates without affecting the live website. 

Let's take a minute to remind ourselves what the current page looks like:

![Current Run Buddy page design](assets/lesson-2/101-old-layout.jpg)

In this lesson, we'll restyle the content to make better use of the page's horizontal space. This will also prepare the site for another important feature: mobile-responsiveness. 

To do this, we'll use a relatively new CSS technology called **flexbox**.

## Preview

Here's a mock-up of what we're aiming for in this module:

![New Run Buddy page design](assets/lesson-2/102-new-layout.jpg)

We'll start by reviewing our GitHub issue and creating a local Git feature branch where we can work. 

After that, we'll convert the site one section at a time to use flexbox. Flexbox makes webpages look better across multiple screen sizes by allowing content to automatically stack when the screen narrows. 

Along the way, we'll explore the advantages flexbox offers compared to other layout techniques such as `position` and `float`. We'll also reinforce the best practice of thinking about layouts as a series of containers or boxes that hold the content. 

As we learned in the previous lesson, the current `develop` branch is probably not the best place to develop a new feature. So let's review the GitHub issue, create a feature branch to work in, and start coding!

## Create a Feature Branch

The GitHub issue we're working on is called "Advanced layouts using Flexbox." It requires making changes to every section of the website, so it warrants creating a feature branch. Let's name it based on the feature we're implementing: `feature/flexbox`.

Follow the steps you learned in Lesson 2.1 for creating a new feature branch:

1. Use the `git branch` command to verify that you're in the `develop` branch. If not, use `git checkout develop` to switch into that branch.

1. Use the command `git checkout -b feature/flexbox` to create and switch to the new branch.

1. Run `git branch` again to see which branch is active. If it returns `feature/flexbox`, then it worked!  

If you need a refresher about how to create a feature branch, refer back to Lesson 2.1.

## Add Flexbox to the Header

Our first task is to add flexbox to the header so it can accommodate various screen sizes gracefully. Before flexbox, CSS layout properties such as `float` were used to do this. As mobile devices became more popular, the inadequacies of `float` became apparent: content would often would break, overlap, or overflow off the screen. But it was the only viable option, so developers used it.

Flexbox (or flexible box model) was first introduced in 2009 but wasn't fully supported by browsers until 2017&mdash;and was it ever welcomed with open arms by the developer community! Developers finally had a tool that let them achieve modern layouts on any screen size. 

This video demonstrates some of the features flexbox has to offer:

> **Asset Needed:** [NEED VIDEO: FSFO-84 - Flexbox introduction and demo layouts](https://trilogyed.atlassian.net/browse/FSFO-84?atlOrigin=eyJpIjoiM2FmYzU1NjQ5NWQ1NDA5Nzg3ZDYyZWFhODM3Y2ZmMmEiLCJwIjoiaiJ9)

The current Run Buddy site uses floats in the `<header>`. As you can see below, it doesn't resize very well: 

![Run Buddy header resizing with floats](assets/lesson-2/601-bad-resize.gif)

Here's how the header will resize after we add flexbox to it:

![Run Buddy header resizing with flexbox](assets/lesson-2/701-good-resize.gif)

Flexbox creates HTML parent/child (or container/container-item) relationships. The parent keeps track of how much space each child takes up and repositions all of the children accordingly. This allows developers to focus only on the child elements' content.

Flexbox is quickly becoming the industry standard, so it's a great skill to add to your developer tool belt! 

### The Magic of Flexbox

When a container is given a `display` value of `flex`, it can create a **one-dimensional layout**, meaning it controls the distribution of its content along either a horizontal x-axis (row) or vertical y-axis (column). 

By default, a flexbox is set to be a row, meaning it attempts to fit all of the child elements on one horizontal line until it hits the right edge of the parent. At that point, it has to decide whether to do one of the following:

- Make all of the child elements narrower to accommodate a new sibling on that horizontal line. This usually results in child elements looking "squished."

- Tell the flexbox parent that it's okay to overflow its content onto the next line. This is known as **wrapping**. This approach is commonly used in conjunction with flexbox containers to calculate smart layouts for various-sized screens. 

  This image shows how wrapping can work:

> **Asset Needed:** Image [NEED GRAPHIC: FSFO-26 Recreate this one from CSS Tricks:](https://trilogyed.atlassian.net/browse/FSFO-126?atlOrigin=eyJpIjoiZGM3NTVmZGQ4NzU0NGJiZDgxZDFhYTRmZjcwZjIzNTAiLCJwIjoiaiJ9)

![Using flex-wrap property to handle overflowing content](assets/lesson-2/202-flex-wrap.jpg)

Another thing flexbox does well is horizontally or vertically aligning child elements. For example, it can be used to vertically center HTML elements in a container, which used to be nearly impossible with CSS. Flexbox is also great at evenly spacing elements by calculating the free space available and distributing it among child elements.

> **Deep Dive:** For more details, check out the [MDN web docs on flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).

### Prepare the Header for Flexbox

Much of this lesson involves removing CSS properties and adding flexbox properties in their place. We'll start making the `<header>` element a flexbox by removing a few pieces from the CSS file:

- In `style.css`, remove the `display: inline-block` declaration from `header h1` so that it looks like this:

```css
header h1 {
  font-weight: bold;
  margin: 0;
  font-size: 36px;
  color: #fce138;
}
```

- Then remove the `float:right` declaration from `header nav`:

```css
header nav {
  margin: 7px 0;
}
```

Now apply flexbox by adding the following CSS property declaration to the `header` rule:

```css
display: flex;
```

That's all that needs to be added to get our elements back on the same horizontal line! The header should now look like this:

![Header with flexbox added, creating a row with 2 HTML elements](assets/lesson-2/1000-flex-header.jpg)

The `display: flex` declaration makes the `<header>` a row by default, so there's no need to explicitly declare it. And as you can see, flexbox evenly distributed the space of the parent element (`<header>`) among the children elements (the `<h1>` and `<nav>` links). What makes this more interesting is that both of those children are block-level elements by default, and adding flexbox overrides that default behavior. 

> **Pro Tip:** To change a flexbox from a row to a column layout, you can use the `flex-direction` property with a value of `column`. 

There are just a few more things to do to the header at this point. Did you notice that the navigation items seem to be skewed to the left, closer to the `<h1>`? We can adjust that by using a property called `justify-content`.

The `justify-content` property only applies to elements with a `display` property value of `flex` or `grid` (more on that later). It allows you to control spacing between child elements with the following values:

- **`flex-start`**: This left-justifies all of the elements in the container. This is the default.
 ![Flexbox with flex-start justification](assets/lesson-2/300-justify-flex-start.jpg)

- **`flex-end`**: This right-justifies all of the elements in the container.
![Flexbox with flex-end justification](assets/lesson-2/400-justify-flex-end.jpg)

- **`center`**: Positions all elements as close to the center of the container as possible.
![Flexbox with center justification](assets/lesson-2/500-justify-center.jpg)

- **`space-between`**: Distributes all empty space evenly between child elements so they are evenly spaced apart.
![Flexbox with space-between justification](assets/lesson-2/502-justify-space-between.jpg)

- **`space-around`**: This is like `space-between`, but it also adds space between the elements and the edges of the container, so the left-most and right-most elements are not flush against those edges.
![Flexbox with space-around justification](assets/lesson-2/501-justify-space-around.jpg)

> **Deep Dive:** To learn more, read the [MDN web docs on`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).

Which one of these is right for our layout? We currently have two child elements in the `<header>`: the `<h1>` and `<nav>` elements. We want them to be spaced apart as much as possible with the `<h1>` on the left and the `<nav>` on the right. 

This image can help visualize what we need:

![Header outlined with unused space between elements](assets/lesson-2/503-header-outlined.jpg)

Let's add the following declaration to the `header` CSS rule:

```css
justify-content: space-between;
```

This property declaration takes all of the unused space in the `<header>` and puts it between the two elements. It determines the unused space by looking at each child element and seeing how much the border-width, margin, padding, and content add up to. If these don't add up to 100% of the parent, then whatever is left over is considered the unused space.

> **Pause:** What is it called when we calculate an element's dimensions by adding the content, padding, border-width, and margin values?
>
> **Answer:** The CSS box model.

So our `<header>` content looks great, but what happens when the screen gets smaller? Take a minute and resize your browser window to find out.

As you probably noticed, the content becomes as small and tight as possible or bursts out the right side of the container. Instead, we'll tell the container that when its child elements can't fit on one line, let them break onto the next line.

Well do this by adding a `flex-wrap` property, which allows the flexbox container to let its children wrap onto the next line. By default, the value of `flex-wrap` is set to `none`, so we need to explicitly tell it to be `wrap` by adding the following to the `header` CSS rule:

```css
flex-wrap: wrap;
```

Now when we resize the browser window, the `<header>` will collapse onto a second line when it runs out of room. 

This video explains `flex-wrap` and some of its other uses:

> **Asset Needed:** [NEED VIDEO: FSFO-86 - flex-wrap demo](https://trilogyed.atlassian.net/browse/FSFO-86?atlOrigin=eyJpIjoiNzBhZjljMmNiZjMzNGQyNGI2Mzk3ZmNjZDI0NGIxYTAiLCJwIjoiaiJ9)

Now is a good time to to add, commit, and push your work to the `feature/flexbox` branch. 

## Flex the Navigation

Next, we'll add flexbox to the navigation elements. When you resize the browser window, the `<nav>` element breaks onto the next line just fine but all the links in the `<nav>` break in weird places and start stacking. So let's make the `<nav>` element's `<ul>` element more responsive by converting it from an inline list to flexbox.

> **Important:** You can create as many flexbox elements on a page as you need to. Just be very deliberate about it&mdash;it is not a cure-all for all layouts.

We need to remove some CSS before applying the flexbox styles:

- Completely remove the CSS rule for `header nav ul li`.

- Add a new CSS rule for `header nav ul` that looks like this:

```css
header nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
```

We've already seen these first three property declarations, but what about those last two? The property `align-items` works like `justify-content` but on the opposite axis. To "justify" information means to position it on the main axis, but to "align" it means to position it along the cross axis. In this case, we're vertically centering our content in the `<nav>` element. This might sound like a simple task, but it was only when this property was invented that it became possible to achieve this type of vertical alignment without using JavaScript. 

> **Important**: When using a flexbox as a row, the horizontal (x) axis is known as the **main axis**. This is the direction we can control when laying out the flexbox children. The vertical (y) axis is the **cross axis**. If we were to use the `flex-direction` property and set the value to be `column` instead of `row` (the default value), those axes would be switched and the values used for `justify-content` and `align-items` would be applied differently. This is because `justify` always follows along the main axis and `align` always follows along the cross axis.

The other property we added, `list-style`, sets how a list item is styled (bullet points, dashes, etc.) and positioned (indented or outdented). We gave it a value of `none` to hide the bullet points. We did this because we're changing some of the styles for the `<header>`, which would result in the bullet points becoming visible. 

> **Deep Dive:** To learn more, read the [MDN web docs on `align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

> **Asset Needed:** Video [FSFO-87 - Demo of align-items](https://trilogyed.atlassian.net/browse/FSFO-87?atlOrigin=eyJpIjoiYTg5MTNjZmE3MDQ1NDM1OGE5ZjE2YTBlMjRkMzc3MTciLCJwIjoiaiJ9)

Let's finish updating the navigation by making a few adjustments to the `<nav>` element's link styles so it looks like this:

```css
header nav a {
  margin: 0 30px;
  font-weight: lighter;
  font-size: 1.55vw;
}
```

We're using the same properties as before but with a different value for `font-size`. The value we provided is using a newer unit of measurement called `vw`, which is short for **viewport width**. 

> **Rewind:** Remember that the **viewport** is the actual browser window size.

By setting the value to `1.55vw`, we're telling the browser that the font's size should be roughly 1.55 percent of the window's overall width. This means that if the browser grows or shrinks, that size will change relative to the new overall width. This unit of measurement is one of a few new methods we can use for flexible length values in CSS, but it can be tricky to nail down compared to absolute units of measurement like pixels.

We now have a `<nav>` element where the links grow and shrink with the screen size, but as you can see in the following image, they get a little too small when the screen is smaller. We'll circle back to fix this in a later lesson.

![Responsive navigation text shrinking too small](assets/lesson-2/800-header-small.jpg)

You're done with the entire `<header>` for now, so it's a good time to save your work in the `feature/flexbox` branch using Git. 

Before we move on to the footer, if you'd liked to reinforce what you just learned, check out a game called [Flexbox Froggy](https://flexboxfroggy.com/).

> **Deep Dive:** Absolute vs. Relative CSS Values
>
> A problem emerged when screens went from being a predictable standard computer-screen size to being used on devices as small as a watch and as large as a sport stadium's jumbotron. The screen sizes varied, but a pixel is a pixel no matter what, and it would create a lot of broken designs and layouts. 
>
> A series of new units of measurement made it into CSS to combat these issues. These units were not based on a set dimension but on the dimensions of the screens displaying the information instead. These units are known as **relative** because they are based on the "something else's" size.
>
> Here is a [list of all units of measurement in CSS on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/length) and a deeper [explanation of pixels](https://www.pixelmator.com/tutorials/resources/pixels-explained/).

## Flex the Footer

Let's take our newfound knowledge of flexbox and apply it the `<footer>`. 

But first, try to answer the following questions:

- How is the `<footer>` element similar to the `<header>`?

- If we were to consider the `<footer>` a parent element, how many children would it have?

The `<header>` might have more going on overall because it holds the navigation items, but it's roughly the same as the `<footer>` when it comes to layout. The `<header>` contains two direct children (the `<h1>` and `<nav>` elements) and the `<footer>` contains two as well (the `<h2>` and `<div>` elements).

Keep in mind that we can think of all website layouts as a series of boxes or containers, as shown here:

![Footer elements outlined with boxes](assets/lesson-2/1100-flex-footer.jpg)

Let's "flex" the `<footer>` by copying what we did to the `<header>`:

1. Remove the `display: inline` declaration from the footer's `<h2>` element's CSS rule.

1. Remove the `float: right` declaration from the footer's `<div>` element's CSS rule.

1. Add a `display` property with a value of `flex` to the `<footer>` element's CSS rule.

1. Add `justify-content` and `flex-wrap` declarations to the `<footer>` that look like this:

```css
justify-content: space-between;

flex-wrap: wrap;
```

When you save the page and refresh, try adjusting the screen to be smaller. Does it look like this?

![Finished footer on a small screen with content stacked on top of one another](assets/lesson-2/1200-flex-footer-finished.jpg)

If it doesn't match the above mock-up, remember that you can always use Chrome's DevTools to debug and inspect your CSS! 

The following video shows how to use DevTools to cross-reference your code with the code introduced in the instructions above:

> **Asset Needed:** [FSFO-88 - Video  of using DevTools to debug footer](https://trilogyed.atlassian.net/browse/FSFO-88?atlOrigin=eyJpIjoiMGYxOTVlZTZhMGYxNGRlYjgwMzIyODhmMTc2MWRmMmUiLCJwIjoiaiJ9)

Now that we know the flexbox basics, let's move on to the `hero` section.

## Flex the Hero

The key to understanding how to use flexbox to build advanced layouts is to always think about them as a series of boxes. 

Take a look at the mock-up for the hero section:

![Run Buddy hero section with two columns](assets/lesson-2/1300-hero-finished.jpg)

Thinking about it in terms of a flexbox layout, we have a "row" with two "columns" of content. Ignoring the content itself, we need a flexbox parent with two boxes&mdash;or children&mdash;that can be imagined like this:

![Run Buddy hero section outlined](assets/lesson-2/1400-hero-outlined.jpg)

Remember that a super important skill as a web developer is to be able to look at a mock-up and translate the layout into containers. Don't ever scrimp on this step!

In the outlined mock-up above, you don't need to worry about what's happening inside the boxes; you just need to worry about the boxes themselves. Think of it as creating a game plan for what you want to do before you do it so you can stay on track.

> **Urkel Says:** The practice of sketching an outline of a page's layout is called **wireframing** and is used throughout all of web development.

Just like the `<header>` and `<footer>`, we'll start by removing some current styles in the hero section:

1. In the `.hero` CSS rule, remove the `position` and `height` declarations.

1. In the `.hero-form` rule, remove `width`, `position`, `bottom`, and `right` declarations.

Next, in the `.hero` CSS rule, add the flexbox properties with these declarations:

- `display: flex;`

- `justify-content: center;`

- `flex-wrap: wrap;`

We set `justify-content` to `center` because want these two boxes as close to the middle of the screen as possible.

We now have to deal with the fact that the call to action (CTA) that we added in Lesson 2.1 runs the full width of the hero flexbox, as shown here:

![Hero section with full width and un-styled call to action](assets/lesson-2/1401-hero-broken.jpg)

Let's add some styles to our CTA:

1. Create a CSS rule for the element with a class of `hero-cta`:

```css
.hero-cta {
  width: 35%;
  text-align: right;
  margin: 3.5%;
  color: #fff;
  font-size: 18px;
  line-height: 1.3;
}
```

2. Create a CSS rule for the `<h2>` element inside `hero-cta`:

```css
.hero-cta h2 {
  font-style: italic;
  font-size: 55px;
  color: #fce138;
}
```

3.  Adjust the `.hero-form` CSS rule to have these two declarations:

    - `width: 40%;`

    - `margin: 3.5%;`

We used percentage values for the margins and widths this time around to show how it can work in the overall flow of this section. 

> **Pro Tip:** Choosing a unit of measurement to use in CSS can be a daunting task. Over time, these decisions will become much easier to make, but only if you practice!

As always, don't forget to add, commit, and push your work!

## Center Section Titles Using Flexbox

Flexboxes don't need to contain multiple elements to be considered useful. In this step, we're going to learn how to use flexbox to create a one-column layout, meaning it will only have one child. This isn't necessary, but adjusting these to be flexboxes will enable us to handle `justify` and `align` properties more easily across multiple screen sizes. 

We'll start by editing the section titles in `index.html` file. We'll wrap each `<h2>` element in a `<div>` that we'll turn into a flexbox. 

To do this, find every `<h2>` element with a class of `section-title` and make it look like this:

```html
<!-- Wrap every h2 with a class of "section-title" in this div! -->
<div class="flex-row">
  <h2 class="section-title primary-border">
    What We Do
  </h2>
</div>
```

> **Hint:** Use this structure, but don't forget to keep the existing content for each step!

Next wrap the `<p>` element in the "What We Do" `section` element so it looks like this:

```html
<div class="flex-row">
  <p>
    butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel meggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft
  </p>
</div>
```

We added a class of `flex-row` to each wrapping `<div>` element. We chose the class name `flex-row` because it represents a CSS rule that sets up a flexbox row. If we were to make a flexbox column, we could say `flex-column` instead. Remember that naming CSS classes can be as specific or generic as you want, but think about the bigger picture and how they might be reused throughout your page designs&mdash;just like you did with the `section-title` and `primary-border` classes.

Now that the HTML is in place, we can turn our attention to the CSS. Just like we did earlier, we'll start by removing styles:

1. From the `.section-title` CSS rule, remove the declarations for `display`, `padding`, and `margin-bottom`.

1. Remove the entire CSS rule for `.intro`.

1. From the `.steps` CSS rule, remove the `text-align` declaration.

1. From the `.trainers` CSS rule, remove the `text-align` declaration.

1. From the `.contact` CSS rule, remove the `text-align` declaration.

Now let's add a style rule for anything with a class of `flex-row`. At the bottom of `style.css`, where we have the utility classes for `text-left` and `text-right`, create a CSS rule that looks like this:

```css
.flex-row {
  display: flex;
}
```

> **Pause:** If we're creating a flexbox row, why didn't we need to use the `flex-direction: row;` declaration?
>
> **Answer:** The default `flex-direction` value for a flexbox is `row`, so we do not need to explicitly declare it.  

We just created a CSS rule that can be applied anytime we need a flexbox row container. It is often more efficient to create classes that can be used universally throughout a project rather than applying the same CSS property declaration to multiple items.

Now that the flex row has been created, add the following declarations to the `.section-title` CSS rule:

- `padding-bottom: 20px;`

- `text-align: center;`

- `margin: 0 auto 35px auto;`

- `width: 50%;`

> **Pause:** How much margin does each side get if the declaration reads `margin: 0 auto 35px auto`?
>
> **Answer:** top: 0, right: auto, bottom: 35px, and left: auto

Lastly, we need to center the text in the "What We Do" paragraph, so we'll finish by adding a `text-align: center` to the `.intro p` CSS rule. Go ahead and do that now. 

Even though we can't see any immediate tangible payoff from the work we did in this section, these changes made our code more flexible and prepared it to become mobile-friendly. The next part of the lesson will involve a fairly large restructuring of the "What You Do" section of the site. As always, now is a good time to make sure your code is saved using Git.

## Nesting and Flexing

Part of designing and building a webpage is understanding how to make good use of the horizontal space so the page does not run too long vertically. The idea behind this is that some users might be too impatient to scroll down to get to all the information. Some designers try to over-correct this issue by cramming as much up top as possible, but that can make the page top-heavy and confusing to read.

We'll try to strike a nice balance by reworking the "What You Do" steps. Currently, they look good, but they don't efficiently use the space to the right and left of them:

![Current step layout with empty space left and right](assets/lesson-2/1500-step-old.jpg)

So let's make it so that each step is still on its own row but has left-to-right layout, like this:

![New step layout that runs horizontally](assets/lesson-2/1600-step-new.jpg)

Each step will take up less vertical space and have a more interesting layout while still keeping the content together in a meaningful way.

Before we begin coding, let's consider how many containers we need. 

> **Hint:** When in doubt, grab a piece of paper and draw the boxes that will contain the content. You don't have to be an artist&mdash;a very simple sketch of the layout makes it much easier to translate to CSS!

Looking at the mock-up, we can see that we can make the entire step a flexbox with two children&mdash;the step's number on the left and information on the right. Then we'll make the step information's `<div>` its own flexbox with two children (for the icon and the text):

![New step layout outlined with boxes](assets/lesson-2/1700-step-outlines.jpg)



Like previous sections, we'll start by restructuring the HTML a bit and removing some CSS styles.

In `index.html`, go through each `<div>` element with a class of `step` and change it to this:

```html
<div class="step">
  <h3>Step 1.</h3>
  <div class="step-info">
    <div class="step-img">
      <img src="./assets/images/step-1.svg" alt="" />
    </div>
    <div class="step-text">
      <h4>Fill Out The Form Above</h4>
      <p>You're already here, so why not?</p>
    </div>
  </div>
</div>
```

> **Hint**: Use this structure, but don't forget to keep the existing content in each step!

We created containers for each piece of content in a step so now it will be easier to move the content around by adding style rules to the containers instead of the content itself.

> **Pro Tip:** Some HTML elements, like the `<img>` element, can be unreliable when it comes to sizing them for creating layouts. A better practice is to wrap the `<img>` tag in a `<div>` or some other container element and set the image's `width` property to be 100 percent of its parent container's size.

Let's move on to the next part of our code cleanup and remove any existing CSS styles that might conflict with our new layout:

1. Remove the entire CSS rule for `.steps div`, `.steps img`, and `.steps span`.

1. Remove the `margin-top` declaration from `.steps h3` and rename the selector to `.step h3` to tighten the relationship of the selector and make it a bit quicker for the browser to set the rule.

> **Important:** The browser reads CSS selectors from right to left (or innermost element to outermost element). Given a selector of `header nav a`, we can think of it as the browser saying to itself "Find every `<a>` element that's inside a `<nav>` element, but that `<nav>` element has to be in a `<header>` element." This means that the browser has to do a few pass-throughs and work its way up the HTML structure to ensure the CSS styles are only being applied to those distinct `a` elements.
>
> While the selector `header nav a` is fine, having a whole page of that may prove to be not as performant as the page gets larger. A way to improve this is to provide a class to the elements you want to style and select just that class. But that could prove tedious and end up creating unnecessary amounts of extra HTML by adding a class attribute to every element.
>
> Situations like this are common. There will likely be more than one way to solve every problem you come across and it will be up to you to decide which route is best. In this case, it's a choice between making the code slightly more performant versus slightly easier to read. The answer usually lies somewhere in the middle with something like `.nav-class a`, which is very easy to read and understand but is also specific enough for the browser to read efficiently.

Now that the HTML is ready and the CSS has been cleaned up, we can start adding our flexbox styles to each step. Let's start with the step as a whole by creating a CSS rule for anything with a class of `.step`:

```css
.step {
  margin: 50px auto;
  padding-bottom: 50px;
  width: 80%;
  border-bottom: 1px solid #39a6b2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
```

We've seen and used all of these properties a fair amount at this point, but this will be the first time we see the `align-items` property make a difference. If we didn't tell the two children to be center-aligned, the finished product would look like this:

![step layout that is top aligned](assets/lesson-2/1800-step-noalign.jpg)

By centering them, they look like this:

![Step layout with vertically centered alignment](assets/lesson-2/1801-step-align.jpg)

We aren't quite there yet for the `.step` flexbox, as our current layout doesn't match the mock-up. Right now both children of the `.step` flexbox (`<h3>` and `<div class="step-info">`) share a horizontal line, but their widths vary based on the length of the content inside them. As we can see in this image, the content for Step 1 is less than Step 2, so the box holding that content is narrower:

![Step layout without flex property in place](assets/lesson-2/1802-steps-noflex.jpg)

Because we can't rely on the content being uniform enough to provide a consistent layout, we need to tell the containers they're in to have some rules for how big they can be.

### Use the Flex Property for Widths

In previous sections, we used the `width` property to give flexbox child elements dimensions and rules to follow. This would work here, but instead we'll use the `flex` property to help the steps scale with the page:.

Add the following to `.step h3` and `.step-info`:

- To `.step h3`, add `flex: 1 30%;`

- To `.step-info`, add `flex: 2 70%;`

The `flex` property can be challenging to understand. It's used when we need to apply more specific instructions to how flexbox children should be displayed on the page in relation to sibling elements. It accepts up to three values in its declaration because it rolls up the following three `flex` properties into one:

- **`flex-grow`**: A numeric value that's used to determine how much of the flexbox's unused space can be spread out to its children. The number provided is used as a ratio compared to the other child's `flex-grow` value. The higher the number, the more unused space that child will be given. To learn more, see the [MDN web docs on the `flex-grow` property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).

- **`flex-shrink`**: This is used to determine how to size the flexbox's children when the flexbox container shrinks. This property is cool, but it isn't used as much as `flex-grow`. To learn more, read the [MDN web docs on the `flex-shrink` property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).

- **`flex-basis`**: This works similar to setting a `width` value for a child element, but it is used more as a baseline value that at the very least will let the child be that size no matter what and grow or shrink accordingly. To learn more, see the [MDN web docs on the `flex-basis` property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).

> **Asset Needed:** Video [FSFO-89 - Demonstration of flex property](https://trilogyed.atlassian.net/browse/FSFO-89?atlOrigin=eyJpIjoiYzBhOTI0OWE4YzZmNGQxYmI2YzJhYzdmOWI0NjlmY2UiLCJwIjoiaiJ9)

There's no benefit to using `flex` instead of listing these properties separately except that it saves a little space in the style sheet. 

The `flex` property can read values in a few different ways, based on the type of value entered:

```css
flex: <flex-grow value> <flex-shrink value> <flex-basis value>;

flex: <flex-grow value> <flex-basis value>;

flex: <flex-grow value> <flex-shrink value>;
```

> **Deep Dive:** To learn more, see the [MDN web docs on the flex property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

The value we provided to our step's flexbox children uses the `<flex-grow value> <flex-basis value>` syntax, meaning that:

- `.step h3` will be at least 30% wide and will receive any extra space in the container.

- `.step-info` will be at least 70% wide, but will receive any extra space in the container at a 2-to-1 ratio, meaning it will receive 2 more units of unused space than a sibling with a `flex-grow` value of 1.

Now we should have a step layout that looks like this image:

![Step without nested flexbox](assets/lesson-2/1900-step-no-inner.jpg)

We're almost there. All we need to do now is take what we just learned and apply it to `.step-info`. 

Start by adding these declarations to the `.step-info` rule:

- `display: flex;`

- `flex-wrap: wrap;`

- `align-items: center;`

Where did our icon go?! It's been totally removed from the screen for some reason. Think about how a flexbox container works if its children do not have any set `width` or `flex-basis` values. It tries to create space for both of them as evenly as possible based on the content of each child element, but what happens when one of the child element's content doesn't have a set dimension? 

Take a look at the following image to see what this area looks like now:

![Step with icon missing](assets/lesson-2/1901-step-noicon.jpg)

As you can see, the `<img>` icon has no CSS rules for a width value. So when the flexbox parent (`<div class="step-info">`) attempts to calculate how much space each one of its children (`<div class="step-img">` and `<div class="step-text">`) needs, it will see that one of them has text content and the other has an image with no width explicitly set. Because of this, the flexbox parent cannot infer how big that image should be and ends up ignoring it, giving all of the space to the child element that has content.

To fix this, we need to give both children some type of value to give them their own space. Let's do that by creating a new CSS rule for `.step-img`, like this:

```css
.step-img {
  flex: 1 12%;
  margin-right: 20px;
}
```

We're getting close, but it's creating some weird movement where steps with less text have a bigger image. This is because there's only one child with the `flex` property so it's ignoring the needs of the other child. 

Let's fix that by creating another CSS rule for `.step-text` that looks like this:

```css
.step-text {
  flex: 12;
}
```

Now both child elements have a `flex-grow` property of 1 and 12, respectively. This means that `.step-text` will be allotted 12 times more unused space than `.step-img`, but `.step-img` at the very least _must_ be 12 percent of the width of `.step-info`.

Why were these values chosen? A 12-to-1 seems like a wide gap to give these two flexbox children. As we've seen before, these values can be settled on in a number of different ways, but it usually involves some form of trial and error using Chrome's DevTools until the desired layout is achieved. 

This video demonstrates how you can do just that:

> **Asset Needed:** [VIDEO - FSFO-121](https://trilogyed.atlassian.net/browse/FSFO-121?atlOrigin=eyJpIjoiMTRhNTNkNzlkMWRiNDBhOTkxM2M2NzJkODM0YzkwOWQiLCJwIjoiaiJ9)

Notice how we don't even need to worry about setting a `flex-basis` value for `.step-text`. When that value is omitted, the browser gives it a value of `auto`, which allows it to be whatever width is left over.

One last thing we need to do is tell the `<img>` element to limit its width to be whatever its container is. This isn't a problem with most browsers, but Microsoft Edge can be a little buggy with it, so it's always worth putting in a little extra to have a uniform design across browsers. Create this CSS rule for it:

```css
.step-img img {
  max-width: 100%;
}
```

Again, we just fixed a problem that probably won't occur on any of our machines if we're using Google Chrome, but it's a good practice to stay ahead of any browser quirks. It's part of our job to prevent users from encountering issues just because they're on a different browser than we are.

The layout for each step should be in pretty good shape now, so let's finish up with applying styles to the step's text content. 

We can start by updating the `.step p` CSS rule:

- Change its selector to say `.step-text p` instead of `.step p`

- Change its `font-size` to be 18px instead of 23px

Lastly, we'll create a new CSS style rule for the `h4` element:

```css
.step-text h4 {
  font-size: 26px;
  line-height: 1.5;
  color: #024e76;
}
```

> **Pro Tip:** If you haven't started bookmarking resources on web development, now is a good time to start. Most developers, beginners and veterans alike, keep resources handy at all times.
>
> For a great flexbox resource, check out [the CSS Tricks guide on flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

The rest of the page's conversion to flexbox won't be as involved as this section was, but it's cool to know that we can use this one tool to handle both simple and complex layouts.

Don't forget to add, commit, and push your work!

## Trainer Trading Cards

The design team at Run Buddy must really love the idea of tightening up sections to take up less vertical space because we're about to give our trainers a treatment similar to the "What We Do" section we just finished up. This one requires less granular control, so it should go more quickly. 

Our current section for the trainers has them stacked on top of one another, but we want them to fit in one row: 

![New trainers section finished](assets/lesson-2/200-trainers.jpg)

To do this, we'll change each trainer's `<article>` element from a side-by-side landscape layout to a top-to-bottom portrait layout. 

> **Urkel Says:** When related HTML content is laid out in a narrow, vertical column, it's often referred to as a **card**.

Let's take the mock-up and wireframe it. It should look something like this:

![New trainers section outlined](assets/lesson-2/2000-trainer-outlines.jpg)

We'll start on the easier side this time and update how the text content looks first:

- Find the CSS rule for `.trainer-bio h3`

  - Remove the declaration for `margin-bottom`

  - Change the `font-size` value to 28px

- Find the CSS rule for `.trainer-bio h4`

  - Change the `font-size` value to 22px

  - Change the `margin-bottom` value to 15px

- Find the CSS rule for `.trainer-bio p` and move its `line-height` declaration to the `.trainer-bio` rule

The next thing we want to do is go into the `index.html` file and move the second trainer's `<img>` element above the `<div>` with a class of `trainer-bio` so it matches the other two trainers. In Run Buddy version 1.0, our three trainers alternated when it came to their image placement. For Run Buddy version 2.0, they will all have the same "image then text" layout.

When that's done, look through all three trainer `<article>` elements and remove any classes that mention `text-left`, `text-right`, `img-left`, or `img-right` because we don't need those anymore. 

They should now all have the following HTML structure (with varying content, of course):

```html
<article class="trainer">
  <img src="./assets/images/trainer-1.jpg" alt="Arron Stephens in his workout clothes, ready to pump iron" />
  <div class="trainer-bio">
    <h3 class="trainer-name">Arron Stephens</h3>
    <h4 class="trainer-role">Speed / Strength</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
      itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
    </p>
  </div>
</article>
```

Another thing we need to do is create a flexbox container around these three `<article>` elements, so wrap them with a `<div>` element so it looks something like this:

```html
<div>
  <!-- This is for show; keep the article tags you have -->
  <article>Trainer 1 Info</article>
  <article>Trainer 2 Info</article>
  <article>Trainer 3 Info</article>  
</div>
```

Lastly, we need to give this element a class, so remove the `class="trainers"` from the parent `<section>` element and move it to the `<div>` that was just created. We can do this because the `<section>` element doesn't need to be selected by a class anymore using CSS.

The only thing left to be done is to turn these trainer cards into a row, so turn your attention back to `style.css` and give the `.trainers` CSS rule the flexbox treatment:

```css
.trainers {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
```

The result should look like this image: 

![Trainers layout broken](assets/lesson-2/2001-trainers-broken.jpg)

It doesn't look great just yet, as is shown in the above image, but that's because we have some styles in our newly created flexbox children (the `<article>` elements) that we need to adjust or remove, starting with `.trainer`:

- Find the CSS rule for `.trainer`:

  - Remove `width` and `overflow`

  - Change `margin` to just 20px

  - Add `flex: 1`

> **Rewind**: If all flexbox children have a value of `flex: 1`, that means they will share any extra space evenly.

- Find the CSS rule for `.trainer img`:

  - Remove `float`

  - Change `width` to 100%

- Find the CSS rule for `.trainer-bio`:

  - Remove `float` and `width`

  - Change `padding` to 25px

This is a very common layout technique in modern web design. It's considered a "three-column card layout", meaning we created one horizontal row that can hold on to three separate pieces of information.

A huge takeaway from this lesson is the importance of wireframing. You can always search for an answer or syntax hint on the internet, but you still have to know the right question to ask to get that result.

There's only one more section left to fix. Before we do that let's add, commit, and push our code to make sure it's backed up! 

## Make a Three-Column Reach Out

Only one more flexbox to go, and this one is a breeze! If you can recall, we left the Reach Out section in disarray in the last lesson when we added a contact form and didn't style it: 

![Broken Reach Out area with an "X" through it](assets/lesson-2/2100-bad-contact.jpg)

This is a common approach to take when you know you'll be reworking the CSS anyway&mdash;why bother doing the work twice? 

It's time to fix this. We'll change the layout to this:

![Fixed Reach Out area](assets/lesson-2/2200-good-contact.jpg)

One last time, think about this layout and create a visual wireframe of what it would look like as a flexbox parent/children relationship.

The first obvious change we need to make is the actual order in which these elements appear in the HTML document, so return to `index.html` and adjust the three elements below the section title's parent `<div>` to be in this order:

1. The `<div>` with the Run Buddy address and contact information

2. The `<div>` with a class of `contact-form`

3. The `<iframe>` for the Google Map embed

Then wrap the elements with a `<div>` that has a class of `contact-info` so you can use that to create a flexbox container. 

The resulting HTML should look like this:

```html
<div class="contact-info">
  <div>
    <h3>Run Buddy</h3>
    <p>
      Any questions or concerns before signing up?
      <br />
      Let us know and we'll be happy to talk to you!
    </p>

    <address>
      55 Main Street <br />
      Some Town, Ca <br />
      12345 <br />
      P: <a href="tel:555.786.2839">555.RUN.BUDZ (555.786.2839)</a><br />
      E: <a href="mailto://info@runbuddy.io">info@runbuddy.io</a>
    </address>

  </div>

  <div class="contact-form">
    <h3>Contact Us</h3>
    <form>
      <label for="contact-name">Your Name</label>
      <input type="text" id="contact-name" placeholder="Your Name" />

      <label for="contact-message">Message</label>
      <textarea id="contact-message" placeholder="Message"></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-74.0652613!3d40.2407219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
    frameborder="0" style="border:0" allowfullscreen></iframe>

</div>
```

Moving into `style.css`, let's start adjusting styles by removing some current ones that will get in our way:

- Find the CSS rule for `.contact-info iframe`:

  - Remove the `width`, but leave the `min-height`

- Find the CSS rule for `.contact-info div`:

  - Remove every property except `color`

Now we can add our flexbox. Create a CSS rule for `.contact-info` that has these properties:

- `display: flex;`

- `justify-content: space-between;`

- `flex-wrap: wrap;`

The last thing we need to do for the flexbox layout is to have all three child elements share the space as equally as possible. If you recall, we did that just a little while ago in the trainer section by giving them all a `flex: 1` style declaration. But these three elements don't share a common element name or even class, so how do we select all three of them at once to make this easier?

We could go back to the HTML and give them all a class, or we could skip that and select all of them with a familiar selector used in a different context:

```css
.contact-info > * {
  flex: 1;
  margin: 15px;
}
```

Do you remember what the `*` selector did? Also, what's with this new `>` syntax?

> **Hint:** We're still using `*` at the very top of the `style.css` file.

Here, the `*` selector is saying "select all elements that are direct children of anything with a class of `contact-info`." The `>` symbol means it's looking specifically for direct children of the element listed first. In this case, it's selecting all children of the element with `contact-info` as its class.

Remember, however, that CSS reads right to left. This means that if the first selector it reads is `*`, it will try and find _every_ element on the page first, then look at the `.contact-info`, and then filter out the elements that aren't a direct child of it. This wouldn't be a good approach in a big website, but it won't affect performance for a site this size.

In this case, it will apply the above styles to the three flexbox child elements in our `contact-info` flexbox container, so we are now all set with this section's flexbox layout.

We'll close out on this section by making some style updates:

- First, find the CSS rule for `.contact-info p, .contact-info address`:

  - Change the `font-size` to 16px

Now for the contact form elements:

- Create a CSS rule called `.contact-form input, .contact-form textarea` with:

  - `border: 1px solid #024e76`
  
  - `display: block`

  - `padding: 7px 15px`
  
  - `font-size: 16px`
  
  - `color: #024e76`
  
  - `width: 100%`
  
  - `margin-bottom: 15px`
  
  - `margin-top: 5px`

- Create a CSS rule called `.contact-form button` with:

  - `width: 100%`
  
  - `border: none`
  
  - `background: #fce138`
  
  - `color: #024e76`
  
  - `text-align: center`
  
  - `padding: 15px 0`
  
  - `font-size: 16px`

Learning this much about layouts in CSS is challenging, but it is very rewarding when you realize how much control you can exercise over your HTML elements. There is nothing more important for a CSS developer than the ability to visualize a page as a series of containers, and it is a very exciting time for CSS because of tools like flexbox are creating highly customizable layouts that look similar to those in magazines and other print media.

We've finished this feature request and are ready to take the code from this branch and merge it into our `develop` branch. Then we'll be ready to tackle the next feature request on our list!

> **Asset Needed:** [Learnosity - Flexbox quiz FSFO-122](https://trilogyed.atlassian.net/browse/FSFO-122?atlOrigin=eyJpIjoiZGU3ZWFiZjFmOWE5NGFlZmE0NzdkNDlmYzAyNWE3NjkiLCJwIjoiaiJ9)

## Merge Features

All of the work we just completed needs to make its way into the `develop` branch that we created in the first lesson:

1. Make sure your code is committed and pushed using `git add`, `git commit`, and `git push origin feature/flexbox`. 

2. Use `git checkout develop` to move back into the `develop` branch. If you have uncommitted work, your changed files and code from `feature/flexbox` will carry over to `develop` but will not save it in the `feature/flexbox` branch. So make sure your work is saved in your feature branch using `git add` and `git commit`.

3. Double-check that you're in `develop` by using `git branch` or `git status`.

4. Tell Git to copy the `feature/flexbox` branch's code into `develop`:

```bash
git merge feature/flexbox
```

The updated code from `feature/flexbox` will now be reflected in `develop`. Open the page in a browser and test it!

> **Deep Dive:** To get more practice with Git and GitHub, check out [try.github.io](https://try.github.io/).

## Reflection

This lesson introduced us to tools and concepts that are crucial in our growth as developers. We practiced our Git workflow, worked on the site in an isolated branch, and  used GitHub issues to stay organized and track our progress. Every developer needs these skills to be successful.

In terms of coding knowledge, we added:

- How to visualize layouts as parent/child relationships and use wireframing to determine what we need to do.

- How to use flexbox properties to create layouts that allow the page to scale.

- The concept of adjusting layouts so they take up more horizontal space than vertical space.

- The difference between relative and absolute units of measurement in CSS.

In the next lesson, we'll make our website look good on any device size. This is called "making a site responsive," and we'll use a CSS tool called **media queries** to make that happen.

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
