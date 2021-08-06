const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const main = document.createElement('div');
  main.classList.add('header');
  const dateItem = document.createElement('span');
  dateItem.classList.add('date');
  dateItem.textContent = date;
  main.appendChild(dateItem);
  const titleItem = document.createElement('h1');
  titleItem.textContent = title;
  main.appendChild(titleItem);
  const tempItem = document.createElement('span');
  tempItem.classList.add('temp');
  tempItem.textContent = temp;
  main.appendChild(tempItem);
  return main;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector)
    .appendChild(Header('Lambda Times', 'August 6 2021', '120°'));
}

export { Header, headerAppender }
