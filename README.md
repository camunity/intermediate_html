# Lecture Notes
Go over HTML attributes
* where to see element attributes
* id & class
Linking to CSS 
* link tag
* custom stylesheets
* imported stylesheets (bootstrap)
Linking to JS
* script tag
* HTML/DOM
* Fundamentals of JS
    * syntax
    * variables / printing
    * data types
    * conditionals & loops
    * functions

## Connecting CSS
Cascading Style Sheets (CSS) is used to format the layout of a webpage. Cascading means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!


To use an external style sheet, add a link to it in the <head> section of each HTML page:
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## Questions/Takeaways for Students
* What are HTML attributes? How are they defined?
* What is the difference between the id and class attribute?
* What does CSS stand for, why is it used?


## Resources
* [W3 Schools CSS](https://www.w3schools.com/css/css_intro.asp)
* [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)