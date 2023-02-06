# Scroll Animation
### Demo https://johntsatsa.github.io/ScrollAnimation/
## Project Description
In this project there are a bunch of boxes hiding left and right of the page  
While you scroll down, the boxes start to come out and appear in the center of the page  
When you scroll up the boxes are hiding back
## Guidance
### HTML
Just put several divs with a heading in it
### CSS
Make the size of the boxes and customize them  
Put their text in the center  
Hide them left and right (one to the left one to the right)  
Change the class of the box to get them in the middle  
Smooth transition from the hiding place to the center
### Javascript
When you scroll, you need to check for each box if its top is over the bottom of the page's bottom.  
In that case you need to move it to the center
#### Bonus 
When you reload the page, make it to load and show the top of the page

## Techniques that used
### CSS
```
.class:nth-of-type(even){
	---  commands  ---- }
  ```
  take the even elements of a class and execute the commands
### Javascript
``` window.addEventListener("scroll",function) ```
when the user scrolls, execute the function
```
window.onbeforeunload = function () {
	-----   commands  -----  }
  ```
  when the page reloads, perform the commands
  
  ``` window.scrollTo(0,0);```
  scroll the window to the top
  
  ``` window.innerHeight ```
  height of the window
  
  ``` element.getBoundingClientRect().top ```
  the distance from the top of the window to the top of the element
  
