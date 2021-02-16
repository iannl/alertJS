# alertJS
## js alert library
### Table of Contents
[Getting Started](#getting-started)

[Links](#links)

[Buttons](#buttons)

[Images](#images)

[Closing Alerts](#closing-alerts)

[Triggers](#triggers)

[Demo](https://iannl.github.io/alertJS/src/demo/demo1.html)

[Quiz](https://iannl.github.io/alertJS/quiz/1.html)

[Code](https://github.com/iannl/alertJS/)

[Tryit](https://iannl.github.io/alertJS/tryit/makeTryit)

### Getting Started
In the head section of the HTML file inport alertJS by using the code below:
```
<link rel="stylesheet" href="alertJS.css">
<script src="alertJS.js"></script>
```
Then, in the body section type the code below to set up the alert box:
```
<div id="alertJS" class="overlay"></div>
```
Now for the fun part: the JavaScript.
You can set the alert's content with the 'makeAlert()' function.
The first part of the input is the head section. The second is the body:
```
makeAlert('Head', 'Body')
```
To open the alert use the 'openAlert()' function:
```
openAlert()
```
![screenshot](https://i.ibb.co/FKmVNpW/screenshot.png)
### Links
Now that you know how to make a basic alert, you will learn how to use links.
Links start with '<' and end with '>.'
Below is code for a link that goes to https://example.com and has text that says 'Lorem ipsum.'
```
makeAlert('<Lorem ipsum.[https://example.com]>', '')
openAlert()
```
![screenshot](https://i.ibb.co/0D1cVzy/screenshot2.png)
### Buttons
Buttons are a lot like links.
They start with '{' and end with '}.'
Below is code for a button that closes the alert and has text that says 'close'
```
makeAlert('{close[closeAlert()]}', '')
openAlert()
```
![screenshot](https://i.ibb.co/dDzD8gX/screenshot3.png)
### Images
Images are simple.
They start with '(' and end with ').'
Below is code for a image that has alt text that says 'Black Hole'
```
makeAlert('(Black Hole[https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg])', '')
openAlert()
```
![screenshot](https://i.ibb.co/wp8Vqzy/screenshot4.png)
### Closing Alerts
To close an alert you use
```
closeAlert()
```
### Triggers
To make a trigger all you have to do is write down a function that already exists like 'closeAlert' and then you add whatever you want. Example below:
```
function closeAlert() {
  document.getElementById("alertJS").style.width = "0%";
  alert('You closed the alert!')
}
```
