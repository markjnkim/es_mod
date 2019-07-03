# Reach Out and Convert

## Introduction

Way to go! Our landing page is nearly finished. Let's get to work on our last section of this page, and then we will finish with a simple policy page to complete this project. First let's take a look at the mock-up and see what the Reach Out section looks like as a finished product.

![Reach-Out Mock-up](./assets/step-6/100-RO-mock-up.png)

Having met our trainers, our visitors are now motivated and pumped to get started on their fitness journey. In order to hit their goals, it's important to get started right away. So how do our visitors get in touch to get in shape? This is where the our Reach Out section will come into play. This section is where our visitors can reach out directly to our sales staff to get their questions answered and hopefully convert into customers.

![Reach-Out Mock-up](./assets/step-6/100-RO-mock-up.png)

Take stock of the markup we will need to accomplish this task. Similar to the previous sections, we have a heading, but in this case we also have a map and some contact info. Let's get started with the Reach Out section by starting with the markup provided to us and build our section piece by piece.

## Step 1: Building a Contact

Due to the specific styling needed for this section like the blue background color, yellow font, and more, we will need to select this section to target our custom styles.

> **Do It Yourself**: Add attributes to our `<section>` and `<h2>` for our styling and navigational purposes.

> **Hint**: Look at the markup for the previous sections and headings for a great template of this step.

> **Hint**: Whenever a similar style pattern starts to emerge, it is important to recognize where code might be repeated and try to use the same classes again to replicate styles.

After having done some thinking and typing your markup should now look like this.

```html
<!-- "reach out" section -->
<section id="reach-out" class="contact">
  <h2 class="section-title secondary-border">
    Reach Out
  </h2>
</section>
```

Let's unpack this code and see if our choices made sense.

> **Rewind**: The `id` attribute's value must _exactly_ match the value of the `href` attribute in the anchor tag or `<a>` in the `nav` element for the in-page navigation to work. Notice the `#` identifies the attribute as an `id`.

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

We created a new `class` called `contact` for the styling needed for this section. The section headings need consistency so using the same class for the `h2` makes a lot of sense as well. Having used a similar bottom border for our trainer section, we can reuse this class and thus save us a bit of writing and repeating by using the classes for `section-title` and `secondary-border`.

> **Heads up**: Important to notice how a second class was declared for the `h2` elements by simply adding another class name within the quotation marks. Whitespace is the delineation syntax for separate classes, id's, and almost all the attributes except for the `style` attribute since this is using CSS.

## Step 2. Iframe, Uframe, we all frame for icecream.

First off, before we can start on the map, we need to wrap the body of this section into a `div` which we will call our contact container. We will do this because having a container enables us to restrain the child elements from floating arbitrary according to the document's flow and keep them in a constrained space. All the contact info will be related due to information type so keeping them together makes a lot of sense. Let's add a `class` called `contact-info` to this `div`.

Now let's take a closer look at this map and we will find that the requirements for the landing page specifies that this map needs to be interactive, meaning the visitors will be able to scroll and zoom the image.

We will need a special HTML element called an `iframe` or inline frame to define this type of element. An `iframe` is able to nest browsing content, embedding an HTML page into the current page.
Let's nest the `iframe` into our contact container so your markup should look like this:

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
Let's unpack the configuration attributes for the iframe as well as talk about some of the other options available. 
* **src**:  The most important attribute is the `src` since without this, nothing will render.  The `src` value is a URL path linking to the external website content that will be embedded.  Looking at how to retrieve this long URL for the location desired let's go through the four steps.
> **Linear Steps**: How to embed a Google Map
1) Enter your address in the search box at [Google Maps.](https://www.google.com/maps)
2) Click on the Share icon.
3) Choose the Embed a map tab
4) Click on the COPY HTML link to copy the `iframe` element.

> **Heads up**: Please note there are several other map `iframe` options besides Google like OpenStreetMap.org.
Another popular use for `iframe` elements are embedding videos.  YouTube for instance allows videos to be embedded as does your favorite gif website.  But please remember great power comes with great responsibility and yes, the number of cat gifs on a website does have a hard ceiling.

> **Activity**: Try replacing the iframe with a YouTube video and also try replacing the src value with https://www.w3schoools.com.  The interactivity features are available because you have embedded a tiny website within your website.
<!-- <iframe src="https://giphy.com/embed/xT0xeJpnrWC4XWblEk" width="280" height="120" frameBorder="0" class="giphy-embed"></iframe> -->

* **frameborder**: iframe elements have styling built into the attributes.  This one allows a border by designating "1" and "0" for none.  Other style attributes include specifying `height` and `width`.  
> **Legacy Lem**: `frameborder` is no longer supported by HTML5 and new browsers so we will use the `border` property from CSS for this style property.  This will offer legacy support however for older browsers.

* **allowfullscreen**: Some attributes are properties that can be turned on by simply adding the attribute.  `allowfullscreen` will offer a link to view the map on a new page in full screen mode. Notice how `allowfullscreen` doesn't have any value assignment.  Another popular attribute that doesn't have a value assignment for example is `checked` for a `checkbox` input element.
* **style**: This is an inline style for a zero border and how borders for new browsers are styled for the `iframe`.

## Step 3: Contacts are us

## Step 4: Styles in Charge
