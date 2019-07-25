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

Let's turn our attention to removing some CSS before applying our flexbox styles:

- Completely remove the CSS rule for `header nav ul li`

- Rename `header nav ul li a` to `header nav a` so it looks like this:

```css
header nav a {
  margin: 0 30px;
  font-weight: lighter;
  font-size: 22px;
}
```

Once those are removed, we can now turn our attention to the `nav` element's flexbox styles. Add these property declarations to `header nav`:

- `display: flex;`
- `justify-content: space-between;`
- `flex-wrap: wrap;`
- `align-items: center;`

We've already seen these three so no need to stop and explain those, but what about that last one? The property `align-items` works similar to `justify-content`, but on the opposite axis. To justify information means to position it on the horizontal axis, but align means to position it along the vertical axis. In this case we are ensuring that our content is vertically centered in the `nav` element.

> DEEP DIVE: The `align-items` property is another one that is specifically used with flexbox or grid layouts. Not only does it keep child elements along a row matched up with another, but it can also be used to vertically center an element on a page. This may sound like a simple task, but it wasn't until this property that it was possible to achieve this type of vertical alignment without using JavaScript.
>
> [Read more about `align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

Let's finish by making a few adjustments to our `nav` element's link styles so it looks like this:

```css
header nav a {
  margin: 0 30px;
  font-weight: lighter;
  font-size: 1.55vw;
}
```

Can you spot the difference here? We're using the same properties as before, but we are using a different value for `font-size`. The value we provided is using a newer unit of measurement in CSS called `vw`, which is short for **viewport width**. Try resizing the page now and watch the font grow and shrink.

> REWIND: Remember that the viewport is the actual browser window size!

By setting the value to `1.55vw`, we are telling the browser that the font's size should be roughly 1.55 percent of the window's overall width. This means that if the browser grows or shrinks, that size will change relative to the new overall width. This unit of measurement is one of a few new methods we can use for flexible length values in CSS, but can be tricky to nail down compared to absolute units of measurement like "pixel".

Now we have a `nav` element where the links grow and shrink with the screen size, but as we can see, they get a little too small when the screen narrows. This is something we'll circle back on and fix in a later lesson.

> IMPORTANT: Absolute vs. Relative CSS Values
>
> The CSS language has a built in understanding of different units of measurement so it can interpret and display proper length values on the page. In the early days of CSS, these units of measurement closely resembled real life units of measurement like centimeter, millimeter, and even inch.
>
> Now those units of measurement are somewhat difficult to translate to a computer screen, so a base unit was used primarily instead. This unit is called a "pixel" and it represents one of the million little dots that come together and form a digital screen. Pixels were also used in a lot of print and graphic design programs at the time too such as Photoshop, so early developers had some familiarity and understanding of its size and scale.
>
> A problem emerged when screens went from being a predictable standard computer screen size to being used on devices as small as your watch and as large as sport stadium's jumbotron. The screen sizes varied, but a pixel is a pixel no matter what, and it would create a lot of broken designs and layouts. A new unit of measurement was needed.
>
> A series of new units of measurement made it into CSS to combat these issues. These units were not based on a set dimension but based on the dimensions of the screens displaying the information instead. These units of measurement are what's known as "relative" because they are based off of the something else's size.
>
> [Here is a list of all units of measurement in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

We're done with the entire `header` for now, so now is a good time to save our work in our `flexbox` branch using Git and we'll move onto the rest of our site's layout, starting with the `footer`!

> PAUSE: To reinforce some knowledge in how to use flexbox, check out a game called [Flexbox Froggy!](https://flexboxfroggy.com/)

## Flexing the Footer

Before moving onto the real "meat" of the page, let's take our newfound knowledge in flexbox and apply it the `footer`. Try and answer the following questions:

- How is the `footer` element similar to the `header`?

- If we considered the `footer` a parent element, how many children does it have?

The `header` may have more going on in it overall, but when compared to the `footer`, they are roughly the same when it comes to the layout. The `header` has two direct children, the `h1` and `nav` elements, and `footer` has two as well with `h2` and `div` elements.

Keep in mind how we can think of all web site layouts as a series of boxes or containers:

![Footer boxes](assets/lesson-2/1100-flex-footer.jpeg)

> IMPORTANT: Remember that the parent/child relationship is a direct relationship. Any elements nested an element deeper (i.e. `header > nav > a`) are children of the direct element they are inside of.

Let's finish up our `footer` by copying what we did to the `header`:

1. Remove the `display: inline` declaration from the footer's `h2` element's CSS rule.

2. Remove the `float: right` declaration from the footer's `div` element's CSS rule.

3. Add a `display` property with a value of `flex` to the `footer` element's CSS rule.

4. Add `justify-content` and `flex-wrap` declarations to the `footer` as well.

When you save the page and refresh, try moving the screen size in and out to make sure it looks like this:

![Footer finished](assets/lesson-2/1200-flex-footer-finished.png)

If it doesn't, double check to make sure the CSS rules match this:

```css
footer {
  background: #fce138;
  padding: 40px 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer h2 {
  color: #024e76;
  font-size: 30px;
  margin: 0;
}

footer div {
  line-height: 1.5;
  text-align: right;
}
```

Now that we've gotten used to the basics of flexbox, let's move onto the `hero` section of our page and create a nice two-column layout.

## Flexing the Hero

We've now learned enough about flexbox to be dangerous, but the real key to understanding how to use flexbox and build advanced layouts is to always think about them as a series of boxes. Take a look at what we're doing next with the hero section:

![Hero finished](assets/lesson-2/1300-hero-finished.jpg)

Thinking about it in terms of a flexbox layout, we would have a "row" with two "columns" of content. Ignoring the content itself, we need a row with two boxes or containers that can be imagined like this:

![Hero outlined](assets/lesson-2/1400-hero-outlined.jpeg)

When building layouts using HTML and CSS, it is important to understand what the content of the layout is going to be, but it is a more important skill to understand how to take the mockup of the layout and understand how all of this content can be wrapped in containers and laid out that way.

In the example above, we can see a rough example of how the hero section of our site can be laid out on the overall page. We don't even need to worry about what is happening in each of those boxes with white outlines, all we need to do is worry about the boxes themselves. Think of it as us creating a rough outline of what we want to do before we do it so we can visualize our problem.

> URKEL SAYS: The practice of sketching the outline of a page's layout is called "wireframing" and it is used very widely throughout all of web development.

Just like the `header` and `footer` styles, it would be best if we started by removing some current styles in our hero section:

- In the `.hero` CSS rule, remove the `position` and `height` declarations

- In the `.hero-form` rule, remove `width`, `position`, `bottom`, and `right` declarations.

Once those are removed let's add in flexbox! In `.hero`, add our usual flexbox properties to it with one change:

- `display: flex;`

- `justify-content: center;`

- `flex-wrap: wrap;`

Notice how `justify-content` is set to `center` now? It's because we want these two boxes as close to the middle of the screen as possible instead of far apart from one another like in the `header` and `footer`.

We aren't quite there yet, however, as we now have to deal with the "call to action" we added in Lesson 1 being the full width of the hero flexbox. There are a few ways we can go about fixing this issue, one is a more basic application of the `width` property and the other is new flexbox specific property. The flexbox specific property provides a lot more control than we actually need in this situation, so we'll go with `width` for now and get into that property later.

Let's start by adding some styles to the call-to-action (CTA) we created earlier.

- Create a CSS rule for the element with a class of `hero-cta` and make it look like this:

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

- Create a CSS rule for the `h2` element inside of `hero-cta`:

```css
.hero-cta h2 {
  font-style: italic;
  font-size: 55px;
  color: #fce138;
}
```

Next we want to adjust our `.hero-form` rule to have these two declarations:

- `width: 40%;`

- `margin: 3.5%;`

Notice how we used percentage values for the margins and widths this time around? Since margins and padding are usually done in very small amounts like 10 pixels, it's usually okay to not make their lengths relative to the size of the parent container or page. We used it here in this case more just to show how it can work in the overall flow of this section.

> PRO-TIP: Picking a unit of measurement to use in CSS can sometimes be a daunting task that causes the us to constantly second guess our choice. All of these units of measurement exist for a reason and while some may work better than others in certain cases, there really is no such thing as a "wrong" decision, as we can achieve similar&mdash;if not the same&mdash;results with any mix of these units.
>
> This is why it is important to experiment with these different units of measurement and see what pattern works for you. A lot of developers will have an opinion on what they think is superior, but the most important opinion is your own since you are the one building page. Over time these decisions will become much easier to make, but only if you practice!

The hero isn't 100% mobile-ready just yet as it doesn't break down onto the next line as nicely as our other flexboxes have done so far, but this isn't a problem. We'll tackle that in a future lesson when we handle all of our mobile-ready styles at once.

As always, don't forget to save and commit your work!

## One column layouts for Section Titles and "What We Do"

This part is going to demonstrate how to use flexbox to create a one-column layout, meaning it will only have one child. Now we don't have to do that in most cases to get it looking the way we want, as is demonstrated in all of our section titles and the paragraph in the "What We Do" section, but one thing that is nice about adjusting those to be flexboxes is that we can handle justify and align properties a little bit easier across multiple screen sizes. So while it may seem like overkill, it can actually make those areas a little more scalable and easier to work with.

We'll start this off by going into our `index.html` page and making some edits to section titles. We are going to wrap each one of those `h2` elements in a `div` that we turn into a flexbox, so find every single `h2` element with a class of `section-title` in the document and make it look like this:

```html
<!-- Wrap every h2 with a class of "section-title" in this div! -->
<div class="flex-row">
  <h2 class="section-title primary-border">
    What We Do
  </h2>
</div>
```

When you are done wrapping those `section-title` elements, go and wrap the `p` element in the `section` element with an `id` attribute set to `what-we-do` so it looks like this:

```html
<div class="flex-row">
  <p>
    text goes here
  </p>
</div>
```

Notice how we added a class of `flex-row` to each one of these wrapping `div` elements. Why do you think we would give it a name like that?

The answer is simply because we are applying the same style to a number of different sections and it is a good use-case for having a class that we can reuse as many times as possible&mdash;just like we already have done with `section-title` and `primary-border`!

Now that the HTML is in place, we can turn our attention to our styles. Just like we did earlier, we'll start by removing styles:

- From the `.section-title` CSS rule, remove the declarations for `display`, `padding`, and `margin-bottom`

- Remove the entire CSS rule for `.intro`

- From the `.steps` CSS rule, remove the `text-align` declaration

- From the `.trainers` CSS rule, remove the `text-align` declaration

- From the `.contact` CSS rule, remove the `text-align` declaration

We'll start rebuilding this by adding a style rule for anything with a class of `flex-row`. At the bottom of `style.css`, where we have our utility classes for `text-left` and `text-right`, and create a CSS rule that looks like this:

```css
.flex-row {
  display: flex;
}
```

We just created a CSS rule that can be applied anytime we need a flexbox row container. This may not seem too useful now, but as you progress as a developer you will find that it is sometimes more efficient to create classes that can be used universally throughout a project as opposed to applying identical CSS property declarations to multiple items.

Now that we have our flex row created, let's turn our attention to the `.section-title` CSS rule and add these property declarations:

- `padding-bottom: 20px;`

- `text-align: center;`

- `margin: 0 auto 35px auto;`

- `width: 50%;`

> PAUSE: How much margin does each side get if the declaration reads `margin: 0 auto 35px auto`?
>
> ANSWER: top: 0, right: auto, bottom: 35px, and left: auto

Lastly, we need to center the text in our "What We Do" paragraph, so we'll finish by adding a `text-align: center` to the `.intro p` CSS rule.

This section may have seemed a little uneventful, as we took out styles and put it new ones to make the HTML look almost identical. It is very common for developers to update their code and not see any tangible payoff, but what these changes do for us is that our code is now more flexible and can easily be made mobile-friendly.

The next part of this lesson is going to involve a fairly large restructuring of the "What You Do" section of the site. We are going to be introduced to some more tools flexbox offers us to build a slightly more complex layout, so as always, it is a good time to make sure our codebase is saved using Git.

## Nesting and Flexing

Part of designing and building a web page is understanding how to make good use of the horizontal space so the page itself does not run too long vertically. The idea behind this is that frankly&mdash;users might be lazy&mdash;and they won't take the time to scroll that far down the page to get to all of the information. Some designers try to over-correct this issue by trying to cram as much up top as possible, but that makes the page feel a little top heavy and confusing to read.

We are going to try and strike a nice balance of having better use of our horizontal space while also not overstuffing the page by reworking how the "What You Do" steps look like. Currently they look very well organized and it is very easy to see what image goes with a step's text, but they don't make very good use of the space on the left and right of the page, as is shown here:

![Current step layout](assets/lesson-2/1500-step-old.jpeg)

While it reads nice, it's also not making great use of that space to the left and right of the content. We're going to set it up so each step is still on its own horizontal row, but will have a left to right layout as opposed to a top to bottom one like this:

![New step layout](assets/lesson-2/1600-step-new.jpeg)

As we can see, each step will take up less vertical space and have a little more interesting layout for the user to experience while also keeping the content together in a meaningful way.

Before we begin coding, let's take a minute and look at the above mock-up and consider how many "containers" we'd want to make for this content to be easily laid out using flexbox properties. The answer may be a little trickier than you would think just by glancing at it, but think of how we made containers around the `header` and `footer` elements' children to position them properly.

> HINT: When in doubt, grab a piece of paper and physically recreate the layout using wireframes. You don't have to be an artist, but drawing the layout helps visualize it so it is easier to transfer to CSS!

Just like our `header` element being a flexbox parent container having two children and one of them (`nav`) being its own flexbox container, that is how we will attack each step in this section:

![New step outlined](assets/lesson-2/1700-step-outlines.jpeg)

Looking at the above mock-up of this layout, we can see that we are making the entire step itself a flexbox with two children&mdash;the step number on the left and the step information on the right. Then we are going to make the step information's div it's own flexbox with two children for the image/icon and the text.

Like everything else we've done so far, we have to start by restructuring our HTML a bit and then removing some CSS styles before we can think about what new styles are going to be used.

Go through each `div` element with a class of `step` in `index.html` and change it so it matches this:

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

> HINT: Use this structure but don't forget to keep the content for each step the same as it is now!

What we've done here is create containers for each piece of the content in a step, so now it'll be easier to move the content around by adding style rules to the containers that surround them rather than the content itself.

> PRO-TIP: Some HTML elements like the `img` element can be unreliable when it comes to sizing them for creating layouts, so it is a better practice to wrap the `img` tag in a `div` or some other container and tell the `img` to be 100 percent of its parent container's size.

Let's hit the next part of this, which is removing existing CSS styles that may conflict with our new layout:

- Remove the entire CSS rule for `.steps div`, `.steps img`, and `.steps span`

- Remove the `margin-top` declaration from `.steps h3` and rename the selector to `.step h3` to tighten the relationship of the selector and make it a bit quicker for the browser to set the rule

> IMPORTANT: The browser reads CSS selectors from right to left (or innermost element to outermost element), so given a selector of `header nav a` we can think of it as the browser saying to itself "find every `a` element that is inside of a `nav` element, but that `nav` element has to be in a `header` element." This means that the browser has to do a few pass-throughs and work its way up the HTML structure to ensure the CSS styles are only being applied to those distinct `a` elements.
>
> While the above selector is fine, having a whole page of that may prove not as performant as the page gets larger. A way to make this more performant is to provide a class to the elements you want to style and select just that class, but that could prove tedious and creating unnecessary amounts of extra HTML by adding a class attribute to every element.
>
> Situations like this are common throughout all of programming, there will likely be more than one way to achieve a solution for every problem you come across and it will be up to you to decide what route is best. In this case, it is a decision between making the code slightly more performant versus having code that is slightly easier to read. The answer usually lies in the middle with something like `.nav-class a`, which is very easy to read and understand but is also specific enough for the browser to read efficiently.

Now that the HTML is ready and the CSS has been cleaned a little bit, we can start adding our flexbox styles to each step. Let's start with the step as a whole by creating a CSS rule for anything with a class of `.step`:

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

![step no align](assets/lesson-2/1800-step-noalign.jpeg)

By centering them, it creates a better use of space on the left side.

As we can see, we aren't quite there yet for the `.step` flexbox. Right now both of them share a horizontal line, but the widths of the children are varied based on the actual length of the content inside of them. Since we cannot rely on the content being uniform enough to provide a consistent layout, we need to tell the containers they live inside of to have some rules for how big they can be.

In previous sections, we used the `width` property to give those flexbox child elements some dimensions and rules to follow. Setting the width is fine and would work exactly how we expect it to, but there is a new property specific to flexbox that we can provide the flexbox child elements to help them scale with the page.

Add the following to `.step h3` and `.step-info`:

- To `.step h3` add `flex: 1 30%;`

- To `.step-info` add `flex: 2 70%;`

The property we just added to our flexbox children is probably the most difficult flexbox property to understand. The `flex` property is a property used on flexbox children when we need to apply more specific instructions to how it should be displayed on the page compared to its sibling elements. It accepts up to three values in its declaration, as it rolls up three other flex properties into one:

- **`flex-grow`**: A numeric value that is used to determine how much of the flexbox's unused space can be spread out to it's children. The number provided is used as a ratio compared to the other child's `flex-grow` value. The higher the number, the more unused space that child will be given. [The flex-grow property is explained here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)

- **`flex-shrink`**: Same idea as `flex-grow`, but it is used to determine how to size the flexbox's children when the flexbox container shrinks. [The flex-shrink property is explained here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)

- **`flex-basis`**: This works similar to setting a `width` value to a child element, but it is used more as a baseline value that at the very least will let the child be that size no matter what and grow or shrink accordingly.[The flex-basis property is explained here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

### NEED: VIDEO FOR FLEX ELEMENTS HERE

These three properties are usually used in conjunction with one another, especially `flex-grow` and `flex-basis`, and are more commonly provided values rolled into one `flex` property. The `flex` property can read values in a few different ways:

```css
flex: <flex-grow value> <flex-shrink value> <flex-basis value>;

flex: <flex-grow value> <flex-basis value>;

flex: <flex-grow value> <flex-shrink value>;
```

[Read more about the `flex` shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

The value we provided to our step's flexbox children uses the `<flex-grow value> <flex-basis value>` syntax, meaning that:

- `.step h3` will be at the very least 30% wide, but will receive any extra space in the container

- `.step-info` will be at the very least 70% wide, but will receive any extra space in the container at a 12 to 1 ratio, meaning it'll receive 12x more unused space than it's sibling with a `flex-grow` value of 1

These properties are difficult to understand at first, but they allow the developer to create a much more fluid layout when they become more complex. Could we have used `width` for these instead, of course, but this is a good opportunity for us to use something we haven't seen before (and will definitely see again).

Now we should have a step layout that looks like this:

![Step without nested flexbox](assets/lesson-2/1900-step-no-inner.png)

We're almost there, all we need to do now is take what we just learned and apply it again for `.step-info`. Start by adding these declarations to the `.step-info` rule:

- `display: flex;`

- `flex-wrap: wrap;`

- `align-items: center;`

Where did our icon go?! It has been totally removed from the screen for some reason. Think about how a flexbox container works if its children does not have any set `width` or `flex-basis` values. It _tries_ to create space for both of them as evenly as possible based on the content of each child element, but what happens when one of the child element's content doesn't have a set dimension?

As we can see here our `img` icon has no HTML `width` attribute nor any CSS rules giving it a width value, so the flex parent looks at each of it's children and sees nothing of substance hanging out in one child, but then sees text in another. So the one with text is accommodated by the flex parent first and will leave space for the other child if it ever needs to take up space, which as of now it doesn't know if it does or not because its content (the `img` element) isn't saying so.

To fix this, we just need to give both children some type of value to give them their own space. So let's do that by first creating a new CSS rule for `.step-img` like this:

```css
.step-img {
  flex: 1 12%;
  margin-right: 20px;
}
```

Now we're on our way, but it's creating some weird movement where steps with less text will have a bigger image. This is the nature of the `flex` property, but there's only one child with that property so it's basically ignoring the needs of the other child. Let's fix that by creating another CSS rule for `.step-text` that looks like this:

```css
.step-text {
  flex: 12;
}
```

Now both child elements have a `flex-grow` property of 1 and 12, respectively. This means that `.step-text` will be alloted 12 times more unused space than `.step-img`, but `.step-img` at the very least _has_ to be 12 percent of the width of `.step-info`.

Notice how we don't even need to worry about setting a `flex-basis` value for `.step-text`. When that value is omitted, the browser gives it a value of `auto`, which allows it to be whatever width is left over.

One last thing we need to do is tell the `img` element to limit its width to be whatever it's container is. This isn't a problem with most browsers, but Microsoft Edge and Internet Explorer can be a little buggy with it, so it's always worth putting in a little extra to have a uniform design across browsers. Create this CSS rule for it:

```css
.step-img img {
  max-width: 100%;
}
```

Again, we just fixed a problem that probably did not occur on any of our machines if we are using Google Chrome, but it is a good practice to stay ahead of any browser quirks. You never know where the site's user is from or how Internet-savvy they are, so it is part of our job to never let them hit any issues like that just because they are on an older browser.

The layout for each step should be in pretty good shape now, let's finish up with something easier and worrying about text content. We can start by updating our `.step p` CSS rule:

- Change its selector to say `.step-text p` instead of `.step p`

- Change it's `font-size` to be 18px instead of 23px

> REWIND: Based on what we learned above regarding CSS selector efficiency, why would `.step-text p` be better than `.step p`?
>
> ANSWER: It is a closer parent/child relationship and since CSS is read in reverse, it'll only have to step up one parent element to find its match.

Lastly, we'll create a new CSS style rule for the `h4` element:

```css
.step-text h4 {
  font-size: 26px;
  line-height: 1.5;
  color: #024e76;
}
```

We covered a lot of ground by updating these steps, and though it may have seem like a lot of work for not that much payoff, we reinforced a lot of good concepts like sketching out the boxes of a layout and how to use the `flex` property.

> PAUSE: If you haven't started bookmarking good resources on web development just yet, it is a good time to start doing so! Most developers, beginners and veterans alike, keep resources handy at all times.
>
> [Here is a great guide on Flexbox for your collection!](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

The rest of this page's conversion to flexbox won't be as involved as this one, but it is cool to know that we can use this one tool to handle both very simple and complex layouts!

## Trainer Trading Cards

Our contact at Run Buddy must really love this idea of tightening up sections to take up less vertical space, because we're about to give our trainers a treatment similar to the "What We Do" section we just finished up. Lucky for us, it doesn't seem to necessitate the granular control that the previous section did, so we can get this up and running pretty quick.

Our current section for the trainers has all three of them stacked on top of one another, but now we want to flip each trainer's `article` on its side to make it run slightly longer, but narrow enough to allow all three to sit on one horizontal row:

![Trainers finished](assets/lesson-2/200-trainers.jpg)

While all three of these now run a little bit longer, they still aren't as tall as the current layout.

> URKEL SAYS: When related HTML content is laid out in a narrow, vertical column, it is often referred to as a "card."

For the sake of repetition, let's take the above mock-up and think about it in terms of a flexbox parent/children relationship and wireframe it. It should look something like this:

![Trainer wireframe](assets/lesson-2/2000-trainer-outlines.jpeg)

We'll start easy this time and update how our text content looks first:

- Find the CSS rule for `.trainer-bio h3`

  - Remove the declaration for `margin-bottom`

  - Change the `font-size` value to 28px

- Find the CSS rule for `.trainer-bio h4`

  - Change the `font-size` value to 22px

  - Change the `margin-bottom` value to 15px

- Find the CSS rule for `.trainer-bio p` and move its `line-height` declaration to the `.trainer-bio` rule

### NEED: Video/Gifs to show movement/deletion of code

Next thing we want to do is go into the `index.html` document and move the second trainer's `img` element above the `div` with a class of `trainer-bio`, so it matches the other two trainers.

Once that is complete, look through all three trainer `article` elements and remove any classes that mention `text-left`, `text-right`, `img-left`, or `img-right,` as we do not need those anymore. They should now all have this HTML structure (with varying content, of course):

```html
<article class="trainer">
  <img src="./assets/images/trainer-1.jpg" alt="Tony Horton in his workout clothes, ready to pump iron" />
  <div class="trainer-bio">
    <h3 class="trainer-name">Tony Horton</h3>
    <h4 class="trainer-role">Speed / Strength</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
      itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
    </p>
  </div>
</article>
```

Another thing we need to do is create a flexbox container around these three `article` elements, so wrap the three with a `div` element so it looks like this:

```html
<div>
  <!-- This is for show, keep the article tags you have -->
  <article>Trainer 1 Info</article>
  <article>Trainer 2 Info</article>
  <article>Trainer 3 Info</article>  
</div>
```

Lastly we need to identify this element as a CSS selector, so remove the `class="trainers"` from the parent `section` element and move it to the `div` that was just created.

Now all that needs to be done is turn these trainer cards into a row, so turn your attention back to `style.css` and give `.trainers` the flexbox treatment:

```css
.trainers {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
```

It doesn't look great just yet, but that's because we have some styles in our newly created flexbox children (the `article` elements) that we need to adjust or remove, starting with `.trainer`:

- Find the CSS rule for `.trainer`:

  - Remove `width` and `overflow`

  - Change `margin` to just 20px

  - Add `flex: 1`

> REWIND: If all flexbox children have a value of `flex: 1`, that means they will share any extra space evenly.

- Find the CSS rule for `.trainer img`:

  - Remove `float`

  - Change `width` to 100%

- Find the CSS rule for `.trainer-bio`:

  - Remove `float` and `width`

  - Change `padding` to 25px

What we just finished is a very common layout technique in modern web design. It would be considered a "three column card layout", meaning we created one horizontal row that can hold onto three separate pieces of information.

The concept of building a row/column layout is commonly called a "grid", as it keeps the content running along certain lines and nothing into one another. As we've seen so far, these "grids" can be implemented in different ways to achieve our layout goal.

The CSS needed for these layouts can sometimes be tricky, but what is more important is to understand how to sketch the layout you want to build as a wireframe. The ability to visualize a layout like that will make you a much more efficient&mdash;and less frustrated&mdash;developer. Remember, you can always search for an answer or syntax hint on the Internet, but you still have to know how to ask the right question to get that result. Knowing what you _want to do_ is the first step to getting your answer.

Only one more section left to fix up and we'll be finished with our first "feature", so we can mark that GitHub issue as "complete."

## 3 Column Reach Out

## Merge branch into staging
