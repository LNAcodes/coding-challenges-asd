import { fetchAllBooks } from "./api.js";
const tableBody = document.querySelector("tbody");
async function renderBooks() {
    const books = await fetchAllBooks();
    for (const book of books) {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>
        <button class="button button-clear fav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fav">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
          </svg>
        </button>
      </td>
      <td>${book.title}</td>
      <td>${book.isbn}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td>
        <button class="button" onclick="location.href = '/detail.html?isbn=${book.isbn}'">
          Detail
        </button>
      </td>
    `;
        tableBody.appendChild(row);
    }
}
renderBooks();
//# sourceMappingURL=index.js.map