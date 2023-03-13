# React - social project

06-02-2023 - social network project with react

## Updates details

### SingleContet component:

08-03-2023

#1 - Destructuring the content from the fetch(posts) made on the content.jsx file
and passed as a prop (data) to the singleContent component.

#2 - Using its userId key to pass as a parameter on the query of the singleData fetch.
by doing it we're able to get a single user data based on the userId from the fetch(posts).

#3 - Getting additional params from the fetch(posts) to use it in the singleContent component body (e.g. body, tags).

sideNote\_ now we have access to both fetch contents, the downside is that
for the singleData we'll be performing mutiples fetch calls.

### Content component:

09-03-2023 - useRef

1# - The useRef hook has been added (mainContentRef),
then it was passed to the Content component <div> for a reference
of the subject that we are going to manipulate.

2# - Afterwards was added on the same component an event listener (onScroll),
and passed the callback function (scrollEffect) through it.

3# The data within the callback is a condition that is going to look for the current scroll value (scrollTop, returns the number of pixels an element's content is scrolled vertically) using the reference that was passed to the component, if it is bigger/equal to 1.

4# An useState hook was set which is by
default a boolean(false), it is going to be true if our condition is true,
then passed as a prop to the Header component.

5# - The useState in turn sets a class on the Header component if its value is true
