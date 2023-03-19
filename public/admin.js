
async function getBooks(){
let response = await fetch('http://localhost:3001/listBooks')
let books = await response.json()

books.forEach(renderBook)
}
function renderBook(book) {
    console.log(book)
    let bookContainer = document.getElementById('box')
    bookContainer.innerHTML +=`
       <ul>
       <li>${book.title}</li>
       
       </ul>
    `
}
getBooks()