(() => {
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
  // sort the array regarding the first letter of the last names of the authors
  const sortedBooks = books.sort((a, b) => {
    const authorA = a.author.split(" ")[1].charAt(0);
    const authorB = b.author.split(" ")[1].charAt(0);
    if (authorA < authorB) {
      return -1
    }
    if (authorA > authorB) {
      return 1
    }
  });


  const ul = document.querySelector(".book-list");
  sortedBooks.forEach(

    book => {
      const authorName = book.author.split(" ");

      const li = document.createElement("li");

      const a = document.createElement("a");
      a.setAttribute("href", `${book.img}`)

      const img = document.createElement("img");
      img.setAttribute("src", `${book.img}`)

      const hTwo = document.createElement("h2");
      hTwo.prepend(document.createTextNode(`${book.title}`));

      const divOne = document.createElement("div");
      divOne.prepend(document.createTextNode(`${authorName[1]}, ${authorName[0]}`));

      const divTwo = document.createElement("div");

      ul.appendChild(li);
      li.append(a, hTwo, divOne, divTwo);
      a.appendChild(img);


      if (book.alreadyRead) {
        divTwo.prepend("Read");
      } else {
        divTwo.prepend("To read");
      }
    });
})();
