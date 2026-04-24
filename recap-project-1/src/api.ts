import type { Book } from "./types/book";

const API_URL = "http://localhost:4730";

export async function fetchAllBooks(): Promise<Book[]> {
  const response = await fetch(`${API_URL}/books`);
  const data = await response.json();

  return data as Book[];
}

export async function fetchBook(isbn: string): Promise<Book> {
  const response = await fetch(`${API_URL}/books/${isbn}`);
  const data = await response.json();

  return data as Book;
}
