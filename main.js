const button = document.getElementById('button');
const content = document.getElementById('content');

function add() {
    const paragraph = document.createElement('p');
    paragraph.textContent = prompt('Enter some text:');
    paragraph.classList.add("frame");
    content.appendChild(paragraph);
//// remove notes
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add("remove-button");

    removeButton.addEventListener('click', function() {
        content.removeChild(paragraph);
    });
    
    paragraph.appendChild(removeButton);

}

button.addEventListener('click', add);