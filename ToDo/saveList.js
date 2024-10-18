// Save the list to localStorage
function saveList() {
    const items = [];
    shoppingList.querySelectorAll('li').forEach((li) => {
        items.push({
            text: li.innerText.replace('Ta bort', '').trim(),
            purchased: li.classList.contains('purchased'),
        });
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

// Load the list from localStorage
function loadList() {
    const savedItems = JSON.parse(localStorage.getItem('shoppingList'));
    if (savedItems) {
        savedItems.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.className = 'collection-item';
            listItem.innerText = item.text;

            if (item.purchased) {
                listItem.classList.add('purchased');
            }

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn red';
            deleteBtn.innerText = 'Ta bort';
            deleteBtn.style.float = 'right';
            deleteBtn.addEventListener('click', () => {
                shoppingList.removeChild(listItem);
                saveList();
            });

            listItem.appendChild(deleteBtn);

            // Add the list item to the shopping list
            shoppingList.appendChild(listItem);

            // Add event listener to mark/unmark as purchased
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('purchased');
                saveList();
            });
        });
    }
}

// Save the list whenever an item is added or removed
addItemBtn.addEventListener('click', () => {
    addItem();
    saveList();
});

// Load the list when the page loads
window.addEventListener('load', loadList);
