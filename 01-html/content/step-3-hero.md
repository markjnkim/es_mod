# Part 3 - Building a Hero

## Our Hero's Purpose

Now that we have the header and footer for our page, let's get started with the body or content of our website.  HTML elements in large part can be considered as a series of rectangular boxes as was described in step 1.  These boxes can be stacked on top of each other like blocks, similar to our `section` elements in our mock-up and also can be nested within each other like russian nesting dolls.  If we take a good look at our mock-up, we can see that each part of our landing page seems to be separated by a different color block. This serves as a stylistic way to communicate to the reader that each part conveys a different purpose or information type. Let's continue by building each block piece by piece until we have completed our first website.

The first block is considered the most important section because this will be seen by every visitor to our landing page. This is the hero section and is considered as "above the fold", hence has a particular task; pique the curiosity of the visitors to keep reading, scrolling, clicking, and engaging with the website.

> **The More You Know**: Due to their large paper format, newspapers termed the phrase "above the fold" for the upper half of the front page that often contained the most important news story, headline, and picture. Many newspaper terms have been adopted into the language of the web, including semantic HTML elements like the terms for a section, aside, header, footer, and article.

Think of the hero section as the banner, headline, or billboard of our site. But before we can add our pizzazz, let's first write some HTML code that will provide the structure and content. As can be seen from our mock-up, we have input fields contained inside a box within this block. This is considered a "call to action" which means we are making a request to the reader, in our case, to give their contact information so we can maintain engagement. Placing the information request in the hero section reveals the strategic importance of retaining user info.

## Hero Construction
Let's build upon our `section` we created in Module 1. This `section` element will encompass the entire hero section and will be the parent element that contains the children elements needed for this part of the document including the heading and form. As you can now foresee by viewing the mock-up, each color block will designate a unique `section`. To target our hero section and make it look unique from the other sections, we will include the `class` attribute in our `section` element known as a CSS selector.  A `class` is a special attribute that can be used on any HTML element and is used by CSS and JavaScript(to be mentioned more later) to perform certain tasks or target certain styling characteristics.
Let's give our `class` attribute the value "hero"` to our `section` element.  Please note the name of this class is up to us, but it is customary to name it in relation to the element's function or use so it can be easily be recognized in the CSS style sheet to which part of the HTML document, this CSS selector is styling.

`<section class="hero">`

> **Deep Dive**: HTML5 Semantic Elements help distinguish each part of the document and it's function in relation to the document overall. For a closer look check out [this link](https://www.w3schools.com/html/html5_semantic_elements.asp)

At this point we are not going to worry about our background images, colors, borders, or placement since these will all be addressed in the second half in the styling section. We must first focus on content and structure in our HTML.  Can't paint the house until the walls are up!

As seen in the mock-up, our hero section will contain a large background picture with input fields. But before we can place our inputs, can you see any content or HTML elements that will be needed?

> **Hint**: Look for any content like text, heading, and especially distinct elements like boxes?

We will need to create a `div` to create the structure of our yellow box. In order to ensure that our `div` is nested or contained within the `section`, placement of our `div` tags are critical. Go ahead and place a `div` element where you think it should go. Let's also add the class attribute, `hero-form` since we will need to target this `div` later to add custom styling.

> **Heads Up**: HTML works on a relatively simple set of rules. What is critical to understand is the use of opening and closing tags. An HTML element can be nested within another element, but must be completely contained, meaning the opening and closing tags must both be inside the parent element.

```html
<section>
    <div>
</section>
   </div>
```

This is uninterpretable by the browser and will not render as you would like. HTML will not give you an explicit error message, but simply render incorrectly. The proper or correct way to nest elements is by enclosing the opening and closing tags within the parent element.

Great! Your `index.html` file should now look something like this.

```html
<section class="hero">
  <div class="hero-form"></div>
</section>
```

> **Heads up**: Notice how the indentation helps communicate which elements are nested.

Now that we have our `div` element that will give us the structure of the yellow box in our mock-up, let's create the remaining elements within this box that will give us our heading, text, content, input fields, and button.

Given some of the elements we have learned to this point, which element would go next?

> **Hint**: Remember all the elements within the yellow box must be contained within the `div`, since they are all nested within this box.

For our heading, let's include the `h3` element. This was chosen because we are able to use some of the browser's styling defaults to size our heading. Get a feeling of the other possible `h` tags to get a feeling of the relative differences in size. There are 6 in total.

Now let's put our content within the `h3` tags from our mock-up.
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

> **Pro Tip**: It is strongly recommended to try and learn the keyboard shortcuts since they improve speed and efficiency.  It is also a great idea to select the `Auto Save` option in the `File` menu due to all the time saved from forgetting to do that.

Your page should now look something like this:
![hero-heading](./assets/step-3/100-heading-html.png)

So not yet exactly what we are looking for stylistically speaking, but this is a proper workflow and we are laying the groundwork first.  Just like building a house, the foundation and frame must go up first, only then can the rest be built.  The decorating or styling always comes last.

> **Pro Tip**: It is good practice to check on your work in the browser after each step to ensure you are going in the right direction and fix any issues before writing more code and adding any additional errors.

## Web Forms
 
### Text Fields

We have been filling out forms our entire lives, even for this class a few forms needed to be completed.  Now we will be learning how to build our own forms and the multitude of input types our forms can contain.  Our next bit of code deals with the input fields and receiving the user's information. Can you count how many input elements will be needed here?

In total we will need five input elements. Three text fields, a radio button, and a checkbox. We will also need a button that will act as our data submission trigger or event.

> **Deep Dive**: There are many more `input` element types intended for a variety of uses to receive user information, for example a drop down or a file upload. Dig deeper and learn more about [input element types here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

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

Now let's catch a glimpse of what our website looks like now and think about what we need to fix inorder to match our mock-up.

![hero](./assets/step-3/300-hero-html.png)
Congrats, I know it's not pretty yet, but the grunt work is now complete so we can decorate or style our hero.

> **Activity**:

## Hero Style

So our hero section doesn't quite look like it has anything super about it yet, but fear not, we will learn how to style it up and make it super!  Let's take a look at the mock-up and examine the styling we will need to deliver our finished product.  Then we'll dive into CSS and open our `style.css` in VS Code.
![hero-mock-up](./assets/step-3/900-hero-mock-up.png)

### Universal Styles
In similar fashion to our HTML build process, we will start our CSS styling from a top down approach and drill down into our nested elements until we are satisfied with the finished product.  
For the sake of consistency, there should be a few styles that will keep our all our `section` elements looking similar.  
> **Rewind**: As we did in the previous module to offer a default font color or font to every HTML element or override browser styling by setting the margin to zero, we will give our `section` elements a consistent look with `width` and `padding`.

Let's type the following into your `style.css` file.

```css
section {
  padding: 60px;
  width: 100%;
}
```
> **Rewind**: Similarly to the `header` styles we created previously, the `width` property will make our `section` elements stretch across the page by taking up 100% of the parent element, which happens to be the `body` element that is the entire page.  How to assign `padding` values was explained in the previous step, but now let's dive into exactly what `padding` is.

## Box Model
An HTML element is represented by a rectangular box we will call the CSS box, with the content, padding, border, and margin built around each other like layers in an onion.  Some of the styles for each layer like the thickness, style, and color can be manipulated using CSS properties.

![CSS box model](./assets/step-3/400-box-model.png)

1. **Content** is the innermost box inside our CSS box that will contain text as well as any nested elements.  The `content` box size is determined by the *height* and *width*. 
2. **Padding** refers to the inside margin within the CSS box.  Each of the four sides of the `padding` size can be specified as detailed in the previous module.
3. **Border** sits on the outside edge of the `padding` and the inside edge of the `margin`.  This layer's sides, size, and styles can be specified, similarly to the `padding` and `margin`.  Such as `border-bottom` or `border-style` or even `border-top-color`.
4. **Margin** surrounds the CSS box and touches the surrounding elements.  This property acts like the padding and can be specified by side and size.

> **Deep Dive**: There are many different ways to specify styles, sides, and sizes using a multitude of properties that CSS offers.  Click [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model) to find out more.

> **Activity** Play around with the box model and experiment with the syntax and the many combinations that can be manipulated by choosing any HTML element and adding some of these properties to see what happens.  

### Using Class for Styling
Now let's add some pizzazz by adding a background image into our hero section.  
First we need to create an `images` directory in the `assets` directory.  We can either use the `mkdir` command from the command line while in the `assets` folder,or we can simply go to the `Explorer` in VS Code(located on the left side panel) and click the `assets` folder.  The green plus sign will appear upon hovering over the root or parent directory.  The tool tip or hover message will indicate if you would like to add a new folder or file.  In this case let's add a new folder called `images`.  Let's download our all the images and place them inside the  `images` directory from our image link *(AWS S3 Bucket URL TBA)*.

If we simply used the `section` element as our CSS selector, we would be applying the same background image to all our subsequent sections which is not something we need.  We need a way to target the hero section specifically and not create a global style.  Thankfully we can use the `class` attribute we have included in our `section` element as our CSS selector.  The neat trick about a `class` CSS selector is that this attribute can be added to any HTML element that would need that same styling.  

Let's type the following into your CSS file and unpack it further.

```css
/* Hero Style Start */
.hero {
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 600px;
}
/* Hero Style End */
```
* **Dot Notation**: Notice the "." proceeding the `class` `hero` to indicate to CSS we are using a class as our CSS selector.
* **background-image** uses the CSS function `url()` to link a resource such as an image, web font, or gif.  Here was are using a relative URL path to select our background image from our images folder. Absolute paths can also be used for instance to grab and image from the web for example url("https://www.example.com/images/image.png").
* **background-size** property sets the size of the background image so it can be left to its original size, stretched, or constrained to fit the available space.  The `cover` value enlarges the image to ensure complete coverage of the element by a single image.  Other selections allowed repeated images similar to a tiled look, similar to how background image displays are configured for your computer's background desktop image.
* **background-position** allows different positioning of the background image.
* **position** specifies the type of positioning method used for an element.  We will discuss this important property in further detail below.
* **height** fixed at 600px gives an exact size of the section, important in this context so that the `section` doesn't grow to fit the size of the background image.

> **Heads Up**: Please pause to note that the relative path our `background-image` was different from the relative path used in the `footer` of our last step.  In this case since we are starting in the `style.css` file located in the `css` directory, we needed to transverse up to the parent directory by using the "../" notation (in this case, to the `assets` directory), to access the `images` directory.  The `images` directory wouldn't have been accessible directly from inside the `css` directory since only items within this directory are accessible.
In the `footer`, the path to `privacy-policy.html` started from the `index.html` therefore only need the "./" since both files were in the same directory.  Note that for relative paths, the *origin* of the relative path is as important as the *destination*!

## Positioning is not all relative
The position CSS property sets how an element is positioned on the web page.
Here are a few of the position values and how they change their relationship to the surrounding elements.

* **Static**is the default position value and maintains the order of the flow of the elements on the page as in the order created in HTML.  `Static` positioning is not affected by `top`, `bottom`, `left`, and `right` properties.

* **Relative** positioning compares the natural or static position and is able to adjust from this position by using the `top` and `bottom` properties to vertically offset the element as well as the `left` and `right` properties for horizontal offsetting.

* **Absolute** positioning removes the element from the natural flow of the page elements and uses the `top`, `bottom`, `left` and `right` properties to offset relative to the element's parent or containing element or block.  

* **Fixed** positioning removes the element from the natural flow of the page elements and is positioned relative to the viewport or browser window, therefore is not affected by scrolling.  The`fixed` position value uses the `top`, `bottom`, `left` and `right` properties to offset from the viewport or the .  

> **Pause**: Let's take a look at our current creation in the browser.  You should see something like this.

![hero-background](./assets/step-3/500-bg-image-css.png)

Congrats! Give yourself a nice pat on the back.  Way to hang in there!  We will now style our form box and finish up with our hero section.

### Form Styles

According to the mock-up the box or `div` containing our `form` should have a yellow background.  Let's target this `div` by using the `class` attribute for this `div` as the CSS selector which we have named `hero-form`.  Let's type out the syntax for this in your CSS file and give it some of the properties we will need including the border as well as background color, size, font color, and positioning.

> **Pause**: Try out some code and see if you can do some styling on your own.

> **Hint**: Don't forget to add the semicolon or red syntax errors will prevent your CSS from formatting.

The code you added to your `style.css` should look similar to this:
```css
.hero-form {
  border: 3px solid #024e76;
  background-color: #fce138;
  padding: 20px;
  width: 500px;
  color: #024e76;
  position: absolute;
  bottom: 120px;
  right: 10%;
}
```
Let's take a look at your page on the browser and see how your new code has changed the page.  Don't forget to set the `Auto Save` option in the `File` menu since all change must be saved in order to render.

Your page should look something like this:
![form-box](./assets/step-3/600-form-css.png)

Success.  Nice job!  Now let's preview a new way to make changes to your styling.

### Dev Tools

Ever think it's kind of a pain hopping back and forth between changing the CSS file, then going back and forth from the browser to see how the changes look and see what else needs a tweak.  Let's use a tool in the browser called Developer Tools.
This tool can be found by clicking on the hamburger button located on the top-right portion of your browser that looks like three dots vertically aligned.

![hamburger button](./assets/step-3/700-hamburger-btn.png)

This will open a browser menu.  Open the `More Tools` option which will open a sub-menu containing the `Developer Tools` option.
> **Keyboard Shortcut**: Developer Tools : (Mac: OPTION+CMD+i) (PC: CONTROL+SHIFT i )

Depending on your version of Chrome, your screen should look something like this:
![Developer Tools](./assets/step-3/800-dev-tools.png)

Click on the `Elements` tab to reveal the HTML code.  On a full screen you will see the `Styles` section as well, displaying your CSS code.  By clicking on the various fields, we can enter or delete the properties, attributes, and values.  

This tool is a tremendous asset to front-end developers with the ability to:
* Change HTML attributes
* Manipulate CSS style properties
* View communication transmission calls in the `Network` tab
* And much much more which we will continuously learn throughout this class
> **Deep Dive**: Discover more about [DevTools](https://developers.google.com/web/tools/chrome-devtools/) and familiarize yourself with Chrome.

> **Pause**: Let's go to a popular website and change some of the styling properties of the `body` element, like the `background-color`.  Try out the `element inspector`, the arrow icon in the top-left corner of the DevTool window, to target a specific element.  Notice the changes in the `Element` and `Style` windows.  Feel free to play around at will.  Are these changes permanent?How can we tell?
>**Answer**: Page refresh can determine persistence or permanence of a change.

These changes are not permanent and do not change the actual code, but merely offers a sandbox to try out different styles and sizes with the ability to see their affect on the element and the document itself.  Once satisfied with the desired styling affect, these changes must be made to the style sheet itself in order to make the style change permanent.

> **Pro Tip**: To further develop skills with these types of tools, it is important to use them as much as possible. Try to use new tools as much as possible in the beginning since it easy to forget they are there.  It is a good habit keeping this window open so it stays top of mind.  Remember it can be shrunk, stretched or docked on any side by selecting the hamburger button in the top-right corner.

The CSS style sheet appears to be the same one we have been working on, however there are actually

> **Pause**: Do you notice how some of the style properties in the `Styles` window have a line through them?  What do you think this means and why?
> **Answer**: These styles have been overridden by another property due to the cascading hierarchy of CSS style sheets. Notice how the checkbox can toggle the style property.



Scrolling down to the bottom of the `Styles` window offers an interactive CSS box model that allows the different layers of the CSS box to be manipulated.  A very useful tool that can safe a lot of time and energy when doing page layout design.
<!-- <a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a> -->

## Styling Form
We have reached that last portion of this module so let's dive right in and finish up the call to action part of our hero section.

To start let's snazz up our heading with bold intent!  We need to bring some excitement and enthusiasm so   
