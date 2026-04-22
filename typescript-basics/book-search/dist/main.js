"use strict";
console.log("ready");
const formElement = document.getElementById("search-form");
const ulElement = document.getElementById("book-list");
formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    //console.log("book submitted!");
    const formData = new FormData(event.target);
    const searchedBook = formData.get("query");
    console.log(searchedBook);
    const searchUrl = `https://www.dbooks.org/api/search/${searchedBook}`;
    const books = await fetchAllBooks(searchUrl);
    console.log(books);
    books.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} - ${book.authors}`;
        ulElement.appendChild(listItem);
    });
});
async function fetchAllBooks(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.books;
}
//# sourceMappingURL=main.js.map