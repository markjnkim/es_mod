# Step 2 - Build out our Header and Footer

## Introduction

Let us take a moment to start by giving ourselves a pat on the back. The hardest part of building a new HTML document is actually getting started, and we now have more than enough to work with in these upcoming steps even though there is not much visible content on our page.

In the previous step we built a series of "containers" for our web page to hold different types of content. At first glance, this may seem like a lot of extra work, but as we continue to add content and apply style to each section one at a time we won't have to worry about our work affecting the other sections.

This step will focus on building out the content and applying styles for both the header and footer of our page. We will be introduced to both new HTML elements and Cascading Style Sheets, which will be referred to throughout the rest of this unit (and our careers) as `CSS`. The nice thing about what we will be working on here is that a lot of what we learn will be repeated in future steps. Be warned, however, CSS can be just as frustrating as it is rewarding, for both beginner and veteran developers alike. It is technology that is best learned through doing, so let's get started!

## Add content to our `<header>`

![header html](assets/step-2/100-header-html.png)

We'll begin by adding some information that most modern web pages have: branding and navigation. These two pieces of a UI usually find their way into the `header` of an HTML document.

Branding usually comes in the form of a logo or icon image but with the advent of custom web font options, a lot of developers haved started gravitating towards native HTML text instead. This makes the page's identity easier for Google to understand as it is just text as opposed to an image (which Google cannot interpret, yet). At this point, we've already gone this route when we added the `<h1>RUN BUDDY</h1>` to the `<header>`.

Now we have our page's identity in place, so let's turn our attention to the navigation portion of our `header`. To begin, let's start by adding `<nav>` and `</nav>` immediately below our `h1` (but keep it still before the closing `header` tag). The `nav` HTML tag is a newer "semantic" tag designed to help with accessibility and SEO. The browser can now read these tags and get an idea of what information is inside.

There are a number of ways to organize a page's navigation links, some make more sense than others in certain situations. We will utilize a more popular method of organizing them by creating a list and giving each navigation link its own spot on that list. Right after the opening `nav` we just created, place the following:

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

So let's unpack what we just created, starting with lists. In HTML there are two types of lists: "ordered" and "unordered". Ordered lists `<ol>` tell the browser to interpret any nested "list item" `<li>` in numeric order (1, 2, 3, etc). Unordered lists `<ul>` allow for a more loosely formatted list by marking each nested list item with a symbol (such as a bullet point or dash). The relationship between `ul` and `ol` with `li` is a direct parent/child relationship, meaning that `li` should typically live directly inside of `ul` or `ol` for the browser to understand the relationship between list items.

Within reason, anything can be nested inside of an `li` tag. In our case for creating a navigation, we used an "anchor" `<a>` tag. Anchor elements are a crucial tool for us as they give us the ability to create links in our HTML that take us to other destinations when clicked. These destinations can be within the same page, another page within our site, or another web site entirely. Take a look below to see a few examples:

```html
<!-- When we click "Go To Google" it will take you to Google -->
<a href="https://google.com">Go To Google</a>

<!-- This will take us to our own site's privacy policy HTML page -->
<a href="./privacy-policy.html">View Our Privacy Policy</a>

<!-- This does nothing at all -->
<a>This does nothing</a>
```

Notice the first two have an `href=` inside of their opening tags? This is what is known as an HTML "attribute", and in this case it is critical for it to be included with a value associated in order for the `a` tag to work as intended.

> **IMPORTANT**: _Attributes_ help us provide different functionality, meaning, and context for our HTML elements. They are not necessary for every element (as we can see, we've written a lot of HTML so far without them) but there are some elements that do in fact require them to work as intended, such as `<a>`.\
> \
> Throughout this lesson and in future units we will be introduced to some other very important attributes, so having a reference to [all attributes and their uses/limitations](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) can be handy.

The values associated with our `href` attributes in this navigation are giving us the ability to jump right to a certain spot on our current page. The syntax `href="#what-we-do` is actually telling the browser that when that `a` tag is clicked, go find another HTML element on that page with the attribute `id="what-we-do"`. We don't have that attribute added just yet, but we will soon.

So now that we know what `a` tags are and how they are implemented, there's something we forgot to do earlier. It is a good usability standard to make whatever the branding is in the top `header` of a page or site be clickable to take the user back to the main page, so let's go ahead and add that capability. We can do so by wrapping the content between the `h1` tags with its own `a` having an `href` value of "./index.html".

If your code now looks something like the following, then we are ready to move on and make this start looking good!

```html
<header>
  <h1>
    <a href="./index.html">RUN BUDDY</a>
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

## Enter CSS

As we've seen, the HTML tags we have implemented so far do a great job of answering their own questions:

- What do I say? (i.e. the content between `<h1>RUN BUDDY</h1>`)

- What can I do? (i.e. the href attribute providing a destination upon click)

One thing that HTML _kinda_ knows how to but does a poor job answering is **What do I look like?** This is where CSS steps in to take what we currently have and turn it into this:

![Header with CSS](assets/step-2/200-header-css.png)

CSS (the real name is Cascading Style Sheets) has a definition of being a language used to describe the presentation of an HTML document. It helps the developer describe how elements should be rendered in different media formats such as screen (what we'll be focusing on), paper (printing an article), and speech (accessibility and screen reader dictation).

Setting up a project with CSS can be done in a few different ways:

- Use a `style` attribute with the styles you want to apply directly to the image (i.e. `<h1 style="color: blue">This is a blue header</h1>`)

- Apply all styles in between the HTML document's `head` tags using `<style>` HTML tags to surround all style definitions like this:

```html
<head>
  <meta charset="UTF-8" />
  <title>RUN BUDDY</title>
  
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

- Create a file specific to writing CSS with the file extension `.css` and write all style definitions there, then connect it to the HTML file using `<link rel="stylesheet" href="./path-to-styles.css" />`

The first two may sound enticing to us. Why _wouldn't_ we want to keep our styles tightly coupled with our HTML elements? Why _wouldn't_ we want to at the very least keep all of our style definitions in the same HTML document that we're styling? Seems like a no-brainer.

We'll actually be going with the third one, here's why:

- Currently our HTML file is small, but what does it look like when it gets larger and there's also style definitions? The file will be impossible to read and get very messy looking.

- It gives us the ability to select multiple HTML elements at once and apply the same styles, allowing us to effectively write less code. Less code to write = less code to maintain. (This is a very important concept in all programming)

- We can share styles across multiple HTML files since it's in a third-party file as opposed to directly coupled to the single HTML document.

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
>
> 4. Lastly, we need to tell our HTML document to read any applicable styles that `style.css` may have for it. We can achieve this by placing `<link rel="stylesheet" href="./assets/css/style.css" />` in between the `head` tags in our HTML document. This is an example of relative pathing. For more information, read the block marked "IMPORTANT" below.
>
> 5. Let's test this and make sure it worked by adding the following to `style.css`:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  background-color: tomato;
}
```

> 6. If that turned the whole background of your page to red, then it works! Please remove the `background-color` style from the page as we won't need it anymore.

======================================

> IMPORTANT: A note about `relative file pathing`
>
> Throughout our careers, there will be almost daily instances where we will have to make one file look for and read another. We used this above in Step 4 with the `link` tag's `href` value "./assets/css/style.css".
>
> When we breakdown this value, it is essentially saying "starting where this current file is (`.` denotes the current directory), let's look in a subdirectory called "assets", then from "assets", look in a subdirectory called "css", and lastly, select a file called "style.css".
>
> This works well for us because the other option is to put a hard set path from the host computer's directory structure, meaning it'd look something like this:
>
>```html
><link rel="stylesheet" href="/Users/alexrosenkranz/Desktop/run-buddy/assets/css/style.css" />
>```
>
> See a potential problem here? If we were to put this code into production or share with a teammate, the project's code would live on a different computer entirely. That path in the example most likely does not exist on that computer, meaning any reference to it would break and the page will not load correctly.
>
> The best solution for this is to work with relative pathing, as we typically push the entire folder structure for the project up together and the paths don't lose context as to where they are.
>
> The idea of pathing is just like the command line commands we learned in the last lesson, where we move relative to where we are currently in the folder structure and can move into subdirectories with `./subdirectory-name` and move out of a folder with `../`, which will step us up a level into the parent directory.

> PAUSE: We'll get into explaining the above CSS syntax in the next step, but take a moment and think about what's happening here. In CSS, we used the word `body`, where have we seen `body` before? Maybe in the HTML document?

## Our first styles

Okay, so let's being taking that wonderfully underdesigned `header` we've been working on and actually make it look like a true navigation bar. We'll start by exploring exactly _how_ we can tell CSS to attach styles to specific HTML elements using `selectors`.

CSS style definitions follow the following syntax:

![CSS Syntax](assets/step-2/300-css-syntax.png)

- **SELECTOR**: This is the part that actually says "let's find this matching HTML element (in this case it's the `body` tag) so we can tell it what it should look like". This is the most basic of selectors, where we select by HTML element name. We'll get into more specific selectors as time goes on, but let's keep it simple for now.

- **PROPERTY**: CSS has an extensive list of possible style properties that it recognizes. All we need to do is list one in between the selector's `{}` brackets and we can now change how that element looks. Examples of popular CSS properties are "color" (to control the text color), "background-image" (to apply a background image to that section), and "font-family" (to change the default font). If we use one that isn't predefined, then the browser will ignore the style. [Here's a great list of all possible CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index)

- **PROPERTY VALUE**: This is where we get to provide the desired look to the element. Like properties, CSS has a specific set of possible variations for values that it will understand. For example, if we were to say `font-size: 3meters` it wouldn't be understood and not apply. But if we were to say `font-size: 24px`, the font's size will be set to 24 pixels because that is a value CSS can understand.

- **DECLARATION TERMINATOR**: A `property: property-value` pairing is what's known as a "declaration". In order for us to apply multiple styles to an element, we need some way to tell the language "this declaration is finished, make a new one". The way that CSS determines that a declaration is complete is when it sees a semi-colon `;` at the end. Accidental omission of the terminator will result in CSS thinking everything after is still part of that first declaration, so it is very important to terminate our delcarations.

Now that we know the basic "ins and outs" of how we can write CSS, let's actually do it to our page!

So typically it is a good habit to start off our CSS writing with a few styles that apply to the whole page by applying them to the top-most element. By selecting the top-most element, all "child" elements (i.e. `<header>` is the child of `<body>`) will receive the style as well. We do this because it'll have an immediate effect on the page and it'll save us time from having to apply styles to every applicable element. So let's add this to our CSS (if it is currently already defined, just overwrite it):

```css
body {
  /* more on this crazy value in a minute */
  color: #39a6b2;
  font-family: Helvetica, Arial, sans-serif;
}
```

By adding this, we are setting the color of the font for the entire page to a light blue / teal color with what's known as a `hex code` and setting the font to "Helvetica". The other two values for the `font-family` definition are included just in case the user's computer does not have Helvetica installed, that way they can fall-back to those other font choices. These are both applied to the `body` tag on the page because the `body` is the parent to all of our other HTML content tags, so we can now control all of them by applying a style to the parent.

This is also a good time to look at CSS comments as well. We are using one above the `color` declaration. This syntax is slightly different from HTML's comment syntax, but it behaves the same way. Every programming language has it's own flavor of denoting a comment. Some are similar, some can be very different, but they all behave the same way.

> DEEP DIVE: We'll be diving more heavily into web fonts and typography over the upcoming weeks, so don't worry about that _too_ much currently. But it may be a worthwhile look to learn how [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) work, as we'll be diving deeper into some other values next week. For now we'll be sticking to using hex values and maybe a directly named one (i.e. white, black, aquamarine, etc)

Okay, so now let's start to pretty-up our `header` with the following style:

```css
/* apply styles to <header> */
header {
    width: 100%;
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
>  padding: 20px;
> }
>
> /* applies 20px to the top AND bottom, then 35px to the left AND right */
> header {
>  padding: 20px 35px;
> }
>
> /* applies 10px to the top, 15px to the right, 20px to the bottom, 25px to the left (in that specific clockwise order) */
> header {
>  padding: 10px 15px 20px 25px;
> }
>
> /* explicitly list the side it should be applied to*/
> header {
>  padding-top: 10px;
>  padding-right: 15px;
>  padding-bottom: 20px;
>  padding-left: 25px
> }
> ```
>
> How we do it is up to us and there is no "wrong" way. This methodology will also to apply to some other style properties such as `margin` and `border`

So now we've created our base `header` styles, let's target some of the tags nested inside of it, starting with the `h1`:

```css
header h1 {
  font-weight: bold;
  font-size: 36px;
  color: #fce138;
  margin: 0;
}
```

Here, we are implementing a more specific selector pattern. This one ensures we are only applying styles specific to a particular `h1` tag, the one that lives *inside* a `header` tag. This is a great method for adding specificity to our styles, so we can keep them scoped to particular section and context. We'll do more of this next with some different combinations of specificity.

Now turning our attention to the actual property declarations happening here:

- **font-size**: We can assume that `font-size` means quite literally the size of the font in the `h1` tag. 

- **font-weight**: The `font-weight` property is looking to set the font to `lighter`, `normal`, or `bold` font display. There are other values associated with this property, but for now there's no need to dive into them as we won't really see a difference in the outcome. 

- **color**: The `color` is simply setting the color for this particular `h1` tag (notice how it's overriding the `color` we set for the `body`, this is because the style is declared directly to the element). 

- **margin**: Lastly, `margin` behaves a lot like `padding` does, whereas `padding` creates space *inside* the box, `margin` creates space *outside* the box and pushes any other HTML tags before and after it away. It, too, behaves like `padding` in the sense of how it's values are provided (top, right, bottom, left).

It should now look like this:

![Header Styles - 1](assets/step-2/400-header-style-1.png)

If it does, great! Let's start moving that navigation bar over to the right. These next steps are going to introduce some more specific selectors, so keep in mind that this is just one of many ways to properly select and apply styles, and is intended to get us acclimated to some of those many flavors. Over time, we'll hone our skills and become more efficient with applying styles, but for now we'll stick with the more easy to understand selectors.

We'll explain these new properties when we're all done here, so don't worry if it's confusing in the moment. In between applying these following styles, make sure to save and refresh the page in the browser to see the changes happening!

> LINEAR STEPS
>
> 1. Apply styles to every `a` tag in the header.
>
> ```css
> header a {
>  text-decoration: none;
>  color: #fce138;
> }
>```
>
> 2. Apply styles to the `nav` tag.
>
> ```css
> header nav {
>  float: right;
>  margin: 7px 0;
> }
> ```
>
> 3. Apply styles to the `nav` tag's `li` tags.
>
> ```css
> header nav ul li {
>  display: inline-block;
> }
> ```
>
> 4. Apply styles to the `a` tags inside of the `li` tags
>
> ```css
> header nav ul li a {
>  margin: 0 30px;
>  font-weight: lighter;
>  font-size: 22px;
> }
> ```
>
> 5. Marvel at the progress we've made.
>

Congratulations! We've just finished our first layout-specific style change. We moved the navbar from the left to the right and we also overrode a few styles that the browser assumes for us by removing the underline from the `a` tags and changing the color from it's default blue to yellow.

Now we aren't quite there yet, there are still a few tweaks we need to add to our CSS to get it aligned with perfectly. This is going to involve overriding a couple of browser _quirks_, so we'll get a little more detailed with that. But for now, our `header` should look something like this:

![Header styles - 2](assets/step-2/500-header-style-2.png)

Let's start by explaining the longest selector in the code, `header nav ul li a`. What this tells the browser to do is "find all `a` tags inside an `li` tag, which are inside of a `ul` tag, which are inside of a `nav` tag, which are inside of a `header` tag. It's a lot to think about, but it also makes our selection very specific, meaning any other `a` tag we need to add style to won't automatically have these styles and we can style them separately.

> PAUSE\
> Considering the above, what do these other selectors say?
> 
> ANSWERS\
> `header nav ul li`: Select all `li` tags inside of a `ul` tag inside of a `nav` tag inside of a `header` tag
>
> `header nav`: Select all `nav` tags inside of a `header` tag

Now, getting into the new properties:

- **text-decoration**: This is a style to apply `underline`, `strikethrough`, or `overline` styles to the text. By default, the value is `none`, so it's usually not something we have to explicitely tell it NOT to do. With `a` tags, however, the browser applies both a blue color and an underline, so we need to go and override those styles and make them our own.

- **float**: Think of this as the "text-wrap" property from Microsoft Word, which allows content to flow around something that has been yanked to the left or right rather than make it break onto it's own new horizontal line. We'll get way more into this property later on, so let's not spend _too_ much time worrying about how this works just yet.

- **margin**: We've discussed `margin` before, but just to reiterate, this one has a value of `7px 0`, which means it has `7px` of space added to the top AND bottom but `0px` to the left AND right.

- **display**: Notice how before we added `display: inline-block`, the list looked like, well, a list? Each `li` had it's own horizontal line to take up and the next one would come below it rather than next to it. This is another case of us overriding a default style that the browser provides `li` tags. More on this below in "BLOCK vs INLINE".

> IMPORTANT: BLOCK vs INLINE HTML
>
> The browser has a specific way it wants to interpret and position certain HTML tags. This concept is called "flow". Normal flow in HTML is what a page is with no CSS overriding default layout styles. This flow follows two directions: BLOCK (top to bottom) and INLINE (left to right)
>
> In HTML, there are certain tags that are designed by default to take up 100% of the width of whatever it's parent element is. If the parent element is 800px wide, then the child is 800px wide and won't allow anything to the left or right of it. This is what's known as a `BLOCK` level element. Popular tags that have a default block styling are all `h1` - `h6` tags, `div`, `section`, `nav`, `header`, `footer`, and `li`. 
>
> The other type of element default is an `INLINE` element. This means that the element will only take up the space it needs to take up and not demand 100% width. These are used  to allow elements to the left or right of them. The most popular tag that is an inline element is the `a` tag, but there will be more that we get into later.
>
> CSS allows us to override these elements default layout definitions through a few different ways, but the most on-the-nose on is to apply a `display` property to that element. Here are some of the more popular values we can provide:
>
> - **display: block**: this is used to take an element and force it to take up 100% of the width its parent is by default, which will put it on its own horizontal line.
>
> - **display: inline**: make an element only take up the space it needs and allow other elements to flow "in-line" with it horizontally. Any width or height properties associated with an inline element is ignored.
>
> - **display: inline-block**: the same as `inline`, but this allows width and height property definitions to be heard and applied.
>
> - **display: none**: simply remove the element from the view of the browser and let the next elements come up and take it's space. This won't delete the HTML associated with it, but will hide it completely.
>
> In next week's unit, we'll get into some new, more advanced display values that are going to really step up our layout game.

Okay, that's a lot to take in, but hopefully it's has given us enough basic understanding of how things _want_ to behave and how we can undo it. With that said, let's head back and take a look at fixing our little issue in the `header`.

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

Okay so now we're looking good, right? The header is flush up against the top left corner of the page so there's no weird white gap. The navigation is nice and directly to the right of the `h1`. But there may be one more thing we're noticing, the page is kind of overflowing to the right and it's causing a sideways scrollbar. There's a reason for this, but before we get into that, let's just fix the thing and get it right. In the `*` selector we just applied to our style sheet, add one more property delcaration:

```css
box-sizing: border-box;
```

What the what? Everything just adjusted itself to fit the page! Why did this happen?

> IMPORTANT: The CSS Box Model Explained
>
> At this point, it is understood that the browser takes some liberties with how it applies style to certain elements that don't have a style explicitly applied to them via CSS. Probably most important thing the browser does is calculate how much space an HTML element _should_ take up. So what factors into this calculation?
>
> **Calculating Width**: Base element width + margin left + margin right + padding left + padding right + border left + border right
>
> **Calculating Height**: Base element height + margin top + margin bottom + padding top + padding bottom + border top + border bottom
>
> Seems like a lot of values to take into consideration, no? Look at these style declarations for a simple box on a page:
>
> ```css
> .box {
>   width: 200px;
>   height: 200px;
>   margin: 40px 20px;
>   /* more on borders later, just know that this is 4px on every side */
>   border: 4px solid black;
>   padding: 10px;
> }
>```
>
> This means that our box will start with a base width of 200px, then add 20px for left margin, 20px for right margin, 4px for left border, 4px for right border, then 10px for left padding, and 10px right padding.
>
> Suddenly, our seemingly 200px wide box is now 268px wide! This means that if we truly need a 200px wide box, we need to subtract 68px the base width to account for the added space. This is somewhat not maintainable and fairly unacceptable for writing clean CSS and keeping our sanity. So yet again, we need to tell the browser to do its calculations a little differently. Lucky for us, there's a specific CSS property that allows us to do just that: `box sizing`. This has two possible values:
>
> **content-box**: this is the default one the browser uses. It calculates sizing the way we just went through, starting with the width of the element's content (not the overall element), it adds size for padding, margin, and border.
>
> **border-box**: this one makes things more predictable and manageable. It calculates the sizing by including content, padding, and border in the base height/width and only adding to it when a margin is applied. This makes predicting size a lot more manageable.
>
> As we can see, the second one seems to be the better option as we are taking a lot of variable sizes off the table and the less math we have to do, the better. This is why when most developers start writing their style sheet they use the `*` selector to tell every single element on the page to be calculated with `box-sizing: border-box`.

Well all right, we can safely say at this point that we have finished our `header`! Let's double check and make sure that the page currently looks like this:

![completed header](assets/step-2/600-header-complete.png)

If it does, great! It's time to move onto styling the `footer` next. But rest assured, we went through so much in this one section that a lot of the work we do next won't be as long or difficult. We covered a lot, so let's do a pulse check:

> Check Point:
>
> **Given the following CSS selector, which HTML element would be the outermost/parent element?**
> 
> ```css
> header nav ul li {
>  color: white
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
> ==================
>
> **What is the preferred way to include/link another file in programming?**
>
> a. `relative pathing` (`href="./assets/css/style.css"`)\
> b. `absolute pathing` (`href="/Users/alexrosenkranz/Desktop/run-buddy/assets/css/style.css"`)
>
> ANSWER: `a. relative pathing`
>
> ==================
>
> **The `*` selector in CSS selects all HTML elements and applies a style to them.**
>
> a. `True`\
> b. `False`
>
> ANSWER: `a. True`
>



