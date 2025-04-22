const button = document.getElementById('button');
const content = document.getElementById('content');
const bars = document.getElementById('bars');
const menu = document.getElementById('menuBar');
const close = document.getElementById('close');

bars.addEventListener('click', function () {
    menu.style.display = 'block'; // Ovdje prikazujemo meni
  });
close.addEventListener('click', function () {
    menu.style.display = 'none'; 
  });

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

// italic
const italicButton = document.createElement('button');
italicButton.innerHTML = '<i class="fa-solid fa-italic"></i>';
note.appendChild(italicButton);
italicButton.classList.add('italic-button');
italicButton.addEventListener('click', function() {
    text.classList.add('italic');
});

/// justify 
const justifyButton = document.createElement('button');
justifyButton.innerHTML = '<i class="fa-solid fa-align-justify"></i> ';
note.appendChild(justifyButton);
justifyButton.classList.add('justify-button');
justifyButton.addEventListener('click', function() {
    text.classList.add('justify');
});

/// center
const centerButton = document.createElement('button');
centerButton.innerHTML = '<i class="fa-solid fa-align-center"></i>';
note.appendChild(centerButton);
centerButton.classList.add('center-button');
centerButton.addEventListener('click', function() {
    text.classList.add('center');
});

/// remove button
const removeButton = document.createElement('button');
removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
note.appendChild(removeButton);
removeButton.classList.add("remove-button")
removeButton.addEventListener('click', function() {
    note.remove();
});
/// edit button
const editButton = document.createElement('button');
editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
note.appendChild(editButton);
editButton.classList.add('edit-button');
editButton.addEventListener('click', function() {
    const newTitle = prompt('Enter new title');
    title.textContent = newTitle;

    const newText = prompt('Enter new note');
    text.textContent = newText;

    note.appendChild(boldButton);
    note.appendChild(italicButton);
    note.appendChild(justifyButton);
    note.appendChild(centerButton);
    note.appendChild(removeButton);
    note.appendChild(editButton);

});

}
button.addEventListener('click', add);