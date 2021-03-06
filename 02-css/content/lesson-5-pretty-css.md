# Lesson 5: Add Visual Enhancements

## Introduction

We've made several big changes to our webpage over the last few lessons. We built a fairly complicated grid, adjusted the layout to be more flexible, and added media queries to ensure true mobile compatibility. 

Even though these were all super important aspects to take care of, the Run Buddy marketing team still wants to see the landing page stand out more visually. This is the reason behind the "CSS enhancements and optimizations" issue that we created earlier.

## Preview

Look at the following mock-up and notice how it uses things like shadows, rounded corners, and transparency to add visual interest:

![New mock-up highlights many visual upgrades](./assets/lesson-5/100-pretty-header.png)

These changes make the landing page&mdash;and Run Buddy&mdash;look more professional, which the marketing team hopes will lead to more sign-ups. Run Buddy also wants an improved user experience in the form of visually interactive elements. That is, they want buttons and links to change when the user hovers over them and form elements to change when the user clicks on them. This will make the site more enticing to modern-day web users.

Years ago, these visual enhancements would've been a huge headache to implement, but CSS has come a long way since then. The advent of CSS3 in particular introduced many features to make developers' lives easier. In this lesson, we'll explore some of these advanced techniques while giving Run Buddy that final layer of paint it's been needing.

Here's what our plan looks like:

1. Create a new feature branch.

2. Add depth to the page with CSS shadows, rounded corners, and transparency.

3. Change the header to be "sticky" so that it follows the page as it scrolls.

4. Style the different states of the HTML elements to make them feel more interactive.

5. Replace the browser's default radio buttons and checkboxes with custom elements.

6. Optimize our CSS code with variables to make future edits easier.

7. Merge the branch into `develop`.

That sounds like a lot, but we'll get through this together!


## Create the Branch

The GitHub issue we're working on, "CSS enhancements and optimizations," deals largely with visual touch-ups, so we'll call the associated branch "feature/aesthetics." 

The following steps to create a feature branch should feel pretty familiar by now:

1. Use the `git branch` command to verify that you're in the `develop` branch. If not, switch to `develop` before proceeding (e.g., `git checkout develop`).

2. Use the command `git checkout -b feature/aesthetics` to create and switch to the new branch.

> **Important:** If you can't switch branches due to uncommitted work or you simply want to discard changes that don't need to be staged in Git, you can use the command `git checkout -- path/to/file` to reset individual files. For example, `git checkout -- index.html` would reset `index.html` to its most recent commit.

## Add Shadows and More

Our first code edit will be to add shadows to some of our HTML elements. This is something the design team requested to give the elements more depth. 

In CSS, shadows come in two flavors: text shadows and box shadows. They're represented by the following CSS declarations:

```css
.some-class {
  text-shadow: 5px 10px 15px black;
  box-shadow: 5px 10px 15px black;
}
```

> **Pause:** The `text-shadow` property is obviously used for text, so when and where would you use `box-shadow`?
>
> Answer: Adding a shadow to containers like `<div>` elements.

There are quite a few value possibilities for shadows, but the most common usage is to define the horizontal offset (`5px` in our example), vertical offset (`10px`), radius of the shadow blur (`15px`), and finally the color. The offsets start in the top-left corner of the shadowed element, and these numbers can be negative. 

Here's an example of positive and negative box shadow declarations:

![Two box shadows demonstrating different vertical and horizontal offsets](./assets/lesson-5/200-box-shadow.png)

> **Deep Dive:** For more information, see the [MDN web docs on box shadows](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#Syntax).

The black shadow in the example is a little too bold. We can lighten it by applying transparency to it, though this does require using RGB values instead of color keywords like `black` or hexadecimal values like `#024e76`. **RGB** stands for red/green/blue and allows us to define how much of these three colors to blend together on a scale of 0 to 255. The value `rgb(0, 0, 0)` represents black and `rgb(255, 255, 255)` is white.

> **Deep Dive:** Another color model you might hear about is **CMYK**, which stands for cyan/magenta/yellow/black. CMYK is used for physical printing, whereas RGB is used for displaying images electronically. When red, green, and blue lights overlap, the result is white. If only red and green overlap, the result is yellow. Codewise, we could write that as `rgb(255, 255, 0)`. To make a softer yellow, we can add a little blue to bring it closer to white: `rgb(255, 255, 200)`.
>
> You can experiment with RGB and CMYK values using an online color picker. These are so common that Google provides a color picker directly in its search results!

When playing with RGB values, we still end up with a solid color that can't be looked through. We'll actually need to use `rgba()` instead of `rgb()`, where the "a" stands for "alpha." In other words, alpha is the transparency, defined by a decimal number between 0.0 and 1.0. An alpha value of 1 would be fully opaque while 0 would be fully transparent.

Let's revisit our previous example:

```css
.some-class {
  text-shadow: 5px 10px 15px black;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.25);
}
```

Both of these declarations are still black, but the `box-shadow` declaration turns the opacity down to 25% (0.25).

Here's another example, which we'll use in Run Buddy:

```css
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
```

The first `0` means there is no horizontal offset; the shadow will start at the left side of the text. The second `0` means no vertical offset. The value `10px` defines the radius (i.e., size) of the blur. Finally, `rgba(0, 0, 0, 0.5)` sets the color to black at half transparency.

Per the mock-up, add the following `text-shadow` property to the following three CSS rules in `style.css`: 

```css
header h1 {
  /* add alongside your existing declarations */
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

header nav a {
  /* and here */
}

.hero-cta h2 {
  /* and here */
}
```

Save the file, refresh the browser, and enjoy your new shadows! 

There's one more shadow we need to add, though, and that's to the hero form itself. The `text-shadow` property wouldn't be appropriate here because it would add shadows to all of the text inside the form. Instead, let's use `box-shadow`. 

Add the following declaration to the `.hero-form` rule:

```css
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
```

While you're fiddling with the hero form, look closely at the mock-up and notice how the background color is slightly transparent:

![Close-up of hero form reveals a transparent background](./assets/lesson-5/300-hero-form.png)

The style sheet currently defines the background color as the following solid color:

```css
.hero-form {
  background-color: #fce138;
}
```

How can we add that transparency? First, we need to know the RGB equivalent of `#fce138`, which we can find out by using a [HEX to RGB converter](https://www.google.com/search?q=convert+hex+to+rgb). Once you have the correct values, rewrite the `background-color` declaration to be 80% opaque.

> **Hint:** The RBG values are 252, 225, and 56. And you'll need to use `rgba()` and set the alpha to `0.8`.

The hero form also has several rounded corners, not only for the form itself but for the form elements inside. The CSS property for this is called `border-radius`. 

Add the following declaration to your `.hero-form` rule:

```css
border-radius: 15px;
```

This is shorthand to add a rounded corner to all four corners of the element. This essentially means move 15 pixels in on the x-axis, move 15 pixels in on the y-axis, and draw a circle with a radius of 15 pixels. Other units of measurement could be used, as well:

> **Asset needed:** Graphic  <https://trilogyed.atlassian.net/browse/FSFO-98>

Next, let's add a small rounded corner to all of the form elements on the page. Update the following CSS rules to have a `border-radius` of `10px` (we'll let you fill these in all on your own!):

```css
.form-input {

}

.hero-form button {

}

.contact-form input, .contact-form textarea {

}

.contact-form button {

}
```

> **Legacy Lem:** Before the invention of `border-radius`, developers had to jump through some annoying hoops to simulate rounded corners. One common trick was to add four images inside the `<div>`, one for each corner, and use absolute positioning to move them into the appropriate places.

## Make the Header "Sticky"

We've managed to spruce up the page a little bit, but the Run Buddy team is getting antsy about the header. It still doesn't look like the new mock-up. The design team also wants the header to be "sticky," meaning it looks like part of the hero at first but then follows the page as it scrolls. 

Here's a demo of that behavior:

> **Asset Needed:** Video <https://trilogyed.atlassian.net/browse/FSFO-77>

Let's start with the stickiness aspect. In the previous module, we talked about different types of positioning: relative, absolute, fixed, etc. There's a new position in CSS called **sticky** that's kind of like a hybrid position. An element that's sticky will behave relatively until the viewport scrolls past it. Then the element will switch to fixed and remain visible even as the user scrolls farther down. 

Add the following declarations to the `header`, then scroll up and down in the browser and see what happens:

```css
position: sticky;
top: 0;
```

The `top` property is important because this tells the browser where to "stick" the element. We always want the header to be at the very top of the viewport, so `top: 0;` makes the most sense.

Sticky headers are pretty cool, but it's important to know that not all browsers support this feature of CSS. Looking at the [compatibility chart from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Browser_compatibility), we can see that position sticky doesn't work at all in Internet Explorer: 

![MDN compatibility chart highlights which versions of each browser support sticky](./assets/lesson-5/400-sticky-support.png)


>**Rewind:** MDN's compatibility chart is a similar tool to the [Can I Use](https://caniuse.com/) website, which we learned about at the beginning of this module.

Fortunately, Run Buddy has determined that none of its users are on IE. However, they do want support for Safari, and that comes with a caveat: we'll have to use a **vendor prefix**.

But what's a vendor prefix? Before certain CSS properties become standard, browsers will sometimes implement them in a more experimental capacity using a browser-specific prefix. When the CSS feature is standardized, later versions of the browser drop the prefix. 

For example, the `border-radius` property used to require vendor prefixes, as shown here:

```css
.rounded-corners {
  -webkit-border-radius: 10px; /* old versions of chrome and safari */
  -moz-border-radius: 10px; /* old versions of firefox */
  border-radius: 10px; /* standardized browsers */
}
```

> **Deep Dive:** Because browsers are built by different companies, their underlying **engines** behave differently. Browser engines read the HTML code of a webpage and convert it into something the user can actually see and interact with. Safari's engine is called WebKit. Chrome was originally based on WebKit but has become its own thing, now called Blink. Recently, Microsoft adopted Blink as the engine for the Edge browser. Clearly, a lot of sharing happens across these engine projects, but discrepancies still exist, of course.
>
> To learn more, read the [Wikipedia article on browser engines](https://en.wikipedia.org/wiki/Browser_engine).

Until Safari joins the cool kids, we'll need to add a vendor prefix to the sticky header to make sure it will be supported by that browser. The `header` CSS rule should now include the following three declarations:

```css
position: sticky;
position: -webkit-sticky;
top: 0;
```

Now that the header is sticky, we can style it to make it look like part of the hero. Keep in mind that the header isn't really part of the hero; they must be separate elements for the stickiness to work. If done correctly, the user won't notice.

Copy the following background properties from `.hero` into `header`:

```css
background-image: url('../images/hero-bg.jpg');
background-size: cover;
background-position: center;
```

That got us close, but the hero and header aren't lining up as nicely as they do in the mock-up, as you can see here:

![The header and hero backgrounds are visibly misaligned](./assets/lesson-5/500-misaligned-header.png)

We need the background images of these two elements to essentially be in the same place. Fortunately, we can do just that by using the declaration `background-attachment: fixed;`, which places the image relative to the viewport instead of the element. 


Let's add this declaration to the `header` and `.hero` rules and tweak the background position at the same time to better match the mock-up:

```css
background-attachment: fixed;
background-position: 80%;
```

> **Asset needed:** Learnosity  <https://trilogyed.atlassian.net/browse/FSFO-99>

## Style the States

Run Buddy has also requested that the page be more visually interactive. They'd like buttons and links to change when the user points the cursor at them and form elements to change when the user clicks on them. 

For example, the "What We Do" link below shows what a visually interactive link could look like when the user moves the cursor over the link:

![A hovered link sits next to a regular link](./assets/lesson-5/600-hover-link.png)

Complex interactivity requires JavaScript, which we haven't covered yet. But we can still fulfill Run Buddy's requests with CSS and pseudo-classes. 

**Pseudo-classes** let us style different states of an HTML element. For example, can you think of some different states that a button might have? You can **hover** over a button. You can be **actively** clicking on a button. And when clicked, the button becomes the HTML element that's in **focus**. Let's see that in action:

> **Asset Needed:** Video <https://trilogyed.atlassian.net/browse/FSFO-78>

Pseudo-classes can be added to any CSS selector using a colon and the name of the state, as shown here:

```css
/* default state */
button {
  background: white;
}

/* mouse is hovering over button */
button:hover {
  background: red;
}

/* button is in focus because it was the most recently clicked element on the page */
button:focus {
  background: green;
}

/* user is actively pressing the cursor down on the button */
button:active {
  background: blue;
}
```

With this new knowledge, let's add some hover effects to the links and buttons on the landing page:

```css
header nav ul li a:hover {
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

> **Pro Tip:** Chrome's DevTools lets you toggle these states on and off, making it easier to style and debug them:
>
> ![The styles tab in the DevTools has checkboxes to force element state](./assets/lesson-5/700-devtools.png)
>
> **Asset needed:** Video  <https://trilogyed.atlassian.net/browse/FSFO-79>

Using the `:focus` state, we can also visually highlight the form input that the user is currently typing in. Let's try this by adding the following rules to our style sheet:

```css
/* update existing rule with this declaration */
.form-input {
  background-color: rgba(255,255,255, 0.75);
}

/* create a new rule for focus state */
.form-input:focus {
  background-color: rgba(255,255,255, 1);
}
```

This makes the form input's default state to be slightly transparent, then switches to full opaqueness when the input is in focus:

![The focused input has different styles applied than the unfocused input below it](./assets/lesson-5/800-input-focus.png)

That looks pretty nifty, but it's not quite right yet. Take a closer look at the input that's in focus. There's an extra blue border around it, which looks terrible when paired with the rounded corners! This is the browser's default styling at play. So how do we fix it?

We can't add a `border-radius` to this outline, but we can remove it altogether by including a second declaration:

```css
.form-input:focus {
  background-color: rgba(255,255,255, 1);
  outline: none;
}
```

That's much better! Let's do something similar with the form input and text area in the Reach Out section. Go ahead and do this on your own until the Contact Us form looks like this:

![Contact Us form elements have different styling based on state](./assets/lesson-5/850-contact-us.png)

Remember to add a transparent default state and a separate `:focus` rule.

> **Hint:** You can consolidate your `:focus` rules with comma-separated selectors: `.contact-form input:focus, .contact-form textarea:focus`.

Here's how this CSS could look:


```css
.contact-form input, .contact-form textarea {
  /* add a transparent background here */
}

/* create a new css rule for focus state */
.contact-form input:focus, .contact-form textarea:focus {

}
```

So far, we've looked at hover, active, and focus states that depend on user interactivity. There are also other states an element can be in that have more to do with where it is in relation to others.

Earlier, we added a `border-bottom: 1px solid #39a6b2` declaration to `.step`. Delete that declaration for now and add it to a brand new CSS rule instead:

```css
.step:last-child {
  border-bottom: 1px solid #39a6b2;
}
```

Look at the page in the browser, and you'll notice that a border only appears under the last step now:

![Step 4 has a border while the steps above do not](./assets/lesson-5/900-last-child-border.png)

The `.step:last-child` selector means the CSS declarations will only apply to an element with class `step` that's also the last element in whatever container it's in. Let's revisit the HTML, where we have a `<section>` element with multiple child elements:

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

The `<div>` with "Step 4" in it is the last child of the `<section>` element. The `<div>` with class `flex-row` is the first child. This parent/child relationship lets us do some interesting things with pseudo-classes. Try this one instead, replacing the `.step:last-child` declaration with it:

```css
.step:nth-child(even) {
  border-bottom: 1px solid #39a6b2;
}
```

This adds a border to every even-numbered child of the `<section>` that also has the class `step`. In this case, that's Step 1 and Step 3. That probably seems confusing, because Step 1 is not an even number! But keep in mind that `<div class="flex-row">` is the first official child, so Step 1 is actually the second child (an even number).

> **Asset needed:** Graphic  <https://trilogyed.atlassian.net/browse/FSFO-103>

For Run Buddy, we need a bottom border applied to every step except the last one. We could approach this in a few ways. One solution is to apply the border to all steps and then remove it from the last one:

```css
.step {
  /* re-add alongside existing declarations */
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

> **Deep Dive:** Skim over the [MDN web docs on pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes) to see what else is available.

This is a great stopping point to `add`, `commit`, and `push` these changes to your branch.

## Customize the Checkboxes and Radio Buttons

The Run Buddy folks like the changes we've been making, but they're also wondering when we're going to update those ugly  default checkboxes and radio buttons. In the following picture, the browser's default styling for a checkbox is on the left while the requested styling is on the right:

![A default styled checkbox sits next to a customized checkbox](./assets/lesson-5/1000-checkboxes.png)

The one on the right is definitely an improvement, but getting there isn't exactly intuitive. Browsers don't let us change much about these elements. Some developers remove them entirely and use JavaScript to simulate their behavior, but it would be better practice to keep the radio buttons and checkboxes on the page so assistive technologies can still read them.

What we can do, though, is make the default buttons invisible and use CSS to create and position our own checkboxes and radio buttons on top of them. This is a good compromise because screen readers will ignore the CSS while still picking up the real buttons underneath.

Let's first restructure the HTML in the hero form to accommodate this approach:

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

Note that we wrapped each of the `<input>` elements and their labels in a `<span>` element. Next, perform a little CSS magic and make the inputs inside of these wrappers disappear:

```css
.checkbox-wrapper input, .radio-wrapper input {
  opacity: 0;
}
```

The `opacity` property works much like the alpha value in `rgba()`, where transparency is defined on a scale of 0.0 to 1.0. This made all of the inputs invisible, but if you inspect the page with the Chrome DevTools, you can see that the elements are still there:

![The highlighted element in the DevTools reveals its placement on the actual page](./assets/lesson-5/1100-hidden-button.png)

Before we add the custom buttons, we'll need to prep the `<label>` elements so the new buttons can fit inside:

```css
.checkbox-wrapper label, .radio-wrapper label {
    position: relative;
    left: 10px;
    margin: 10px;
    line-height: 1.6;
}
```

> **Rewind:** Earlier in our Run Buddy career, we needed to apply relative positioning to the hero section so the form inside could be positioned absolutely. The same principle applies here. The custom radio/checkbox buttons are going to sit absolutely inside of the labels.

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

This should produce the following result in the browser:

![The radio buttons and checkbox all appear as squares](./assets/lesson-5/1200-custom-inputs.png)

The `::before` pseudo-element lets us inject content into an element using CSS! It places this content before everything else that currently resides in the element. Pretty cool, right?

Here, we left the actual `content` property empty but used additional CSS properties to create a white square with a blue border. We then used absolute positioning to move this box on top of the invisible, original input element.

Unfortunately, we've made our new radio buttons square. Let's fix this with another CSS rule that targets only the `radio-wrapper` class:

```css
.radio-wrapper label::before {
  border-radius: 50%;
}
```

> **Pro Tip:** Setting the `border-radius` to `50%` is a quick way to turn an element into a perfectly round circle or oval.

Awesome, we're halfway there! Next, we need to define what the buttons look like when checked, or clicked. To do this, we'll need another pseudo-element to overlay on top of our first one. We can't have two `::before` pseudo-elements in the same place, but we can use the `::after` pseudo-element, like this:

```css
.radio-wrapper label::after {
  content: "";
  width: 18px;
  height: 18px;
  border-radius: 50%;
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

Similar to `::before`, we didn't put any text content in the `::after` pseudo-element. Instead, we used it to create a colored circle for the radio buttons and some weird L-shaped thingy for the checkbox:

![The radio buttons are filled in, and the checkbox has an L shape in it](./assets/lesson-5/1300-pseudo-after.png)

Alas, making an actual checkmark requires a bit of tinkering. Here, we created a rectangle that only has two borders, which makes it look like an L. With another CSS property, though, we can rotate this L just enough to make it look more like a checkmark.

Add this declaration to the `.checkbox-wrapper label::after` rule:

```css
transform: rotate(-58deg);
```

We can also make the radio buttons look a little nicer by replacing the solid background color with a gradient. Add this to the `.radio-wrapper label::after` rule:

```css
background-image: radial-gradient(circle, #39a6b2, #024e76);
```

These are looking pretty good:

![The radio buttons are filled with a gradient, and the checkmark in the checkbox is rotated correctly](./assets/lesson-5/1400-pretty-checked.png)

The only problem is that they're stuck in the "checked" state. But these are pseudo-elements&mdash;they don't have a checked state! However, the invisible inputs that we covered up do. Remember how clicking on a `<label>` element checks the input that's tied to it? That's still working. We just don't see it anymore. However, we can still tap into the state of these inputs using a pseudo-class:

```css
.checkbox-wrapper input:checked, .radio-wrapper input:checked {
  opacity: 1;
}
```

In the browser, click on the custom checkbox and notice how the visibility of the real checkbox is toggled on and off:

![The browser's default checkbox is visible behind the custom checkbox](./assets/lesson-5/1500-toggle-checkbox.png)

Obviously, this behavior isn't desirable. We want the state of this input to either show or hide the `::after` pseudo-element. Fortunately, CSS has sibling selectors that we can use to target an element that sits directly after another element. Let's rewrite the previous rule:

```css
.checkbox-wrapper input:checked + label,
.radio-wrapper input:checked + label {
  font-weight: bold;
}
```

> **Deep Dive:** To learn more, see the [MDN web docs on sibling selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator). 

Now the boldness of the `<label>` element is dependent on the `:checked` state of its sibling element! That's still not quite what we wanted, though. Let's give this one last shot:

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

It would seem that we're done, but as you scroll up and down on the page again, you might notice some weird overlapping with the header:

![The form elements appear in front of the page's header](./assets/lesson-5/1600-z-index.png)

Hmm. Why do the custom buttons and labels appear in front? The reason has to do with something called **stacking order**. As soon as you give an HTML element positioning (relative, absolute, sticky), stacking order comes into play. 

Think of HTML elements like pieces of paper that stack on top of each other, as this image shows:

> **Asset needed:** Graphic  <https://trilogyed.atlassian.net/browse/FSFO-101>

In our Run Buddy webpage, the header was the first element to receive positioning, so it sat on top. When we gave the form elements positioning, however, those "pieces of paper" were brought to the front and covered up the header. Fortunately, with the `z-index` property, we can change this stacking order, or "reshuffle the papers," so to speak.

Add the following declaration to the `header`:

```css
z-index: 9999;
```

A higher `z-index` brings the element to the front while a lower `z-index` pushes it to the back. Does the value `9999` seem like overkill in this case? A value of `z-index: 1;` would still fix our header/form problem. We might end up needing to add `z-index` to other elements, though, and we want to ensure the header is always on top, so we'll go with `9999` to avoid future conflicts.

Save your code if you haven't already and check your work in the browser. To truly appreciate `z-index`, open Chrome's DevTools and toggle the declaration on and off!

> **Asset needed:** Learnosity  <https://trilogyed.atlassian.net/browse/FSFO-102>

## Optimize Using Variables

Before we wrap up this GitHub issue, let's explore another newer (and really cool) feature of CSS called custom properties, or **variables**. If you skim over the CSS rules in `style.css`, you'll notice that there's a lot of repetition in the values we use. Run Buddy basically has three colors: yellow (`#fce138`), navy blue (`#024e76`), and teal (`#39a6b2`). We've been writing these colors a lot and will continue to do so as long as Run Buddy keeps requesting more features. What would be helpful is to define the colors once and then just reference a name like "primary-color." Well, with CSS variables, we totally can! The syntax is as follows:

```css
div {
  --favorite-color: blue;
  color: var(--favorite-color);
  box-shadow: 5px 5px 10px var(--favorite-color);
}
```

The custom property is defined using two hyphens (`--`) and then any name you'd like. Retrieving the custom property simply requires placing the name inside `var()` and can be used in place of any normal value. Here's another example:

```css
div {
  --size-small: 12px;
  --size-big: 50px;
  font-size: var(--size-small);
  margin: var(--size-big) var(--size-small);
}
```

In these examples, we've tied the custom properties only to `<div>` elements and their children. In most cases, we want our custom properties to be **global**, meaning any element or class selector can use them. 

We can accomplish this by using the `:root` pseudo-class. Add this new rule to the top of your style sheet:

```css
:root {
  --primary-color: #fce138;
  --secondary-color: #024e76;
  --tertiary-color: #39a6b2;
}
```

The `:root` pseudo-class targets the top-most parent element (most likely the `<html>` element) so that all other child elements will have access to any variables we declare here. Now that you've defined the three main colors for Run Buddy, go through the style sheet and replace every instance of `#fce138` with `var(--primary-color)`, every instance of `#024e76` with `var(--secondary-color)`, and so on.

> **Pro Tip:** In VS Code, a handy shortcut is to highlight the first instance of what you're looking for and press CTRL+D on Windows or Command+D on macOS to continually select the next instance it finds. With multiple instances selected, you can type/replace them all at once.

Save and refresh the browser to verify that nothing broke. If the page still looks the same, that means it worked! Try changing the three color properties in `:root` and marvel at how easy it is now to swap out color schemes.

Alas, we do still need to be mindful of other browsers. If you check the [compatibility chart for CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Browser_compatibility), you'll see that Internet Explorer, once again, has zero support. This is what the page now looks like for IE users:

![The colors on the page have reverted back to their browser defaults](./assets/lesson-5/1700-ie-screenshot.png)

Yuck. But Run Buddy assures us they aren't interested in supporting IE. Various [browser stats](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables) put overall IE usage in pretty low percentiles, and Run Buddy's market research suggests their users are more likely to be on Chrome or Safari. We're safe to leave our CSS variables in.

> **On the Job:** Browser requirements vary from client to client. If your company has many international users, where older operating systems like Windows XP are still fairly common, you will need to be much more mindful of Internet Explorer. If you do all of your development on macOS, don't be afraid to ask your company for a Windows laptop to test on, or vice versa!

## Merge It

That wraps up everything we needed to complete the CSS enhancements issue/feature. If you haven't already, stage and commit your work. The entire Git process should look like this:

1. Type `git status` to verify the correct files were modified.

2. Type `git add -A` or `git add .` to stage any changed files.

3. Commit the changes by using `git commit -m "final css touches"`.

4. Push the branch to GiHub by using `git push origin feature/aesthetics`.

5. Type `git checkout develop` to switch branches.

6. Merge the new feature/changes into the `develop` branch by typing `git merge feature/aesthetics`.

7. Push the updated `develop` branch to GitHub by typing `git push origin develop`.

We're not quite ready to merge into `master` yet. There's one last issue waiting for us in GitHub, which we'll take care of in the next lesson.

## Reflection

This lesson gave us a chance to experiment with some of the newer and cooler features of CSS, and made the Run Buddy landing page truly stand out. This greatly improved the user experience and gave legitimacy to Run Buddy as a modern company.

Granted, that doesn't mean we should apply shadows and gradients to every element on the page. Too much "wow" can be noisy. Used selectively, however, these visual tricks can add depth, highlight important information, and make the page feel more interactive and interesting.

In the next lesson, we'll look at another hot topic in the world of the web: animation. But first, let's revisit some of the highlights of this lesson:

* We added shadows with the `text-shadow` and `box-shadow` properties.

* We made elements transparent using `rgba()` values and `opacity`.

* We made the header "sticky" while accounting for Safari support with the `-webkit-` vendor prefix.

* We used pseudo-classes like `:hover` to style different states of an element.

* We used pseudo-elements like `::before` to create custom form buttons.

* We used `z-index` to change the stacking order of elements.

* We implemented CSS variables (aka custom properties) to consolidate our color values and optimize the codebase.

Wow, those are a lot of new skills! The good news is that you don't have to memorize them. They're always a quick Google search away.

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
