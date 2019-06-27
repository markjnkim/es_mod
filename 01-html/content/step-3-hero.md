# Part 3 - Building a Hero

## Our Hero's Purpose

Now that we have the header and footer for our page, let's get started with the body or content of our website.  
If we take a good look at our mockup, we can see that each part of our landing page seems to be separated by a different color block. This serves as a stylistic way to communicate to the reader that each part conveys a different purpose or information type. Let's continue by building each block piece by piece until we have completed our first website.

The first block is considered the most important section because this will be seen by every visitor to our landing page. This is the hero section and is considered as "above the fold", hence has a particular task; pique the curiosity of the visitors to keep reading, scrolling, clicking, and engaging with the website.

> **The More You Know**: Due to their large paper format, newspapers termed the phrase "above the fold" for the upper half of the front page that often contained the most important news story, headline, and picture. Many newspaper terms have been adopted into the language of the web, including semantic HTML elements like the terms for a section, aside, header, footer, and article.

Think of the hero section as the banner, headline, or billboard of our site. But before we can add our pizzazz, let's first write some HTML code that will provide the structure and content. As can be seen from our mockup, we have input fields contained inside a box within this block. This is considered a "call to action" which means we are making a request to the reader, in our case, to give their contact information so we can maintain engagement. Placing the information request in the hero section reveals the strategic importance of retaining user info.

## Hero Construction
### Comments
Let's begin coding our hero section by going to VS Code and opening our `index.html` file. Let's begin by creating a comment in HTML. Comments are important instructional and organizational markers that will not only help us remember what this section's purpose was, but also delineates or differentiates each block from the previous or upcoming blocks. It is good to think about your code as a living document that will change with time with other developers coming along making changes or adding features. Think about how Apple.com or Facebook.com has changed over the years. Comments will speed up the process for other developers or a future you to remember the "why" of each section of your code. Writing code is a time consuming process so making it more organized and labelled is a great habit to get into.

```html
<!-- hero section-->
<section></section>
<!-- end of hero section -->
```

We have chosen to use the `section` element because in HTML a `section` represents a part of a document that is thematically grouped like a section in a newspaper. The `section` element will encompass the entire hero section and will be the parent element that contains the children elements needed for this part of the document including the heading and form. As you can now foresee by viewing the mockup, each color blocks will designate a unique `section`. To target our hero section to make it look unique from the other sections we will include the `class` attribute in our `section` element known as a CSS selector. 

To make our hero section unique and include a custom background image, we will need to add an HTML attribute in our `section` element called a class.  
A `class` is a special attribute that can be used on any HTML element and is used by CSS and JavaScript to perform certain tasks or target certain styling characteristics.
Let's add the `class="hero"` to our section element.
`<section class="hero">`

> **Deeper Dive**: HTML5 Semantic Elements help distinguish each part of the document and it's function in relation to the document overall. For a closer look check out [this link](https://www.w3schools.com/html/html5_semantic_elements.asp)

At this point we are not going to worry about our background images, colors, borders, or placement yet since these will all be addressed in the second half in the styling section, but will focus on content and structure in our HTML.

As seen in the mockup, our hero section will contain a large background picture with input fields. But before we can place our inputs, can you see any content or HTML elements that will be needed?

> **Hint**: Look for any content like text, heading, and especially distinct elements like boxes?

We will need to create a `div` to create the structure of our yellow box. In order to ensure that our `div` is nested or contained within the `section`, placement of our `div` tags are critical. Go ahead and place a `div` element where you think it should go. Let's also add the class attribute, `hero-form` since we will need to target this `div` later to add custom styling.

> **Heads Up**: HTML works on a relatively simple set of rules. What is critical to understand is the use of opening and closing tags. An HTML element can be nested within another element, but must be completely contained, meaning the opening and closing tags must both be inside the parent element.

```html
<section>
    <div>
</section>
   </div>
```

this is uninterpretable by the browser and will not render as you would like. HTML will not give you an explicit error message, but simply render incorrectly. The proper or correct way to nest elements is by enclosing the opening and closing tags within the parent element.

Great! Your `index.html` file should now look something like this.

```html
<section class="hero">
  <div class="hero-form"></div>
</section>
```

> **Heads up**: Notice how the indentation helps communicate which elements are nested.

Now that we have our `div` element that will give us the structure of the yellow box in our mockup, let's create the remaining elements within this box that will give us our heading, text, content, input fields, and button.

Given some of the elements we have learned to this point, which element would go next?

> **Hint**: Remember all the elements within the yellow box must be contained within the `div`, since they are all nested within this box.

For our heading, let's include the `h3` element. This was chosen because we are able to use some of the browser's styling defaults to size our heading. Get a feeling of the other possible `h` tags to get a feeling of the relative differences in size. There are 6 in total.

Now let's put our content within the `h3` tags from our mockup.
The following text is actually just basic text so let's wrap that in a `p` tag.

Your code should now look something like this.

```html
<section class="hero">
  <div class="hero-form">
    <h3>Get Started Today</h3>
    <p>Fill out this form and one of our trainers will schedule a consult</p>
  </div>
</section>
```

Let's take a look now at our browser by selecting the `Open in Default Browser` option when right clicking the mouse on the `index.html` page.(alteratively <Alt>B[Windows] or <Option>B[Mac])

> **Pro Tip**: It is strongly recommended to try and learn the keyboard shortcuts since they improve speed and efficiency.

Your page should now look something like this:
![hero-heading](./assets/step-3/100-heading-html.png)

So not yet exactly what we are looking for stylistically speaking, but this is a proper workflow and we are laying the groundwork first.  Just like building a house, the foundation and frame must go up first, only then can the rest be built.  The decorating or styling always comes last.

> **Pro Tip**: It is good practice to check on your work in the browser after each step to ensure you are going in the right direction and fix any issues before writing more code and adding any additional errors.

## Web Forms
 
### Text Fields

We have been filling out forms our entire lives, even for this class a few forms needed to be completed.  Now we will be learning how to build our own forms and the multitude of input types our forms can contain.  Our next bit of code deals with the input fields and receiving the user's information. Can you count how many input elements will be needed here?

In total we will need five input elements. Three text fields, a radio button, and a checkbox. We will also need a button that will act as our data submission trigger or event.

> **Deeper Dive**: There are many more `input` element types intended for a variety of uses to receive user information, for example a drop down or a file upload. Dig deeper and learn more about [input element types here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

We will place these inputs and the submit button within a `form` element.
The `form` element represents a document section that contains interactive components or controls for submitting user information.

Let's take a good look at an `input` element and its various attributes.

```html
<input type="text" placeholder="Your Name" name="name" class="form-input" />
```

The `type` attribute relates to what kind of input element we are using. Here we want a text field, which is also the default value. A `placeholder` offers a hint or label within the text field itself, but will not be submitted if this field is left blank. The `name` attribute names this element so it can be later referenced when the data is submitted. The `class` attribute allows our CSS styling to target any one or group of elements that need the same style. In our example we will need three text inputs with the same exact look. Therefore, all three `input` elements will have the same class attribute value `form-input` which allows for less typing and more efficient coding. Notice at the end of this tag is a forward slash. Can you think about what this slash does?

> **The More You Know**: Confusing which is forward slash vs backward slash? [This](https://sites.cs.ucsb.edu/~pconrad/topics/BackslashVsForwardSlash/) might clear things up.

This is known as a self closing tag.  Certain elements like an `input` element do not contain any content, so an opening tag would immediately follow a closing tag.  As is a common custom for developers, a shortcut was created to avoid clutter in favor of conciseness by using this clean and quick short cut.

Let's type the three `input` elements we will need for name, email, and phone number.  Please note each one of these have a specific `type` attribute that is used to ensure valid information is being gathered from the user.  

### Radio Button
Next we will create the inputs for our `radio` button, `checkbox`, and submit button, but first, what the heck is a `radio` button? This is something you probably have come across a hundred times and now you know the name of it. A `radio` button allows a single selection to be made from a list of choices and is normally a small circle that gets filled upon selection. Let's use our powers of Google and see if we can find some information about the function and syntax of a `radio` button.

So a radio type input element, commonly referred to as a radio button, are generally used in groups using the `name` attribute as the group reference, each radio button must have the same `name` value to be considered in the same group. Let's type some code and then explain the attributes.  Your `index.html` file should look like this. (Remember to place this `form` inside the `div`.)

```html
<form>
  <input type="text" placeholder="Your Name" name="name" class="form-input" />
  <input
    type="email"
    placeholder="Email Address"
    name="email"
    class="form-input"
  />
  <input
    type="tel"
    placeholder="Phone Number"
    name="phone"
    class="form-input"
  />
  <p>
    Have you worked out with a trainer before?
    <label for="trainer-yes">
    </label>
      <input type="radio" name="trainer-confirm" id="trainer-yes" />
      Yes
    <label for="trainer-no">
    </label>
      <input type="radio" name="trainer-confirm" id="trainer-no" />
      No
  </p>
</form>
```

Let's take another look at page by opening our html file in the browser using the "Open in Default Browser" command.
The view should look like this:
![radio-html](./assets/step-3/200-radio-html.png)

Notice that our radio button has been placed inside a `p` element.  This is to ensure that the radio group stays on the same line as the question when rendered to the browser.
After the question or content of the `p` element, the `label` element is used to display each answer option.  It is possible to simply place the name of each radio button answer option within the opening and closing tags of the `input` element, however nesting the radio button will allow the selection of the answer upon clicking the text as well as the circle, thus increasing our user friendliness, a good measure of a website.  There is an attribute on the `label` attribute called `for`.  This is used to reference which radio button this label should be connected to.  The value for the `for` attribute must match the value of the `id` attribute of the `input` element.  Also the input fields have a type radio with a same name attribute `trainer-confirm` that groups these answer or inputs together.  The `id` attribute on the `input` element must match the label and must be unique to this element.  Unlike the `class` attribute, `id`s are unique to a single element.

### Checkbox
Understanding what we know as far as `input` element syntax and google searches, try the following checkbox on your own.

### Button
This button has a special function to submit the user data gathered inside the `form`.  Once again we will configure our element with attributes to make it function according to our needs.  In our case, we will need a `submit` type and with the class `form-submit` to later target in CSS for styling purposes.  The content of this element,"Get running", will be written within the `button` tags to render onto the `button` itself.

Let's take a look at our hero section's completed html code.
```html

    <!-- hero section -->
    <section class="hero">
      <div class="hero-form">
        <h3>Get Started Today!</h3>
        <p>Fill out this form and one of our trainers will schedule a consult.</p>
        <form>
          <input type="text" placeholder="Your Name" name="name" class="form-input"/>
          <input type="email" placeholder="Email Address" name="email" class="form-input"/>
          <input type="tel" placeholder="Phone Number" name="phone" class="form-input"/>
          <p>
            Have you worked out with a trainer before? 
            <label for="trainer-yes">
              <input type="radio" name="trainer-confirm" id="trainer-yes" />
              Yes
            </label>
            <label for="trainer-no">
              <input type="radio" name="trainer-confirm" id="trainer-no"/>
              No
            </label>
          </p>
          <p>
            I acknowledge that I am at least 18 years of age.
            <input type="checkbox" name="age-confirm" />
          </p>
          <button type="submit" class="form-submit">
            Get running!
          </button>
        </form>
      </div>
    </section>
    <!-- end hero -->
```
> **Pro-tip**: Notice how there are no extra empty lines within the confines of the `section`. Being concise with language and syntax also pertains to extraneous lines or white space.  Although empty lines or indentation will not affect what is rendered in the browser, it will pertain more to a best practice style guide that eases readabliity and communicates parent/child relationships.

Now let's catch a glimpse of what our website looks like now and think about what we need to fix inorder to match our mockup.

![hero](./assets/step-3/300-hero-html.png)
Congrats, I know it's not pretty yet, but the grunt work is now complete so we can decorate or style our hero.

## Hero Style

So our hero section doesn't quite look like it has anything super about it quite yet, but fear not, we will learn how to style it up and make it super!  Let's dive into CSS and open our `style.css` in VS Code.

### Section Styles
For the sake of consistency, there should be a few styles that will keep our all our sections looking similar.  By using the selector for the `section` element, we can delegate a global style property for every `section` in our website such as `padding` and `width`.

```css
section {
  padding: 60px;
  width: 100%;
}
```


### Background Image
In a similar fashion to our HTML build process, we will start our CSS styling from a top down approach and drill down into our nested elements until we are satisfied with a finished product.  To start, let's add some pizzazz by adding a background image into our hero section.  Remember our hero section needs to capture our users' imagination so images are a great way to convey a strong message.  
In order to add an image to the background of our hero section we need a way to target this section.
We could go about targeting the `section` element, but this would place the same styling and background image to all our subsequent sections which is not something we need.  We need a way to target the hero section specifically and not create a global style.  Thankfully we can use the `class` attribute we have included in our `section` element.  In this case we have given this attribute the string value "hero".  In CSS, classes are designated with dot notation immediately followed by the value of the `class` attribute.  Within the curly brace syntax, will be the CSS property for `background-image` which we will find in the `images` directory

```css
/* Hero Style Start */
.hero {
  background-image: url("../images/hero-bg.jpg");
}
/* Hero Style End */
```
> **Rewind**: Just like the syntax we used to style the `header` and `footer` in the previous section, we will use the curly braces using our dot notation to target the class CSS selector in the hero section.




