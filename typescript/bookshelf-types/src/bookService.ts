/*
Service module

Create a file src/bookService.ts that imports the types from your declaration file using import type. Write the following function signatures (stub implementations are fine):

 */

import type {
  BookPreview,
  Book,
  BookCreatePayload,
  BookUpdatePayload,
  IsbnParts,
  Bookfields,
  EntityId,
  Timestamped,
  HasId,
  ApiResponse,
} from "../types/book";

/*
fetchBooks(): Promise<ApiResponse<BookPreview[]>>
fetchBook(id: EntityId): Promise<ApiResponse<Book>>
createBook(payload: BookCreatePayload): Promise<ApiResponse<Book>>
updateBook(id: EntityId, changes: BookUpdatePayload): Promise<ApiResponse<Book>>
parseIsbn(isbn: string): IsbnParts
Verify that the compiler accepts your code by running tsc --noEmit.
*/

async function fetchBooks(): Promise<ApiResponse<BookPreview[]>> {
  return {} as ApiResponse<BookPreview[]>;
}

/*
return {} means
 return {
  status: 200,
  message: "Books fetched",
  data: []
} as ApiResponse<BookPreview[]>;
 */

async function fetchBook(id: EntityId): Promise<ApiResponse<Book>> {
  return {} as ApiResponse<Book>;
}

async function createBook(
  payload: BookCreatePayload,
): Promise<ApiResponse<Book>> {
  return {} as ApiResponse<Book>;
}

async function updateBook(
  id: EntityId,
  changes: BookUpdatePayload,
): Promise<ApiResponse<Book>> {
  return {} as ApiResponse<Book>;
}

function parseIsbn(isbn: string): IsbnParts {
  return [0, "", ""] as IsbnParts;
}
