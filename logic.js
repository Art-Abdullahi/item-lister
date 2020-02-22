var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit value
form.addEventListener("submit", addItem);

//Delete event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

//filter Items
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //Get li's
  var items = itemList.getElementsByTagName("li");
  //convert to array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//Add item
function addItem(e) {
  e.preventDefault();
  //get input value
  var newItem = document.getElementById("item").value;
  //create new li element
  var li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create del button
  var deletebtn = document.createElement("button");

  //Add class to button
  deletebtn.className = "btn btn-danger btn-sm float-right delete";
  //append text node
  deletebtn.appendChild(document.createTextNode("X"));
  //Append button to li
  li.appendChild(deletebtn);
  //Append li to list
  itemList.appendChild(li);
}

//Remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
