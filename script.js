// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    "grapes",
    "bread",
    "tea",
    "lettuce",
    "milk",
    "bananas"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const itemInput = document.getElementById('item-input');
const sortBtn = document.getElementById('sort-button');
const clearBtn = document.getElementById('clear-button');
const list = document.getElementById('list');



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    list.innerHTML = "";
    todoItems.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        todoItems.push(newItem);
        itemInput.value = "";
        updateList();
    }
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems = [];
    updateList();
});

console.log(addItemButton);
console.log(itemInput);
console.log(sortBtn);
console.log(clearBtn);
console.log(list);
