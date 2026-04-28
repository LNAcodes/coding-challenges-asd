import type { Book } from "./types/book.js";

function saveFavorites(favorites: Book[]): void {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function updateFavoritesCount(): void {
  const favoritesCountElement = document.querySelector(
    "[data-js='favorites-count']",
  ) as HTMLSpanElement;

  if (!favoritesCountElement) return;

  favoritesCountElement.textContent = String(getFavorites().length);
}

export function getFavorites(): Book[] {
  const favoritesString = localStorage.getItem("favorites");

  if (!favoritesString) {
    return [];
  }
  return JSON.parse(favoritesString) as Book[];
}

export function addFavorite(book: Book): void {
  const currentFavorites = getFavorites();
  currentFavorites.push(book);
  saveFavorites(currentFavorites);
}

export function removeFavorite(isbn: string): void {
  const currentFavorites = getFavorites();
  const updatedFavorites = currentFavorites.filter(
    (book) => book.isbn !== isbn,
  );
  saveFavorites(updatedFavorites);
}
