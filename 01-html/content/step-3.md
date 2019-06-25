# Part 3 - Build a Hero

## HTML 

Now let's get started with the body or content of our website.  
If we take a good look at our mock up, we can see that each part of our landing page seems to be separated by a color block.  This serves as a stylistic way to communicate to the reader that each part conveys a different purpose or information type.  Let's proceed by building each block piece by piece until we have completed our first website.

Our first section is the most important section because this will be seen by every visitor to our landing page.  This considered "above the fold", hence has a particular task; pique the curiosity of the visitors to keep reading, scrolling, clicking, and engaging with the website. 

> **The More You Know** Due to their large paper format, newspapers termed the phrase "above the fold" for the upper half of the front page that often contained the most important news story, headline, and picture.  Many newspaper terms have been adopted into the language of the web, including  semantic HTML elements like the terms for a section, aside, header, footer, and article.

 Think of the hero section as the banner, headline, or billboard of our site.  But before we can add our pizzazz, let's first write our HTML code that will provide the structure and content.  As can be seen from our mockup, we have input fields contained inside a box within this block.  This is considered a "call to action" which means we are requesting the end user to act or in this case, give the site their contact information so we can remain engaged with the user.  Placing the information request in the hero section reveals the strategic importance of retaining user info. 

 Let's begin coding our hero section by first creating a comment in HTML that will not only help us remember what this section's purpose was, but also delineates or differentiates each block from the previous or upcoming blocks.  It is good to think about your code as a living document that will change with time with other developers coming along making changes or adding features.  Think about how Apple.com or Facebook.com has changed over the years.  Comments will speed up the process for other developers or a future you to remember the "why" of each section of your code.  Writing code is a time consuming process so making it more organized and labelled is a great habit to get into.

```html
<!-- hero form-->
<section>
</section>
<!-- end of hero section -->
```

We have chosen to use the `<section>` element because in HTML a `<section>` represents a part of a document that is thematically grouped like a section in a newspaper.  The `<section>` element will encompass the entire hero section and will be the parent element that contains the children elements needed for this part of the document including the heading and form.  

our hero section will contain a large background picture containing a `<form>`. 
A `<form>` element represents a document section that contains interactive controls for submitting information.  Our input fields will be nested within the `<form>`.