// Get references to the input field, button, and shopping list
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingList = document.getElementById('shoppingList');

// Add event listener to the button to add a new item
addItemBtn.addEventListener('click', addItem);

// Function to add a new item to the list
function addItem() {
    const itemText = itemInput.value.trim();
    
    if (itemText !== "") {
        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.className = 'collection-item';
        listItem.innerText = itemText;

        // Create the "delete" button for each list item
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn red';
        deleteBtn.innerText = 'Ta bort';

        // Add an event listener to delete the item when the button is clicked
        deleteBtn.addEventListener('click', () => {
            shoppingList.removeChild(listItem);
        });

        // Create the "check" button for marking items as purchased
        const checkBtn = document.createElement('button');
        checkBtn.className = 'check-btn';
        checkBtn.innerHTML = '<i class="material-icons">check</i>';

        // Add an event listener to mark/unmark the item as purchased
        checkBtn.addEventListener('click', () => {
            listItem.classList.toggle('purchased');  // Toggle the purchased class
        });

        // Append the check button and delete button to the list item
        listItem.appendChild(checkBtn);
        listItem.appendChild(deleteBtn);

        // Add the new list item to the shopping list (ul)
        shoppingList.appendChild(listItem);

        // Clear the input field
        itemInput.value = '';
    }
}
