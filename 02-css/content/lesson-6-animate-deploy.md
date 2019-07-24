# Lesson 6: Animate and Deploy

## Introduction

The folks at Run Buddy looked at the latest version of the landing page and love what we've done with it. They can't wait to show it off to the world, but there's one last thing they would like implemented. The CEO in particular was really looking forward to the animated hover effect as seen here:

> ## INSERT VIDEO DEMO OF BEHAVIOR

We could push back and claim it's not possible. Who knows... maybe it isn't? It's okay to tell a client you need some time to investigate, but it would be in bad taste to refuse upfront. Sudden client changes are part of the job, and this gives us an opportunity to take on a new challenge and learn additional skills! Plus, these are billable hours.

We'll agree to add the hover animations before publishing the final version of the webpage. Even though it's a last-minute request, we should still respect our workflow. Add a new issue in GitHub, then create/checkout a Git branch named after this issue.

## Animation

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
  from {
    background-color: blue;
  }
  
  to {
    background-color: red;
  }
}
```

This time, the background color will animate from blue to red. Of course, these keyframes don't do anything on their own. We still have to apply them to an element. For example, if we wanted every `<div>` to fade in, we would write:

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

Hmmm. This seems useful. Let's switch gears and see what `transition` has to offer.

## Deploy

## Reflection