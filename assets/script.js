const formSubmit = document.querySelector('main form');
const titleField = formSubmit.querySelector('#title');
const yearReleasedField = formSubmit.querySelector('#year');
const authorField = formSubmit.querySelector('#author');
let bookInfo = {
    title : null,
    yearReleased : null,
    author : null
}

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(titleField.textContent);
})

titleField.addEventListener('change', (evt) => {
   titleField.textContent = evt.target.value
})