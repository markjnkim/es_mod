# Lesson 6: Contact Us 

## Introduction

Way to go! The Run Buddy landing page is nearly complete and along the way we have learned a lot of new web development concepts. We have received a request from our sales team to build a contact section that can direct users' questions and generate potential sales leads. 
Let's take a look at our mock-up to see what we will be building for this lesson.
![Reach-Out Mock-up](./assets/step-6/100-RO-mock-up.png)
Here's a quick look at the build process which starts with adding the markup and then the styling.
1) Add a map
2) Add Run Buddy's contact info 
3) Design two column layout
4) Style section background, alignment, and typography

## Building the Map
Take a close look at the map to get an idea of what we are building in this step.<br />
![Inline Frame Mock-up](./assets/step-6/170-iframe-mock-up-html.png) <br />

Begin with the markup that has been provided for us from Lesson 1.
```html
<!-- "reach out" section -->
<section>
  <h2>Reach Out</h2>
</section>
```
Under the `h2` element, inside our Reach Out section, we need to add a `div` which we will act as a container for the body of content in this section. All of the contact information is conceptually related and wrapping them in a parent element, the container, enables us to constrain their flow to the bounds of that parent. Let's add a `class` called `contact-info` to this `div` which we can now call the *contact container*.

The requirements from the design team made it clear that this map needs to be interactive, meaning the users must be able to scroll, move, and zoom on the map. But how the heck are we going to do that?
Thankfully, there is a special HTML element called an `iframe` we can use. An `iframe`, which stands for inline frame, is able to nest browsing content and embed an HTML page into the current page. An `iframe` can add rich features to our website including videos with playback controls, gif's, and of course maps, but one caveat is that not all websites offer this feature. 
Let's place the `iframe` inside the *contact container*. In our case, we will use Google Maps to display Run Buddy's address so let's follow the instructions to retrieve an `iframe` for our address.

> **Video Walkthrough**: For the following steps:

1. Enter your address in the search box at [Google Maps.](https://www.google.com/maps)
2. Click on the Share icon.
3. Choose the Embed tab
4. Click on the COPY HTML link to copy the `iframe` element.
5. Paste the `iframe` element into our `contact-info` container.

![google-map](./assets/step-6/500-google-map-html.png)

The markup should look like this:
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

Let's add a height and width attribute to enable of Google Maps interactive controls.
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
 Now let's unpack the attributes for the `iframe` as well as talk about some of the other options available.

- **src**: The most important attribute is the `src` since without this, nothing will render. The `src` value is a URL path linking to the external website content that will be embedded. This should be familiar since it is the same attribute used in the `img` element.
- **frameborder**: By default, the browser will render an `iframe` element with a thin border. This attribute allows us to override that default, effectively removing the border.
- **style**: This is an inline style to set no border for newer browsers.
- **allowfullscreen**: Some attributes are properties that can be turned on by simply adding the attribute. The `allowfullscreen` attribute will offer a link to view the map on a new page in full screen mode. Notice how `allowfullscreen` doesn't have any value assignment. Another popular attribute that doesn't have a value assignment for example is `checked` for a `checkbox` input element.
> **Legacy Lem**: `frameborder` is no longer supported by HTML5 and new browsers so we will use the `border` property from CSS to declare this property. We wouldn't typically worry about old browser support however Google likes to cover all their bases. Browsers have changed over time much like any technology. Browser enhancements such as tabbed browsing and phishing filters improved user experiences, but certain properties were deprecated or no longer used or supported in favor of off loading this property onto new technologies like CSS. For more information about browser histories and the browser wars please check [Wikipedia](https://en.wikipedia.org/wiki/Browser_wars).

> **Heads up**: We had to manually add the height and width attributes in the `iframe` to render a larger image capable of testing interactivity because the default sizing was too small to enable controls.

Let's take a look at our page now and see what the `iframe` looks like. Take a moment to play with the map using the zoom and scrolling functionality.

These interactive controls aren't actually a part of the `iframe`, but rather helpful controls that Google adds to the page when it detects the map is being rendered inside an `iframe`.

![iframe-map](./assets/step-6/200-iframe-html.png)
> **Pro Tip**: It is important to note that with the power of the `iframe` also comes with responsibility. Be careful with the use of an `iframe` with any copyrighted websites. Security risks must also be assessed since an `iframe` from a compromised website may prove to be dangerous.
## Creating our Contact Info

In this step we will be adding Run Buddy's company contact information to the Reach Out section. The design team wants the contact info contained in a column format so let's take a look at the mock-up and plan how we will proceed.<br />
![Contact Info](./assets/step-6/250-contact-mock-up.png)<br />
In the next step, let's add our heading and text first and then add the address information in the following step.

> **Activity**: Create a `div` container and its child elements like an HTML heading element and a `p` element for the following two lines of text.  
> **Solution**:
The first part of the HTML code following the `iframe` should look similar to this:
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
This part should've be more or less straight forward. We chose an `h3` element because best practice states that headings with less importance in the document should be receive a higher heading number designation. Let's take a look at a new element introduced here called the `<br />` element. This HTML element creates a line break. We are using a self closing tag since this element has no content or child elements. We could've just added another `p` element for the second line of text, but in programming, sometimes there are multiple "correct" solutions.

Now let's save and render this view in the browser.

![contact-heading](./assets/step-6/600-contact-heading-html.png)

Our next step will be adding the address content to our markup using another new HTML element called `address`.
The `address` element defines the contact information for the author/owner of a document or an article. If the `address` element is inside the `body` element, it represents contact information for the document. Inside the `address` element will be the physical address as well as the phone number and email address. Please note  that the design team requires the email address to be a link that opens the user's default email application and begins a new email with the "To:" address input field populated with the Run Buddy's email address, "info@runbuddy.io". 

Let's add this markup and then explain it.

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

* **`<address>`**: Defines the contact information for the author or owner of the document or parent element.
* **`<a href="mailto:info@runbuddy.io">`**: Using the `mailto:` prefix in the anchor tag's `href` attribute instructs the browser to open the default mail client application upon clicking the link and then populates the address field with the email address listed in the `href` value. Review the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) to look at some of the other options available for the anchor element.

Let's save and then render in the browser.
![contact-info](./assets/step-6/630-contact-info-html.png)
Sure, the current section doesn't look quite right yet, but now that the HTML is finished, let's apply some CSS styling to fix the layout and colors.
This is also a great place to `add` and `commit` our new additions to the page.

## Adding Some Class
Now that our markup has been added to our website, its time to flex our CSS skills again. The first step will be to add classes to the HTML elements we wish to target for styling in our style sheet.
Let's practice some of the skills we have learned in the previous lessons to the markup that has already been provided for us.
```html
<!-- "reach out" section -->
<section>
  <h2>Reach Out</h2>
  ...
</section>
```
Currently the link in our `nav` element doesn't work. 
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
> **Activity**: Add the classes and id's to the `<section>` and `<h2>` tags and the corresponding CSS rules to create the blue background(#024e76), yellow heading font color(#fce138), center alignment, and the id anchor for the link in our `nav` element to look like this: <br />
![Styling Reach Out Section](./assets/step-6/300-contact-css.png) <br />
> **Hint**: Look at the markup for the previous sections and headings for a great template for this step. Whenever a similar style pattern starts to emerge, it is important to recognize where code might be repeated and try to assign that class to the element to replicate the styles.

After having spent some time thinking and adding classes to our markup, our section should look something like this.
> **Solution**:
```html
<!-- "reach out" section -->
<section id="reach-out" class="contact">
  <h2 class="section-title secondary-border">
    Reach Out
  </h2>
</section>
```

> Let's unpack this solution and see if our choices made sense. We created a new class called `contact` for the specific styling needed for this section's blue background color and alignment. The section heading reassigned the class `section-title` because most of the styling needed has been done for us such as the font-size, margin, padding, and even border. Only the font color for the `h2` element will need to be reassigned, but that's better than   riting this CSS rule since we will reuse five of the CSS declarations. 
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
If however three or four of these declarations were not complimentary to our heading for this section, we probably would've needed to rewrite the rule.

> Knowing we need a light blue bottom border, we added the `secondary-border` class to the `h2` element. 
The id `reach-out` was also added to the `section` element to connect to the "#reach-out" link in `nav` element.

Now let's examine the solution for the CSS rules.
```css
/* REACH OUT STYLES START */
.contact {
  text-align: center;
  background: #024e76;
}

```
Let's save and render our changes into the browser to review our current progress.
![Contact Info - Heading](./assets/step-6/640-heading-blue-css.png)
Just as we did in previous sections, we added CSS declarations to our CSS rule that targets our `contact` class to add some distinct style to our Reach Out section. For this rule, we updated the background color and center aligned the `div` container which includes our map and contact info. Our section heading appears to be missing however and the design team wouldn't be very pleased with this result.
What did we forget to do?
Ah yes, we were supposed to reassign the heading font color to yellow. 
Let's add that now.
```css
.contact h2 {
  color: #fce138;
}
```
Please save and view in the browser to see style changes.

![contact-info](./assets/step-6/300-contact-css.png)

Very nicely done. Now it looks like we are ready to style the `iframe` and contact info container.

## Adding Styles to our iframe and contact info
It's time for the final styling steps to complete not only our Reach Out section, but also the landing page as well. 

Let's start with the `iframe` and create the CSS rule that will give us some of the size dimensions. But wait, didn't we do that already in the markup with the attributes? 

We can use CSS to declare the height and width of the `iframe`. Please remove the attributes that were declared in the `<iframe>` for the width and height. 

>**Pause**: What are a few reasons why inline styling is considered a bad practice?

>**Answer**: Principle of single responsibility is a doctrine in computer science for best practice design patterns that in this case would suggest that styling should be in the style sheet and HTML should be left for purely HTML markup purposes. This way if a style needs to be changed, we would go to the style sheets and not in the markup. Also note that reassignment of a CSS property isn't possible for inline styling since external style sheet references are over written by embedded and then inline styles respectively.

> **Activity**: In this next styling step we will give the `iframe` a height and width. Please add this rule to the style sheet. 
> **Hint**: When creating a new rule, we always start with the selector. Think about the element we wish to target. 
> **Solution**:
Your code should now look something like this:
```css
.contact-info iframe {
  width: 400px;
  height: 400px;
}
```
So this may be a little different than your implementation so let's break this rule down a little further to see the "why" of our choices.
>  **Heads Up**: `.contact-info iframe` was chosen, but `iframe` would've worked just as well since there is only one `iframe` currently in this project. But what happens if another `iframe` is added, either in this HTML file or in any HTML file linking to this style sheet? This rule would style every `iframe` element which could add styling where it wasn't wanted leading to surprising results. A type selector is a CSS selector, like in this example with `iframe`, that selects every HTML element of that type. A potentially dangerous choice due to possible side effects unless a global rule is wanted. By using the class as the CSS selector, also called a class selector, we can safely target the `iframe` that is a descendent or child of the element with this class. 

## Designing a Multi Column Layout
The design team has requested the map and contact information containers to sit side by side in a two column layout. Let's take a peak at this in the mock-up and figure out what to do from there.

> **Activity**: Create a two column layout with the `iframe` and the `div` containing the contact information to sit in the same row, side by side, rather than on top of each other as seen here:<br />
![Two Column Layout](./assets/step-6/650-two-column-css.png)
<br /> 

> **Hint**: Create a CSS rule with the *direct child* `div` nested in the `div` parent element with the class `.contact-info` to reassign `display` and `width` properties.


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
It is important to note that in the CSS rule above targeting the child `div`, we overwrote the default `display` property for a `div` and changed it from `block` to `inline-block`. This allows the `.contact-info` container to sit on the same row as the `iframe` element *and* allows us to assign a width, something that the property value `inline` would not let us do.

Another important property used here is the `vertical-align` property.
> **Pause**: Please take a moment think about what the purpose of the `vertical-align` property and what problem it solves here.

> **Answer**: Because the content of this `div` naturally rests at the bottom of the container, we need the `vertical-align` property to lift this content up to the top. In conjunction with the `text-align` property, this allows the contact information to begin at the top of the `div` and start aligned from the left for an easy-to-read layout.

Let's take a break to see how our code is rendering in the browser. It is good practice to add and commit when you make a great step in progress.

In the following CSS rules, let's refer to the mock-up and see what our following steps must be. Looks like we will be applying some font color(#fce138) and size to the `h3`, adding spacing, line height, and font size to our contact info content, and changing the link color to yellow(#fce138). Try out the spacing and coloring in Chrome's DevTools as a great way to try out different combinations. Use the CSS box model to add some pixels to the different layers for each element to see what looks best. 
Remember the CSS box model is in the Styles panel in DevTools.
![DevTools-CSS-box-model](./assets/step-6/700-DevTools-css.png)

> **Hint**: Use the property for `line-height` to adjust how to stretch out or shrink the text to find the best matching measurement that aligns with our mock-up. 

Your completed CSS rules for the Reach Out section should look like this:

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
Note that the second CSS rule targets two different elements. The comma separates the two selectors, indicating that the following declaration block will apply to both CSS selectors.

Let's save the file and reload `index.html` in the browser. 
Congrats, you have completed the landing page and created a professional layout. Now is a great time to add, commit, and push your work to your repo. 



## Reflection
Nice job! In this lesson, we are continuing to build upon the our HTML and CSS skills by creating new content and tackling more advanced HTML elements. We built an interactive map as well as implemented a multi-column layout. 

Next we will create our `policy.html` page, to complete our mock-up requirements, but first let's recap some of the highlights from this lesson.

* We gained more experience with the build process, starting with the markup and then adding style. We were able to reuse CSS rules by applying CSS class selectors to achieve an efficient and clean codebase without repeating code. Getting into the habit of writing code that is concise is a best practice that takes time to master but is worthwhile because of the improved readability and maintainability.
* We created a multi-column layout by creating container elements to a set width and declaring the `display: inline-block;`. An important skill that will be used often because modern websites demand interesting ways to delivery content.
* We implemented a unique HTML element called an `iframe` that allows nested browser content from another HTML page to be embedded into the current one. This can offer some user interactivity and interoperability with another website that adds rich visual features without adding a lot of code.