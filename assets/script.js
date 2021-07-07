
const formSubmit = document.querySelector('main form');
const titleField = formSubmit.querySelector('#title');
const yearReleasedField = formSubmit.querySelector('#year');
const authorField = formSubmit.querySelector('#author');
const isCompleteField = formSubmit.querySelector('#isComplete');
const finishedContainer = document.querySelector('.finishedContent table');
const notFinishedContainer = document.querySelector('.notFinishedContent table');
const inputFilterField = document.getElementById('filterInput');
const filterTable = document.getElementById('filterResultTable');
const findBtn = document.getElementById('findBtn');
const booksFounded = document.getElementById('booksFound')

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
    renderingListBooks()
    
})


findBtn.addEventListener('click',  filterBooks)

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

function filterBooks () {
        const books = JSON.parse(localStorage.getItem('listBooks'));

        filterTable.innerText = ''
     
       let filteredBooks =  books.filter(book => {
            console.log(book)
            return book.title.includes(inputFilterField.value) == true
        })

        booksFounded.innerText = `Buku Yang Ditemukan : ${filteredBooks.length}`

        for (book of filteredBooks) {
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
        btnMove.innerText = 'Move Book';
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
        filterTable.appendChild(createTr)
        }

        console.log(filteredBooks);
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

        if (book.isComplete) {
            finishedContainer.appendChild(createTr)
        } else if (!book.isComplete) {
            notFinishedContainer.appendChild(createTr)
        }
    }
}

renderingListBooks()



