import { fetchBook } from "./api.js";
const searchParams = new URLSearchParams(document.location.search);
const isbn = searchParams.get("isbn");
async function renderBook() {
    if (!isbn) {
        console.error("No ISBN found in URL");
        return;
    }
    const book = await fetchBook(isbn);
    const mainElement = document.querySelector("[data-js='book-detail']");
    mainElement.innerHTML = `
  <h1>
    ${book.title}<br />
    <small>${book.subtitle}</small>
  </h1>
  <section class="row">
    <div class="column column-67">
      <h3>Abstract</h3>
      <p>${book.abstract}</p>

      <h4>Details</h4>
      <ul>
        <li><strong>Author:</strong> ${book.author}</li>
        <li><strong>Publisher:</strong> ${book.publisher}</li>
        <li><strong>Pages:</strong> ${book.numPages}</li>
      </ul>

      <button class="button button-outline" onclick="location.href = 'index.html'">
        Back
      </button>
    </div>
    <div class="column column-33">
      <img src="${book.cover}" alt="${book.title}" />
    </div>
  </section>
`;
}
renderBook();
//# sourceMappingURL=detail.js.map