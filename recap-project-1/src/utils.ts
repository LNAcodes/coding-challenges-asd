import type { Book } from "./types/book.js";

export function filterByTitle(books: Book[], searchTerm: string): Book[] {
  return books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}

export function filterByPublisher(books: Book[], searchTerm: string): Book[] {
  return books.filter((book) =>
    book.publisher.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}

export function populatePublisherFilter(
  books: Book[],
  selectElement: HTMLSelectElement,
): void {
  const uniquePublishers = new Set(books.map((book) => book.publisher));
  for (const publisher of uniquePublishers) {
    const option = document.createElement("option");
    option.value = publisher;
    option.textContent = publisher;
    selectElement.appendChild(option);
  }
}
