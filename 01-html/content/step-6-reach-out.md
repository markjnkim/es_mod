# Lesson 6: Build the Contact Section

## Introduction

Way to go! The Run Buddy landing page is nearly complete. Along the way, you've learned a lot of new web development concepts that you'll use throughout your career as a developer. 

In case you forgot, here's the current state of the Run Buddy landing page: 

 **NEED IMAGE of webpage as it stands now**

## Preview

We have a new request from the folks at Run Buddy. The sales team wants us to build a contact section (called Reach Out) that invites visitors to ask questions or voice concerns. Like the sign-up form on the homepage, it's also another opportunity to generate sales leads. 

Just like we always do, let's start by looking at the mock-up: 

![Reach-Out Mock-up](./assets/step-6/100-RO-mock-up.png)

Here's a quick look at the build process, which (as usual!) starts with adding the HTML and then the styling:

1. Build the map.
2. Add Run Buddy's contact info.
3. Design the two-column layout.
4. Style the background, alignment, and typography.

## Build the Map

Let's start with building the map. Here's what we're aiming for:

![Inline Frame Mock-up](./assets/step-6/170-iframe-mock-up-html.png) <br />

Begin with the HTML for the Reach Out section that you set up in Lesson 1:

```html
<!-- "reach out" section -->
<section>
  <h2>Reach Out</h2>
</section>
```

Under the `<h2>` element, inside the Reach Out section, we need to add a `<div>` which will act as a container for the body of content in this section. All of the contact information is conceptually related, so wrapping it in a parent element enables us to constrain its flow. Let's add a `class` called `contact-info` to this `<div>`, which we can now call the **contact container**.

The requirements from the design team made it clear that this map needs to be interactive, meaning that visitors must be able to scroll, move, and zoom on the map. But how the heck do we make that happen?

Fortunately, there is a special HTML element called an `<iframe>` that helps us do just this! An `<iframe>`, which means **inline frame**, can nest browsing content and embed an HTML page into the current page. An `<iframe>` can add rich features to a website, including videos with playback controls, GIFs, and maps. (One caveat, however, is that not all websites support this feature.) 

In our case, the `<iframe>` will contain a Google Map of Run Buddy's address. Let's place the `<iframe>` inside the **contact container**. 

Follow these steps to retrieve an `<iframe>` for our address:

 > **Video:** [Google Map Iframe - Jira FSFO-134](https://trilogyed.atlassian.net/jira/software/projects/FSFO/boards/197/backlog?selectedIssue=FSFO-134)

The HTML for the map should look like this:

```html
<div class="contact-info">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-74.0652613!3d40.2407219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
    frameborder="0"
    style="border:0"
    allowfullscreen
  ></iframe>
</div>
```

Now add a height and width attribute to enable Google Maps' interactive controls:

```html
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-74.0652613!3d40.2407219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
    frameborder="0"
    height="400"
    width="400"
    style="border:0"
    allowfullscreen
  ></iframe>
  ```

> **Important:** We manually added the height and width attributes to the `<iframe>` in order to render a larger map that would allow us to test user interactivity; the default size was too small to enable controls.

Let's unpack the attributes for the `<iframe>`:

- **`src`**: This is the most important attribute, because without it, nothing will render. The `src` value is a URL path linking to the external website content that will be embedded. This should be familiar because it's the same attribute used in the `<img>` element.
- **`frameborder`**: By default, the browser will render an `<iframe>` element with a thin border. This attribute allows us to override that, effectively removing the border.
- **`style`**: This is an inline style to set no border, for newer browsers.
- **`allowfullscreen`**: Some attributes are properties that can be turned on by simply adding the attribute. The `allowfullscreen` attribute offers a link to view the map on a new page in full-screen mode. Notice how `allowfullscreen` doesn't have any value assignment. Another popular attribute that doesn't have a value assignment is `checked` for a `checkbox` input element.

> **Legacy Lem:** `frameborder` is no longer supported by HTML5 and new browsers, so we will use the `border` property from CSS to declare this property. We wouldn't typically worry about old-browser support, but Google likes to cover all its bases because they have a global reach and billions of visitors every day. Like all technology, browsers have changed over time. Browser enhancements, such as [tabbed browsing](https://en.wikipedia.org/wiki/Tab_(interface)) and [phishing filters](https://en.wikipedia.org/wiki/Phishing), have improved user experiences, but certain properties were deprecated or no longer supported in favor of offloading the work onto new technologies like CSS. For more information, see [Wikipedia on  browser histories and the browser wars](https://en.wikipedia.org/wiki/Browser_wars).

Let's take a look at our page now and see what the `<iframe>` looks like now: 

![iframe-map](./assets/step-6/200-iframe-html.png)

Take a moment to play with the map using the zoom and scrolling functionality. Pretty cool! 

These interactive controls aren't actually a part of the `<iframe>`, but rather helpful controls that Google adds when it detects a map being rendered inside an `<iframe>`.

> **Pro Tip:** It's important to note that with the power of the `<iframe>` also comes responsibility. Be careful when using an `<iframe>` from websites that might be copyrighted. Security risks should also be assessed because an `<iframe>` from a compromised website may prove to be dangerous.

## Create the Contact Info

In this step, we'll add Run Buddy's company contact information to the Reach Out section. The design team wants the contact info contained in a column format, so let's take a look at the mock-up and plan how we'll proceed.

Here's the mock-up of that section:

![Contact Info](./assets/step-6/250-contact-mock-up.png)

Let's add the heading and text first. Create a `<div>` container with an `<h3>` and a `<p>` element, and add their content. 

When you're done, the first part of the HTML following the `<iframe>` should look like this:

```html
<div>
  <h3>Run Buddy</h3>
  <p>
    Any questions or concerns before signing up?
    <br />
    Let us know and we'll be happy to talk to you!
  </p>
</div>
```

This part should've been more or less straightforward. We chose the `<h3>` element because, as you'll remember from earlier lessons, best practice states that headings with less importance should have a higher heading number. 

Let's take a look at a new element introduced in the above code: `<br />`. This element creates a line break. We're using a self-closing tag because this element has no content or child elements. We could've just added another `<p>` element for the second line of text, but in programming, sometimes there are multiple "correct" solutions and we happened to choose `<br />`.

Now save and render this in the browser. You should see something like this:

![contact-heading](./assets/step-6/600-contact-heading-html.png)

The next step will be to add the address content to the HTML using another new (to us) element called `<address>`.

The `<address>` element defines the contact information for the author/owner of a document or an article. If the `<address>` element is inside the `<body>` element, it represents contact information for the document. Our `<address>` element will contain Run Buddy's physical address, phone number, and email address. Please note that the design team requires that the email address be a link that opens the user's default email application and begins a new email with the "To:" field populated with Run Buddy's email address, "info@runbuddy.io". 

Go ahead and add the following HTML:

```html
<div>
  <h3>Run Buddy</h3>
  <p>
    Any questions or concerns before signing up?
    <br />
    Let us know and we'll be happy to talk to you!
  </p>
  <address>
    55 Main Street <br/>
    Some Town, Ca <br/>
    12345<br />
    P: 555.RUN.BUDZ (555.786.2839)<br/>
    E: <a href="mailto:info@runbuddy.io">info@runbuddy.io</a>
  </address>
</div>
```

Let's break down the above code: 

* **`<address>`**: Defines the contact information for the author or owner of the document or parent element.
* **`<a href="mailto:info@runbuddy.io">`**: Using the `mailto:` prefix in the anchor tag's `href` attribute instructs the browser to open the default mail client application upon clicking the link and then populates the address field with the email address listed in the `href` value. For more information, see the [MDN web docs on the anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

Let's save and then render again in the browser:

![contact-info](./assets/step-6/630-contact-info-html.png)

Great! All our content is there, so it's time to apply some CSS styling to jazz it up. This is also a great time to `add` and `commit` your additions to the page.

## Add Some Class

Now that the HTML for this section has been added, its time to flex our CSS muscles again. The first step is to add classes to the HTML elements that we wish to target for styling in our style sheet.

Let's practice some of the skills we've learned in previous lessons on the HTML that's already in place, beginning with the Reach Out section from Lesson 1:

```html
<!-- "reach out" section -->
<section>
  <h2>Reach Out</h2>
  ...
</section>
```

Currently, the link in our `nav` element doesn't work, so let's fix it:

```html
<nav>
  <ul>
    ...
    <li>
      <a href="#reach-out">Reach Out</a>
    </li>
  </ul>
</nav>
```

Add the classes and id's to the `<section>` and `<h2>` tags and the corresponding CSS rules to create the blue background (`#024e76`), yellow heading font color (`#fce138`), center alignment, and the id anchor for the link in our `<nav>` element to look like this: 

![Styling the Reach Out Section](./assets/step-6/300-contact-css.png) 

> **Hint:** Look at the HTML for the previous sections and headings for a workable template for this step. Whenever a style pattern starts to emerge, it is important to recognize where code might be repeated and try to assign that class to the element to replicate the styles.

After having spent some time adding classes to the HTML, the Reach Out section should now look something like this:


```html
<!-- "reach out" section -->
<section id="reach-out" class="contact">
  <h2 class="section-title secondary-border">
    Reach Out
  </h2>
</section>
```

Let's unpack this solution and see if our choices made sense. We created a new class called `contact` for this section's blue background color and alignment. We reassigned the class `section-title` to the section heading because the font-size, margin, padding, and border declarations are the same. Only the font color needed to be changed, so we only need to write one CSS declaration instead of five — quite a nice optimization. 

```css
.section-title {
  font-size: 55px;
  display: inline-block;
  padding: 0 100px 20px 100px;
  border-bottom: 3px solid;
  margin-bottom: 35px;
  color: #024e76;
}
```
If, however, three or four of these declarations were not complimentary to our heading for this section, we probably would've needed to rewrite the rule.

What else did we do here? Knowing that we need a light-blue bottom border, we added the `secondary-border` class to the `<h2>` element. And we added the id `reach-out` to the `section` element to connect to the `"#reach-out"` link in `nav` element.

Now let's examine the solution for the CSS rules:

```css
/* REACH OUT STYLES START */
.contact {
  text-align: center;
  background: #024e76;
}

```
Let's save and render our changes into the browser to review our current progress.

![Contact Info - Heading](./assets/step-6/640-heading-blue-css.png)

Just as we did in previous sections, we added CSS declarations to the CSS rule that targets the `contact` class to add some distinct style to the Reach Out section. For this rule, we updated the background color and center-aligned the `<div>` container that includes our map and contact info. 

Our section heading appears to be missing, however, and the design team would certainly not be happy about that! What did we forget to do? Ah yes, we were supposed to reassign the heading font color to yellow. 

Let's add that now:

```css
.contact h2 {
  color: #fce138;
}
```

Save and view the page in the browser to see your changes:

![contact-info](./assets/step-6/300-contact-css.png)

Very nicely done! Now it looks like we're ready to style the `<iframe>` and contact info container.

## Add Styles to the iframe and Contact Info

It's time for the final styling steps to complete the Reach Out section. When this is done, you'll be finished with the entire landing page! 

Let's start with the `<iframe>` and create the CSS rule that will give us some of the size dimensions. But wait, didn't we do that already in the HTML with the attributes? 

We can use CSS to declare the height and width of the `<iframe>`. Please remove the attributes that were declared in the `<iframe>` for the width and height. 

>**Pause:** Why is inline styling considered a bad practice?

>**Answer:** The Principle of Single Responsibility is a doctrine in computer science for best practice [design patterns](https://en.wikipedia.org/wiki/Software_design_pattern) that (in this case) would suggest that styling should be contained to the style sheet and the HTML file reserved entirely for HTML markup purposes. This way, if a style needs to be changed, we would go to the style sheets and not the HTML. Also note that reassignment of a CSS property isn't possible with inline styling because external style sheet references are overwritten by inline styles.

In this next styling step, we'll give the `<iframe>` a height and width.  

> **Hint:** When creating a new rule, always start with the selector. Think about the element you want to target. 

Your code should now look something like this:

```css
.contact-info iframe {
  width: 400px;
  height: 400px;
}
```

This might be a little different than your implementation, so let's break down this rule a little further to see the "why" of our choices.

`.contact-info iframe` was chosen, but `<iframe>` would've worked just as well since there is only one `<iframe>` in this project. But what happens if another `<iframe>` is added, either in this HTML file or in any HTML file linking to this style sheet? This rule would style every `<iframe>` element, which could add styling where it wasn't wanted and lead to surprising results. 

A type selector is a CSS selector, like in this example with `<iframe>`, that selects every HTML element of that type. This is a potentially dangerous choice due to possible side effects (unless a global rule is needed). By using the class as the CSS selector, also called a **class selector**, we can safely target the `<iframe>` that is a descendant or child of the element with this class. 

## Design a Multi-Column Layout

The design team has requested that the map and contact information containers sit next to each other in a two-column layout. Let's take a peak at this in the mock-up and figure out what to do from there:

![Two-Column Layout](./assets/step-6/650-two-column-css.png)

How would you go about doing this? Give it a go on your own.

> **Hint:** Create a CSS rule with the *direct child* `<div>` nested in the `<div>` parent element with the class `.contact-info` to reassign the `display` and `width` properties.

Your code should look something like this:

```css
.contact-info iframe {
  width: 400px;
  height: 400px;
}

.contact-info div {
  width: 410px;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  margin: 30px 0 0 60px;
  color: white;
}
```
It is important to note that in the CSS rule above targeting the child `<div>`, we overwrote the default `display` property for a `<div>` and changed it from `block` to `inline-block`. This allows the `.contact-info` container to sit on the same row as the `<iframe>` element *and* allows us to assign a width, something that the property value `inline` would not let us do.

Another important property used here is the `vertical-align` property.

> **Pause:** Please take a moment think about the purpose of the `vertical-align` property and what problem it solves here.

> **Answer:** Because the content of this `<div>` naturally rests at the bottom of the container, we need the `vertical-align` property to lift this content up to the top. In conjunction with the `text-align` property, this allows the contact information to begin at the top of the `<div>` and start aligned from the left for an easy-to-read layout.

Let's take a break to see how our code is rendering in the browser. Also, now is a good time to `add` and `commit` because you just made a big leap in progress.

In the following CSS rules, let's refer to the mock-up and see what our following steps must be. Looks like we will be applying some font color (`#fce138`) and size to the `<h3>`, adding spacing, line height, and font size to our contact info content, and changing the link color to yellow (`#fce138`). 

Try out the spacing and coloring in Chrome's DevTools as a great way to try out different combinations. Use the CSS box model to add some pixels to the different layers for each element to see what looks best. 

Remember that the CSS box model is in the Styles panel in DevTools, as shown here:

![DevTools-CSS-box-model](./assets/step-6/700-DevTools-css.png)

> **Hint:** Use the property for `line-height` to adjust how to stretch out or shrink the text to find the best matching measurement that aligns with the mock-up. 

Ta-da! Your completed CSS rules for the Reach Out section should look like this:

```css
.contact-info h3 {
  color: #fce138;
  font-size: 32px;
}

.contact-info p, .contact-info address {
  margin: 20px 0;
  line-height: 1.5;
  font-size: 20px;
  font-style: normal;
}

.contact-info a {
  color: #fce138;
}

/* REACH OUT STYLES END */

```
Note that the second CSS rule targets two different elements. The comma separates the two selectors, indicating that the subsequent declaration block will apply to both CSS selectors.

Save the file, reload `index.html` in the browser, and behold the beautiful result!

Congrats! You've completed the landing page and created a professional layout. Now is a great time to add, commit, and push your work to GitHub. 

## Reflection

Modern websites demand interesting ways to deliver content. The skills you learned today will allow you to deliver that in your career as a web developer. You continued to build on your skills by tackling more advanced HTML elements, including building an interactive map and implementing a multi-column layout. Nice job! 

Let's recap some of the highlights from this lesson:

* You gained more experience with the webpage build process, starting with the HTML and then adding style. 

* You reused CSS rules by applying CSS class selectors to achieve an efficient and clean codebase without repeating code. 

* You created a multi-column layout by creating container elements to a set width and declaring the `display: inline-block;`. 

* You implemented a unique HTML element called an `<iframe>`, which allows nested browser content from another HTML page to be embedded into the current one. This offers user interactivity and interoperability with another website, and adds rich visual features without needing to write a lot of code. 

In the next lesson, you'll get a chance to add a page to the site when you create Run Buddy's Privacy Policy page.

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
