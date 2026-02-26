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
// add more variables below
const addItemButton = document.getElementById('add-item-button');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const list = document.getElementById('list');
const textInput = document.getElementById('text');


// 3. Write a function to display all items in the #list element
function updateList() {
    // clear list before adding new items
    list.innerHTML = '';
    // add your code here
    for (let i = 0; i < todoItems.length; i++) {
        const li = document.createElement('li');
        li.innerText = todoItems[i];

        list.appendChild(li);
    }
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    // 4a. when the user clicks the "Add" button, check whats in the input and store it in a variable
    const newItemText = textInput.value;
    // console.log(newItemText);

    // 4b. add the new item to the array
    todoItems.push(newItemText);
    updateList();
    // console.log(todoItems);
    textInput.value = "";
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here\
    // console.log('sort button clicked')
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems = [];
    updateList();
});

// console.log(addItemButton);
// console.log(itemInput);
// console.log(sortBtn);
// console.log(clearBtn);
// console.log(list);
