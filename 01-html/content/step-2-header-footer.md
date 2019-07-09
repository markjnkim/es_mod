# Step 2 - Build out our Header and Footer

## Introduction

Let us take a moment to start by giving ourselves a pat on the back. The hardest part of building a new HTML document is actually getting started, and we now have more than enough to work with in these upcoming steps even though there is not much visible content on our page.

In the previous step we built a series of "containers" for our web page to hold different types of content. At first glance, this may seem like a lot of extra work, but as we continue to add content and apply style to each section one at a time we won't have to worry about our work affecting the other sections.

This step will focus on building out the content and applying styles for both the header and footer of our page. Why the header and footer? Why do the top and bottom and leave everything in the middle untouched? This is because the header and footer typically follow similar patterns when adding both inner HTML content and applying styles. Since this is our introduction to a lot of these concepts, we'll keep it a little bit on the plain side so we can focus on learning.
  
We will be introduced to both new HTML elements and **Cascading Style Sheets**, which will be referred to throughout the rest of this unit (and our careers) as **CSS**. The nice thing about what we will be working on here is that a lot of what we learn will be repeated in future steps. It is technology that is best learned through doing, so let's get started!

## Add content to our `<header>`

![header html](assets/step-2/100-header-html.png)

We'll begin by adding some information that most modern web pages have: branding and navigation. These two pieces of a **user interface** (also known as "UI" for the hip) usually find their way into the `header` of an HTML document.

Branding is something most web pages have on them in a prominent position so users know where they are. We have already provided this type of content since we added the `<h1>RUN BUDDY</h1>` to the `<header>` in Lesson 1.

Now we have our page's identity in place, let's turn our attention to the navigation portion of our `header`. To begin, let's start by adding `<nav>` and `</nav>` immediately below our `h1`, but above the closing `</header>` tag . The `nav` HTML tag is a newer "semantic" tag designed to help with accessibility and SEO. The browser can now read these tags and get an idea of what information is inside.

> IMPORTANT: Web Accessibility
>
> As the web has grown and become so ubiquitous over the years, so has the need to make it available to as many people as possible. As a developer, our main role is to create products that can provide a similar&mdash;if not identical&mdash;experience to every single user, even those with limited abilities. Special applications and even browsers now provide support to those with special needs on the Internet.
>
> The best example of this is a screen reader, where the browser will interpret an HTML tag and its content, then read it to the user as they move along the site and select/hover over elements with their mouse or by using the `tab` key on a keyboard. However, the browser can only infer so much on its own, so it's up to us to use the proper tools and methods to provide important information in a way the browser can interpret.
>
> There are a number of tools we can use to add accessibility to our pages, the most prominent and easy to implement being HTML5 semantic tags. Up until the late 2000s the `<div>` element was used everywhere a block of content was needed. This led to developers having to work extra hard to properly identify sections of content so screen readers could interpret the page better. Now we have tags that structurally work like a `<div>` element but have more meaningful names like `<header>`, `<footer>`, and `<nav>`. This means the browser can start by reading the HTML tag itself and inferring what content is inside of it and how important it must be on the page.
>
> We will be exploring more of these tools in this project and in upcoming projects, but [here is more information about the topic](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

There are a number of ways to organize navigation links. We will use a popular method by creating a list and giving each navigation link its own spot on that list. Right after the opening `nav` we just created, place the following:

```html
<!-- Unordered list tag -->
<ul>
  <!-- List item tag-->
  <li>
    <!-- Anchor tag -->
    <a href="#what-we-do">What We Do</a>
  </li>
  <li>
    <a href="#what-you-do">What You Do</a>
  </li>
  <li>
    <a href="#your-trainers">Your Trainers</a>
  </li>
  <li>
    <a href="#reach-out">Reach Out</a>
  </li>
</ul>
```

So let's unpack what we just created, starting with lists. In HTML there are two types of lists: "ordered" and "unordered". Ordered lists or **`<ol>`** tell the browser to interpret any nested "list item" **`<li>`** in numeric order (1, 2, 3, etc). Unordered lists **`<ul>`** allow for a more loosely formatted list by marking each nested list item with a symbol (such as a bullet point or dash). The relationship between `ul` and `ol` with an `li` is a direct parent/child relationship, meaning that `li` or child should be nested or contained within the parent element's opening and closing tags, in this case the `ol` or `ul` tags.

Within reason, anything can be nested inside of an `<li>` tag. In our case for creating a navigation, we used an "anchor" **`<a>`** element. Anchor elements are crucial tools for us as they give us the ability to create links in our HTML that take us to other destinations when clicked. These destinations can be within the same page, another page within our site, or another web site entirely.

The `<a>` element is a prime of example of the "hypertext" in HTML, as hypertext is defined as text that links to other texts. Since this term was coined in the early 1960s, its definition has grown beyond just text and also includes other types of media.

Take a look below to see a few examples:

```html
<!-- When we click "Go To Google" it will take you to Google -->
<a href="https://google.com">Go To Google</a>

<!-- This will take us to our own site's privacy policy HTML page -->
<a href="./privacy-policy.html">View Our Privacy Policy</a>

<!-- This does nothing at all -->
<a>This does nothing</a>
```

Notice the first two have an `href=` inside of their opening tags? This is what is known as an HTML "attribute", and in this case it is critical for it to be included with a value associated in order for the `a` tag to work as intended.

**Attributes** help us provide different functionality, meaning, and context for our HTML elements. They are not necessary for every element (as we can see, we've written a lot of HTML so far without them) but can be added to any element. There are some elements that do in fact require them to work as intended, such as `<a>`. If we were to omit the `href` attribute, then the `<a>` element would not be clickable.

Throughout this lesson and in the future we will be introduced to some other very important attributes. These attributes will help us provide an HTML element a unique identity, create relationships with other elements, and provide design changes using CSS.

Here are some popular attributes:

- **`id`**: A unique identifier for an HTML element, the value of this can only be used once per HTML document

- **`class`**: Another way of identifying an HTML element, but its value is expected to be more general and can be reused across multiple HTML elements on a page

- **`title`**: Not to be mistaken for the `<title>` element, the `title` HTML attribute holds a value that appears as a small pop-up (known as a "tool-tip") when the mouse is hovered over an element for a period of time.

> DEEP DIVE: Having a reference to [all attributes and their uses/limitations](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) will be handy.

The values associated with our `href` attributes in this navigation are giving us the ability to jump right to a certain spot on our current page. The syntax `href="#what-we-do` is actually telling the browser that when that `<a>` element is clicked, go find another HTML element on that page with the attribute `id="what-we-do"`. We don't have that attribute added just yet, but we will soon.

So now that we know what `<a>` elements are and how they are implemented, let's implement a best practice and make the branding in the `header` of our page clickable to take the user back to the home page, so let's go ahead and add that capability. We can do so by wrapping the content between the `<h1>` tags with its own `<a>` having an `href` value of "/".

The value of the `href` used here, a forward slash ("/"), will always represent the path to the topmost directory of an application or project. So in this case when a user clicks on the `<a>` element they will be taken to the topmost directory, but since there is no file specified the "index.html" file will be loaded.

> REWIND: Think back to Lesson 1 when we learned that if no file is being specifically looked for, a computer will try and provide an "index" page. In web development, this is why the home page has a filename of "index.html"

If your code now looks something like the following, then we are ready to move on and make this start looking good!

```html
<header>
  <h1>
    <a href="/">RUN BUDDY</a>
  </h1>
  <nav>
    <ul>
      <li>
        <a href="#what-we-do">What We Do</a>
      </li>
      <li>
        <a href="#what-you-do">What You Do</a>
      </li>
      <li>
        <a href="#your-trainers">Your Trainers</a>
      </li>
      <li>
        <a href="#reach-out">Reach Out</a>
      </li>
    </ul>
  </nav>
</header>
```

> DEEP DIVE: Learn more about the HTML elements we just used.\
> [Anchor Element `<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)\
> [Heading Elements `<h1> - <h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)\
> [Navigation Element `<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)\
> [Unordered List `<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)\
> [List Item `<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

> PAUSE: We just did a fairly decent amount of work, we should save our work and make sure it's backed up to Github. Using the commands from the last step, make sure the work is saved when a good amount is complete. We don't need to save after EVERY line of code written, but if a big section is completed, save it.
>
> Git Commands:
>
> - **git add -A**: use this to tell Git to pick up (also known as "track") any new, edited, or removed files in your project
>
> - **git commit -m "commit message"**: now that the files are being tracked by Git (by using `git add -A`), tell git _what_ we've added or changed. That goes into the `commit message` portion in the command.
>
> **NOTE**: These two commands are responsible for telling Git what we're saving and why we're saving it. Think of it as a local save point for our project. What hasn't happened yet is getting GitHub to see these new changes, but these two have to be done first (in this order) before we can get this code to GitHub.
>
> - **git push origin master**: use this command to take all of the code and file edits from our recent `commit` and get it all up to GitHub. So now our code is saved both locally on our machines and there's a direct copy of it on our GitHub profiles.
>
> If we visit our [GitHub pages link](https://username.github.io/run-buddy), we'll be able to see the new HTML!

> URKEL SAYS: We've seen the `#` syntax in action with `href` values, but it will be used in many more places throughout our career as programmers. It is what's known as an "octothorpe", [learn more](https://en.wikipedia.org/wiki/Number_sign#In_computing)!

As we've seen, the HTML tags we have implemented so far do a great job of answering their own questions:

- What do I say? (i.e. the content between `<h1>RUN BUDDY</h1>`)

- What can I do? (i.e. the `href` attribute providing a destination upon click)

One question that HTML _used_ to know how to answer for itself was **"How do I look?"**. Early HTML developers were provided a very limited set of options for changing how a web page was designed such as changing the color of text, adding a background color, or giving an image height and width dimensions. Most advanced (for the time) designs were achieved by taking a mock-up of the design and slicing it into a bunch of small images, then laying them all into an HTML table element to get them just how they want. Think about how difficult it would be to create a nice design using Microsoft Excel, it is probably very frustrating.

As developers wanted more control over their web page designs, it was realized that HTML may not be capable of supporting so many more options on its own since it is already in charge of handling a page's content. At this time, a new language was created and released to take some responsibility off of HTML when it came to the actual presentation of its content.

## Enter CSS

**Cascading Style Sheets** (aka **CSS**) was first released to the public in 1996 as a new style sheet language to handle describing the presentation of an HTML document. It is one of the top three web technologies, alongside HTML and JavaScript. CSS allows the developer describe how elements should be rendered in different media formats such as screen (web browser, mobile phone, even smart watches), paper (printing an article), and speech (accessibility and screen reader dictation).

Using CSS we can control and HTML element's typography (font family, size, color, weight, etc), how much space it should take up on the page, where it should be on the page in relation to other HTML elements, what type of background it should have, and so much more. This is an exciting time for CSS developers as well, a lot of new tools are being added to the language that allow us to really push the boundaries of web design and blur the lines between web and print layouts.

This is a mock-up of the page we are currently building without any user-defined styles (the browser includes some by default, more on that later):

![Page - no css](assets/step-2/101-page-nocss.png)

As we can see, it's a very long page that reads well enough in order, but there's a lot of unused space and some of the images are simply way too large. Now let's look at how this same exact page will look after our styling is complete:

![Page - with CSS](assets/step-2/102-page-css.jpg)

This looks much better with CSS, as we get to change how our content looks and is laid out along the page. It takes very plain content and presents it in a meaningful way so a user can understand the product this page is trying to sell.

CSS's syntax is fairly simple looking, but can be used in many different ways to achieve an intended presentation or design for a page. Developers use it by listing an HTML element they want to style, then listing a predefined style characteristic (known as a "property") and providing them a value. Let's take a look and study the following syntax:

![CSS Syntax](assets/step-2/300-css-syntax.png)

- **SELECTOR**: This is the part that actually says "let's find this matching HTML element (in this case it's the `body` tag) so we can tell it what it should look like". This is the most basic of selectors, where we select by HTML element name. We can use a CSS selector to be very vague (apply styles to all `<a>` elements) or very specific (apply styles to any `<a>` element that is inside of a `<header>` element and ignore any of the others that are not). We'll get into more specific selectors as we proceed.

- **PROPERTY**: CSS has an extensive list of possible style properties that it recognizes. All we need to do is list one in between the selector's `{}` brackets and we can now change how that element looks. Examples of popular CSS properties are "color" (to control the text color), "background-image" (to apply a background image to that section), and "font-family" (to change the default font). If we use one that isn't predefined, then the browser will ignore the style. [Here's a great list of all possible CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index)

- **PROPERTY VALUE**: This is where we get to provide the desired look to the element. Like properties, CSS has a specific set of possible variations for values that it will understand. For example, if we were to say `font-size: 3meters` it wouldn't be understood and not apply. But if we were to say `font-size: 24px`, the font's size will be set to 24 pixels because that is a value CSS can understand. [Here is a full list of CSS values and units of measurement](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)

- **DECLARATION TERMINATOR**: A `property: property-value` pairing is what's known as a "declaration". In order for us to apply multiple styles to an element, we need some way to tell the language "this declaration is finished, make a new one". The way that CSS determines that a declaration is complete is when it sees a semi-colon `;` at the end. Accidental omission of the terminator will result in CSS thinking everything after is still part of that first declaration, so it is very important to terminate our declarations.

While these four pieces of the syntax may not seem like a lot to work with in CSS, it allows for a lot of variation and control of our HTML element styling.

Setting up a project with CSS can be done in a few different ways:

- Create a file specific to writing CSS with the file extension `.css` and write all style definitions there, then connect it to the HTML file using `<link rel="stylesheet" href="./path-to-styles.css" />`

- Use a `style` attribute with the styles you want to apply directly to the HTML tag (i.e. `<h1 style="color: blue">This is a blue header</h1>`). This is known as "inline styling", as it is directly next to the element it's providing style to.

- Apply all styles in between the HTML document's `head` tags using `<style>` HTML tags to surround all style definitions. Take a look at the below code snippet, then copy and paste the `<style>` element into your page. After refreshing the page, you'll see the page's background turn a tomato-red color and the `<h1>RUN BUDDY</h1>` will become much bigger.

```html
<head>
  <meta charset="UTF-8" />
  <title>RUN BUDDY</title>
  
  <!-- Add this to the page and see what happens! -->
  <style>
    body {
      background-color: tomato;
    }

    h1 {
      font-size: 100px;
    }
  </style>
</head>
```

The last two may options sound enticing to us. Why _wouldn't_ we want to keep our styles tightly coupled with our HTML elements? Why _wouldn't_ we want to at the very least keep all of our style definitions in the same HTML document that we're styling? Seems like a no-brainer.

We'll actually be going with the third one, here's why:

- Currently our HTML file is small, but what will it look like when it gets larger and there's also style definitions? The file will become impossible to read and get very messy looking.

- Having an external CSS file gives us the flexibility to select multiple HTML elements at once and apply the same styles, allowing us to effectively write less code. Less code to write = less code to maintain. (This is a very important concept in all programming)

- We can share styles across multiple HTML files since it's in a third-party file as opposed to directly coupled to the single HTML document.

Before we move on, let's go ahead and remove the `<style>` element and all of its content from the HTML document. We'll be adding different styles in their own file so we don't want to have these in place when we do.

> IMPORTANT: This reinforces a concept called "Separation of Concerns", meaning that it's better to keep code that serves different purposes away from each other so it's easier to read and write

## Setting up our first stylesheet

So now we know which route we're taking to include CSS into our web page, let's do it!

> LINEAR STEPS
>
> 1. Using our newfound knowledge in command line tools, create a folder called `assets` (HINT: use `mkdir` to create a folder, then use `ls` to print out the contents and see if it worked!)
>
> 2. Move into the newly created `assets` folder using `cd` and then create another folder inside of `assets` called `css`
>
> 3. Move into the newly created `css` folder and now let's create a file called `style.css`. Don't worry about putting anything inside of it just yet.

Now that our file is created, we need to tell our HTML document to read any applicable styles that `style.css` may have for it. We can achieve this by placing `<link rel="stylesheet" href="./assets/css/style.css" />` in between the `head` tags in our HTML document.

What we just did was use the HTML tag `link` to tell our HTML document to go find a specific resource (file) and incorporate it into the document. It needs at least one attribute, `href`, which behaves similarly to how it works in `a` tags, but this one is serving a different purpose. This one is saying "find this file called `style.css` located in the `css` folder inside of the `assets` folder, read it, and incorporate any of its information into this HTML document". This is the first real instance we've provided a value to an `href` that points to another file in our directory, this is what's known as `relative pathing`, and it is a very important concept so make sure to read the block below.

The other attribute, `rel`, is providing a little more context as to what the HTML's **relationship** to the file being included through the `href` is supposed to be. In this case and most of the time, we'll be using `rel="stylesheet"`, but as time goes on there may be situations where that may change.

> IMPORTANT: Relative file paths
>
> Throughout our careers, there will be almost daily instances where we will have to make one file look for and read another. We used this above with the `link` tag's `href` value "./assets/css/style.css".
>
> When we breakdown this value, it is essentially saying "starting where this current file is (`.` denotes the current directory), let's look in a subdirectory called "assets", then from "assets", look in a subdirectory called "css", and lastly, select a file called "style.css".
>
> This works well for us because the other option is to put a hard set path (also known as `absolute path`) from the host computer's directory structure, meaning it'd look something like this:
>
> ```html
> <link rel="stylesheet" href="/Users/alexrosenkranz/Desktop/run-buddy/assets/css/style.css" />
> ```
>
> See a potential problem here? This path is very specific to someone's personal computer, it even has a username in it. If we were to put this code into production or share with a teammate, the project's code would live on a different computer entirely. That path in the example most likely does not exist on that computer, meaning any reference to it would break and the page will not load correctly.
>
> The best solution for this is to work with relative pathing, as we typically push the entire folder structure for the project up together and the paths don't lose context as to where they are.
>
> The idea of pathing is just like the command line commands we learned in the last lesson, where we move relative to where we are currently in the folder structure and can move into subdirectories with `./subdirectory-name` and move out of a folder with `../`, which will step us up a level into the parent directory.

Let's test this and make sure it worked by adding the following to `style.css`:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  background-color: tomato;
}
```

If that turned the whole background of your page to red, then it works! Please remove the `background-color` style from the page as we won't need it anymore.

> PAUSE: We'll get into explaining the above CSS syntax in the next step, but take a moment and think about what's happening here. In CSS, we used the word `body`, where have we seen `body` before? Maybe in the HTML document?

## Our first styles

Okay, so let's take that wonderfully plain `header` we've been working on and actually make it look like a professional navigation bar. We'll start by exploring exactly _how_ we can tell CSS to attach styles to specific HTML elements using `selectors`.

Now that we know the basic "ins and outs" of how we can write CSS, let's actually do it to our page!

So typically it is a good habit to start off our CSS writing with a few styles that apply to the whole page by applying them to the top-most element. By selecting the top-most element, all "child" elements (i.e. `<header>` is the child of `<body>`) will receive the style as well. We do this because it'll have an immediate effect on the page and it'll save us time from having to apply styles to every applicable element. So let's add this to our CSS (if it is currently already defined, just overwrite it):

```css
body {
  /* more on this crazy value in a minute */
  color: #39a6b2;
  font-family: Helvetica, Arial, sans-serif;
}
```

By adding this, we are setting the color of the font for the entire page to a light blue / teal color with what's known as a [hexadecimal number](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) and setting the font to "Helvetica". The other two values for the `font-family` definition are included just in case the user's computer does not have Helvetica installed, that way they can fall-back to those other font choices. These are both applied to the `body` tag on the page because the `body` is the parent to all of our other HTML content tags, so we can now control all of them by applying a style to the parent.

> DEEP DIVE: Helvetica is not a font that typically comes installed on computers running any Windows operating system. The reason for this is that most fonts, including Helvetica, belong to companies that own and license out the fonts for a great deal of money. Think of it like a designer's version of Coke vs. Pepsi, where it's rare to see both companies' products offered at the same place.
>
> Microsoft made a deal with Monotype in the early 1990s to license their fonts and include them in Microsoft's software, but Linotype was the owner of Helvetica. Microsoft had Monotype create their own versions of Linotype's fonts (i.e. Arial), but they are all slightly different.

This is also a good time to look at CSS comments as well. We are using one above the `color` declaration, it looks like this:  

```css
/* I'm a CSS comment! */
```

This syntax is slightly different from HTML's comment syntax, but it behaves the same way. Every programming language has it's own flavor of denoting a comment. Some are similar, some can be very different, but they all behave the same way.

> DEEP DIVE: We'll be diving more heavily into web fonts and typography over the upcoming weeks, but in the meantime it may be a worthwhile look to learn how [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) work, as we'll be diving deeper into some other values next week. For now we'll be sticking to using hexadecimal values and maybe a directly named one (i.e. white, black, aquamarine, etc)

Now let's start to pretty-up our `header` with the following style:

```css
/* apply styles to <header> */
header {
  padding: 20px 35px;
  background-color: #39a6b2;
}
```

We just told the `header` tag to be 100% of the `width` of it's parent, in this case the parent is `body` and that has a width of the entire page. We also applied `padding`, meaning we wanted to add space between where the `header` starts and where the content of it starts. We also applied a `background-color` of a light blue / teal.

> IMPORTANT: Understanding the `padding` syntax. It can be done in multiple ways
>
> ```css
> /* applies 20px to every side (top, right, bottom, left) */
> header {
>   padding: 20px;
> }
>
> /* applies 20px to the top AND bottom, then 35px to the left AND right */
> header {
>   padding: 20px 35px;
> }
>
> /* applies 10px to the top, 15px to the right, 20px to the bottom, 25px to the left (in that specific clockwise order) */
> header {
>   padding: 10px 15px 20px 25px;
> }
>
> /* explicitly list the side it should be applied to*/
> header {
>   padding-top: 10px;
>   padding-right: 15px;
>   padding-bottom: 20px;
>   padding-left: 25px;
> }
> ```
>
> How we do it is up to us and there is no "wrong" way. This methodology will also to apply to some other style properties such as `margin` and `border`

> DEEP DIVE: CSS properties that allow listing multiple values at once are what's known as [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties), and can save a ton of time and cut out a lot of repetitive code.

Before we move on to the rest of these styles, let's take a moment to learn and understand how an HTML element's height and width dimensions are calculated for placement on a page. This called the **Box Model** and can be a little tricky at first, since we are dealing with some things that aren't visible, but it is an important concept for any web developer to know.

## CSS Box Model

All HTML elements can be represented by a rectangular box which we will call the CSS box. The CSS box model is a visual display of the properties in the CSS box that includes the content, padding, border, and margin that are all built around each other like layers in an onion. Some of the styles of each layer like the thickness, style, and/or color can be manipulated using CSS.

![Box Model](assets/step-2/103-box-model.png)

1. **Content** is the innermost box inside our CSS box that will contain text as well as any nested elements. The content box size is determined by the height and width.

2. **Padding** refers to the inside margin within the CSS box. Each of the four sides of the padding size can be specified as detailed in the previous lesson.

3. **Border** sits on the outside edge of the padding and the inside edge of the margin. This layer's sides, size, and styles can be specified, similarly to the padding and margin. Such as border-bottom or border-style or even border-top-color. This property also needs a weight of the line, style, and color in order to render.

4. **Margin** surrounds the CSS box and touches the adjacent elements. This property's values are designated like the padding and can be specified by side and size.

All four of these pieces are included in a browser's calculation of an HTML element's dimensions. This is something that even veteran developers can get tripped up with, as it may be easy to assume that the HTML's height or width should only be accounting for the physical/visible content inside of it. But in reality, the content is only a piece of the puzzle. 

If an HTML element needed space between itself and the next HTML element, this would involve adding a margin to it and would actually increase the overall real estate that element took up. A real world example of this would be the size of a home's property versus the size of the home itself.

While this may seem like a tricky thing to nail down, we'll be introduced to some tactics that will make our lives a lot easier. Before that, let's finish styling our header.

## Back to styling

So now we've created our base `header` styles, let's target some of the tags nested inside of it, starting with the `h1`:

```css
header h1 {
  font-weight: bold;
  font-size: 36px;
  color: #fce138;
  margin: 0;
}
```

Here, we are implementing a more specific selector pattern. This one ensures we are only applying styles specific to a particular `h1` tag, the one that lives _inside_ a `header` tag. This is a great method for adding specificity to our styles, so we can keep them scoped to particular section and context. We'll do more of this next with some different combinations of specificity.

> IMPORTANT: In HTML, there will be many cases where the same elements are used for very different reasons in a document. This will typically mean that the CSS applied to them needs to be different as well. How CSS determines what styles are applied to specific elements when there are multiple instances of them on a page can be described by using a term in its own name, "Cascade".
>
> The cascade is a set of rules CSS follows when determining order of importance when it comes to applying styles. Say, for instance, we have multiple `<a>` elements in the `<header>` that we want to make yellow, but we want to make the `<a>` element in the `<footer>` blue. This can be achieved by being more specific in our selection of elements and saying "let's select all `<a>` that are in `<header>` and do this with them", meaning we can only focus on elements inside another element.
>
> The cascade follows three factors:
>
> 1. **Importance**: by adding `!important` to the end of a property declaration, it will override any conflicting style declarations for that element. This is not recommended for use, as using this means we should simply be smarter about how we select elements rather than brute forcing styles onto them.
>
> 2. **Specificity**: CSS actually weighs the importance of different types of selectors used by how specific they are. If we were to apply a style by selecting `h1`, it will apply to all `<h1>` elements. But if we were to then apply a style by selecting `header h1`, it will ignore conflicting property declarations in the `h1` definition and apply `header h1` instead since it is a more specific selection.
>
> 3. **Source Order**: There is nothing that will stop us from accidentally selecting and defining styles to the same element more than once, but CSS is read top-down. This means that if we select `h1` and give it a color of red on line 1, then select it again and give it a color of blue on line 4, our `h1` is going to be blue because it was defined later.
>
> CSS styles are also applied through something known as "Inheritence", meaning if a style isn't explicity defined for a child element, it will try and use the style being applied to the parent element.
>
> ### [Read more about Cascade and Inheritence here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)

Now turning our attention to the actual property declarations happening here:

- **font-size**: We can assume that `font-size` means quite literally the size of the font in the `h1` tag.

- **font-weight**: The `font-weight` property is looking to set the font to `lighter`, `normal`, or `bold` font display. There are other values associated with this property, but for now there's no need to dive into them as we won't really see a difference in the outcome.

- **color**: The `color` is simply setting the color for this particular `h1` tag (notice how it's overriding the `color` we set for the `body`, this is because the style is declared directly to the element).

- **margin**: Lastly, `margin` behaves a lot like `padding` does, whereas `padding` creates space _inside_ the box, `margin` creates space _outside_ the box and pushes any other HTML tags before and after it away. It, too, behaves like `padding` in the sense of how it's values are provided (top, right, bottom, left).

It should now look like this:

![Header Styles - 1](assets/step-2/400-header-style-1.png)

If it does, great! Let's start moving that navigation bar over to the right. These next steps are going to introduce some more specific selectors, so keep in mind that this is just one of many ways to properly select and apply styles, and is intended to get us acclimated to some of those many flavors. Over time, we'll hone our skills and become more efficient with applying styles, but for now we'll stick with the more easy to understand selectors.

We'll explain these new properties when we're all done here, so don't worry if it's confusing in the moment. In between applying these following styles, make sure to save and refresh the page in the browser to see the changes happening!

> LINEAR STEPS
>
> 1. Apply styles to every `a` tag in the header.
> 2. Apply styles to the `nav` tag.
> 3. Apply styles to the `nav` tag's `li` tags.
> 4. Apply styles to the `a` tags inside of the `li` tags
> 5. Marvel at the progress we've made.

Let's start with applying styles to every `a` tag in the header.

```css
header a {
  text-decoration: none;
  color: #fce138;
}
```

What we've done here is select all `a` tags inside of `header`, including the one in the `h1` and the ones in the `nav`. We used a new property here as well:

- **text-decoration**: This is a style to apply `underline`, `strikethrough`, or `overline` styles to the text. By default, the value is `none`, so it's usually not something we have to explicitely tell it NOT to do. With `a` tags, however, the browser applies both a blue color and an underline, so we need to go and override those styles and make them our own.

Now we'll move onto styling the `nav` tag.

```css
header nav {
  float: right;
  margin: 7px 0;
}
```

So we've done something fairly drastic. We've taken the `nav` tag and moved it to the right side. As we've seen so far, most HTML tags position themselves along the left side of the page with one coming below the other. Now we've taken one totally out of the normal "flow" of the page. The property used here is called `float`:

- **float**: Think of this as the "text-wrap" property from Microsoft Word, which takes elements that want to take up 100% of its parent's width by default (known as **block elements**) and push everything after it below it&mdash;even if it physically isn't 100% of its parents width&mdash;and allows other elements to come along side of it or wrap around it (known as **inline elements**). This property is used when we have HTML elements that would look better side-by-side and use our horizontal space in a more meaningful way. There are other CSS properties that allow us to turn block elements into inline elements, but using `float` in this case made more sense because we needed to turn this element into an `inline` element and also move it to the right. `Float` let's us do both at once.

> IMPORTANT: BLOCK vs INLINE HTML
>
> The browser has a specific way it wants to interpret and position certain HTML tags. This concept is called "flow". Normal flow in HTML is what a page is with no CSS overriding default layout styles. This flow follows two directions: BLOCK (top to bottom) and INLINE (left to right)
>
> In HTML, there are certain tags that are designed by default to take up 100% of the width of whatever it's parent element is. If the parent element is 800px wide, then the child is 800px wide and won't allow anything to the left or right of it. This is what's known as a `BLOCK` level element. Popular tags that have a default block styling are all `h1` - `h6` tags, `div`, `section`, `nav`, `header`, `footer`, and `li`.
>
> The other type of element default is an `INLINE` element. This means that the element will only take up the space it needs to take up and not demand 100% width. These are used to allow elements to the left or right of them. The most popular tag that is an inline element is the `a` tag, but there will be more that we get into later.
>
> CSS allows us to override these elements default layout definitions through a few different ways, but the most on-the-nose on is to apply a `display` property to that element. Here are some of the more popular values we can provide:
>
> - **display: block**: this is used to take an element and force it to take up 100% of the width its parent is by default, which will put it on its own horizontal line.
>
> - **display: inline**: make an element only take up the space it needs and allow other elements to flow "in-line" with it horizontally. Any width or height properties associated with an inline element is ignored.
>
> - **display: inline-block**: the same as `inline`, but this allows width and height property definitions to be heard and applied.
>
> - **display: none**: simply remove the element from the view of the browser and let the next elements come up and take it's space. This won't delete the HTML associated with it, but will hide it completely and removes the element from the "flow" of the HTML document.
>
> In next week's unit, we'll get into some new, more advanced display values that are going to really step up our layout game.

We've also added in a little bit of a top and bottom `margin` here too:

- **margin**: We've discussed `margin` before, but just to reiterate, this one has a value of `7px 0`, which means it has `7px` of space added to the top AND bottom but `0px` to the left AND right.

Now that we have our two main pieces (`h1` and `nav`) in position, let's move into the `nav` tags.

```css
header nav ul li {
  display: inline;
}
```

Notice how before we added `display: inline`, the list looked like, well, a list? This is because each `li` is a block element, meaning the browser lets it take up 100% of the width of whatever parent element it's in. As mentioned above, block elements will always force the next element to be on the next line, so we had to make it a different type of element known as "inline". This is another case of us overriding a default style that the browser provides `li` tags.

Last one we need to hit is the `nav`'s `a` tags. Notice how we've already applied styles to the `a` tags in the `header`, but now we need to be more specific and give only these particular `a` tags styles that the other `a` tag doesn't need. So now these `a` tags will receive not only the styles we added earlier, but these styles as well.

```css
header nav ul li a {
  margin: 0 30px;
  font-weight: lighter;
  font-size: 22px;
}
```

Now we aren't quite there yet, there are still a few tweaks we need to add to our CSS to get it aligned with perfectly. This is going to involve overriding a couple of browser _quirks_, so we'll get a little more detailed with that. But for now, our `header` should look something like this:

![Header styles - 2](assets/step-2/500-header-style-2.png)

> PAUSE\
> Considering the above, what do these other selectors say?
>
> ANSWERS\
> `header nav ul li`: Select all `li` tags inside of a `ul` tag inside of a `nav` tag inside of a `header` tag
>
> `header nav`: Select all `nav` tags inside of a `header` tag

Okay, this has been a lot to take in, but hopefully it has given us enough basic understanding of how things _want_ to behave and how we can undo it. With that said, let's head back and take a look at fixing our little issue in the `header`.

Think about that list of block level elements that are listed above and see if there's any element in the `header` currently that is taking up more width than it needs to be.

> HINT: It's on the left-hand side and it's NOT the `nav` tag!

Now that we've figured out that our `h1` tag is the wrench in the works, let's add another style property to our already existing style. Particularly, let's set that element's `display` property to `inline`.

```css
header h1 {
  font-weight: bold;
  font-size: 36px;
  color: #fce138;
  margin: 0;
  display: inline;
}
```

So just by adding that one property declaration and setting the `h1` to `inline` instead of `block`, we allowed the `nav` on the right hand side move up, but not as far as we thought it would. So what gives? If we took the `h1` tag out of `block` styling, shouldn't that allow whatever is coming to the right of it be on the same line?

This is happening for the same reason the teal background of our `header` doesn't come flush up against the top left of our page, which is what we want. So let's fix both of these problems at once, which will also prevent many future problems as well.

It has been mentioned a few times now that the browser has some thoughts of its own about certain styles for elements. Without any CSS present, `h1` - `h6` tags get special styles from the browser like making it bold and giving it more space than regular text. As a matter of fact, the browser provides built in margin and padding on a lot of different elements by default. This is a remnant of a previous world, one where CSS wasn't so prevalent, meaning the browser used to have to do a lot of the heavy lifting as far as styles go.

These styles remain in the browser, but now that CSS is so ubiquitous it is something we actually have to go out of our way to remove before we can successfully design a page. Now we can't necessarily go into the browser and tell them to cut it out, but we CAN apply some default values for EVERY tag in our page and level the playing field for us. That way we don't have to spend so much time undoing browser styles one by one and rather select ALL tags at once. So let's go head and do that by adding this to the very top of our style sheet:

```css
* {
  margin: 0;
  padding: 0;
}
```

We just told every tag on the page to not have any margin or border UNLESS we explicitly tell them to. Now way we don't have to concern ourselves with hacking our way through undoing built-in browser styles one by one.

The asterisk `*` we used here is a symbol used quite often in programming. It is typically called a "wildcard", but in CSS it is what's known as a "universal selector". This is essentially a catch-all selector, saying "I won't match one thing, I'll match everything".

> DEEP DIVE: To learn more about this selector, [read it's documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors). It's a powerful selector and doesn't need to be used for much more than this. We'll be adding one more thing for this project, but that's about it.

Okay so now we're looking good, right? The header is flush up against the top left corner of the page so there's no weird white gap. The navigation is nice and directly to the right of the `h1`. We can safely say at this point that we have finished our `header`! Let's double check and make sure that the page currently looks like this:

![completed header](assets/step-2/600-header-complete.png)

If it does, great! It's time to move onto styling the `footer` next. But rest assured, we went through so much in this one section that a lot of the work we do next won't be as long or difficult. We covered a lot, so let's do a pulse check:

> Check Point:
>
> **Given the following CSS selector, which HTML element would be the outermost/parent element?**
>
> ```css
> header nav ul li {
>   color: white;
> }
> ```
>
> a. `li`\
> b. `header`\
> c. `nav`\
> d. `ul`
>
> ANSWER: `b. header`
>
> ---
>
> **What is the preferred way to include/link another file in programming?**
>
> a. `relative pathing` (`href="./assets/css/style.css"`)\
> b. `absolute pathing` (`href="/Users/alexrosenkranz/Desktop/run-buddy/assets/css/style.css"`)
>
> ANSWER: `a. relative pathing`
>
> ---
>
> **The `*` selector in CSS selects all HTML elements and applies a style to them.**
>
> a. `True`\
> b. `False`
>
> ANSWER: `a. True`
>
> ---


> PRO-TIP: Don't forget to save your work and push to GitHub!



## Setting up our `footer` HTML

By the end of this section, our `footer` will look like this:

![Footer HTML](assets/step-2/700-footer-html.png)

So this first part is easy, we don't even have to concern ourselves with the fancy `Made with love` section on the left hand side since it's already done. So let's worry about making the other part of our `footer`.

The Run Buddy legal department is also drafting a privacy policy for the site, but it won't be ready until later in the project. For now, we'll add a placeholder link to it in the footer, and update the link with the actual URL later, when the page is ready.

We'll go ahead and add this in our `footer` right after the `h2`:

```html
<div>
  <a href="#">Read Our Privacy Policy</a><br />
  &copy; 2019 Run Buddy, Inc.
</div>
```

When we apply styles to the `footer`, we're going to want both of those new items to be on the right hand side of the page. So we could try and position them individually to the right, or we could wrap both of them in a container (in this case, a `div`) and then move the whole container over when we're ready. The latter sounds easier, because it is.

Let's review the two new pieces of HTML we used here:

- **Break Tags**: `<br/>` is an HTML tag that creates a line break, this way whatever comes after is going to be on the next line. Since `a` tags are inline elements, we need to create that space manually. These are great for situations like this, ones that don't require a ton of CSS tweaking, but just a simple line break.

> LEGACY LEM: Before CSS became popular, developers would create top and bottom margins and spacing by adding `br` tags until the desired space was met. This is not a good practice anymore, as `margin` and `padding` have made controlling space a much easier process.

- **HTML Entities (`&copy;`)**: If we haven't noticed yet, every HTML tag includes with a greater than `>` and less than `<` symbol, so what happens if we need to actually use one of those symbols in our content and not as HTML syntax? How does the browser tell the difference? The short answer is it can't, so HTML's solution is to have special character codes known as `HTML Entities`. These are special codes that start with an ampersand `&` and can be used to create symbols (i.e. `&gt;` creates a `>`). For more information and a more extensive list, [go here](https://developer.mozilla.org/en-US/docs/Glossary/Entity).

One more thing to mention is the use of a `#` as the value of the `href`. Considering what we saw earlier with the `href="#what-we-do` syntax, and how it is used to navigate towards another section of the same page with an `id` attribute looking like `id="what-we-do"`, what happens when there is no name after the `#`? This is used when we don't exactly know where we want our link to go yet. Yes, the text says `Privacy Policy` but we currently don't have that page created. So for now we'll use the `#` as a placeholder and we'll circle back to it later when we create that second page.

So now our `footer` has all the right bones to start designing!

## Designing our footer

Now let's make our `footer` look like this:

![Footer with CSS](assets/step-2/800-footer-css.png)

As we kick off this section by applying styles to just the `footer` itself, we should keep in mind the styles we applied to the `header` elements earlier and see how many of these concepts are repeated.

We'll start by adding this to the `footer`:

```css
footer {
  background: #fce138;
  width: 100%;
  padding: 40px 35px;
}
```

So it's effectively the same exact property declarations for the `footer` as we used in the `header`, with just a few value tweaks to give it a different background color and padding values.

Now let's go ahead and tackle the rest of the content in the `footer` step-by-step:

> LINEAR STEPS
>
> 1. Apply style to the left `h2`
>
> ```css
> footer h2 {
>   display: inline;
>   color: #024e76;
>   font-size: 30px;
>   margin: 0;
> }
> ```
>
> 2. Apply style to the right `div` container holding the rest of the content.
>
> ```css
> footer div {
>   float: right;
>   line-height: 1.5;
>   text-align: right;
> }
> ```
>
> 3. Apply style to the `a`.
>
> ```css
> footer a {
>   color: #024e76;
> }
> ```

Well that wasn't so bad, was it? Notice how we've repeated the same layout as the header by making the `h2` an inline element and the `div` float to the right? And only two new properties have been introduced:

- **line-height**: Line height is the CSS property associated with telling text content how much vertical space there should be between lines. The value associated with it (1.5) means we want the spacing to be 1.5 times the size of the font itself. This value will vary depending on what font we're using, but 1.5 is a good baseline. The idea behind this is we don't want our lines of text too close to one another, but we don't want them floating apart from one another either, so this lets us finesse the spacing and make it more readable.

- **text-align**: Just like any word processor we've used in the past, we get the ability in CSS to align our text to the left, right, center, or justified. By default it is left-aligned but can be changed with this property declaration.

Okay so now we've officially completed all of our styles for the header and footer, leaving us with something like this:

![Step 2 Complete](assets/step-2/900-finished-step-2.png)

## Reflection

So we covered A LOT in this section. There's no "soft" way to be introduced to some of these concepts, CSS in particular, so it required us to get our hands dirty. To recap what we did:

- We built two major components that typically go on every web page. By doing them one-by-one, we were able to learn about new HTML tags and structure without getting overwhelmed. This is a good workflow to practice, especially as beginners.

- We introduced quite a few new HTML tags that we will be using not only a lot throughout the rest of this project, but throughout the rest of our careers.

- We learned about HTML attributes, which provide more context, meaning, and even functionality to our HTML tags. The next section will introduce more attributes, but this was a nice introduction to them.

- We introduced ourselves to CSS, what it does, what it looks like, and how to implement it using the `link` tag in our HTML using relative paths.

- CSS element selectors and properties were used to style elements (and nested elements)

- Lastly, we learned that the browser conducts its styling of HTML elements a certain way (inline vs block, the box model, margins/padding, etc.), and that way may not always work for us. So we can use CSS to override these default settings and make our lives easier.

The best part about hitting all of these new topics at once is that the upcoming steps won't be as much introduction, and much more doing! These concepts picked up here will carry with us through our entire careers as developers. Now it's just a matter of knowing when to apply the right styles, and that just comes with practice and repetition.

> PRO-TIP: Don't forget to save and push your work up to GitHub!
