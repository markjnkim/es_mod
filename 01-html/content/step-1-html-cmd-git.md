# Lesson 1: HTML, Git, and the Command Line

## Getting Situated

No more talk. Let's make this project happen! Any time we're starting a new project, though, there's some initial setup that needs take place first. For instance, we need at least one file that we can code in. Since what we're building is meant to be a website, we'll do all of our work in an HTML file. While we could certainly create this HTML file with a few clicks of the mouse, this would be a good time to start familiarizing ourselves with the command line, or terminal.

In the old days of MS-DOS, giving text-based commands to the computer was the only way to get anything done. Now that we have more powerful operating systems like Windows and macOS, most users never have to look at the command line. For developers, though, the command line is still a common tool for running important tasks. For now, we'll be using it to set up our project.

Mac users, you already have a built-in Terminal app, which you can go ahead and launch now by searching for "terminal" in the Spotlight Search. Windows users, hopefully you installed [Git Bash](https://git-scm.com/downloads) ahead of time, which you can open by right-clicking anywhere on your desktop and selecting "Git Bash Here." Regardless of your operating system, you should see a window that looks like this:

![terminal window](./content/assets/step-1/100-something.png)

In this window, type the command `pwd` and press Enter. The terminal will then display something like `/c/Users/MyUser/Desktop`. The command `pwd` stands for Print Working Directory and lets us know which folder (or directory) the terminal is currently in. For Windows users, that probably seems pretty obvious. We already right-clicked the desktop to "Git Bash Here!" Mac users, on the other hand, usually start in their `user` folder by default and will need to manually move into their `Desktop` folder. We'll talk more about that in a minute.

First, let's create a new folder for our Run Buddy project to reside in. Type the following commands in your terminal, pressing Enter after each one:

```bash
mkdir run-buddy
ls
```

The `mkdir` command allows us to create new folders (make directories). In this case, we created a folder called `run-buddy`. The second command, `ls`, simply lists all of the files and folders in our current terminal location. Alongside any other files/folders that were already there, you should now see a `run-buddy` folder. If you navigate to this same location through your operating system (i.e. your Windows desktop or macOS finder), you'll see the same folder. What we do on the command line has real consequences with our computer!

> **Urkel Says:** With great power comes great responsibility. 

If you run `pwd` again, however, you'll see that we haven't changed locations yet. If we want to step into our new folder, we'll need to use the `cd` command. Try these out:

```bash
cd run-buddy
pwd
```

> **Pause:** What do you suppose `cd` stands for? Answer: Change Directory.

Just for fun, you can run the `ls` command again while in the `run-buddy` directory, but nothing will happen, because we don't yet have any files in here to list out. Let's go ahead and make a few files with the `touch` command:

```bash
touch hello.txt
touch index.html
ls
```

Unlike directories, which are made using `mkdir`, we use `touch` for files. Here we've just made two new files: a text file and an HTML file. Well, you know what... we don't really need that text file, after all, so let's go ahead and remove it:

```bash
rm hello.txt
ls
```

Again, everything we've done up to this point could also be accomplished with mouse clicks and context menus, but you'll find that, once you're used to it, the command line allows you to work faster as a developer. Plus, it makes you feel really cool.

> **Deep Dive:** Google "bash commands" and see what other terminal commands look useful.

## Writing the HTML