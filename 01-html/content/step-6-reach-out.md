# Reach Out and Convert

## Introduction

Way to go! Our landing page is nearly finished. Let's get to work on our last section of this page, and then we will finish up this project in the next lesson with a simple policy page to complete this project. First let's take a look at the mock-up and see what the Reach Out section looks like as a finished product.

![Reach-Out Mock-up](./assets/step-6/100-RO-mock-up.png)

Having met our trainers, our visitors are now motivated and pumped to get started on their fitness journey. In order to hit their goals, it's important to get started right away. So how do our visitors get in touch, to get in shape? This is where the our Reach Out section will come into play. This section is where our visitors can reach out directly to our sales staff to get their questions answered and hopefully convert into customers.

Take stock of some of the markup we will need to complete the last section on the landing page in the mock-up pictured above. Similarly to the previous sections, we have a heading, but in this case we also have a map and some contact info. Let's get started with the Reach Out section by starting with the markup provided to us and build our section piece by piece.

## Step 1: Building a Contact

Due to the specific styling needed for this section like the blue background color, yellow font, and more, we will need to select this `section` element to target our custom styles.

> **Do It Yourself**: Add attributes to our `<section>` and `<h2>` for our styling and navigational purposes.

> **Hint**: Look at the markup for the previous sections and headings for a great template of this step.

> **Hint**: Whenever a similar style pattern starts to emerge, it is important to recognize where code might be repeated and try to use the same classes again to replicate styles.

After having spent some thinking and typing your markup, it should now look like this.

```html
<!-- "reach out" section -->
<section id="reach-out" class="contact">
  <h2 class="section-title secondary-border">
    Reach Out
  </h2>
</section>
```

Let's unpack this code and see if our choices made sense.

> **Rewind**: The `id` attribute's value must _exactly_ match the value of the `href` attribute in the anchor tag in the `nav` element for the in-page navigation to work. Notice the `#` identifies the attribute as an `id`.

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

We created a new class called `contact` for the styling needed for this section. The section headings need consistency so using the same class for the `h2` makes a lot of sense as well. Having used a similar bottom border for our trainer section, we can reuse this class and thus save us a bit of writing and repeating by using the classes for `section-title` and `secondary-border`.

> **Heads up**: Important to notice how a second class was declared for the `h2` elements by simply adding another class name within the quotation marks. Whitespace is the delineation syntax for separate classes, id's, and almost all the attributes except for the `style` attribute since this is using CSS syntax.

## Step 2. Iframe, Uframe, we all frame for icecream.

First off, before we can start on the map, we need to wrap the body of this section into a `div` which we will call our contact container. We will do this because having a container enables us to restrain the child elements from floating arbitrary according to the document's flow and keep them in a constrained space. All the contact info will be related due to information type so keeping them together makes a lot of sense. Let's add a `class` called `contact-info` to this `div`.

Now let's take a closer look at this map and we will find that the requirements for the landing page specifies that this map needs to be interactive, meaning the visitors will be able to scroll and zoom the image.

We will need a special HTML element called an `iframe` which stands for inline frame. An `iframe` is able to nest browsing content, embedding an HTML page into the current page.
Let's nest the `iframe` into our contact container.  So in our case, we need a google map for a specific location so let's follow the following instructions to retrieve an `iframe` for our map address.

> **Linear Steps**: How to embed a Google Map

1. Enter your address in the search box at [Google Maps.](https://www.google.com/maps)
2. Click on the Share icon.
3. Choose the Embed tab
4. Click on the COPY HTML link to copy the `iframe` element.
5. Paste the `iframe` element into our `contact-info` container.

The markup should look like this:
```html
<div class="contact-info">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-74.0652613!3d40.2407219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
    frameborder="0"
    height="400"
    width="400"
    style="border:0"
    allowfullscreen
  ></iframe>
</div>
```

Let's unpack the configuration attributes for the `iframe` as well as talk about some of the other options available.

- **src**: The most important attribute is the `src` since without this, nothing will render. The `src` value is a URL path linking to the external website content that will be embedded. 

- **frameborder**: `iframe` elements have some styling properties built into the attributes such as height and width. This one allows a border by designating "1" and "0" for none. 
> **Legacy Lem**: `frameborder` is no longer supported by HTML5 and new browsers so we will use the `border` property from CSS for this style property. `frameborder` will offer legacy support however for older browsers.
- **style**: This is an inline style to set no border for newer browsers.
- **allowfullscreen**: Some attributes are properties that can be turned on by simply adding the attribute. `allowfullscreen` will offer a link to view the map on a new page in full screen mode. Notice how `allowfullscreen` doesn't have any value assignment. Another popular attribute that doesn't have a value assignment for example is `checked` for a `checkbox` input element.

> **Heads up**: Please note there are several other map `iframe` options besides Google like OpenStreetMap.org.  We also added the height and width declarations to render a larger image capable of interaction.

Let's take a look at our page now and see what this iframe looks like. Save to retain any changes.  Take a moment to play with the map using the zoom and scrolling functionality.

![iframe-map](./assets/step-6/200-iframe-html.png)
> **Activity**: Try replacing the iframe with a YouTube video or a gif at https://giphy.com/. The interactivity features are available because we have embedded a tiny website within your website.

## Step 3: Contacts are us

In this step we will be adding the company's contact information. According to the mock-up we will need a heading,some text, an address, a phone number, and email address.

> **Do It Yourself**: Create a container `div` that will hold this content then nest the child elements within the contact info container.

Take the necessary time to figure out this code yourself because this is not a race to finish but an exercise in learning.
```html
<div>
  <h3>Run Buddy</h3>
  <p>
    Any questions or concerns before signing up?
    <br/>
    Let us know and we'll be happy to talk to you!
  </p>

  <address>
    55 Main Street <br/>
    Some Town, Ca <br/>
    12345
  </address>

  <p>
    P: 555.RUN.BUDZ (555.786.2839)<br/>
    E: <a href="mailto:info@runbuddy.io">info@runbuddy.io</a>
  </p>
</div>
```
First, let's save and render this view in the browser.
![contact-info](./assets/step-6/400-contact-info-html.png)
Now let's breakdown this markup and introduce some new tags including some semantic HTML5 tags.
* **`<br/>`**: This tag represents a line break which do not have content or child elements, hence a great candidate to amke it a self-closing tag.
* **`<address>`**: Defines the contact information for the author or owner of the document or parent element.
* **`<a href="mailto:info@runbuddy.io">`**: Using the `mailto:` prefix in the anchor tag's `href` attribute opens the default mail client application upon clicking the link and then populates the address field with the email address listed in the `href` value.

> **Heads up**: The `div` with the `contact-info` class is a parent element to the `iframe` and contains the body or content of the Reach Out section.  Another `div` that is a child to this container will hold the actual text for the contact info.
> **Pause**: Think about how we can overwrite this property so the contact info container will sit next to our `iframe` as in our mock-up.
> **Answer**: Adjusting the `position` property to `inline` will allow this container to sit in the same row as the  `iframe`.

Keeping the contact info in the `contact-info` container will give us the columnar or vertical layout as noted in the mock-up. Think about how we will need to change these child elements in the `contact-info` container to be `block-level` so each element can stack on top of the next like a tower of blocks as in our mock-up.

Sure, the current section doesn't look quite right yet, but let's apply some CSS styling to fix the layout and colors.

## Step 4: Styles in Charge
> **Rewind**: CSS syntax
* **Declaration**: A CSS property and related value form a CSS declaration.
* **Declaration Block**: When multiple CSS declarations in a group are listed on a specific selector, this is called declaration block.
* **Rule**: A CSS selector with the declaration/s form a CSS rule.

> **Bundle of Tricks**: In this step, you will style the heading and section.  The goal is to style the heading, background color,and font color with the correct values to match our mock-up.  

> **Hint**: Working code is a great source of information.  Use the code you have already created in a previous section to help guide the rules for CSS syntax and try to reverse engineer the solution if you get stuck.

The new code should look like this:
```css
/* REACH OUT STYLES START */
.contact {
  text-align: center;
  background: #024e76;
}

.contact h2 {
  color: #fce138;
}

```
> **Dev Guru**: Trying and failing is often the case when learning new things.  The struggle and frustration are often the key inflection points that lead to breakthroughs in understanding.  

Just as we did in previous sections, we added CSS declarations to our CSS rule that targets our `contact` class to add some distinct style to our Reach Out section.  In this case we had to update the background color and center align our container which includes our map and contact info. 

In the second CSS rule above, that selects the `h2` element, there is no mention of the font size, border, or other display property, only the color.  
> **Pause**: Are the other style properties being declared and if so how?
> **Answer**: The other layout styles are from the CSS rule for the `section` element as well as the CSS rule for the `section-title` class declared in the `<h2>` tag.  The border color is declared by adding the `secondary-border` to the `<h2>` tag for the blue color.   

> **Pause**: If the font color for the `h2` was reassigned to red on the following line, which color would potentially render?

> **Answer**: If a CSS declaration for the same CSS selector is defined in a rule, the declaration positioned lowest in the cascading style sheet hierarchy will have precedent.  In this case the font color will be red since the last reassignment of the font color was red.

Please save and view in the browser to see style changes.

![contact-info](./assets/step-6/300-contact-css.png)

Looks like we are now ready to apply some style to the `iframe` and contact info container.

## Step 5: Contact Styles
It's time for the final styling steps.  We can use CSS to declare the height and width of the `iframe`.  We can now remove the inline styling that was declared in the `<iframe>` for the width and height since it is not best practice to have inline styling.

>**Pause**: What are a few reasons why inline styling is considered a bad practice?

>**Answer**: Principle of single responsibility is a doctrine in computer science for best practice design patterns that in this case would opine that styling should be in the style sheet and HTML should be left for purely HTML markup purposes.  This way if a style needs to be changed, this is acheived by looking in the style sheets and not in the markup.  Also note that reassignment of a CSS property isn't possible for inline styling since external style sheet references are over written by embedded and then inline styles respectively.

> **Do it Yourself**: In the next styling step we will need to find a way for the `iframe` and `div` containing the contact-info to sit in the same row, side by side, rather than on top of each other.  

> **Hint**: It will be important to select the `div` within the `div.contact-info` to update the  `display` property.

> **Hint**: To give the `div` a column or vertical layout, it will be important to declare width, text alignment, and the display property.


Your code should look something like this:
```css
.contact-info iframe {
  width: 400px;
  min-height: 400px;
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

It is important to note that the display property overwrote the default `display` property for a `div` to allow the `div.contact-info` to sit on the same row as the `iframe` by assigning the `display` to `inline-block`.  The `text-align` property is much like the alignment property in a word processing application, allowing the text to align on a particular side or justify the spacing to create a block of text.

In the following CSS rules, we will be applying some font color and spacing to the contact info as well as changing the link color to yellow.  Try out the spacing and coloring in Chrome's DevTools as a great way to try out different combinations.  Use the CSS box model to add some pixels to the different layers for each element.  

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
Note that the second CSS rule targets two different elements.  The comma separates the two selectors and identifies the following declaration block will apply to both CSS selectors.

Let's save, commit, and render the HTML page and review the work.
Congrats, you have completed the landing page and created a professional layout.  Now let's create our `policy.html` page next, to complete our mock-up requirements.

## Reflection
Let's recap some of the basic fundamentals we have learned in this lesson.

* **CSS selectors**: Learning how to select and target the specific element or group of elements is a critial first step since its not just the style, but *what* needs to be styled that is important.  Just imagine the color by numbers concept in coloring books.  Certain colors and styles should only go where needed which is why CSS selectors like classes are such great helpers.  These CSS selectors not only specify the target elements, but can be redeclared on other elements if a style design pattern needs duplication.  Changes to a style pattern such as color or sizing is simple due to the cascading nature of style sheets that allow reassignment of properities if occurring below the original assignment. 
* **CSS layout properties**: Understanding the layout of an element using the CSS box model is essential to website design.  This box representation is the layout of each HTML element that CSS can position, color, and style.
* **CSS display property**: The layout on the page for the elements can be manipulated by changing some of the default display properties to either align items on the same row and make items wrap to the next row.

Let's proceed to the last requirement for our mock-up to be complete by finishing this policy html page and finish our module project.


