# Lesson 5: A Pretty Bow on Top

## Introduction

We've made several big changes to our web page over these last few lessons. We built a fairly complicated grid, adjusted the layout to be more flexible, and added media queries to ensure true mobile compatibility. While these were all super important aspects to take care of, the executives at Run Buddy are still itching to see their landing page stand out more visually. Look at the mock-up again and notice how this version utilizes things like shadows, rounded corners, and transparency:

![pretty header](./assets/lesson-5/100-pretty-header.png)

Years ago, these visual niceties would have been a huge headache to implement, but CSS has come a long ways since then. With the advent of CSS3, there are many new features available to make our lives easier. In this lesson, we'll explore many of these advanced techniques to give Run Buddy that final coat of paint it's been needing.

Similar to previous lessons, create a new branch based on the corresponding GitHub issue. Remember to create the branch from staging.

> **Hint:** The command `git checkout staging` will switch you back to the staging branch. `git checkout -b <name>` will create a new branch based on the current branch and switch to it.

Now that we have a new branch to work on, let's get started!

## CSS Shadows and More

First, let's add shadows to some of our HTML elements. In CSS, shadows come in two flavors: text shadows and box shadows. They're represented by the following CSS declarations:

```css
.some-class {
  text-shadow: 5px 10px 15px black;
  box-shadow: 5px 10px 15px black;
}
```

> **Pause:** `text-shadow` would obviously be used for text, so when/where would you use `box-shadow`?

There are quite a few [value possibilities](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#Syntax) for shadows, but the most common usage is to define the horizontal offset (`5px` in our example), vertical offset (`10px`), radius of the shadow blur (`15px`), and finally the color. The offsets start in the top-left corner of the element that has the shadow, and these numbers can be negative. For example:

![box shadow example](./assets/lesson-5/200-box-shadow.png)

That black shadow is a little too in-your-face, however. We can lighten it by applying transparency to the shadow, though this does require using **RGB** values instead of color keywords like `black` or hexadecimal values like `#024e76`. RGB stands for Red/Green/Blue and allows us to define how much of these three colors to blend together on a scale of 0 to 255. `rgb(0, 0, 0)` represents black while `rgb(255, 255, 255)` is white.

> **Urkel Says:** My favorite color keyword is `lemonchiffon`, which can also be written as `#fffacd` or `rgb(255, 250, 205)`.

To change the transparency of the color, however, we'll need to use `rgba()` instead of `rgb()`, where the "a" stands for "alpha." In other words, alpha is the transparency. An alpha value of 1 would be fully opaque while 0 would be fully transparent. Note the following declaration:

```css
.shadow {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

Here, we're saying the shadow should start in the top-left corner (`0 0`), have a radius of `10px`, and be black with half transparency (`0.5`). Add this declaration to the following CSS rules in your style sheet:

```css
header h1 { 
  /* add text-shadow here */
}

header nav a { 
  /* and here */
}

.hero-cta h2 { 
  /* and here */
}
```

Save, refresh the browser, and enjoy your new shadows! There's one more shadow we need to add to the hero form, though. `text-shadow` wouldn't be appropriate here; it would add shadows to all of the text inside the form! Instead, let's use `box-shadow`:

```css
.hero-form {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

While we're fiddling with the hero form, look closely at the mock-up and notice how the background color is slightly transparent:

![hero form](./assets/lesson-5/300-hero-form.png)

The style sheet currently defines the background color as:

```css
.hero-form {
  background-color: #fce138;
}
```

How can we change this to add that transparency? First, we'd need to know the RGB equivalent of `#fce138`, which we can find out by using a [HEX to RGB converter](https://www.google.com/search?q=convert+hex+to+rgb). Once you have the correct values, rewrite the `background-color` declaration to be 80% opaque.

> **Hint:** The RBG values are 252, 225, and 56.

> **Hint:** You'll need to use `rgba()` and set the alpha to `0.8`.

The hero form also utilizes several rounded corners, not only for the form itself but the different form elements inside. The CSS property to accomplish this is called `border-radius`. Add the following declaration to your hero form class:

```css
.hero-form {
  border-radius: 15px;
}
```

This is shorthand to add a rounded corner to all four corners of the element. If you wanted to, you could define separate values for each corner, starting in the top-left. For example: `border-radius: 5px 15px 5px 15px;`. Let's add a smaller rounded corner to all of the form elements on the page:

```css
.form-input {
  border-radius: 10px;
}

.hero-form button {
  /* add border-radius here */
}

.contact-form input, .contact-form textarea {
  /* and here */
}

.contact-form button {
  /* and here */
}
```

> **Legacy Lem:** Before `border-radius`, developers had to jump through some annoying hoops to simulate rounded corners. One common trick was to add four images inside the `<div>`, one for each corner, and use absolute positioning to move them into the appropriate places.

> **Skill Drill** Create an "eyeball" using only CSS and `<div>` tags. That is, create a black circle inside a white circle.

## How About That Header

We've managed to spruce up the page a little bit, but the Run Buddy execs are getting antsy about the header. It still doesn't look like the new mock-up. The design team also requested that the header be "sticky," meaning it follows the page as it scrolls. Here's a demo of the behavior they would like to see:

> ## NEED VIDEO TO DEMO BEHAVIOR

Let's start with the stickiness aspect. In Module 1, we talked about different types of positioning: relative, absolute, fixed, etc. There's a new position in CSS called **sticky** that's kind of like a hybrid position. An element that's sticky will behave relatively until the viewport scrolls past it. Then the element will switch to fixed and remain visible even as the user scrolls further down. Add these declarations to the header, then scroll up/down in the browser and see what happens:

```css
header {
  position: sticky;
  top: 0;
}
```

The `top` property is important, because this tells the browser where to "stick" the element. We always want the header to be at the very top of the viewport, so `top: 0;` makes the most sense.

While sticky headers are pretty cool, it's important to know that not all browsers support this feature of CSS. Looking at the [compatibility chart](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Browser_compatibility) from MDN, we can see that position sticky doesn't work at all in Internet Explorer. Fortunately, Run Buddy has determined that none of its users are on IE. However, they do want support for Safari, and Safari comes with a caveat: you have to use a **vendor prefix**.

![sticky support](./assets/lesson-5/400-sticky-support.png)

Before certain CSS properties become standard, browsers will sometimes implement these newer features in a more experimental capacity using a browser-specific prefix. Once the CSS feature is standardized, later versions of the browser will drop the prefix. `border-radius`, for instance, used to require such prefixes:

```css
.rounded-corners {
  -webkit-border-radius: 10px; /* old versions of chrome and safari */
  -moz-border-radius: 10px; /* old versions of firefox */
  border-radius: 10px; /* standardized browsers */
}
```

Until Safari joins the cool kids, we'll need to add a vendor prefix for our sticky header:

```css
header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
```

> **Pro-Tip:** [Can I Use](https://caniuse.com/#search=position%20sticky) is another popular website to quickly check which browsers support which features.

Now that the header is sticky, we can copy the same background properties from the hero into the header:

```css
header {
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

Well, that got us close, but it's not lining up as nicely as the mock-up:

![misaligned header](./assets/lesson-5/500-misaligned-header.png)

We need the background images of these two elements to essentially be in the same place. Fortunately, we can do just that using the declaration `background-attachment: fixed;`, which will place the image relative to the viewport instead of the element itself. Let's add this declaration to the header and hero and tweak the background position at the same time to better match the mock-up:

```css
header {
  background-attachment: fixed;
  background-position: 80%;
}

.hero {
  background-attachment: fixed;
  background-position: 80%;
}
```

> **Check Point:**\
> Given the declaration `box-shadow: 1px 2px 3px blue;`, what does each value mean?\
> How do you add transparency to a color in CSS?\
> What is a vendor prefix?\
> How can you check if a CSS feature is supported in all browsers?

## Pseudo-classes

While it's hard to see this from a still mock-up, Run Buddy has requested that the page feel more interactive. That is, they want buttons and links to change when the user hovers over them and form elements to change when the user clicks on them. For example, the "What We Do" link looks like it does, because this represents the hover state:

![hover link](./assets/lesson-5/600-hover-link.png)

Complex interactivity would require JavaScript to pull off. However, we can still attain what Run Buddy is currently requesting with CSS and **pseudo-classes**. These pseudo-classes let us tap into and style the different states that an HTML element can be in. Take a button, for instance. You can **hover** over a button. You can be **actively** clicking on a button. And once clicked, the button is now the HTML element that's in **focus**. Let's see that in action:

> ## NEED VIDEO TO DEMO BEHAVIOR

Pseudo-classes can be added to any CSS selector using a colon and then the name of the state:

```css
/* default state */
button {
  background: white;
}

/* mouse is hovering over button */
button:hover {
  background: red;
}

/* button is in focus, because it was the last clicked element on the page */
button:focus {
  background: green;
}

/* user is actively pressing the mouse down on the button */
button:active {
  background: blue;
}
```

With this new knowledge, let's add some hover effects to the links and buttons on our landing page:

```css
header nav a:hover {
  background: #fce138;
  color: #024e76;
  border-radius: 15px;
  text-shadow: none;
}

.hero-form button:hover {
  background-color: #39a6b2;  
}

.contact-form button:hover {
  color: #fce138;
  background: #39a6b2;
}
```

> **Pro-Tip:** The Chrome DevTools allow you to toggle these states on and off, making it easier to style and debug them:
>
> ![dev tools](./assets/lesson-5/800-devtools.png)

Using the `:focus` state, we can also visually highlight the form input that the user is currently in. Let's try this:

```css
.form-input {
  background-color: rgba(255,255,255, 0.75);
}

.form-input:focus {
  background-color: rgba(255,255,255, 1);
}
```

This changes the form input's default state to be slightly transparent, then switches to full opaqueness when the input is in focus:

![input focus](./assets/lesson-5/700-input-focus.png)

But wait... when the input is in focus, there's an extra blue border around it, which looks terrible when paired with our rounded corners! This is the browser's default styling at play. We can override it, though, by including a second declaration:

```css
.form-input:focus {
  background-color: rgba(255,255,255, 1);
  outline: none;
}
```

Much better! Let's do something similar with the form inputs and textarea in the Reach Out section. Remember to add a transparent default state and a separate `:focus` rule.

> **Hint:** You can consolidate your `:focus` rules with comma-separated selectors: `.contact-form input:focus, .contact-form textarea:focus`.

So far, we've looked at hover, active, and focus, states that depend on user interactivity. There are other states that an element can be in, however, that have more to do with where the element is in relation to others. Add this CSS rule alongside your other "What You Do" rules:

```css
.step:last-child {
  border-bottom: 1px solid #39a6b2;
}
```

Look at the page in the browser, and you'll notice that a border was added to the last step:

![border bottom](./assets/lesson-5/900-last-child-border.png)

The `.step:last-child` selector means the CSS declarations will only apply to an element with class `step` that's also the last element in whatever container it's sitting in. Let's revisit the HTML, where we have a `<section>` tag with multiple child elements:

```html
<section id="what-you-do" class="steps">
  <div class="flex-row">
    ...
  </div>
  <div class="step">
    <h3>Step 1.</h3>
    ...
  </div>
  <div class="step">
    <h3>Step 2.</h3>
    ...
  </div>
  <div class="step">
    <h3>Step 3.</h3>
    ...
  </div>
  <div class="step">
    <h3>Step 4.</h3>
    ...
  </div>
</section>
```

The `<div>` with "Step 4" in it is the last child of the `<section>` tag. The `<div>` with class `flex-row` would be the first child. This parent/child relationship lets us do some interesting things with pseudo-classes. Try this one instead:

```css
.step:nth-child(even) {
  border-bottom: 1px solid #39a6b2;
}
```

This will add a border to every even-numbered child of the `<section>` that also has the class `step`. In this case, Step 1 and Step 3. That probably seems confusing, because Step 1 is not an even number! But keep in mind that `<div class="flex-row">` is the first official child, so Step 1 is actually the second child (an even number).

For our needs, we need a bottom border applied to every step except the last one. There are a few different ways we could tackle this. One solution is to apply the border to all steps and then remove it from the last one:

```css
.step {
  border-bottom: 1px solid #39a6b2;
}

.step:last-child {
  border-bottom: none;
}
```

Or we could combine `:last-child` with another pseudo-class, `:not`, to check for the inverse of that being true:

```css
.step:not(:last-child) {
  border-bottom: 1px solid #39a6b2;
}
```

The best solution, of course, is the one that makes the most sense to you!

> **Deep Dive:** Read up on some of the other [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes) available to us.

> ## INSERT CODING CHALLENGE HERE

## Custom Form Elements

The Run Buddy folks are liking the changes we've been making, but they've also been wondering when we're going to change those ugly, default checkboxes and radio buttons. In the following picture, the browser's default styling is on the left, and the requested styling is on the right:

![checkboxes](./assets/lesson-5/1000-checkboxes.png)

That's definitely an improvement, but getting there isn't exactly intuitive. Browsers don't let us change much about these elements. Some developers remove them entirely and use JavaScript to simulate their behavior, but it would be better practice to keep the radio buttons and checkboxes on the page for accessibility reasons. What we can do, though, is make them invisible and put our own custom buttons on top of them. Let's first restructure the HTML in the hero form to accommodate this approach:

```html
<p>
  Have you worked out with a trainer before?
  <span class="radio-wrapper">
    <input type="radio" name="trainer-confirm" id="trainer-yes" />
    <label for="trainer-yes">Yes</label>
  </span>
  <span class="radio-wrapper">
    <input type="radio" name="trainer-confirm" id="trainer-no" />
    <label for="trainer-no">No</label>
  </span>
</p>
<p>
  <span class="checkbox-wrapper">
    <input type="checkbox" name="age-confirm" id="checkbox" />
    <label for="checkbox">I acknowledge that I am at least 18 years of age.</label>
  </span>
</p>
```

Note that we wrapped each of these elements and their labels in a `<span>` tag. Perform a little CSS magic and make the inputs inside of these wrappers disappear:

```css
.checkbox-wrapper input, .radio-wrapper input {
  opacity: 0;
}
```

The `opacity` property works much like the alpha value in `rgba()`, where transparency is defined on a scale of 0 to 1. This turned all of the inputs invisible, but if you inspect the page with the Chrome DevTools, you can see that the elements are still there:

![hidden buttons](./assets/lesson-5/1100-hidden-button.png)

Before we add the custom buttons, we'll need to prep our `<label>` elements so our new buttons can fit inside:

```css
.checkbox-wrapper label, .radio-wrapper label {
    position: relative;
    left: 10px;
    margin: 10px;
    line-height: 1.6;
}
```

> **Rewind:** In Module 1, we needed to apply relative positioning to the hero section so the form inside could be positioned absolutely. The same principle applies here. The custom radio/checkbox buttons are going to sit absolutely inside of the labels.

Now here's the crazy part. We're not going to add our new buttons in the HTML code. We're going to use CSS and **pseudo-elements** to do this. Add the following CSS rule to your style sheet:

```css
.checkbox-wrapper label::before, .radio-wrapper label::before {
    content: "";
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.75);  
    border: 1px solid #024e76;  
    position: absolute;
    top: -4px;
    left: -30px;
}
```

This should produce the following results in the browser:

![custom inputs](./assets/lesson-5/1200-custom-inputs.png)

Crazy, right? The `::before` pseudo-element lets us inject content into an element with CSS! `::before` places this content before everything else that currently resides in the element. Here, we left the actual `content` property empty but used additional CSS properties to create a white square with a blue border. We then used absolute positioning to move this box on top of the invisible, original input element.

Unfortunately, we've made our new radio buttons square. Let's fix this with another CSS rule that targets only the `radio-wrapper` class:

```css
.radio-wrapper label::before {
  border-radius: 15px;
}
```

Awesome, we're halfway there! Next, we need to define what the buttons look like when checked, or clicked. We'll need another pseudo-element to overlay on top of our first one. We can't have two `::before` pseudo-elements in the same place, but we can use the `::after` pseudo-element:

```css
.radio-wrapper label::after {
  content: "";
  width: 18px;
  height: 18px;
  border-radius: 15px;
  background: #024e76;
  position: absolute;
  left: -29px;
  top: -3px;
}

.checkbox-wrapper label::after {
  content: "";
  height: 6px;
  width: 14px;
  border-left: 2px solid #024e76;
  border-bottom: 2px solid #024e76;
  position:absolute;
  left: -26px;
  top: 1px;
}
```

Similar to `::before`, we didn't put any actual content in the `::after` pseudo-element. Instead, we used it to create a circle for the radio buttons and a checkmark for the checkbox:

![pseudo-elements](./assets/lesson-5/1300-pseudo-after.png)

You're right, it doesn't really look like a checkmark. Maybe if we rotated it:

```css
.checkbox-wrapper label::after {
  /* add this alongside your other declarations */
  transform: rotate(-58deg);
}
```

We can also make the radio buttons look a little nicer by replacing the solid background color with a gradient:

```css
.radio-wrapper label::after {
  /* add this alongside your other declarations */
  background-image: radial-gradient(circle, #39a6b2, #024e76);
}
```

These are looking pretty good:

![completely checked](./assets/lesson-5/1400-pretty-checked.png)

The only problem is that they're stuck in the "checked" state. Well, that's a little misleading. These are pseudo-elements. They don't have a checked state! But the invisible inputs that we covered up do. Remember how clicking on a `<label>` tag checks the input that's tied to it? That's still working. We just don't see it anymore. However, we can still tap into the state of these inputs using a pseudo-class:

```css
.checkbox-wrapper input:checked, .radio-wrapper input:checked {
  opacity: 1;
}
```

In the browser, click on our custom checkbox and notice how the visibility of the real checkbox is toggled on and off:

![toggle checkbox](./assets/lesson-5/1500-toggle-checkbox.png)

Obviously, this behavior isn't desirable. We want the state of this input to either show or hide the `::after` pseudo-element. Fortunately, CSS has [sibling selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) where we can target an element that sits directly after another element. Let's rewrite the previous rule:

```css
.checkbox-wrapper input:checked + label, .radio-wrapper input:checked + label {
  font-weight: bold;
}
```

Now, the boldness of the `<label>` tag is dependent on the `:checked` state of its sibling element! That's still not quite what we wanted, though. Let's give this one last shot:

```css
.checkbox-wrapper input + label::after, 
.radio-wrapper input + label::after {
  content: none;
}

.checkbox-wrapper input:checked + label::after, 
.radio-wrapper input:checked + label::after {
  content: "";
}
```

If the radio buttons or checkbox are in their default state, they will have no `::after` pseudo content. As soon as an input becomes `:checked`, however, the content and all of the other styles defined earlier will kick in.

> **Important:** In programming, there's a big difference between empty text (`""`) and nothing at all. This will become doubly important once we get into JavaScript.

It would seem that we're done, but as you scroll up and down on the page again, you may notice some weird overlapping with the header:

![zindex overlap](./assets/lesson-5/1600-z-index.png)

Um... why are the custom buttons and labels appearing in front? As soon as you give an HTML element positioning (relative, absolute, sticky), it becomes affected by the stacking order. Think of HTML elements like pieces of paper that lay on top of each other. The header was the first element to receive positioning, so it sat on top. Once we gave the form elements positioning, however, those "pieces of paper" were brought to the front and covered up the header. Fortunately, with the `z-index` property, we can change this stacking order, or reshuffle the papers. Add this declaration to the header:

```css
header {
  z-index: 999;
}
```

A higher `z-index` brings the element to the front while a lower `z-index` pushes it to the back. The value `999` may seem like overkill in this case. `z-index: 1;` would still fix our header/form problem. We may end up needing to add `z-index` to other elements, though, and we want to ensure the header is always on top, so we'll go with `999` to avoid future conflicts.

## CSS Variables

Before we wrap up this GitHub issue, let's explore another newer (and really cool) feature of CSS called **variables**, or custom properties. If you skim over the CSS rules in `style.css`, you'll notice there's a lot of repetition in the values we use. Run Buddy basically has three colors that we use over and over: yellow (#fce138), navy blue (#024e76), and teal (#39a6b2). It would be really helpful if we could define these colors once and then just reference a name like "primary-color." Well, with CSS variables, we totally can!

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Browser_compatibility

## Reflection