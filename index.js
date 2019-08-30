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

//sort object based on surname
books.sort((a, b) => {
  let surnameA = reverseName(a.author);
  let surnameB = reverseName(b.author);
  if (surnameA < surnameB) {
    return -1;
  } else if (surnameA > surnameB) {
    return 1;
  }
  return 0;
});

let unorderedList = document.querySelector(".unordered-list");
books.forEach(element => {
  //adding book element on the page
  let li = document.createElement("li");
  li.innerHTML = `<p>${element.title}, ${reverseName(element.author)}</p>
    <a href="${element.img}"> <img class="image" src="${element.img}"> </a>`;
  unorderedList.append(li);
  li.style.width = "12rem";
  //checking if the book is already read
  if (element.alreadyRead) {
    let read = document.createElement("p");
    read.innerHTML = `<p class="status">Status: Already read</p>`;
    li.append(read);
    li.classList.add("already-read");
    let alreadyRead = document.querySelectorAll(".already-read");
    for (let i = 0; i < alreadyRead.length; i++) {
      alreadyRead[i].style.color = "blue";
    }
  } else {
    let notRead = document.createElement("p");
    notRead.innerHTML = `<p class="status">Status: Still need to read...</p>`;
    li.append(notRead);
  }
});
