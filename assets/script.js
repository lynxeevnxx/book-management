
const formSubmit = document.querySelector('main form');
const titleField = formSubmit.querySelector('#title');
const yearReleasedField = formSubmit.querySelector('#year');
const authorField = formSubmit.querySelector('#author');
const isCompleteField = formSubmit.querySelector('#isComplete');

let bookInfo = {
    id : null,
    title : null,
    yearReleased : null,
    author : null,
    isComplete : false
}

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
   addBooks()
    
})


const addBooks = () => {
    let timestamp = new Date().getUTCMilliseconds();
    bookInfo.id = timestamp;
    bookInfo.title = titleField.value;
    bookInfo.yearReleased = yearReleasedField.value;
    bookInfo.author = authorField.value;
    bookInfo.isComplete = isCompleteField.checked;

    console.log(bookInfo);

    if (localStorage.getItem('listBooks') == null) {
        let listBooks = [];
        listBooks.push(bookInfo);
        let stringfy = JSON.stringify(listBooks);
        localStorage.setItem('listBooks', stringfy);
    } else if (localStorage.getItem('listBooks') !== null) {
        let listBooks = JSON.parse(localStorage.getItem('listBooks'));
        listBooks.push(bookInfo);
        let stringfy = JSON.stringify(listBooks);
        localStorage.setItem('listBooks', stringfy);

    }
}