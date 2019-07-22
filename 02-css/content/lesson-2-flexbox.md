# Lesson 2 - Flexing Our Muscles

As evidenced by the issues we created in our GitHub repository, there's a fair amount to be done to get this site to a point that matches Run Buddy's specifications. What they are asking us to do for them is fairly common in the world of web development and it can be very overwhelming at times, but luckily we already have our work sectioned off into these different GitHub issues so we can worry about tackling one at a time.

The first issue we are going to tackle is converting the site's overall flow and layout to enhance its design and make it more flexible. To do that we're going to use a new layout feature in CSS called **flexbox** (clever name, right?), which allows us to create layouts that used to only be achieved with heavy usage of floats and positioning. Flexbox is going to allow us to make these layout changes without having to _too_ much manipulation to what we currently have in our code. We'll be updating every section of our page in some way, take a look at some of these changes:

![Hero banner mockup](assets/lesson-2/100-hero.jpg)

![Trainers mockup](assets/lesson-2/200-trainers.jpg)

Comparing these to what we currently have, you can see that we'll be working to make better use of the horizontal space on the page to provide a cleaner layout.

We're ready to get started, but as we know, our current `staging` branch is probably not the best place to mess around. So let's get started by creating our first git feature branch.

## Make a feature branch

Since we're about to embark on fairly large round of updates to our Run Buddy page's layout, it is a good idea for us to not work in the same git branch our code currently sits in (`staging`). Think about the overall scope of this project and why created a `staging` branch in the first place. We did this so we can work on our updates without disrupting the code in our `master` branch because the code there is what is running on the Internet for visitors to see.

> URKEL SAYS: This is what's known as having code "in production".

![Current git branches](assets/lesson-2/300-git-branches.jpg)

Now that we have `staging` set up to hold our updated code as we progress through these site updates, we can take it one step further by creating a branch for each GitHub issue we've created as we tackle them. Same as the relationship between `master` and `staging`, our new branches are going to serve as a means for us to not mess with the code in `staging` until we know that an issue is ready to be marked "complete".

This and every following lesson is going to begin with us creating what's known as a "feature" branch that makes a copy of what's currently in `staging`. This way we can make updates to our code and when we are done fulfilling the issue's needs, we will merge this code into our `staging` branch. Then we will repeat that cycle for the next issue or feature we are working on.

This process may seem tedious and unnecessary, if we are already in `staging` then we why would we need to create more branches instead of working in there?

The answer may seem hard to grasp at first, but the overall idea is that when we start working on anything new we want to set a baseline. A place that can store the most up-to-date _working_ code. This way if we end up doing something that doesn't work we can always come back to that spot and start over again. Git gives us a few options to work like that, but creating a new branch every time we start something new is a good practice to get into.

> ON THE JOB: Creating a new branch for every new feature, edit, or bug fix not only gives the developer peace-of-mind knowing that any work won't affect the live site until they know it is going to work, but it also makes working on a team an easier process.
>
> Imagine two developers were working on the same project in the same branch. They would both have different edits to push to GitHub and GitHub isn't smart enough to know what code is considered "correct". It would create what's known as "merge conflicts", meaning that code from two different sources will fight for attention and the developers would have to decide which code is correct.
>
> If each developer created their own branch to make updates and edits to the code, they would not step on each other's toes and GitHub would have a much easier time figuring out which code belonged where when it came to getting that code live.

Let's go ahead and create a new branch for the issue pertaining to setting up Flexbox. What we want to do here is make a new branch with the code that is currently in `staging`. To do that, we should double check that we are in fact in the `staging` branch. There are two ways to do this from the command line:

- **`git branch`**: Print out all branches on the local machine. Use the `Q` key to quit that menu.

- **`git status`**: Not necessarily used for just seeing what branch you're in, but it will print out what the active branch is and what's currently going on in there (file additions, edits, etc)

If you use the `git branch` command, you should see something similar to this:

![Current Git Branch - Staging](assets/lesson-2/400-current-branch.jpeg)

> PRO-TIP: If you are using Visual Studio Code and only have your repository open, the current branch should be displayed in the lower left corner of the window. 
>
> Visual Studio Code has a lot of great features for working with Git and GitHub, but it is best to learn the inner workings with the command line first before relying on any of those tools.

If you are not in the `staging` branch, you can always move into it by using the `git checkout staging` command.

What we'll do now is create this new feature branch for adding Flexbox to our site. We can do so by typing in the following command:

```bash
git checkout -b flexbox
```

> PAUSE: When we use `git checkout -b <name>`, what does this do and where do we end up?
>
> ANSWER: It takes whatever branch we're currently in and clones it into a new branch with the name of whatever is put in place of `<name>` and we are now in that new branch.

The result should look something like this (keep in mind not everyone's command line environment looks the same, but there should be similarities):

![New feature branch](assets/lesson-2/500-new-branch.jpeg)

If the result does not say something along the lines of the above "Switched to a new branch...", there may be some updated work in the `staging` branch that wasn't committed first. In order for the `checkout` command to work, all of the work in the current branch needs to be committed or discarded so Git doesn't move when things are in flux.

> ## GOOD PLACE FOR A VIDEO DEMONSTRATING HOW THIS CAN GO WRONG

If you are now in your `flexbox` branch, great! Let's start actually coding!

## Flexing the Header

Based on the title of this section, we're going to begin updating our page's layout with the `header`. You may be comparing the current page to the mock-up in the previous lesson and thinking "why would this need to be updated? It looks exactly the same!", and while they may look the same, the one we're working towards is going to use new CSS properties that make the HTML more responsive and flexible for different screen sizes. This core layout concept is called **Flexbox**.

Flexbox is the name given to an HTML element with a CSS property declaration of `display: flex`. We've seen `inline` and `block` before, but this one has a whole different meaning. It literally means a "flexible box" and it is a newcomer to our set of CSS tools, as it was finally adopted by all browsers in late 2017.

Think about what we have previously to create different types of layouts. They usually involved using floats, absolute positioning, and a lot of tweaking to other CSS properties. The main issue with the tools we've used so far is that they involve us explicitly telling HTML elements how they should be positioned and placed around one another, otherwise they wouldn't be aware of each other and the page would end up having a broken design. It works, but it requires a lot of rules, especially when mobile devices and tablets are introduced into the picture, and can become very frustrating to work with.

Currently our `header` cannot resize well:

![Resize with floats](assets/lesson-2/600-bad-resize.gif)

But with flexbox (and some other cool tricks we'll add later), our header will grow and shrink very well:

![Resize with flex](assets/lesson-2/700-good-resize.gif)

Flexbox eases these pains by creating HTML parent/child (or container/container-item) relationships where the parent keeps track of how much space each child is taking up and repositions the other children accordingly. This way, the child elements don't have to worry about each other, as the HTML parent/container they live in is doing all of the hard work for them. They just need to worry about their own content and can grow or shrink depending on the size of the screen.

> IMPORTANT: The Magic of Flexbox
>
> When a container is given a `display` value of `flex`, that element is now able to create what's known as a one-dimensional layout. This means that it can now control its content along either the horizontal X-Axis (known as a "row") or the vertical Y-Axis (known as a "column"). By default, a flexbox is set to be a row, meaning that it will try and fit all of it's child elements on one horizontal line until it hits the right edge of the parent. At that point it has to decide whether to:
>
> - Make all of the child elements more narrow to accommodate a new sibling on that horizontal line. This usually results in child elements having a "squished" look.
>
> - Tell the flexbox parent that it's okay to overflow its content onto the next line. This is what's known as "wrapping" and is commonly used in conjunction with flexbox containers to handle the screen growing and shrinking.
>
> Another thing that Flexbox provides that used to be incredibly difficult is horizontal/vertical alignment of child elements, meaning we can use flexbox to vertically center HTML elements in a container (which used to be near impossible without JavaScript) and we can evenly space elements without having to set a lot of CSS rules to them.
>
> All of these ideas are easily carried into making a flexbox column as well, just apply those rules to height instead of width and it's the same idea. Typically flexbox is used more for rows than columns, but there are some really cool use cases for both and flexbox is quickly becoming an industry standard.
>
> [Learn more about flexbox and how it can be used.](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

In our case we can tell not only our entire `header` element but also our `nav` element to keep track of what's inside of it and how much space can get taken up before overflowing onto the next line. So enough talking about flexbox, let's learn by doing!

We'll start by making the `header` element a flexbox, but first let's remove a few pieces from our CSS file (a lot of this lesson will involve removing CSS properties and adding flexbox properties in their place):

- Remove the `display: inline-block` declaration from `header h1`

![Remove h1 property](assets/lesson-2/800-rm-inline.jpeg)

- Then remove the `float:right` declaration from `header nav`

![Remove float from nav](assets/lesson-2/900-rm-header-float.jpeg)

Now you can go save and refresh the page if you want to see it broken, or you can go ahead and apply the fix immediately by adding the following CSS property declaration to the `header` rule in `style.css`:

```css
display: flex;
```

That's all that needs to be added to get our elements back on the same horizontal line! It should now look like this:

![Header with flex](assets/lesson-2/1000-flex-header.png)

By just adding `display: flex` to our `header`, we are telling the header to keep tabs on how much space its direct children (`h1` and `nav`) need and places them on the same line. What makes this more interesting is that both of those children by default are block-level elements and adding the context of flexbox overrides that default behavior. The simple `display: flex` declaration also automatically makes that `header` a "row" by default, so there's no need to explicitly tell it so.

> URKEL SAYS: To change a flexbox from a row layout to a column layout, you can use the property called `flex-direction` and give it a value of `column` and the box will lay out all of it's children vertically rather than horizontally.

There are just a few more things we want to do at this point. Notice how the navigation items seem to be up against the left-hand side, closer to the `h1`? Well we can adjust that easily using a property that works in flexbox containers called `justify-content`.

> DEEP DIVE: The `justify-content` property is one that only applies to elements with a `display` property value of `flex` or `grid`. It allows you to control spacing between child elements with different values:
>
> - **`flex-start`**: This is the default value if nothing is provided and is the most "normal" value. It has all elements come up against one another and try to be as far left as possible in the container
>
> - **`flex-end`**: Opposite of `flex-start`, placing all elements at the end (or right hand side) of the container.
>
> - **`center`**: Keep all elements as close to the center of the container as possible.
>
> - **`space-between`**: Take all of the unused space in the container and put it between every child element evenly so they are spaced apart.
>
> - **`space-around`**: Like `space-between` but it also includes adding space between the elements and the edges of the container, so the left-most and right-most elements are not flush against those edges.
>
> These are the most used values, but there are a few more. [Learn more about `justify-content` and demo some of its values.](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

What we currently have are two child elements and we want them to be spaced apart from one another as much as possible with the `h1` being up against the left and the `nav` being up against the right, so let's add the following declaration to the `header` CSS rule:

```css
justify-content: space-between;
```

What this property declaration just did for us is it took all of unused space in the `header` and put it between the two elements. It determines the unused space by looking at each child element and seeing how much the border-width, margin, padding, and content itself add up to. If it doesn't add up to 100% of the parent, then whatever is left over is what's considered the unused space.

> REWIND: What is it called when we calculate an element's dimensions by adding the content, padding, border-width, and margin values?
>
> ANSWER: The "box-model"

The next thing we need to do is tell the `header` how to handle content that's too wide for the container when the screen is smaller. We can leave it be&mdash;which will either let the content just try and become as small and tight as possible or burst out the right side of the container&mdash;but that would not be the best choice in most use cases. Instead, we are going to tell the container that when its child elements can't fit on one line, let them break onto the next line so they can take up as much width as they need.

This is achieved by adding a property called `flex-wrap`, and it allows the flexbox container to let its children wrap onto the next line. By default the value of `flex-wrap` for a flexbox is set to `none`, so we need to explicitly tell it to be `wrap` instead by adding the following to our `header` like this:

```css
flex-wrap: wrap;
```

Now when we resize our window, the `header` will collapse onto a second line when it runs out of room to fit both the `h1` and `nav` elements on the same line.

The properties we used here (`display: flex`, `justify-content`, and `flex-wrap`) are usually the three most used flexbox properties, and as we can see&mdash;all three of them are added to `header`. This is the crux of using flexbox for web layouts, let the parent elements tell the child elements how to look instead of having to worry about each child's needs one at a time.

With these minor edits to the `header` we were able to achieve the same layout with easier to understand concepts, which will allow us to make more complex layouts as time goes on. There are still a few changes we want to make to the `nav` element, though, to make it more responsive to screen size changes.

If you are guessing that those changes will involve converting the `nav` element to a flexbox as well, then you'd be correct, so let's keep moving!

> IMPORTANT: Don't forget to use your git commands to `add` and `commit` your work to this `flexbox` feature branch!

## Flexing the Navigation

As we learned with the `header`, setting up elements as a flexbox solves a lot of the headaches we come across in common CSS layouts. It also reinforces the concept of having a parent/child relationship, which is a common theme across the entire programming landscape. The idea behind that is to provide the parent with all of the rules so the children can simply inherit them rather than tell each child specifically what they need to be doing, making the code more understandable and flexible.

If you look at the current `nav` and resize the browser window, you can see that the `nav` element itself breaks onto the next line just fine, but all of the actual links in the `nav` break in weird place and start stacking. What we'll be doing next is reworking our `nav` to make it more responsive by converting it from an inline list to flexbox. So our finished `header` will be a flexbox with two elements, one of them being a `nav` element that is also going to be a flexbox. So the `nav` element will be simultaneously a "flex child" (to the `header`) and a "flex parent" (to the actual links).

> IMPORTANT: You can create as many flexbox elements as you need on a page, just remember what type of layout you're trying to achieve before applying it everywhere as it is a not "cure all" for layouts.

Let's start by removing some pieces from our current HTML and CSS, starting with the HTML. Go ahead and remove the `<ul>` element and the `<li>` elements BUT keep the `<a>` elements. The resulting `nav` should look like this:

```html
<nav>
  <a href="#what-we-do">What We Do</a>

  <a href="#what-you-do">What You Do</a>

  <a href="#your-trainers">Your Trainers</a>

  <a href="#reach-out">Reach Out</a>
</nav>
```

The funny thing is removing that list may not cause _too_ much of a difference in the current design, but having the HTML set up like it is now will make the CSS much simpler.

Let's now turn our attention to removing some CSS before applying more


## Flexing the Footer

- footer -> flex container & justify/align

## Flexing the Hero


## One column layouts for Section Titles and "What We Do"

## Giving "What You Do" nested flexbox layouts

## Trainer Trading Cards

## 3 Column Reach Out

## Merge branch into staging
