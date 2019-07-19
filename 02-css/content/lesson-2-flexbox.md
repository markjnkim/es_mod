# Lesson 2 - Flexing Our Muscles

As evidenced by the issues we created in our GitHub repository, there's a fair amount to be done to get this site to a point that matches Run Buddy's specifications. What they are asking us to do for them is fairly common in the world of web development and it can be very overwhelming at times, but luckily we already have our work sectioned off into these different GitHub issues so we can worry about tackling one at a time.

The first issue we are going to tackle is converting the site's overall flow and layout to enhance its design and make it more flexible. To do that we're going to use a new layout feature in CSS called "flexbox" (clever name, right?), which allows us to create layouts that used to only be achieved with heavy usage of floats and positioning. Flexbox is going to allow us to make these layout changes without having to _too_ much manipulation to what we currently have in our code. We'll be updating every section of our page in some way, take a look at some of these changes:

![Hero banner mockup](assets/lesson-2/100-hero.jpg)

![Trainers mockup](assets/lesson-2/200-trainers.jpg)

Comparing these to what we currently have, you can see that we'll be working to make better use of the horizontal space on the page to provide a cleaner layout. 

We're ready to get started, but as we know, our current `staging` branch is probably not the best place to mess around. So let's get started by creating our first git feature branch.

## Make a feature branch

Since we're about to embark on fairly large round of updates to our Run Buddy page's layout, it is a good idea for us to not work in the same git branch our code currently sits in (`staging`). Think about the overall scope of this project and why created a `staging` branch in the first place. We did this so we can work on our updates without disrupting the code in our `master` branch because the code there is what is running on the Internet for visitors to see.

> URKEL SAYS: This is what's known as having code "in production".

![Current git branches](assets/lesson-2/300-git-branches.jpg)

Now that we have `staging` set up to hold our updated code as we progress through these site updates, we can take it one step further by creating a branch for each GitHub issue we've created as we tackle them. Same as the relationship between `master` and `staging`, our new branches are going to serve as a means for us to not mess with the code in `staging` until we know that an issue is ready to be marked "complete".

This and every following lesson is going to begin with us creating what's known as a "feature" branch that makes a copy of what's currently in `staging`. This way we can make updates to our code and when we are done fulfilling the issue's needs, we will merge this code into our `staging` branch. Then we will repeat that cycle for the next issue or feature we are working on.

This process may seem tedious and unnecessary, if we are already in `staging` then we why would we need to create more branches instead of working in there?

The answer may seem hard to grasp at first, but the overall idea is that when we start working on anything new we want to set a baseline. A place that can store the most up-to-date _working_ code. This way if we end up doing something that doesn't work we can always come back to that spot and start over again. Git gives us a few options to work like that, but creating a new branch every time we start something new is a good practice to get into.

> ON THE JOB: Creating a new branch for every new feature, edit, or bug fix not only gives the developer peace-of-mind knowing that any work won't affect the live site until they know it is going to work, but it also makes working on a team an easier process.
>
> Imagine two developers were working on the same project in the same branch. They would both have different edits to push to GitHub and GitHub isn't smart enough to know what code is considered "correct". It would create what's known as "merge conflicts", meaning that code from two different sources will fight for attention and the developers would have to decide which code is correct.
>
> If each developer created their own branch to make updates and edits to the code, they would not step on each other's toes and GitHub would have a much easier time figuring out which code belonged where when it came to getting that code live.

Let's go ahead and create a new branch for the issue pertaining to setting up Flexbox. What we want to do here is make a new branch with the code that is currently in `staging`. To do that, we should double check that we are in fact in the `staging` branch. There are two ways to do this from the command line:

- **`git branch`**: Print out all branches on the local machine. Use the `Q` key to quit that menu.

- **`git status`**: Not necessarily used for just seeing what branch you're in, but it will print out what the active branch is and what's currently going on in there (file additions, edits, etc)

If you use the `git branch` command, you should see something similar to this:

![Current Git Branch - Staging](assets/lesson-2/400-current-branch.jpeg)

> PRO-TIP: If you are using Visual Studio Code and only have your repository open, the current branch should be displayed in the lower left corner of the window. 
>
> Visual Studio Code has a lot of great features for working with Git and GitHub, but it is best to learn the inner workings with the command line first before relying on any of those tools.

If you are not in the `staging` branch, you can always move into it by using the `git checkout staging` command.

What we'll do now is create this new feature branch for adding Flexbox to our site. We can do so by typing in the following command:

```bash
git checkout -b flexbox
```

> PAUSE: When we use `git checkout -b <name>`, what does this do and where do we end up?
>
> ANSWER: It takes whatever branch we're currently in and clones it into a new branch with the name of whatever is put in place of `<name>` and we are now in that new branch.

The result should look something like this (keep in mind not everyone's command line environment looks the same, but there should be similarities):

![New feature branch](assets/lesson-2/500-new-branch.jpeg)

If the result does not say something along the lines of the above "Switched to a new branch...", there may be some updated work in the `staging` branch that wasn't committed first. In order for the `checkout` command to work, all of the work in the current branch needs to be committed or discarded so Git doesn't move when things are in flux.

> ## GOOD PLACE FOR A VIDEO DEMONSTRATING HOW THIS CAN GO WRONG

If you are now in your `flexbox` branch, great! Let's start actually coding!

## Flexing the Header and Navigation

## Flexing the Footer

## Flexing the Hero

## One column layouts for Section Titles and "What We Do"

## Giving "What You Do" nested flexbox layouts

## Trainer Trading Cards

## 3 Column Reach Out

## Merge branch into staging
