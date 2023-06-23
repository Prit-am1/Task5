let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById('filter');

// Form submit event

form.addEventListener("submit", addItem);

// Delete event

itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item

function addItem(e){
    e.preventDefault();

    // Get input value

    let newItem = document.getElementById("item").value;

    // Create new li element

    let li = document.createElement("li");
    
    // Add class

    li.className = "list-group-item";

    // Add text node

    li.appendChild(document.createTextNode(newItem));

    // Get input value2

    let newItem2 = document.getElementById("item1").value;

    // Add text node

    li.appendChild(document.createTextNode(newItem2));

    // Create delete button element

    let deleteBtn = document.createElement("button");

    // Add classes to del button

    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // Append text node

    deleteBtn.appendChild(document.createTextNode("X"));

    // Append button to li

    li.appendChild(deleteBtn);

    // Create edit button element

    let editBtn = document.createElement("button");

    // Add classes to edit button

    editBtn.className = "btn btn-sm float-right editBtn";

    // Append text node

    editBtn.appendChild(document.createTextNode("Edit"));

    // Append button to li

    li.appendChild(editBtn);

    // Append li to item

    itemList.appendChild(li);
}

// Remove item

function removeItem(e){
if(e.target.classList.contains("delete")){
    if(confirm("Are you sure?")){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      let itemName = item.firstChild.textContent;
      let itemNames = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || itemNames.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }