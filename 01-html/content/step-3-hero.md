# Part 3 - Building a Hero

## Our Hero's Purpose

Now that we have the `header` and `footer` for our page, let's get started with the body or content of our website.  HTML elements in large part, can be considered as a series of rectangular boxes as was described in Lesson 1.  These boxes can be stacked on top of each other like blocks and also can be nested within each other similar to Russian nesting dolls.  If we take a good look at our mock-up, we can see that each part of our landing page seems to be separated by different colored blocks. This serves as a stylistic way to communicate to the reader that each part conveys a different purpose or information type. In the first lesson, we created  the basic layout of each `section` element.  We will be building upon this framework, `section` by `section` until our mock-up is complete. 

The first block is considered the most important `section` because this will be seen by every visitor to our landing page. In this section we have what is called a "Hero" image.  This is in web terms a large web banner image placed prominently on the page.  The placement is considered "above the fold", hence has a particular task; pique the curiosity of the visitors to keep reading, scrolling, clicking, and engaging with the website.

> **Urkel Says**: Newspapers need to be folded due to their large paper format and thus termed the phrase "above the fold" for the upper half of the front page that often contains the most important news story, headline, and/or picture. Many newspaper terms have been adopted into the language of the web, including semantic HTML elements like the terms for a section, aside, header,footer, and article.

Think of the hero section as the banner, headline, or billboard of our site. But before we can add our pizzazz, let's first write some HTML code that will provide the structure and content. 

## Hero Construction
Let's build upon the `section` we created in Lesson 1. This `section` element will be the parent element that contains the children elements like the heading and sign-up form. 

> **Deep Dive**: HTML5 Semantic Elements help distinguish each part of the document and it's function in relation to the document overall. For a closer look check out [this link](https://www.w3schools.com/html/html5_semantic_elements.asp)

### Step: 1 - Sign-up Form Container
> **Pause**: As seen in the mock-up, our hero section will contain a large background picture with input fields. But before we can create our sign-up form, can you see any content or HTML elements that will be needed?

> **Hint**: Look for any content like text, heading, and especially distinct elements like boxes.

> **Answer**: We will need a box that will contain a heading, text, input fields and a button.

Let's create a `div` and build the structure of our yellow box that will contain our sign-up form. In order to ensure that our `div` is nested or contained within the `section`, placement of our `<div>` tags are critical. Go ahead and place a `div` element where you think it should go.

> **Heads Up**: HTML works on a relatively simple set of rules like the use of opening and closing tags. An HTML element can be nested within another element, but must be completely contained, meaning the opening and closing tags must both be inside the parent element.

**INCORRECT**
```html
<section>
    <div>
</section>
   </div>
```

This is uninterpretable by the browser and will not render as you would like. HTML will not give you an explicit error message, but simply render incorrectly. The proper or correct way to nest elements is by enclosing the opening and closing tags within the parent element.

Great! Your `index.html` file should now look something like this.

```html
<section>
  <div></div>
</section>
```

> **Heads up**: Notice how the indentation helps communicate which elements are nested.

Now that we have our `div` element that will give us the structure of the yellow box or our form container in our mock-up, let's create the remaining elements within this box that will give us our heading, text, content, input fields, and button.

> **Pause**: Given some of the HTML elements we have learned up to this point, which element should go next?  Let's give it a go and write some code.

> **Hint**: Remember all the elements within the yellow box must be contained within the `div`, since they are all nested within this box.

> **Answer**: For our heading, let's use the `h3` element. This was chosen because we are able to use some of the browser's styling defaults to size our heading including a bold `font-weight` and a larger `font-size`. Get a feeling of the other possible `h` tags to get a feeling of the relative differences in size. Remember there are 6 in total.

Now let's put our content within the `h3` tags from our mock-up.
After that is some basic text, so let's wrap that in a `<p>` tag.  
Wait a sec, what's a `<p>` tag?
The `p` element is used to render normally styled text to a page similar to the body text of a page.  Hence the browser will not add font-size or font-weight to the content of this element, but will make the display property, mentioned in the last lesson, a block-level element meaning other elements will be wrapped to the next line.

>**Rewind**: Remember `<h1>` to `<h6>` and `<p>` tags are block-level elements so take up the width of the current line regardless of the actual size of the element meaning other elements are wrapped to the next line.

> **Deep Dive**: For a nice visual explainer for the display property look [here.](https://codeburst.io/block-level-and-inline-elements-the-difference-between-div-and-span-2f8502c1f95b)

Your code for the hero section should now look something like this.

```html
<section>
  <div>
    <h3>Get Started Today</h3>
    <p>Fill out this form and one of our trainers will schedule a consult</p>
  </div>
</section>
```

> **Pro Tip**: *Key Board Short Cuts* : It is strongly recommended to try and learn the keyboard shortcuts for commands used most frequently since they improve a developer's speed and efficiency.  Look into the VS Code shortcuts as well as for Chrome for your operating system for Save, Format, Open in Default Browser, and DevTools for [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf) and [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf).  They are also labeled in your menu options.  It is also a great idea to select the `Auto Save` option in the `File` menu due to all the time saved from forgetting to do that.

Your page should now look something like this:
![hero-heading](./assets/step-3/100-heading-html.png)

So not yet exactly what we are looking for stylistically speaking, but this is a proper workflow and we are laying the groundwork first.  Just like building a house, the foundation and frame must go up first, only then can the rest be built.  The decorating or styling always comes last.

> **Pro Tip**: It is good practice to save your work then check the browser after each step to ensure the page is progressing in the right direction.  This offers the chance to fix any issues before writing more code and adding any additional errors.

### Step 2: Web Forms

The sign-up for in our hero section has a special name called a call-to-action (or CTA).

> **Urkel Says**: A CTA encourages the audience or web site visitors through a story, advertisement, or piece of content to do something.  In our case we would like our visitor to share their contact info for a possible future engagement.  CTAs can play a vital role in coverting a visitor into a sales lead. Placing the CTA in the hero section reveals the strategic importance of retaining user info.
 
#### Text Fields

We have been filling out forms our entire lives, even for this class a few forms needed to be completed.  Now we will learn how to build our own forms and the different input types that are possible.  Our next step deals with the input fields. 
> **Pause**: Can you count how many input elements will be needed here?

> **Answer**: We will need five input elements. Three text fields, a `radio button`, and a checkbox. We will also need a button that will act as our data submission trigger or event.

We will place these `input` elements and the submit `button` within a `form` element.
The `form` element represents a document section that contains interactive components or controls for submitting user information.

Let's take a good look at an `input` element and its various attributes.

```html
<form>
  <input type="text" placeholder="Your Name" name="name" />
</form>
```

* **Type** attribute relates to what kind of input element we are using. Here we want a text field, which is also the default value. 
* **Placeholder** offers a hint or label within the text field itself, but will not be submitted if this field is left blank. 
* **Name** attribute will declare this element so it can be referenced later when the data is submitted.  

> **Do if Yourself**: Having given the first text input field, can you do the next two for email and phone number.  

> **Hint**: Each has a specific attribute for `name`, `type`, and `placeholder`. A list of `type` attributes can be found [here].(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

> **Pause**: Notice at the end of this tag is a forward slash. Can you think about what this slash does?

> **Urkel Says**: Confusing which is forward slash vs backward slash? [This](https://sites.cs.ucsb.edu/~pconrad/topics/BackslashVsForwardSlash/) might clear things up.

> **Answer**: This is known as a self closing tag.  Certain elements like an `input` element do not contain any content, but is a prompt for user interactivity, so the opening tag immediately follows a closing tag.  As is a common custom for developers, a shortcut was created to avoid clutter in favor of conciseness by using this clean and quick short cut.

### Radio Button
Next we will create the inputs for our `radio button`, `checkbox`, and submit `button`, but first,what the heck is a `radio button`? This is something you probably have come across a hundred times and now you will know the name of it. A `radio button` allows a single selection to be made from a list of choices and is normally a small circle that gets filled upon selection.

![radio-button](./assets/step-3/1000-radio-button.png)


> **Google Foo**: Let's use our powers of Google and see if we can find some information about the function and syntax of a `radio button`.

So a `radio` type input element, commonly referred to as a `radio button`, are generally used in groups using the `name` attribute as the group reference, each `radio button` must have the same `name` value to be considered in the same group. Let's type some code and then explain the attributes.  Your `index.html` file should look like this. (Remember to place this `form` inside the `div`.)

```html
<form>
  <input type="text" placeholder="Your Name" name="name" />
  <input
    type="email"
    placeholder="Email Address"
    name="email" />
  <input
    type="tel"
    placeholder="Phone Number"
    name="phone" />
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
</form>
```
> **Side Note**: Notice how the attributes in the first input element are in-line vs the attributes in the second input are on new lines.  They are both valid since HTML is white space and line break insensitive.  This is a useful rule to use whenever there is a case when the number of attributes is high and tends to run off the screen.  This is a way to wrap the attributes in a single column to make it easier to read.

Let's take another look at page, then open our html file in the browser using the Open in Default Browser command.
The view should look like this now:

![radio-html](./assets/step-3/200-radio-html.png)

Notice that our `radio button` has been placed inside a `p` element.  This is to ensure that the radio group stays on the same line as the question when rendered to the browser.
After the question or content of the `p` element, the `label` element is used to display each answer option.  It is possible to simply place the name of each `radio button` answer option within the opening and closing tags of the `input` element, however nesting the `radio button` will allow the selection of the answer upon clicking the text as well as the circle, thus increasing our user friendliness, a good measure of a website.  

> **Pause**: There is an attribute on the `label` element called `for`.  Can you figure out what this attribute is for?

> **Answer**: This is used to reference to which `radio button` this label belongs.  The value for the `for` attribute must match the value of the `id` attribute of the `input` element.  

>**Heads Up**: The `radio button` elements must have the same `name` attribute in order to be associated with the same radio group.  This is how the browser identifies a group of choices can have an exclusive singular answer.  In this case the value of our radio group in `name` is `trainer-confirm`.

### Checkbox
> **Try It Yourself**: Understanding what we know as far as `input` element syntax and google searches, try the following checkbox on your own.

### Button
A button in an essential piece of user interaction and can have a variety of different functions and uses.  A button can link to another area on a web page, link to an external site, submit data to a server, or can be programmed for any activity.  Our button has a special function to submit the user data gathered inside the `form`.  Once again we will configure our element with attributes to make it function according to our needs.  In our case, we will need a `submit` type to perform the needed action.  The content of this element,"Get running", will be written within the `button` tags to render a label onto the `button` itself.

Let's take a look at our hero section's completed html code.
```html

    <!-- hero section -->
    <section>
      <div >
        <h3>Get Started Today!</h3>
        <p>Fill out this form and one of our trainers will schedule a consult.</p>
        <form>
          <input type="text" placeholder="Your Name" name="name" />
          <input type="email" placeholder="Email Address" name="email" />
          <input type="tel" placeholder="Phone Number" name="phone" />
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
          <button type="submit">
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

Congrats, I know it's not pretty yet, but our foundation work is now complete so we can decorate or style our hero.

> **Activity**: HTML nesting game.  Place our boiler plate HTML code with finished CSS in parallel.  Ask the student to place certain items here or there by nesting them properly.  

## Hero Style

So our hero section doesn't look very super yet, but fear not, we will learn how to style it up and make it super!  Let's take a look at the mock-up and examine the styling we will need to deliver our finished product.  Then we'll dive into CSS and open our `style.css` in VS Code.
![hero-mock-up](./assets/step-3/900-hero-mock-up.png)

### Step 3: Universal Styles
In similar fashion to our HTML build process, we will start our CSS styling from a top down approach and drill down into our nested elements until we are satisfied with the finished product.  
For the sake of consistency, there should be a few styles that will keep our all our `section` elements looking similar.  
> **Rewind**: As we did in the previous lesson, when we assigned a default font color or font to every HTML element or over wrote the browser styling by setting the margin to zero, we will give our `section` elements a consistent look using the `width` and `padding` properties.

Let's type the following into your `style.css` file.

```css
section {
  padding: 60px
}
```
> **Rewind**: We explained how to assign `padding` values was explained in the previous lesson, but now let's dive into exactly what `padding` is.

### CSS Box Model
All HTML elements can be represented by a rectangular box which we will call the CSS box.  The CSS box model is a visual display of the properties in the CSS box that includes the `content`, `padding`, `border`, and `margin` that are all built around each other like layers in an onion.  Some of the styles of each layer like the thickness, style, and/or color can be manipulated using CSS.   

![CSS box model](./assets/step-3/400-box-model.png)

1. **Content** is the innermost box inside our CSS box that will contain text as well as any nested elements.  The `content` box size is determined by the *height* and *width*. 
2. **Padding** refers to the inside margin within the CSS box.  Each of the four sides of the `padding` size can be specified as detailed in the previous lesson.
3. **Border** sits on the outside edge of the `padding` and the inside edge of the `margin`.  This layer's sides, size, and styles can be specified, similarly to the `padding` and `margin`.  Such as `border-bottom` or `border-style` or even `border-top-color`.  This property also needs a weight of the line, style, and color in order to render.
4. **Margin** surrounds the CSS box and touches the adjacent elements.  This property's values are designated like the `padding` and can be specified by side and size.

> **Deep Dive**: To learn and discover more about this fundamental web layout, click [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model).

### Step 4: Using Class for Styling
Now let's add some pizzazz by adding a background image into our hero section.  
First we need to create an `images` directory inside the `assets` directory.  Now let's download all our images and place them inside the `images` directory from our image link <b>*(AWS S3 Bucket URL TBA)*</b>.

Now that we have our images, our first step is to target our hero section in CSS with a CSS selector.  If we simply used the `section` element as our CSS selector, we would be applying the same background image to all our subsequent `section` elements which is not something we want.  We need a way to target the hero section specifically and not create a global `section` style.  Thankfully we can use the `class` attribute to target one or many HTML elements. The neat trick about a `class` is that this attribute can be added to any one HTML element or many elements that will need the same styling, hence saving some time and lines of code so we can prevent some duplicate lines of stylig.  
Let's give our `class` attribute the value "hero" in our hero section element.  Please note the name of this `class` is up to us, but it is customary to name it to correspond to the element's function or use so it can be easily be recognized in the CSS style sheet to help identify which element is being styled.

Your code should look like this.  Notice `class` is an attribute therefore is placed inside the opening tag.  We should've only added this attribute where we want the background image, in our hero section, but if we changed our mind and wished to have the background image in a different element, we would merely have to add this `class` attribute for hero to the element.

`<section class="hero">`

Let's type the following into your CSS file so we can unpack it further.

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
* **Dot Notation** is the "." proceeding the class `hero` to indicate to CSS we are using a class as our CSS selector.
* **Background-image** uses the CSS function `url()` to link a resource such as an image, web font, or gif.  Here was are using a relative URL path to select our background image from our images folder as we will explain in more detail below. Absolute paths can also be used for instance to grab an image from the web for example url("https://www.example.com/images/image.png").
* **Background-size** property sets the size of the background image so it can be left to its original size, stretched, or constrained to fit the available space.  The `cover` value enlarges the image to ensure complete coverage of the element by a single image.  Other selections allow repeated images for a tiled look, similar to how background image displays are configured for your computer's background desktop image.
* **Background-position** allows different positioning of the background image discussed in more detail below..
* **Position** specifies the type of positioning method used for an element.  We will discuss this important property in further detail below.
* **Height** fixed at 600px gives an exact size of the section, important in this context so that the `section` doesn't grow to fit the size of the background image.

> **Heads Up**: Please pause to note that the relative path our `background-image` was different from the relative path used in the `footer` of our last step.  In this case since we are starting in the `style.css` file located in the `css` directory, we needed to transverse up to the parent directory by using the "../" notation (in this case, to the `assets` directory), to access the `images` directory.  The `images` directory wouldn't have been accessible directly from inside the `css` directory since only items within this directory are accessible.
In the `footer`, the path to `privacy-policy.html` started from the `index.html` therefore only need the "./" since both files were in the same directory.  Note that for relative paths, the *origin* of the relative path is as important as the *destination*!

### Positioning is a theory of relativity
The position CSS property sets how an element is positioned on the web page.
Here are a few of the position values and how they change their relationship to the surrounding elements.

* **Static**is the default position value and maintains the order of the flow of the elements on the page as in the order created in HTML.  `Static` positioning is not affected by `top`, `bottom`, `left`, and `right` properties.

* **Relative** positioning compares the natural or static position and is able to adjust from this position by using the `top` and `bottom` properties to vertically offset the element as well as the `left` and `right` properties for horizontal offsetting.

* **Absolute** positioning removes the element from the natural flow of the page elements and uses the `top`, `bottom`, `left` and `right` properties to offset relative to the element's parent or containing element or block.  

* **Fixed** positioning removes the element from the natural flow of the page elements and is positioned relative to the viewport or browser window, therefore is not affected by scrolling.  The`fixed` position value uses the `top`, `bottom`, `left` and `right` properties to offset from the viewport or the .  

Let's take a look at our current creation in the browser after a quick Save.  You should see something like this.

![hero-background](./assets/step-3/500-bg-image-css.png)

Congrats! Give yourself a nice pat on the back.  Way to hang in there!  We will now style our form box and finish up with our hero section.

### Step 5: Form Styles

According to the mock-up the box or `div` containing our `form` should have a yellow background matching the yellow in our `header` and `footer`.  Let's add this attribute to the `<div>` opening tag and use it as a CSS selector to declare some properties and style the box containing our forms.  The border and font color in this `div` will match the navy font color in the `footer`.  Let's experiment with the height and width properties as well as the positioning property to match our mock-up.

> **Try It Yourself**: Try out some code and see if you can do some styling on your own.

> **Hint**: Don't forget to add the semicolon or red syntax errors will prevent your CSS from formatting.

> **Pause**: Can you forsee any issues with having our form container keeping a relative position in relation to our hero section?  What are the viable options and why?
> **Answer**: We would use absolute or relative positioning since static is simply the position of the element in the natural flow of the document and cannot be repositioned and fixed position relates to a position relative to the viewport or browser window.  It is possible to use relative positioning to get the initial layout according the the mock-up.  However absolute position is the correct answer since this value allows us to position the element offset from a side of the parent element, in our case the hero section.  We can then simply declare our form container must be offset from the bottom and right side of the hero section by either a specific amount. 
The code you added to your `style.css` should look similar to this:
```css
.hero-form {
  border: 3px solid #024e76;
  background-color: #fce138;
  padding: 20px;
  width: 500px;
  color: #024e76;
  position: absolute;
  bottom: 10px;
  right: 10%;
}
```
Let's unpack any new CSS properties and their related values.
* **Border**: As was explained in the previous lesson regarding how to assign `padding` values, the`border` property can also be declared by each side(`border-top, border-left`, etc), by two values representing the top/bottom and left/right pairs respectively, or a single value, as we have declared here, assigned to all four sides.  Unlike `padding`, `border` **must** also have  the line weight, style, and color values declared in order to render.
* **Background-color**: Sets the background color to the element selected.
* **Position**: We set this value to be **absolute** since we need the location of our form box to always be posiitoned in respect to the parent element, in this case the form container, our `section`.  
> **Deep Dive**: Check [here](https://stackoverflow.com/questions/10426497/position-relative-vs-absolute) for more insight. 
* **Bottom** and **Right**: Set the values **from** these respective sides of our `section` to position our form container.  The `right` property was given a percentage this time and not a fixed pixel.  Try shrinking the screen horizontally by the right or left sides and notice the relative gap lessens by a ratio dependent on the size of the window.  We will be using percentages much more in the next lesson so we can dive deeper about how to relatively size certain properties.
* **Width**: Calculating the specific width of this form container actually begins a discussion on another property called `box-sizing`.

### Box-sizing
The `box-sizing` property determines *how* to calculate the `width` and `height` of each element. So the discussion here is actually about what should be included in this property.  There are catually two different possible values for the `box-sizing` property: `content-size` and `border-box`.
* **Content-size**: is the default value and calculates the height and width of the element by 
only counting the `content` box of our CSS box model.  This means that the `border` and `padding` must be calculated separately and added to our width and height to determine the size of our element.
* **Border-box**: calculates the height and width of the element by including the `border` and `padding` additions to our `content` box.

In our case, when we declare the width of the `div` to be 500px, and kept the the default value for the `box-sizing` property at `content-size` then we would need to add the `border` and `padding` into this calculation that would actually come out to 546px and not 500px as the width declared.  However if we changed the `box-sizing` property to `border-box`, the width would take into account the `padding` and `border` and would yield an actual width of 500px.

>**Pause**: Let's add this property to every element on our page and override the default browser property.  How would be go about this without needing to add this property to every element selector?
>>**Answer**: We can add this to the `*{ }` to the top of the CSS file, which will then target every element on the page.  This is a great idea to add for every CSS stylesheet.

```css
* {
  box-sizing: border-box;
}
```

Let's take a look at your page on the browser and see how your new code has changed the page.  Don't forget to set the save your changes or your styles will not render.

> **Pro-Tip**: You can save yourself a bit of heart ache or frustration by simply clicking on the Auto Save option in the `File` menu so saving is made automatic on changes.

Your page should look something like this:
![form-box](./assets/step-3/600-form-css.png)

Success.  Nice job!  Now let's preview a new way to make changes to your styling.

### Chrome's Dev Tools

Ever think it's kind of a pain hopping back and forth between changing the CSS file, then going back and forth from the browser to see how the changes look and see what else needs a tweak.  Let's use a tool in the browser called Developer Tools.
This tool can be found by clicking on the hamburger button located on the top-right portion of your browser that looks like three dots vertically aligned.

![hamburger button](./assets/step-3/700-hamburger-btn.png)

This will open a browser menu.  Open the `More Tools` option which will open a sub-menu containing the `Developer Tools` option.
> **Keyboard Shortcut**: Developer Tools : (Mac: OPTION+CMD+i) (Windows: CONTROL+SHIFT i )

Depending on your version of Chrome, your screen should look something like this:
![Developer Tools](./assets/step-3/800-dev-tools.png)

Click on the `Elements` tab to reveal your HTML code.  On a full screen you will see the Styles panel as well, displaying your CSS code.  By clicking on the various fields, we can change or delete the properties, attributes, content, and values.  

This tool is a tremendous asset to front-end developers with the ability to:
* Change HTML elements and attributes
* Manipulate CSS style properties
* Change the text content
* And much much more which we will continuously learn throughout this class

> **Deep Dive**: Discover more about Chrome's [DevTools here.](https://developers.google.com/web/tools/chrome-devtools/) If it is seems a little much for now, it's because this tool has a vast array of uses that is beyond our current concept scope.  Don't worry, we will divulge more of these tools as they become more relevant and useful for us.

> **Activity/Pause**: Let's go to a popular website and change some of the styling properties of the `body` element, like the `background-color`.  Try out the `element inspector`, the arrow icon in the top-left corner of the DevTool window, to target a specific element.  Notice the changes in the `Element` and `Style` panels.  Feel free to play around at will.  Are these changes permanent?How can we tell?
>**Answer**: Page refresh can determine persistence or permanence of a change.

These changes are not permanent and do not change the actual code, but merely offers a sandbox to try out different styles and sizes with the ability to see their affect on the element and the document itself.  Once satisfied with the desired styling affect, these changes must be made to the style sheet itself in order to make the style change permanent.

> **Pro Tip**: To further develop skills with these types of tools, it is important to use them as much as possible. Try to use new tools as much as possible in the beginning since it easy to forget they are there.  It is a good habit keeping this window open so it stays top of mind.  Remember it can be shrunk, stretched or docked on any side by selecting the hamburger button in the top-right corner.

Let's head back to the browser tab with our landing page and examine our code in the DevTools window.  The CSS style sheet appears to be the same one we have been working on, however there are actually quite a lot more properties for each selector than we have written.  These are the default CSS property settings that are assigned by the browser.  In a few places we have over written these defaults since you will see are crossed out. 

One nice trick is to toggle properties on and off to see their cummulative affects on the page.  Let's toggle the `box-sixing` property and manipulate the widths of our elements.  You can see having a set width property can save some headache and need for extra calculations.  It is suggested to set this property to `border-box` whenever possible.

Scrolling down to the bottom of the Styles panel offers an interactive CSS box model that allows the different layers of the CSS box to be manipulated by value.  A very useful tool that can save a lot of time and energy when designing a page layout.

![box-model](./assets/step-3/1100-box-model-dt.png)
<!-- <a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a> -->

### Step 6: Styling Form
We have reached that last portion of this lesson so let's dive right in and finish up our sign-up form.

> **Linear Steps**: 
1) Heading: let's snazz up our heading with bold intent!  We need to bring some excitement and enthusiasm and the current `h3` element leaves a bit to be desired.  There are several ways that we can select this element by CSS.
* We could give this `h3` element a class and select it as we did for the form container and the `section`.
* Select the parent element, then the child element that is contained within the parent, as we did in the previous lesson in the `header` and `footer`.

We will chose the second option because there is only a single `h3` inside the form container and so wouldn't be able to accidently duplicate a class name that someone else also decided to use elsewhere in the code.  The direct child selector also helps developers pinpoint which element will be styled.

> **Pause**: Let's go to your `style.css` file to address the `h3` to make it a bit larger as well as reduce the `margin` to zero to reduce any possible word wrapping.

2) Text Spacing: Next will be adding some space to the `p` for legibility and spacing, specifically to the top and bottom margins.

The `class` attribute allows our CSS styling to target any one or group of elements that need the same style. In our example, we will need three text inputs with the same exact look. Therefore, all three `input` elements will have the same class attribute value `form-input` which will allow for less typing and more efficient coding.  Add the class attribute to the first three `input` elements.
```html
<input type="text" placeholder="Your Name" name="name" class="form-input"/>
```

3) Input Fields Boxes: It's time to give our input fields some style and panache.  First let's get each one to exist on its own line while making it bigger and more noticeable.  Part of having a good website is giving the visitor an easy time navigating and using our page. Especially when it comes to user interaction, it's really important to make it as simple and as straighforward as possible.  This means having clear demarcations on each line and to address what each input is for.  We will use the CSS selector for the `form-input` class since we wish to only target the input field text boxes, but not the other `input` elements for the `checkbox` or `radio button` elements. Let's add a border, display each line separately, make the font larger, extend each input field box the length of the form container, and use the navy font color we used for the `footer` font color.

> **Try It Yourself**: Let's type in some code and use the Chrome DevTools to manipulate some sizes for our `padding`, `margin`, and sizing.

Our code should now look like this:
```css
.hero-form h3 {
  font-size: 24px;
  margin: 0;
}
.hero-form p {
  margin: 5px 0 15px 0;
}

.form-input {
  border: 1px solid #024e76;
  display: block;
  padding: 7px 15px;
  font-size: 16px;
  color: #024e76;
  width: 100%;
  margin-bottom: 15px; 
}

```
Let's unpack some of our properties in our `.form-input` selector and see how they affected our form input elements.  
* **Border**: A skinny 1px border helped emphasize our sign-up requests.
* **Display**: This is the property that determines if the element sit in it's own line by declaring the `block` value, thereby forcing other elements into the next line, , or sit in the flow of the HTML document, letting the browser determine or calculate if other elements can fit on the same line and sit next to other elements by using the `in-line` property.
The other properties helped us achieve some spacing and font size to improve the legibiility.

Remember to save these changes and take a look at the new page's styles in the browser.
Now let's add just a bit of spacing for our label element in our `radio button`s to ensure the user doens't misinterpret which selection is for which answer by adding a bit of horizontal margin.  Let's go ahead and add that in now.

> **Try It Yourself**: It is important to try and implement these styles yourself and give it a chance.  Getting syntax errors or the red squiggly lines are helpful reminders that you may be missing or misplacing a syntax character.  In time, the syntax will become second nature to you and your speed to develop time will increase with practice!

```css
.hero-form label {
  margin: 0 5px;
}
```

Let's save our work and take a look at the browser for what we have completed so far.  
Congrats, the work looks almost complete except for our button.  Let's get to work on it now.
According to the mock-up, the button should be the navy and the font color should be yellow.  Can you style our button adding some size to our font and some padding?
> **Try it Yourself**: Let's flex our new CSS skills and style this button to match our mock-up.  Open up the DevTools, select the button using the element selector or arrow icon to select our button, then go to the Styles window to 

```css
.hero-form button {
  color: #fce138;
  background-color: #024e76;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
} 
/* HERO STYLES END */
```

It's time for our moment of truth.  Let's save the file or just auto save it like a pro, and refresh our browser to look at our finished hero!
Excellent work, our section is now done and looking just like our mock-up.  Now let's take a moment to review some of the major concepts learned in this lesson.

## Reflection

This was another dense lesson of concepts and syntax.  Don't worry that you haven't nailed everything down yet, this will happen in time with practice.  In programming, practice doesn't make perfect, it makes developers.  Programming isn't something you can watch in a youtube video or read in a book to make yourself proficient.  The one and only way to become a developer is to practice practice practice, which means a lot of playing around in sand boxes and DevTools to see what does what.  If you get stuck, become a Google foo master since this is a vital developer skill that can get you unstuck. Your answer is out there, now you just have to go find it.

* **HTML5 Semantic Elements** are an important part of the modern web that can help organize a web page as well as help with accessiblity helping some readers interpret the page with screen readers.  
* **Class Attributes as CSS Selectors** help target specific elements on our document for custom styling.
* **Display Property** helps us with the layout of our page by allowing positioning of elements relative to each other or the browser window or viewport.
* **CSS box model** is the defacto layout design model of the Web, based on labeling each layer of our box diagrams to improve spacing, styling, and legibility of our HTML elements.
* **DevTools** are a front-end developer's best friend.  We will get well acquainted with its various tools as the course progresses.

Now let's continue onto our next lesson and complete the "What We Do" section.