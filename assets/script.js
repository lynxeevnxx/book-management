
const formSubmit = document.querySelector('main form');
const titleField = formSubmit.querySelector('#title');
const yearReleasedField = formSubmit.querySelector('#year');
const authorField = formSubmit.querySelector('#author');
const isCompleteField = formSubmit.querySelector('#isComplete');
const finishedContainer = document.querySelector('.finishedContent table');
const notFinishedContainer = document.querySelector('.notFinishedContent table');


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

const renderingListBooks = () => {
    const dataBooks = JSON.parse(localStorage.getItem('listBooks'));
    for (book of dataBooks) {
        const createTr = document.createElement('tr');
        const titleEl = document.createElement('td');
        const yearEl = document.createElement('td');
        const authorEl = document.createElement('td');
        const actionBtnElOne = document.createElement('td');
        const actionBtnElTwo = document.createElement('td');
        const actionBtnElThree = document.createElement('td');
        const btnEdit = document.createElement('button');
        const btnDelete = document.createElement('button');
        const btnMove = document.createElement('button');
        btnEdit.innerText ='Edit';
        btnDelete.innerText = 'Delete';
        btnMove.innerText = 'Move Book'
        actionBtnElOne.appendChild(btnEdit);
        actionBtnElTwo.appendChild(btnDelete);
        actionBtnElThree.appendChild(btnMove);
        titleEl.innerText = book.title;
        yearEl.innerText = book.yearReleased;
        authorEl.innerText = book.author;
        createTr.appendChild(titleEl);
        createTr.appendChild(yearEl);
        createTr.appendChild(authorEl);
        createTr.appendChild(actionBtnElOne);
        createTr.appendChild(actionBtnElTwo);
        createTr.appendChild(actionBtnElThree);

        console.log(createTr)
        if (book.isComplete) {
            finishedContainer.appendChild(createTr)
        } else if (!book.isComplete) {
            notFinishedContainer.appendChild(createTr)
        }
    }
}

renderingListBooks()
