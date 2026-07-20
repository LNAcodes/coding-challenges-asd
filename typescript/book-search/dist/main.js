"use strict";
console.log("ready");
const helloButton = document.getElementById("helloBtn");
const outputParagraph = document.getElementById("output");
helloButton.addEventListener("click", () => {
    outputParagraph.textContent = "Hello from TypeScript!";
});
const formElement = document.getElementById("search-form");
const ulElement = document.getElementById("book-list");
formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("book submitted!");
    const formData = new FormData(event.target);
    const searchedBook = formData.get("query");
    console.log(searchedBook);
    const searchUrl = `https://www.dbooks.org/api/search/${searchedBook}`;
    const books = await fetchAllBooks(searchUrl);
    // console.log(books);
    books.forEach((book) => {
        const listItem = document.createElement("li");
        /*listItem.textContent = `${book.title} - ${book.authors}`;*/
        const link = document.createElement("a");
        link.textContent = book.title;
        link.href = book.url;
        listItem.appendChild(link);
        ulElement.appendChild(listItem);
    });
});
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const displayName = document.getElementById("displayName");
submitButton.addEventListener("click", () => {
    displayName.textContent = nameInput.value;
});
const toggleButton = document.getElementById("toggleButton");
const hiddenText = document.getElementById("hiddenText");
toggleButton.addEventListener("click", () => {
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    }
    else {
        hiddenText.style.display = "none";
    }
});
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");
addButton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = itemInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
});
const decreaseButton = document.getElementById("decreaseButton");
const counterSpan = document.getElementById("counter");
const increaseButton = document.getElementById("increaseButton");
let currentCount = 0;
decreaseButton.addEventListener("click", () => {
    currentCount--;
    counterSpan.textContent = `${currentCount}`;
});
increaseButton.addEventListener("click", () => {
    currentCount++;
    counterSpan.textContent = `${currentCount}`;
});
const colorSelect = document.getElementById("colorSelect");
const colorBox = document.getElementById("colorBox");
colorSelect.addEventListener("change", () => {
    colorBox.style.backgroundColor = colorSelect.value;
});
async function fetchAllBooks(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.books;
}
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
textInput.addEventListener("input", () => {
    charCount.textContent = `${textInput.value.length} characters`;
});
//# sourceMappingURL=main.js.map