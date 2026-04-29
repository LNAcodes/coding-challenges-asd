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
