# Step 2 - Build out our Header and Footer

## Introduction

Let us take a moment to start by giving ourselves a pat on the back. The hardest part of building a new HTML document is actually getting started, and we now have more than enough to work with in these upcoming steps even though there is not much visible substance to our page.

In the previous step we built a series of "containers" for our web page to hold different types of content. At first glance this may seem like a lot of extra work, but as we continue to add content and apply style to each section one at a time we'll find that this will make our lives easier. We now get to work on each section one at a time without having to worry about affecting the others.

This step will focus on building out the content and applying styles for both the header and footer of our page. We will be introduced to both new HTML elements and Cascading Stylesheets, which will be referred to throughout the rest of this unit (and our careers) as `CSS`. The nice thing about what we will be working on here is that a lot of what we learn here will be repeated in future steps. Be warned, however, CSS can be as frustrating as it is rewarding for both beginner and veteran developers. It is technology that is best learned through doing, so let's get started!

## Add content to our `<header>`

We'll begin by adding some information that most modern web pages have: branding and navigation. These two pieces of a UI usually find their way into the `header` of an HTML document.

Branding usually comes in the form of a logo or icon image but with the advent of custom web font options, a lot of developers haved started gravitating towards native HTML text instead. This makes the page's identity easier for Google to understand as it is just text as opposed to an image (which Google cannot interpret, yet). Take a look at and add the following code between the `<header>` and `</header>` tags (make sure there is nothing else inside of there first!):

```html
<h1>RUN BUDDY</h1>
```

<!-- Here we are using what's known as an HTML "heading" tag. Heading tags are HTML elements that allow the developer to give some text more importance than standard content. Some examples of this could be for branding (as seen here), section titles (as we'll see later), subtitles, or anything else that deserves to be highlighted a little more than usual. -->

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

Notice the first three have an `href=` inside of their opening tags? This is what is known as an HTML "attribute", and in this case it is critical for it to be included with a value associated in order for the `a` tag to work as intended.

> **IMPORTANT**: *Attributes* help us provide different functionality, meaning, and context for our HTML elements. They are not necessary for every element (as we can see, we've written a lot of HTML so far without them) but there are some elements that do in fact require them to work as intended, such as `<a>`.\
\
Throughout this lesson and in future units we will be introduced to some other very important attributes, so having a reference to [all attributes and their uses/limitations](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) can be handy.

The values associated with our `href` attributes in this navigation  are giving us the ability to jump right to a certain spot on our current page. The syntax `href="#what-we-do` is actually telling the browser that when that `a` tag is clicked, go find another HTML element on that page with the attribute `id="what-we-do"`. We don't have that attribute added just yet, but we will soon. 

So now that we know what `a` tags are and how they are implemented, there's something we forgot to do earlier. It is a good usability standard to make whatever the branding is in the top `header` of a page or site be clickable to take the user back to the main page, so let's go ahead and add that capability. We can do so by wrapping the content between the `h1` tags with its own `a` having an `href` value of "./privacy-policy.html".

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



## Connecting a stylesheet

As we've seen, the HTML tags we have used thus far have done an excellent job of allowing us to create/organize content and provide some very specific functionality. One thing that 
