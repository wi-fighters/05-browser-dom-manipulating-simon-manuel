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

  const ul = document.querySelector(".book-list");
  books.forEach(

    book => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const hTwo = document.createElement("h2");
      const divOne = document.createElement("div");
      const divTwo = document.createElement("div")

      // console.log(book);
      ul.appendChild(li);
      li.appendChild(a);
      // url link
      a.appendChild(img);
      // src link
      li.appendChild(hTwo);
      // insert dext
      li.appendChild(divOne);
      // give id
      //insert text, sort names
      li.appendChild(divTwo);
      // give id 
      // show status


    })
  ////Li nodelist


})();
/**
  *      -> append title to h2
  *      -> create div .author
  *      -> append Author[1], Author[0]
  *      -> create div .status
  *      -> append alreadyRead
 */
/**
 *
 *  li
 *      append img
 *    h2
 *        append title
 *    /h2
 *    div
 *        append author
 *        --- Family name, First name
 *    /div
 *    div
 *        append alreadyRead
 *    /div
 *  /li
 *
 */

  // console.log(books[0].title);