# Lesson 6: Add Animation and Deploy

## Introduction

The folks at Run Buddy looked at the latest version of the landing page and love what we've done with it. They can't wait to show it off to the world, but there's one last thing they would like implemented. The CEO in particular was really looking forward to the animated hover effect as seen here:

> ## INSERT VIDEO DEMO OF BEHAVIOR

We could push back and claim it's not possible. Who knows... maybe it isn't? We'll need time to play around with different options, but at least those are billable hours! Assuming the animation can be done, here's what we'll tackle in this lesson:

1. Experiment with CSS animation.

2. Choose the best option and prep the HTML and CSS.

3. Animate the trainers' hover states.

4. Make any adjustments for mobile devices.

5. Deploy the webpage to production.

Even though this is a last-minute request, we should still respect our established workflow. Add a new issue in GitHub for animation so we can track our progress.

## Experiment with Animation

In the old days of the web, animation would have required a bit of JavaScript coding. Modern CSS, however, has basic animation built in. There are two CSS properties that can help with this: `transition` and `animation`. We'll experiment with both before deciding which one best fits our needs.

> **Pro Tip:** When experimenting with new features, you can use an online code editor like [JSFiddle](https://jsfiddle.net/) or [CodePen](https://codepen.io/pen/) instead of messing with your current project or creating extra HTML and CSS files on your computer.

Let's look at `animation` first, which involves setting up a series of keyframes in your style sheet:

```css
@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

These keyframes change the opacity from 0 to 1 over a set period of time, thereby causing the element to fade in. Hence, we named the keyframe group `fade`. Another example might be:

```css
@keyframes color-shift {
  0% {
    background-color: red;
  }
  
  50% {
    background-color: blue;
  }
  
  100% {
    background-color: green;
  }
}
```

This time, we have three keyframes, so we're using percentages to specify at what point the `background-color` should change. This will animate the color from red to blue first, then from blue to green.

Of course, these keyframes don't do anything on their own. We still have to apply them to an element. For example, if we wanted every `<div>` to fade in, we would write:

```css
div {
  animation-name: fade;
  animation-duration: 1s; /* animation lasts 1 second */
}
```

By default, the animation will only play once, unless we specify with another property how often it should repeat. Why not forever?

```css
div {
  animation: fade 1s; /* shorthand version */
  animation-iteration-count: infinite;
}
```

Combined with pseudo-classes, we could even withhold the animation until the element enters a certain state:

```css
div:hover {
  animation: fade 1s infinite; /* more shorthand version */
}
```

> **Deep Dive:** Read more about [CSS animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) from MDN.

This seems pretty useful overall. Let's switch gears and see what `transition` has to offer. This property is a little different, because we don't set up keyframes. Instead, it's a way to specify the speed in which other CSS properties change. Consider this:

```css
div {
  font-size: 20px;
}

div:hover {
  font-size: 200px;
}
```

When your mouse hovers over the `<div>`, the font will abruptly change from `20px` to `200px`. With `transition`, however, we can slow that down:

```css
div {
  font-size: 20px;
  transition-property: font-size;
  transition-duration: 2s;

  /* or shorthand */
  transition: font-size 2s;
}

div:hover {
  font-size: 200px;
}
```

Note that the `transition` was put on the `div` rule and not `div:hover`. This is because we want the transition from `200px` back to `20px` to also be animated. Try moving the `transition` to the `:hover` state and see what happens.

Another thing to be aware of is that we've declared a `transition` on the `font-size` property only. We can certainly animate multiple properties at once; we would simply omit any property name(s) in that case:

```css
div {
  color: purple;
  font-size: 20px;
  transition-duration: 2s;
}

div:hover {
  color: black;
  font-size: 200px;
}
```

> **Deep Dive:** Look over some of the other [transition properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) available in CSS.

These were fairly high-level examples of CSS animation, though, and what Run Buddy wants us to accomplish still seems a little daunting. Watch the demo video again. Notice how the background image has an animated gradient, and the trainer's name and expertise slide in at different times. Which technique, `animation` or `transition`, would be most applicable?

To best match the behavior in the video, we'll actually need to go with `transition`. A great exercise would be to try both, but `transition` makes the most sense for a few reasons:

1. There are only two points of animation for each element, so there's no need for multiple keyframes.

2. Elements should animate back to their normal state when the mouse leaves. The `animation` property doesn't give us an easy way to "go backwards."

3. The animation happens only once on hover. The `animation` property is great for repeating/looping animations, which we don't need here.

Now that we've determined which tools we should use, let's dive in. We'll be a little more hands-off for the rest of the lesson to give you a chance to shine, but you totally got this!

## Prepare the HTML and CSS

The first thing we need to do is create a new branch. Make sure you're on the staging branch, then create and checkout a branch named after the animation GitHub issue.

Next, let's think about how we would restructure the HTML. When building animations, it's often easier to define the final position of everything first. The final position for these elements is to have the trainer name and expertise sit in the bottom-left corner with a yellow gradient overlayed on top:

![final card](./assets/lesson-6/100-final-card.png)

To pull this off, it may be easier to turn the trainer image into the background image of a `<div>` that holds the other elements.

Restructure each of your trainer cards to look like this:

```html
<article class="trainer">
  <div class="trainer-img">
    <div>
      <h3>Tony Horton</h3>
      <h4>Speed / Strength</h4>
    </div>
  </div>
  <div class="trainer-bio">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
    </p>
  </div>
</article>
```

That kind of broke things for the time being:

![broken card](./assets/lesson-6/200-broken-card.png)

But that's okay. We'll fix it soon enough. On each `<div class="trainer-img">` tag, add a second class called `trainer-1` for the first trainer, `trainer-2` for the second trainer, and `trainer-3` for the third. In your style sheet, add a new rule for each of these classes that applies a background image:

```css
.trainer-1 {
  background-image: url('../images/trainer-1.jpg');
}
```

You won't be able to see the background image yet until we stretch out the containing `<div>`. In your style sheet, add the following rule:

```css
.trainer-img {
  width: 100%;
  min-height: 300px;
}
```

Check the webpage in the browser to make sure things are coming together:

![big background](./assets/lesson-6/300-big-background.png)

Welcome back, Tony! Now size him and his fellow trainers down using the `background-size` property.

We still need to do something about the text, though. At the end of the hover animation, the text will sit in the bottom-left corner. We could use absolute positioning to accomplish this, or we could use our new friend flexbox. Let's try flexbox. Add the following declarations to your `.trainer-img` CSS rule:

```css
display: flex;
padding: 15px;
align-items: ???;
```

Which `align-items` value would move the inner content to the bottom of the `<div>`?

> **Hint:** It's not `flex-start`.

If correct, the trainer card should now look like this:

![corner text](./assets/lesson-6/400-corner-text.png)

So close! We just need to add that yellow gradient. Like with any development problem, there are a number of ways we could go about this. If you already have an idea in mind, run with it! Don't let us cramp your style. Our thinking, though, was to add another element whose sole purpose would be to cover up the background image. That way, we could animate/transition the `opacity` of this new element from 0 to 1.

In fact, we could apply one of the takeaways from the previous lesson and do this with a pseudo-element. Add the following CSS rule to your style sheet:

```css
.trainer-img::after {
  content: "";
  height: 100%;
  width: 100%;
  background: rgba(252, 225, 56, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}
```

> **Pause:** What do the numbers in `rgba()` represent again?

This pseudo-element is absolutely positioned in the top-left corner, and its `width` and `height` are set to stretch across the entire containing element (`<div class="trainer-img">`). If you check the webpage in the browser, however, you'll notice this didn't work as expected. Scroll to the top of the page, and things look much worse than we feared:

![yellow element](./assets/lesson-6/500-yellow-hero.png)

Eek, what happened?! Why did our pseudo-element get kicked all the way to the top of the page? Think back to previous areas of the Run Buddy webpage where we were using `position: absolute`. What's the caveat with absolute positioning? What does the parent element need to have for absolute positions to be respected?

> **Hint:** There's an extra CSS property that needs to be added to `.trainer-img`.

Once you've figured it out, the trainer cards should now look like this:

![yellow trainers](./assets/lesson-6/600-yellow-trainers.png)

Awesome, we're making great progress! Now we just need to change it from a consistent yellow color to a gradient:

```css
background-image: linear-gradient(rgba(252, 225, 56, 0.3), var(--secondary-color));
```

> **Deep Dive:** Skim over the documentation for [linear gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) to see what else you can do with them.

This made the background of the pseudo-element transition from a transparent yellow color to a solid blue color. Unfortunately, it's now clear that the pseudo-element has been covering up the other elements in this container the whole time:

![gradient coverup](./assets/lesson-6/700-gradient-coverup.png)

What declarations can we add to these two rules to make the name and expertise appear on top of the pseudo-element:

```css
.trainer-img h3 {
  
}

.trainer-img h4 {
  
}
```

> **Hint:** Think about the "stacking order" and what properties affect it.

While you're at it, adjust the `font-size` and `margin` to better match the desired results:

![stacking order](./assets/lesson-6/100-final-card.png)

That's it! That's what the final animated position looks like. We realize this is getting tough, so if you've made it this far, that's really great work and something to be proud of.

> ## SKILL DRILL OR CHALLENGE HERE?

## Animate the Hover

Now that we know what the end result looks like, we can define the starting point and bridge the gap between them with a `transition`. Let's start with the gradient, since it's more straightforward. The starting point is an `opacity` of 0, so add that to the pseudo-element rule.

Next, we want to change the `opacity` to 1 when the mouse hovers over any part of the trainer `<article>`, not just the background image. Hold on, though. How can a parent's hover state affect a child? Consider for a moment the following CSS rule:

```css
div span {
  color: blue;
}
```

What does this mean again? Any `<span>` element that's inside of a `<div>` element will have blue text. So what about this example:

```css
div:hover span {
  color: red;
}
```

This means any `<span>` element that's inside of a `<div>` element _that's in a hover state_ will have red text. With that in mind, add a new CSS rule to your style sheet that will set the `opacity` of the pseudo-element to 1 when the parent (`.trainer`) is being hovered over.

You'll know it's working if you can hover over the image or the bio underneath:

> ## INSERT VIDEO OF BEHAVIOR

Of course, it's still not animated, but now that the default state and hover state are set, it's only a matter of adding a 1/2 second `transition` to the default state. Reference the documentation for [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) again if you get stuck.

Finally, we need to do something about the text. This is a somewhat misleading problem. It may seem like the text "comes out of nowhere," but the secret is that the text is always there. It just slides into view when we're ready for it.

By now, your `<h3>` and `<h4>` elements should already have `position: relative` applied to them. Relative positioning will allow us to bump these elements down and out of view using the `top` property. Try setting `top` to `200px` for both of them. That should result in this:

![top position](./assets/lesson-6/800-top-position.png)

Hmmm. These elements are not very good at hide-and-seek. We can still see them! With the [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) property, however, we can hide any content that has fallen outside of its parent. Look at the documentation and see which value will accomplish this for us.

> **Hint:** `overflow` would be applied to the immediate parent, not the children you're actually trying to hide.

Like the pseudo-element's opacity, we can set `top` back to `0px` when the trainer `<article>` is being hovered over. This is the behavior we should see:

> ## INSERT VIDEO OF BEHAVIOR

Because it's not animated yet, it almost looks like we just changed the opacity/visibility. Add a 0.6 second `transition` to the `.trainer-img h3` and `.trainer-img h4` rules so you can better see them slide in from `200px` to `0px`.

Also keep in mind that the `<h4>` trails behind the `<h3>` for a fraction of a second. What additional `transition` property would help us set a delay?

## Adjust for Mobile Devices

## Deploy

## Reflection