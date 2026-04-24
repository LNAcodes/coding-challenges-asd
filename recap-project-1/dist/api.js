const API_URL = "http://localhost:4730";
export async function fetchAllBooks() {
    const response = await fetch(`${API_URL}/books`);
    const data = await response.json();
    return data;
}
export async function fetchBook(isbn) {
    const response = await fetch(`${API_URL}/books/${isbn}`);
    const data = await response.json();
    return data;
}
//# sourceMappingURL=api.js.map