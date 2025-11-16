const tableBody = document.querySelector("#book-list");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if (!title || !author || !isbn) {
        alert("Please fill all fields");
        return;
    }

    // Create row
    const newRow = document.createElement("tr");

    // Create cells
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");

    // Assign input values
    cell1.textContent = title;
    cell2.textContent = author;
    cell3.textContent = isbn;

    // Create delete button (MUST have class="delete")
    const delBtn = document.createElement("button");
    delBtn.textContent = "Clear";
    delBtn.className = "delete";   // REQUIRED for test

    // Delete row
    delBtn.addEventListener("click", () => {
        newRow.remove();
    });

    cell4.appendChild(delBtn);

    // Append cells
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);

    tableBody.appendChild(newRow);

    // Clear inputs
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
});
