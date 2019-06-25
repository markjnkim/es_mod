# Step 2 - Build out our Header and Footer

## Introduction

Let us start off this section by giving ourselves a pat on the back. The hardest part of building a new HTML document is actually getting started, and we now have more than enough to work with in these upcoming steps even though there is not much (if any) visible substance to our page.

In the previous step we built a series of "containers" for our web page to hold different types of content. At first glance this may seem like a lot of extra work, but as we continue to add content and apply style to each section one at a time we'll find that this will make our lives easier. We now get to work on each section one at a time without having to worry about affecting the others.

This step will focus on building out the content and applying styles for both the header and footer of our page. We will be introduced to both new HTML elements and Cascading Stylesheets, which will be referred to throughout the rest of this unit (and our careers) as `CSS`. Be warned, however, CSS can be as frustrating as it is rewarding for both beginner and veteran developers. It is technology that is best learned through doing, so let's get started!

## Add content to our `<header>`

We'll begin by adding some information that most modern web pages have: branding and navigation. Now there is no "rule" regarding placement of these two items, but most standard web user interfaces make sure to include these elements in a fairly upfront manner to make sure the user knows where they are and how to get around. With that said, these two elements of a design usually find their way into the `<header>` in our HTML document.

Let's let the user know what page they are on by adding branding. Branding usually comes in the form of a logo or icon image but with the advent of custom web font options a lot of developers haved started gravitating towards native HTML text instead. This makes the page's identity easier for Google to understand as it is just text as opposed to an image (which Google cannot interpret, yet). Take a look at and add the following code between the `<header>` and `</header>` tags:

```html
<h1>RUN BUDDY</h1>
```

## Connect a stylesheet

An HTML document is essentially a vessel for organizing, storing, and displaying content such as text, images, and videos. It is what a web browser directly reads, interprets, and prints to our screens. As we can see, however, 
