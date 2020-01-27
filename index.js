(() => {
  let i = 0;
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

  const sortedBooks = books.sort((a, b) => {
    const authorA = a.author.split(" ")[1].charAt(0);
    const authorB = b.author.split(" ")[1].charAt(0);
    if (authorA < authorB) { return -1 }
    if (authorA > authorB) { return 1 }
  });


  const ul = document.querySelector(".book-list");
  sortedBooks.forEach(

    book => {

      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const hTwo = document.createElement("h2");
      const divOne = document.createElement("div");
      const divTwo = document.createElement("div");
      const authorName = books[i].author.split(" ");

      ul.appendChild(li);
      li.appendChild(a);
      a.setAttribute("href", `${books[i].img}`)
      a.appendChild(img);
      img.setAttribute("src", `${books[i].img}`)
      li.appendChild(hTwo);
      hTwo.prepend(document.createTextNode(`${books[i].title}`));
      li.appendChild(divOne);
      divOne.prepend(document.createTextNode(`${authorName[1]}, ${authorName[0]}`));
      li.appendChild(divTwo);

      if (books[i].alreadyRead) {
        divTwo.prepend("Read");
      } else {
        divTwo.prepend("To read");
      }
      i++

    })



})();
