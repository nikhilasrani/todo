var removeIcon = '<ion-icon name="trash"></ion-icon>';
var completeIcon = '<ion-icon name="checkmark"></ion-icon>';

//User clicked on the add button
//if there is any text in the item field, add that text to the todo list
document.getElementById("add").addEventListener("click", function() {
  var value = document.getElementById("item").value;
  if (value) {
    addItemToDo(value);
    document.getElementById("item").value = "";
  }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  //check if item is to be added to completed or re-added to todo
  var target =
    id === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItemToDo(text) {
  var list = document.getElementById("todo");
  var item = document.createElement("li");
  item.innerText = text;

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeIcon;

  //Add Click Event for removing items
  remove.addEventListener("click", removeItem);

  var complete = document.createElement("button");
  complete.classList.add("completed");
  complete.innerHTML = completeIcon;

  //Add Click Event for completing items
  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
