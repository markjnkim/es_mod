# It's time to meet our trainers

At this point, we're over 50% complete with our Run Buddy product page! We've given users information on what the product is all about and how they can get started, but now we need to add a little more of a personal touch to the page by adding some information about the "faces" of the product.

This next lesson involves building out another `<section>` of our page with three similar pieces of content, so expect a fair amount of repetition. Because of that repetition, the lesson is a good opportunity for us to continue practicing what we've learned so far while also picking up a few new tricks along the way.

The Run Buddy design team has an idea of how they want this section to look:

![trainers complete](assets/step-5/100-trainers-complete.jpg)

This may seem like a lot, but we are going to break it down into smaller steps by:

1. Making both HTML and CSS edits to the overall `<section>` element that will hold this content

2. Build out one trainer's HTML content first

3. Add CSS to that trainer's HTML content

4. Take what we learned in steps 2 and 3 and use that knowledge to create our other two trainers' HTML content

## Setting up the HTML

Just like the previous steps in this project, we'll start on the outermost tag and work our way in. We already have a `<section>` tag in place to hold all of our content for our trainers' information, but we want to be able to quickly navigate to it if we were to click on its respective link in the navigation bar. Giving a user the ability to jump right to the section they want to read on a web page is a good practice, when applicable, since it'll remove the guess work of knowing where to stop when scrolling for that content.

Think about how that was achieved when we built out the "What We Do" and "What You Do" sections. What was added to their respective `<section>` tags that _identified_ them? We used the `id` attribute, of course! Let's update this tag with its own unique `id` attribute:

```html
<section id="your-trainers">
  <h1>Meet The Trainers</h1>
</section>
```

Just like the previous lesson, we can test to see if this works by:

1. Saving the file

2. Refreshing the page

3. Clicking the "Your Trainers" link in the top navigation.

If you were taken down the page to this section and the URL address in the browser says `/run-buddy/index.html#your-trainers` then we're all set!

The last thing we want to do with our `<section>` element is give it a class name, so let's go ahead and add `class="trainers"` to the tag. This way when we start adding CSS to it we can get to it by its class name, "trainers".

Now that we have given the whole section its `id` and `class` attributes, let's move into the section's `<h2>` element to give it some proper styling. The best part about updating this section's `<h2>` element is that we can reuse the styles we created in Lesson 4, we just need to provide the correct `class` attribute value and all of the associated CSS styles for that class will be applied.

In the previous lesson, we created a few classes to provide different style options for our section titles. All of our section titles will get the one labeled `section-title`, but we need to add one more to change the color of the bottom border to yellow, so let's also add `primary-border` as well. The resulting HTML should look like this:

```html
<h1 class="section-title primary-border">
  Meet The Trainers
</h1>
```

Great! Now we can move onto the content for each of our trainers. We'll start by getting the images for our trainers included into our project (no one likes to see a broken picture tag!). Go ahead and [download the images of our trainers](https://github.com/coding-boot-camp/FullStack-Online/blob/FSFO-27-step-4/01-html/content/link-needed 'we need a link'), then add the three images to the `images` folder inside of `assets` that we created in Lesson 3.

In the previous lesson when we wanted to create a new step, we put all of the information for that step in it's own `<div>` element so we could keep all of that information together. We'll be doing the same thing for our trainers by taking all of the information for a single trainer&mdash;name, role, bio, and image&mdash;and keeping them all together by putting them inside of their own HTML element as well.

We'll start by creating one trainer to get the hang of it, so go ahead and add this after the `<h2>` section title element:

```html
<article class="trainer">
  <img src="./assets/images/trainer-1.jpg" alt="Tony Horton in his workout clothes, ready to pump iron" />
  <div class="trainer-bio">
    <h3>Tony Horton</h3>
    <h4>Speed / Strength</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
      itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
    </p>
  </div>
</article>
```

When we save and refresh the browser, we should see this:

![trainer 1 image](assets/step-5/200-trainer-1.jpg)

It doesn't look like much _yet_, but it's more than enough to work with. We'll move onto building the HTML for the other two trainers shortly, but first let's go through the HTML we just added.

We've introduced another new HTML element here called `<article>`. Just like `<section>`, `<header>`, `<footer>`, and `<nav>`, the `<article>` is a newer HTML5 semantic element that was introduced to encapsulate content that works on its own in a page, meaning that all of the content inside of the `<article>` element is related to one another and nothing outside of the element. In this example we've wrapped all of the content related to a single trainer in these tags, meaning that when a screen reader attempts to read the section, it can be inferred that all of this content is important to one another.

> DEEP DIVE: [More info on the `<article>` tag here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)

Before we move on, let's touch upon this image's `alt` attribute value. In Lesson 4, we discussed one way of using `alt` by leaving its value empty. This is because the image it was associated with was not important for the overall user experience, known as a "decorative" image. In this case the image does serve as content to the page, known as a "simple" image, so we need to give it a more meaningful `alt` value. Some rules about `alt` values:

- Describe the image in under 140 characters

- It should convey the content and purpose of the image

- It should not begin with "image of..." or "graph of...", as screen readers already provide that context

As we'll see when we build out the HTML for the other two trainers, we'll be able to use the same classes we are using here, so we can actually concern ourselves with making sure this one `<article>` element looks good first before we move onto the other two. With that said, let's tackle the styling and CSS!

## Adding styles to our first trainer's HTML

As we just mentioned, we have more than enough currently to apply styles to this section and get everything in place so when we add the next two trainers' HTML content, the styles will automatically be applied and we can see it happening as we go.

This section is going bring back `float`, something we used in the `<header>` and `<footer>` elements to render HTML block elements side-by-side. Based on the finished mock-up below, which elements do we think we'll need to `float`?

![Finished Trainers](assets/step-5/100-trainers-complete.jpg)

The answer is somewhat of a trick. We could get away with floating the first and third images left and the text content `<div>` to the right and that'll work fine. Then for the second one we'd just need to swap the two, floating the image right and the text content `<div>` left. Again, this is fine, but it also involves writing more code than we need to.

Instead, we'll float both pieces to the left for all three trainers and applying a certain `width` value to them so they will all come nicely side-by-side with one another. Be warned, however, some interesting "gotcha" issues are going to come up in this section, but we'll get through them just fine!

Let's start by adding styles to the entire `<section>` tag by selecting it by its class name `trainers`:

```css
.trainers {
  text-align: center;
}
```

By adding that to the entire `<section>` element with a class attribute of "trainers", our `<h2>` element that says "Meet The Trainers" should now be centered and it gives us a good start, but now our trainer's content is also centered. This isn't a problem though, as we will be fixing that soon. Before we fix it, let's turn our attention now to adding styles to the `<article>` element for our trainer. Add this CSS rule to your stylesheet:

```css
.trainer {
  width: 900px;
  margin: 0 auto 30px auto;
  background: #024e76;
  color: #fce138;
}
```

So now we've added some CSS styles to the entire `<article>` tag with a class of `trainer`. We don't want the content to go the full width of the page because it will just run a little too long, so we've given it a set width value of 900px.

By using `auto` as the values for the left and right margin, we are telling the browser to take whatever space is  unused and evenly distribute it on those sides, centering the element. An example of this would be if we had a screen that was 1000 pixels wide and an element that is only 800 pixels wide, the unused space would be 200 pixels and when both left and right margins are set to `auto`, each side would get 100 pixels applied to it.

Lastly, we provided some spacing below it so the next trainers don't run up against one another.

> IMPORTANT: Remember the order of labeling `margin` and `padding` values is clockwise (top, right, bottom, left). So when we see:
>
> ```css
> margin: 0 auto 30px auto;
> ```
>
> We can assume this is saying "margin-top: 0", "margin-right: auto", "margin-bottom: 30px", and "margin-left: auto".

We have our trainer's container ready to go, so we now add add some of the inner styles now for the text and image content. Add the following to the CSS document, save your file, refresh the page to see what happens:

```css
.trainer img {
  width: 35%;
  float: left;
}

.trainer-bio {
  padding: 35px;
  float: left;
  width: 65%;
}
```

Okay so don't panic. Those two style additions pretty much just set the whole rest of the page on fire:

![broken floats](assets/step-5/300-broken-floats.jpg)

Before we get into explaining what happened, let's make ourselves feel better and fix this mess. Go ahead and add this following property declaration the `.trainer` styles: `overflow: auto`.

After saving the file and refreshing, the page should look like this:

![fixed floats](assets/step-5/400-fixed-floats.jpg)

Much better! Now that we can relax a second, let's go over what just happened.

We worked with floats and manipulating a page's default "flow" in Lesson 2, but in those cases we only needed to float one of the two elements. When we floated the `<nav>` element inside of the `<header>`, the `<header>` lost its ability to interpret how much room the `<nav>` element needed. This is okay, though, because the `<header>` still gets to interpret how much space the `<h1>` element needed since it wasn't floated, and the `<header>` displays at the right size.

In this case, however, we floated both elements (the `<img>` and `<div>`), which means its parent element&mdash;the `<article>` element&mdash;cannot interpret how much space its inner HTML content needs and assumes there's nothing inside of it at all. This means the `<article>` element's styles like `background-color` don't show up because the `<article>` element itself is 0 pixels tall.

### NEED: Video showing what floated elements do to the parent

This a common issue for float-based layouts. It involves not only moving the elements we want to move, but also tweaking elements around it to tell it to understand that there may be some floated elements it needs to account for. There are a few ways to conduct these tweaks in order to fix the problem we just had, we chose to use the `overflow` property.

> DEEP DIVE: This is just one use of the `overflow` property and it will come up again in different use cases. [For more information on the `overflow` property, read this.](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

The `overflow` fix we applied told the trainer's `<article>` element that it does in-fact have content inside of it and it needs to look for it and account for those two floated HTML elements' sizes. This is what's known as providing `block formatting context` to the element.

> DEEP DIVE: To learn more, read the [block formatting context documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context#Examples)

Well we've set up our `<article>` element that holds our trainer's information to have a nicer layout, let's get to applying CSS styles to the text content. As we can see, all of the text is currently center-aligned. This is because we set the `trainers` class in the parent `<section>` to be center-aligned, and the style is being applied to the child elements.

> URKEL SAYS: When a parent HTML element's style is applied to any child elements, that is called "inheritance".

So we will fix this by making sure the first and third trainer `<article>` elements have left-aligned text and the second trainer `<article>` element to have right-aligned text. Rather than style each one separately we'll take a different approach that makes our code less repetitive.

We'll start by making two class style definitions that aren't unique to our trainers, but more of a utility class (think about how we created `primary-border` and `secondary-border`) that can be applied anywhere in our page to fix a style. Add the following two classes to the CSS document:

```css
.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
```

Notice how these classes have generic names that do not indicate where exactly they belong on the page. This is done on purpose so now they can applied to any HTML tag that needs a quick fix to their text-align properties, rather than having to create more style rules for each one individually.

> DEEP DIVE: Creating CSS classes that are not specific to any part of an HTML document and do one thing are what's known as a "utility class". The idea behind them is instead of creating very specific classes that only fit the needs of a couple of HTML elements, you create more CSS classes that apply one property declaration and are used through adding multiple classes to an HTML element instead.
>
> [Read more about CSS utility classes](https://blog.mariano.io/css-utility-classes-how-to-use-them-effectively-d61ee00dad2d)

Let's revisit our HTML and add the class `text-left` to the `<div class="trainer-bio">` tag. It should look like this when it's done:

```HTML
<div class="trainer-bio text-left">
  <h3>Tony Horton</h3>
  <h4>Speed / Strength</h4>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
</div>
```

Now the trainer's `<article>` element text is left-aligned because we added another class `text-left` to it. This class was created for the sole purpose of left-aligning text when needed.

When we add the next two trainers' `<article>` elements, we will also be applying `text-left` and `text-right` to them just as we did with this first one.

Let's add some styles more specific to our trainers:

```css
.trainer-bio h3 {
  font-size: 32px;
  margin-bottom: 8px;
}

.trainer-bio h4 {
  font-weight: lighter;
  font-size: 26px;
  margin-bottom: 25px;
}

.trainer-bio p {
  font-size: 17px;
  line-height: 1.3;
}
```

And there we go! Our trainer's styles are now set up and everything should be looking good:

![finished trainer](assets/step-5/500-finished-trainer.jpg)

> HEADS UP: For some users&mdash;especially Windows&mdash;the font we are using here, Helvetica, may not be loaded on the computer and this page will use the fall-back font, Arial. There are differences between the two, namely the variations of the `font-weight` property. It does not have a weight for the value `lighter`, so it ends up using the closest weight. In this case, it is `normal`.
>
> This is something we as developers may deal with on a regular basis, but the nice thing is that the fall-back weight that is provided doesn't break the page. It just may look a little different than MacOS users.
>
> [More on the `font-weight` property and how it works here.](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

Let's go ahead and get our other two trainers added to the page, then we'll be done with this section!

## Adding the other two trainers' content

![Trainers Mock-up](assets/step-5/100-trainers-complete.jpg)

Now that we have our first trainer's `<article>` element laid out and styled, we can use it as a reference to build the other two trainers' `<article>` elements in our mock-up. We'll just need to make a couple of tweaks for the content since each trainer has their own name, role, bio, and image. So let's add the next two, but make sure to notice a subtle difference between the second trainer's HTML and the third trainer's HTML:

```html
<!-- second trainer bio -->
<article class="trainer">
  <div class="trainer-bio text-right">
    <h3>Kelly Kapowski</h3>
    <h4>Endurance</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
      itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
    </p>
  </div>
  <img src="./assets/images/trainer-2.jpg" alt="Kelly Kapowski cooling off after a work out" />
</article>

<!-- third trainer bio -->
<article class="trainer">
  <img src="./assets/images/trainer-3.jpg" alt="Harry Smith wearing a headband and lifting comically small pink weights" />
  <div class="trainer-bio text-left">
    <h3>Harry "The Headband" Smith</h3>
    <h4>Strength</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
      itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
    </p>
  </div>
</article>
```

So besides the content and images changing to reflect each trainer's information, what changed here and how did it affect our layout? It has nothing to do with the CSS, but rather how we organized the HTML content.

For our second trainer, we wanted to have the image on the right and text on the left. So to achieve this, we could've floated it to the right, but instead we simply switched the order of their appearance in the HTML. This way the text comes first naturally and the image is to the right since it's after it. That may not always be the best solution for all situations needing this type of layout, but this works for our current layout which makes our lives a bit easier.

So now we should have a finished "Meet The Trainers" section:

![Section Finished](assets/step-5/600-section-complete.jpg)

Don't forget to do a `git add -A`, `git commit -m "commit message"`, and `git push origin master` to save your work and get it up to GitHub.

## Reflection

We're almost there! There are two more important pieces left to build, but at this point we've learned so much about various HTML and CSS properties that they should not feel as heavy. Let's recap what we did in this lesson:

- We learned how to fix some bugs float-based layouts create by implementing `block element context` to the parents of floated elements.

- We created "utility" classes that can be applied to control text alignment for any element on our page.

- We implemented the `<article>` tag to help encapsulate related content on the page, allowing the browser and screen readers to have an easier time reading our content.

- Lastly, we utilized a lot of what we've learned previously in this project and reinforce our knowledge in both HTML and CSS.

The next lesson will introduce us to a couple of new HTML tags, as we will be building the "Reach Out" section of our page.
