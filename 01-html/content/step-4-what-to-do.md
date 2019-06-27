# Lesson 4: What We All Do

## Introduction

Our Run Buddy web page is looking good. We've knocked out some pretty tricky sections like the header, hero, and sign-up form. This next lesson may feel like a bit of a breather since we don't need to use any complex CSS properties like floats or positioning. As we build out these two "What We Do" and "What You Do" sections, though, a few new concepts will still come into play. Be prepared to learn and exercise some previous skills at the same time!

# Filling in the HTML

In Lesson 1, we left high-level placeholders for these sections:

```html
<!-- "what we do" section -->
<section>
  <h2>What We Do</h2>
</section>

<!-- "what you do" section -->
<section>
  <h2>What You Do</h2> 
</section>
```

Let's go ahead and fill in the missing HTML content. Ignore the images for now but take into consideration which tags would be appropriate to best organize the code:

```html
<!-- "what we do" section -->
<section>
  <h2>What We Do</h2>
  <p>
    butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel meggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft
  </p>
</section>

<!-- "what you do" section -->
<section>
  <h2>What You Do</h2> 

  <div>
    <h3>Step 1: Fill Out The Form Above.</h3>
    <p>You're already here, so why not?</p>
  </div>

  <div>
    <h3>Step 2: Consult With One Of Our Trainers.</h3>
    <p>Are you hear to build muscle, lose weight, or just feel good?</p>
  </div>

  <div>
    <h3>Step 3: Get Running.</h3>
    <p>Hit the ground running (literally) once your trainer lays our your plan.</p>
  </div>

  <div>
    <h3>Step 4: See Results.</h3>
    <p>Bi-weekly checkins with your trainer will keep you focused</p>
  </div>
</section>
```

> **Pro-Tip:** If you ever need to quickly fill an HTML tag with dummy text in VS Code, type the word "lorem" and press Tab.

Note how every step is wrapped in its own `<div>` to help keep the step title and description coupled together. This will make it easier to style them later with CSS, too. We also used `<h3>` for each step title since these headings are less important than the higher `<h2>What You Do</h2>` title.

This would be a good time to start adding the IDs that we talked about back in Lesson 2. Remember how we updated the attributes on our links to look like `href="#what-we-do"`? Right now, those links don't work, because we never defined `what-we-do` anywhere else. Add these `id` attributes to our sections:

```html
<!-- "what we do" section -->
<section id="what-we-do">
  ...
</section>

<!-- "what you do" section -->
<section id="what-you-do">
  ...
</section>
```

Save, refresh, then click on the links in the header. You'll see that the browser jumps down to these sections, and the URL in the address bar changes to `/run-buddy/index.html#what-you-do`. Very cool! We'll fill in the remaining IDs in upcoming lessons.

# Adding Images

So the company's design team has given us some new images to work with. Download these [SVG files](./link-needed) and add them to your `assets/images` folder. You may be wondering why these are SVGs and not JPGs or PNGs. In fact, what the heck is an SVG? Just for fun, open one of these new files in VS Code. It'll look something like this:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.73 130.92"><defs><style>.cls-1{fill:#39a6b2;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M163.69,109.93H99.88a.75.75,0,0,0-.69.69v2.6a2.92,2.92,0,0,1-3,3H68.67a3,3,0,0,1-3-3v-2.42a.73.73,0,0,0-.69-.69H1a1.12,1.12,0,0,0-1,1v10.58a9.25,9.25,0,0,0,9.19,9.19H155.54a9.26,9.26,0,0,0,9.19-9.19V111.15a1.16,1.16,0,0,0-1-1.22Z"/>
```

How is it possible for something to look so familiar yet so confusing?! This looks kind of like HTML, doesn't it? But it's actually called [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction), which is like a cousin to HTML. Unlike PNGs or JPGs, which are made up of pixels, SVGs are defined as scalable shapes under the hood (the `<path>` tags you see in the XML). This means the SVG image could accommodate basically any screen size and not lose quality. So SVGs are perfect for things like icons and logos.

In the Step 1 `<div>`, add the following `<img>` tag:

```html
<div>
  <img src="./assets/images/step-1.svg" alt="" />
  <h3>Step 1: Fill Out The Form Above.</h3>
  <p>You're already here, so why not?</p>
</div>
```

The `<img>` tag is very useful, because it can display any image type: SVGs, PNGs, JPGs, GIFs, etc. We just need to make sure the `src` attribute points to a file that can be found. Much like how the `<link>` tag had to reference the stylesheet as `./assets/css/style.css`, we do the same for images: `./assets/images/step-1.svg`.

There's an extra attribute we should make sure every image has, though: the `alt` attribute. This is how we can explain what the image is to search engines and screen readers. Imagine a visually impaired vistor who relies on a screen reader and what their experience might be if the reader got hung up on the context of every image it came across. Watch this [short video](https://www.youtube.com/watch?v=NvqasTVoW98) to see just how screen readers handle alt text.

In our case, the `step-1.svg` image is purely "decorative," meaning the only information the user needs from this section is already provided by the surrounding text (the `<h3>` tag). It might seem like the `alt` attribute isn't necessary, then, but a screen reader wouldn't know that a missing `alt` tag means "unimportant icon." Hence, we set `alt` to empty text so the screen reader knows to ignore it.

> **Deep Dive:** Read more about `alt` attribute guidelines from the [W3C](https://www.w3.org/WAI/tutorials/images/) web standard gurus.

If you haven't already, save your HTML file and reload it in the browser. Things probably aren't looking so good anymore:

![image screenshot](./assets/step-4/100-big-screenshot.png)

Our image is enormous! Remember, SVGs are scalable. There's no built-in, hard-set pixel count, so it's going to fill up any available space. But that's okay. We'll use CSS to size it down later. For now, add the other three images to Steps 2-4.