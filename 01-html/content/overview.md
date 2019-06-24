Overview
===
Up until the early 1990s, the Internet was functional but not pretty. Scientists, government
employees, and academics freely shared information with one another across the globe using
specialized command line applications on mainframe computers. This was great for science, 
governing, and academic research, but there was no easy way to share pictures of cats. This
changed when [Tim Berners Lee](https://www.w3.org/People/Berners-Lee/) unleashed Hypertext 
Media on the Internet, allowing people to easily create Hypertext documents that could directly
link to any other Hypertext document. This network of linked documents became known as the World
Wide Web, and people used Web browsers to navigate and display its content. Those documents 
were written in Hypertext Markup Language, or HTML. 30 years later, the web still runs on HTML,
and everyday folks still use browsers to navigate and display HTML documents. A notable difference
is that there are now a lot more cat memes.
 
You may be skeptical that everything on the web is still just an HTML document. You 
should be, to some extent. Now there are PNG, JPG, and GIF images. There are videos. There
are audio files. There are "live streams." There are games, Zip files, Power Point 
presentations, viruses. The list goes on. But a web browser can't discover and display any
of these things without HTML. Let's prove it. In a new browser window, open
[YouTube](https://www.w3.org/People/Berners-Lee/). Now right-click somewhere in the white 
area of the page, like to the right of the YouTube logo, and select "View page source" from
the contextual menu. You should see a page filled with HTML.

> **Pro-Tip/Shortcut:** You can view the HTML source of any web page in Chrome by typing
Control-U (Windows) or Command-Option-U (Mac).

<img src="assets/youtube_html_source.png" alt="YouTube HTML source code" />

That's HTML! Albeit some of the ugliest HTML you'll ever see. Isn't it incredible that
a web browser can turn this hieroglyphic miasma in to a nice-looking web page? Now close
that window immediately because prolonged exposure to HTML formatted this way may impair
your sanity.

In this unit, you'll learn how to create an HTML page from scratch, and write HTML code
that's easy for humans to read when they look at the source code. You're also going to learn
about Cascading Style Sheets, or CSS, which tells browsers how to display your HTML page in a
way that's nice for humans to look at. Where HTML defines a page's structure (this is a 
heading, this is the body, this is a paragraph, this is a list), CSS defines
a page's look and feel (this heading is blue, the body has a 10 pixel margin, this text 
is in the Times New Roman font).

Remember how we were talking about the pre-web days of the Internet, when scientists used 
terminals and command line applications to manage information? You're going to do some of 
that, too. Just like HTML, command line tools remain essential for web development.

Finally, you're going to learn how to use git, which is an extremely powerful and helpful
tool to help you manage your HTML and CSS code. Git will become even more useful to you
when you embark on your professional career and collaborate with other web developers to 
create the future World Wide Web. 🐈

## Key Topics
* Command Line Basics
  * Navigating file tree
  * Creating, copying and removing files and directories
  * Setting up VS Code
* HTML
  * semantic elements, tags
  * attributes
  * best practices: indentation, file naming conventions and directory structure
* CSS
  * order of importance
  * classes
  * selectors
  * typography
  * box model
  * positioning, absolute and relative measurements
  * color: hexadecimal, rgb and named
  * Multiple style sheets
* Git & git workflow
  * git clone
  * git add
  * git commit
  * git push
  * git pull
* GitHub
  * create a repository
  * deploy to personal pages

## Comprehension Check
You will be employer-ready if you can answer the following questions:
1. What does it mean to be a full-stack web developer?
2. What is the relationship between HTML and CSS?
3. What is git workflow?

## Learning Objectives
You will be employer-competitive if you are able to:
* Build and style static web pages with semantic HTML & CSS
* Implement best practices and standards when structuring HTML files using nested elements, indentation, comments, and line breaks
* Implement CSS styling via class, id and element selectors using external stylesheets, inline styles and embedded style tags
* Explain the _cascade_ in Cascading Style Sheets and implement the box model for HTML elements
* Explain the value of version-control and utilize git workflow to initialize projects, track changes and host via remote server
* Perform common commands via the command line to interface with the operating system, such as navigating the file tree and creating and deleting files and directories
* Execute live deployment using GitHub Pages
