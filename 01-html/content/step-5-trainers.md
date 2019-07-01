# It's time to meet our trainers

At this point, we're over 50% complete with our Run Buddy product page! We've given users information on what the product is all about and how they can get started, but now we need to add a little more of a personal touch to the page by adding some information about the "faces" of the product.

This next section is going to involve building out another `<section>` of our page with three similar pieces of content, so expect a fair amount of repetition. This is a good chance for us to continue practicing what we've learned so far while also picking up a few new tricks along the way.

## Setting up the HTML

Just like the previous steps in this project, we'll start on the outermost tag and work our way in. We already have a `<section>` tag in place to hold all of our content for our trainers' information, but we want to be able to quickly navigate to it if we were to click on it's respective link in the navigation bar.

Think about how that was achieved when we built out the "What We Do" and "What You Do" sections. What was added to their respective `<section>` tags that identified them? Let's update this tag with an `id` attribute:

```html
<section id="your-trainers">
  <h1>Meet The Trainers</h1>
</section>
```

Just like the previous lesson, we can test to see if this works by saving the file, refreshing the page, and clicking the "Your Trainers" link in the top navigation. If you were taken down the page to this section and the URL address in the browser says `/run-buddy/index.html#your-trainers` then we're all set!

Now that we have that part taken care of, let's update our section's `<h2>` to give it some proper styling. The best part about this is that the styles are already set up and in place for us, we just need to provide the correct `class` attribute value and it'll get all of the styles we need.

In the previous lesson, a few classes were created to provide different style options for our section titles. All of our section titles will get the one labeled `section-title`, but we need to add one more to change the color of the bottom border to yellow, so let's also add `primary-border` as well. The resulting HTML should look like this:

```html
<h1 class="section-title primary-border">
  Meet The Trainers
</h1>
```

Great! Now we can move onto the content for each of our trainers. We'll start by getting the images for our trainers included into our project (no one like to see a broken picture tag!). Go ahead and [download these images](https://github.com/coding-boot-camp/FullStack-Online/blob/FSFO-27-step-4/01-html/content/link-needed "we need a link"), then add the three images to the `images` folder inside of `assets` that was created a couple of lessons ago.

Like the previous lesson, we're going to encapsulate our related content in containers to make it easier to position each trainer's information block. Go ahead and add this after the `<h2>` tag:

```html
<article class="trainer">
  <img class="img-left" src="./assets/images/trainer-1.jpg" alt="trainer Tony Horton" />
  <div class="trainer-bio text-left">
    <h3 class="trainer-name">Tony Horton</h3>
    <h4 class="trainer-role">Speed / Strength</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
  </div>
</article>
```

So here we've set up all of the content needed to display our first trainer on the page, resulting in the following:

![trainer 1 image](assets/step-5/100-trainer-1.png)

It doesn't look like much _yet_, but it's more than enough to work with. We'll move onto the other two trainers shortly, but first let's go through the HTML
