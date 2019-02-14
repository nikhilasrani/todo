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

function addItemToDo(text) {
  var list = document.getElementById("todo");
  var item = document.createElement("li");
  item.innerText = text;

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeIcon;

  //Add Click Event for removing item

  var complete = document.createElement("button");
  remove.classList.add("complete");
  complete.innerHTML = completeIcon;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
