const tableBody = document.querySelector("#book-list");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Simple validation
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all fields");
        return;
    }

    // Create new row
    const newRow = document.createElement("tr");

    // Create data cells
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td"); // for delete button

    // Assign the text
    cell1.textContent = title;
    cell2.textContent = author;
    cell3.textContent = isbn;

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.background = "red";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.padding = "4px 8px";
    delBtn.style.borderRadius = "3px";
    delBtn.style.cursor = "pointer";

    // delete function
    delBtn.addEventListener("click", () => {
        newRow.remove();
    });

    // Attach delete button to cell
    cell4.appendChild(delBtn);

    // Append cells to row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);

    // Add row to the table
    tableBody.appendChild(newRow);

    // Clear input fields
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
});
