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

let notes = [];

let new_id = 0;

function add() {
  /// window
  const window = document.createElement('div');
  window.classList.add('window');
  document.body.appendChild(window);

  const enter = document.createElement('div');
  enter.classList.add('enter');
  window.appendChild(enter);

  /// add input
  const enterTitle = document.createElement('input');
  enterTitle.type = 'text';
  enterTitle.placeholder = 'Enter a title';
  enter.appendChild(enterTitle)
  enterTitle.classList.add('enterTitle')

  const enterNote = document.createElement('input');
  enterNote.type = 'text';
  enterNote.placeholder = 'Enter a note';
  enter.appendChild(enterNote);
  enterNote.classList.add('enterNote');

  /// add button
  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.classList.add('addButton');
  enter.appendChild(addButton);

  /// close button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.classList.add('closeButton');
  enter.appendChild(closeButton);
  closeButton.addEventListener('click', function () {
    document.body.removeChild(window);
  });

  addButton.addEventListener('click', function () {
    const titleValue = enterTitle.value;
    const noteValue = enterNote.value;

notes.push({
      id: ++new_id,
      title: titleValue,
      note: noteValue,
    });

    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<h3>${titleValue}</h3><p>${noteValue}</p>`;
    content.appendChild(note);
    document.body.removeChild(window);

    /// remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    removeButton.classList.add('remove-button')
    note.appendChild(removeButton);
    removeButton.addEventListener('click', function() {
      note.remove();
    });

    // edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-pen"></i>';
    note.appendChild(editButton);
    editButton.classList.add('edit-button");
    
    editButton.dataset.id = new_id; // <------------------------------------------------------

    editButton.addEventListener("click", function () {
let thisNote = notes.find((n) => n.id == editButton.dataset.id);
      if (note) {
        console.log(thisNote.title);
        console.log(thisNote.note);
      }
    });
  
  const p = note.querySelector('p');
///bold
  const boldButton = document.createElement('button');
  boldButton.innerHTML = '<i class="fa-sharp fa-solid fa-bold"></i>';
  note.appendChild(boldButton);
  boldButton.classList.add('b-button');

boldButton.addEventListener('click', function() {
  p.classList.toggle('bold-button');
});

///italic
const italicButton = document.createElement('button');
italicButton.innerHTML = '<i class="fa-sharp fa-solid fa-italic"></i>';
note.appendChild(italicButton);
italicButton.classList.add('i-button');

italicButton.addEventListener('click', function() {
    p.classList.toggle('italic-button');
})

/// justify

const justifyButton = document.createElement('button');
justifyButton.innerHTML = '<i class="fa-solid fa-align-justify"></i>';
note.appendChild(justifyButton);
justifyButton.classList.add('j-button');

justifyButton.addEventListener('click', function() {
    p.classList.toggle('justify-button');
})
  
});

}

button.addEventListener('click', add);
