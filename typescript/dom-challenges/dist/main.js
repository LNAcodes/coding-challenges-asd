"use strict";
// Challenge 1: Update Text on Button
const helloButton = document.getElementById("helloBtn");
const outputParagraph = document.getElementById("output");
helloButton.addEventListener("click", () => {
    outputParagraph.textContent = "Hello from TypeScript!";
});
// Challenge 2: Input and Display
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitBtn");
const displayName = document.getElementById("displayName");
submitButton.addEventListener("click", () => {
    displayName.textContent = nameInput.value;
});
// Challenge 3: Toggle Visibility
const toggleButton = document.getElementById("toggleBtn");
const hiddenText = document.getElementById("hiddenText");
toggleButton.addEventListener("click", () => {
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    }
    else {
        hiddenText.style.display = "none";
    }
});
// Challenge 4+5: Add + Delete Items to List
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
addButton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = itemInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
    //console.log("click:", listItem);
});
// Challenge 6: Counter with Increment and Decrement
const decreaseButton = document.getElementById("decreaseBtn");
const counterSpan = document.getElementById("counter");
let currentCount = 0;
const increaseButton = document.getElementById("increaseBtn");
decreaseButton.addEventListener("click", () => {
    currentCount--;
    counterSpan.textContent = `${currentCount}`;
});
increaseButton.addEventListener("click", () => {
    currentCount++;
    counterSpan.textContent = `${currentCount}`;
});
// Challenge 8: Character Count
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
textInput.addEventListener("input", () => {
    charCount.textContent = `${textInput.value.length} characters`;
});
// Challenge 7: Change Background Color
const colorSelect = document.getElementById("colorSelect");
const colorBox = document.getElementById("colorBox");
colorSelect.addEventListener("change", () => {
    colorBox.style.backgroundColor = colorSelect.value;
});
//# sourceMappingURL=main.js.map