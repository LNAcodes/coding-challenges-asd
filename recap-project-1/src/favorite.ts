import {
  getFavorites,
  removeFavorite,
  updateFavoritesCount,
} from "./storage.js";

const tableBody = document.querySelector(
  "[data-js='favorite-list']",
) as HTMLTableSectionElement;

const favoritesHeading = document.querySelector(
  "[data-js='favorites-count-heading']",
) as HTMLHeadingElement;
favoritesHeading.textContent = `${getFavorites().length} Favorites on your list`;

function renderFavorites(): void {
  const favoriteBooks = getFavorites();

  for (const book of favoriteBooks) {
    const row = document.createElement("tr");
    row.innerHTML = `
<td>
                  <button class="button button-clear fav-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="fav"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
      <td>${book.title}</td>
      <td>${book.isbn}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td>
      <a href="/detail?isbn=${book.isbn}" class="button">Detail</a>
      </td>
    `;

    const removeButton = row.querySelector(".fav-btn") as HTMLButtonElement;
    removeButton.addEventListener("click", () => {
      removeFavorite(book.isbn);
      row.remove();
      updateFavoritesCount();
      favoritesHeading.textContent = `${getFavorites().length} Favorites on your list`;
    });

    tableBody.appendChild(row);
  }
}

renderFavorites();
updateFavoritesCount();
