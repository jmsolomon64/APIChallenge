# Studio Ghibli API

## Summary
This project was a very good way to test out all of the JS fundamentals I learned. I tried to leave HTML Pages as basic as possible to practice creating elements through JS and then manipulating them through the DOM to practice making things as dynamic as possible. I personally struggle with CSS so I practiced making clean and simple styling in the pages. In this project I learned how to utilize CSS grid which made the process much easier. In the future I would like to practice making more mobile friendly pages.

### Goals of the project
1. Pull data from an API
2. Utilize GET
3. Be creative 
4. Proffessional and appropriate
5. Have some styling

## Movies Page
This was the first page I created in the project. Here I experimented with loops to itterate through data to create multiple sets of nested HTML. This section is where I learned I could add classes to the newly created HTML to have styling applied to it dynamically. I also played around with pseudo classes like hover in CSS

## What To Watch Page
This page pulls heavily from the movies page, but with a different direction for functionality. I created a function that generates a random number using the length of the movies list as the max number and then uses the number to access the movies index and renders all of the relevant information pulled from that title. 

## Collection Page 
This page displays application of drag and drop functionality as well as a functional search bar to filter through all titles. I experimented with JS and css especially in this section. 
My favorite thing I learned through this process was how to add and take away a class through Javascript to change the styling of an object the user is interacting with.

## Library Page
This page is styled very similarly to the collection page but rather than dragging and dropping titles to the right, you select a title and an article full of information about the film populates on the right. This was the most difficult for me, but learning to use the .push() method to append the json pulled from the fetch function really helped to overcome some barriers. I also learned more differences between .querySelector() and grabbing elements through .getElementByClassName() or .getElementByID()