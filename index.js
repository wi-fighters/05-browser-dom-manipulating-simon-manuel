const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

//surname should appear first
function reverseName(name) {
  let authorName = name.split(" ");
  authorName.reverse();
  let reversedName = authorName.join(" ");
  return reversedName;
}

// Sort object based on surname, use String.prototype.localeCompare for managing case and special accents
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
books.sort((a, b) => {
  const surnameA = reverseName(a.author);
  const surnameB = reverseName(b.author);

  return surnameA.localeCompare(surnameB);
});

const bookList = document.querySelector(".book-list");
books.forEach(book => {
  // Create list item to contain book info
  const bookListItem = document.createElement("li");
  bookListItem.classList.add("book");

  // Create paragraph to contain book title
  const bookTitleParagraph = document.createElement("p");
  bookTitleParagraph.classList.add("book-title");
  bookTitleParagraph.innerText = book.title + ", ";

  // Create span to contain book author
  const bookAuthorSpan = document.createElement("span");
  bookAuthorSpan.classList.add("book-author");
  bookAuthorSpan.innerText = reverseName(book.author);

  // Create img to contain book cover
  const bookCoverImg = document.createElement("img");
  bookCoverImg.classList.add("book-cover");
  bookCoverImg.src = book.img;

  // Create paragraph to contain status
  const readStatusParagraph = document.createElement("p");
  readStatusParagraph.classList.add("status");
  readStatusParagraph.innerText = "Status: Still need to read...";

  // Change status paragraph if read
  if (book.alreadyRead) {
    readStatusParagraph.classList.add("already-read");
    readStatusParagraph.innerText = "Status: Already read";
  }

  // Compose elements
  bookTitleParagraph.appendChild(bookAuthorSpan);
  bookListItem.appendChild(bookTitleParagraph);
  bookListItem.appendChild(bookCoverImg);
  bookListItem.appendChild(readStatusParagraph);
  bookList.appendChild(bookListItem);
});
