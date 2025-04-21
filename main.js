const button = document.getElementById('button');
const content = document.getElementById('content');

function add() {
/// card
const note = document.createElement('div');
note.classList.add('frame');
content.appendChild(note);

/// title
const title = document.createElement('h1');
title.textContent = prompt('enter a title');
note.appendChild(title);
title.classList.add('title')

/// text
const text = document.createElement('p');
text.textContent = prompt('Enter a note');
note.appendChild(text);
text.classList.add('txt');

/// bold
const boldButton = document.createElement('button');
boldButton.textContent = 'B';
note.appendChild(boldButton);
boldButton.classList.add('bold-button');
boldButton.addEventListener('click', function() {
    text.classList.add('bold');
});


/// remove button
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
note.appendChild(removeButton);
removeButton.classList.add("remove-button")
removeButton.addEventListener('click', function() {
    note.remove();
});
/// edit button
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
note.appendChild(editButton);
editButton.classList.add('edit-button');
editButton.addEventListener('click', function() {
    const newTitle = prompt('Enter new title');
    title.textContent = newTitle;

    const newText = prompt('Enter new note');
    text.textContent = newText;

    note.appendChild(removeButton);
    note.appendChild(editButton);

});

}
button.addEventListener('click', add);