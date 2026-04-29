import { fetchAllBooks } from "./api.js";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
  updateFavoritesCount,
} from "./storage.js";

import { filterByPublisher, filterByTitle } from "./utils.js";

import type { Book } from "./types/book.js";

const booksCountElement = document.querySelector(
  "[data-js='books-count']",
) as HTMLHeadingElement;

const tableBody = document.querySelector("tbody") as HTMLTableSectionElement;

const favoritesCountElement = document.querySelector(
  "[data-js='favorites-count']",
) as HTMLSpanElement;

const searchTitle = document.querySelector(
  "[data-js='search-title']",
) as HTMLInputElement;

const searchPublisher = document.querySelector(
  "[data-js='search-publisher']",
) as HTMLSelectElement;

function renderBookRows(booksToRender: Book[]): void {
  tableBody.innerHTML = "";

  for (const book of booksToRender) {
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
        <button class="button" onclick="location.href = '/detail?isbn=${book.isbn}'">
          Detail
        </button>
      </td>
    `;
    const favButton = row.querySelector(".fav-btn") as HTMLButtonElement;

    favButton.addEventListener("click", () => {
      const isFavorite = getFavorites().some(
        (favorite) => favorite.isbn === book.isbn,
      );

      if (isFavorite) {
        removeFavorite(book.isbn);
      } else {
        addFavorite(book);
      }

      favButton.classList.toggle("active");

      favoritesCountElement.textContent = String(getFavorites().length);
    });
    tableBody.appendChild(row);
  }
}

async function renderBooks(): Promise<void> {
  const books = await fetchAllBooks();

  booksCountElement.textContent = `${books.length} Books displayed`;

  renderBookRows(books);

  searchTitle.addEventListener("input", () => {
    const searchTerm = searchTitle.value;

    const filteredBooks = filterByTitle(books, searchTerm);

    renderBookRows(filteredBooks);
  });

  searchPublisher.addEventListener("change", () => {
    const selectedPublisher = searchPublisher.value;

    const filteredBooks = filterByPublisher(books, selectedPublisher);

    renderBookRows(filteredBooks);
  });
}

renderBooks();
updateFavoritesCount();
