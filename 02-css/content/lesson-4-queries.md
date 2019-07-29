# Going Mobile

We've added some really nice features and updates to the Run Buddy site so far and we're about halfway through our list of GitHub issues, but the issue we're about to tackle is possibly the most important one&mdash;making the site completely responsive to all screen sizes. The work we've completed so far has laid the ground work for us to take on this next feature request, so it won't be as you would think it is.

If we were to be building this site ten years ago we could be all done with this layout and not worry about different screen sizes, but in modern-day web development we need to make sure all layouts look good across all devices and screen sizes. This need for responsive web sites became apparent when more and more users adopted smart mobile devices like the iPhone, iPad, or any Android device, and more sites were seeing web traffic coming from those devices instead of a standard desktop web browser.

Some companies even took the time to build a completely different version of their site specifically for mobile; but maintaining one site is hard enough&mdash;let alone two&mdash;so new tools were released to help us create one site that could look good anywhere. These same tools are the ones we'll be using to get Run Buddy looking like this as our screen gets smaller:

![Run Buddy Mobile](assets/lesson-4/100-runbuddy-mobile.jpeg)

## Creating a branch and minor edits

Just like the previous two lessons, we want to make all of our updates in it's own branch so we don't disrupt the finished working code we've already written. We'll begin by creating that new branch:

1. Make sure you are currently in the `staging` branch

2. Use `git checkout -b` to create a branch called `media-queries`

3. Make sure you are now in that branch using the `git branch` command

### NEED: Video for this process (can be done once generically and repeated with all lessons)

Right now, our overall site looks solid when it comes to font sizes and margins/padding how it's displayed on a laptop or desktop screen. As we make the screen a little smaller, however, it starts to feel a little crowded.

### NEED: Video demonstrating how tight it gets when the screen resizes

To save ourselves from doing more work in the future by having these values adjusted at different screen sizes, we can adjust some of these now to strike a nicer balance across all devices. We'll start by finding and changing some of our current styles:

- Find the CSS rule for `header nav a`:
  
  - Change its `padding` to "10px 15px" instead of "15px 20px"

- Find the CSS rule for `.hero`:

  - Add an `align-items: flex-start` declaration to it

> PAUSE: If there is no `align-items` property set for a flexbox, what is the default value and how does that affect the two flex children?
>
> ANSWER: The default is `stretch` and it means all flex children will grow to the size of the tallest one.
> 
> ### NEED: Video/screenshot demonstration of what this looks like

- Find the CSS rule for `.hero-cta`:

  - Add `line-height: 1.2` to it

- Find the CSS rule for `.section-title`:

  - Change the `font-size` property to 48px

### CHECK WITH MARK ABOUT GRID FONTS



## Media Query Intro

- Demo using DevTools
- Mock-ups of what we'll be building and how we want it to look at each screen size
- Set up <meta> for viewport ratio
- Demonstrate / create breakpoints for 980, 768, 575

## Apply media query rules

- Changes to all 980 first, demonstrate in devtools how they take over

- Changes to all 768

- Changes to all 575

## Merge Branch

## Reflection

