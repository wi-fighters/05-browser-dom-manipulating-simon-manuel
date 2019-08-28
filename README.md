# The Book List
Create a personalized book website! Instead of adding all of the details of books in HTML, add data on the page from the array below using JavaScript.

```javascript
    const books = [
      {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
      }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
      }
    ];
```
  
* Create an h1 element which has the text _Book List_.
* Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
* Use a ul and li to display the books.
* Add an img to each book that links to a URL of the book cover.
* Change the height and width of the images on the page to appear the same size. Add a border around the images.
* Change the style of the book depending on whether it has been read or not.
* Change the order of the author's name so that last name appears first. 
* Sort the books on the page depending on alphabetical order of the author's last name.

