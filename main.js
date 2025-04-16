const button = document.getElementById('button');
const content = document.getElementById('content');

function add() {
const paragraph = document.createElement('p');
paragraph.textContent = prompt("enter some text");
content.appendChild(paragraph);
paragraph.classList.add("frame");

/// remove button

const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.classList.add("remove-button");
paragraph.appendChild(removeButton);
removeButton.addEventListener("click", function() {

content.removeChild(paragraph);
})

//edit

const editButton = document.createElement('button');
editButton.textContent = 'Edit';
paragraph.appendChild(editButton);
editButton.classList.add("edit-button");

editButton.addEventListener('click', function() {
    const newText = prompt("enter new text");
    paragraph.textContent = newText
    paragraph.appendChild(removeButton);
    paragraph.appendChild(editButton);
});

}

button.addEventListener('click', add);