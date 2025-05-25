const intro = document.getElementById('intro');
intro.classList.add('intro');

const title = document.createElement('h1');
title.textContent = 'My Notes';
title.classList.add('title');

intro.appendChild(title);

// adding a menu
const menu = document.createElement('div');
menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
menu.classList.add('menu');

const options = document.getElementById('options');
menu.addEventListener('click', function () {
  options.style.display = "block";
});

// close menu
const closebtn = document.getElementById('closebtn');
closebtn.addEventListener('click', function () {
  options.style.display = 'none';
})
intro.appendChild(menu);

// user
const user = document.createElement('div');
user.innerHTML = '<i class="fa-solid fa-circle-user"></i>';
user.classList.add('user')
user.addEventListener('click', function () {
  const background = document.createElement('div');
  background.classList.add('background');

  const closeModal = document.createElement('p');
  closeModal.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  background.appendChild(closeModal);
  closeModal.style.position = 'absolute';
  closeModal.style.right = '2%';
  closeModal.style.top = '3%';
  closeModal.style.fontSize = '40px';
  closeModal.style.backgroundColor = 'white';
  closeModal.style.borderRadius = '12px';
  closeModal.style.width = '40px';
  closeModal.style.textAlign = 'center';

  closeModal.addEventListener('click', function () {
    background.remove();
  })


  document.body.appendChild(background);

  // 
  const modal = document.createElement('div');
  modal.classList.add('modal');
  background.appendChild(modal);

  const titleSign = document.createElement('h1');
  titleSign.innerHTML = 'Login';
  modal.appendChild(titleSign);

  // appearance
  modal.style.borderRadius = '12px';

  titleSign.style.textAlign = 'center';
  titleSign.style.fontFamily = 'arial';
  titleSign.style.fontSize = '50px';

  // input
  const email = document.createElement('input');
  email.type = 'text';
  email.placeholder = "Email or username";
  modal.appendChild(email);

  email.style.height = '8%';
  email.style.width = '70%';
  email.style.marginLeft = '15%';
  email.style.padding = '5px';
  email.style.fontSize = '20px';
  email.style.marginTop = '4%';

  const password = document.createElement('input');
  password.type = 'password';
  password.placeholder = 'Password';
  modal.appendChild(password);

  password.style.height = '8%';
  password.style.width = '70%';
  password.style.marginLeft = '15%';
  password.style.padding = '5px';
  password.style.fontSize = '20px';
  password.style.marginTop = '5%';

  const checkDiv = document.createElement('div');
  checkDiv.style.display = 'flex';
  modal.appendChild(checkDiv)

  const check = document.createElement('input');
  check.type = 'checkbox';
  checkDiv.appendChild(check);

  check.style.marginLeft = '15%';
  check.style.marginTop = '-0.5%';

  const show = document.createElement('p');
  show.innerHTML = 'Show password';
  checkDiv.appendChild(show);
  show.style.marginTop = '1%';

  check.addEventListener('click', function () {
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });


  const forogt = document.createElement('a');
  forogt.textContent = 'Forgot my password';
  checkDiv.appendChild(forogt);
  forogt.style.textDecoration = 'underline';
  forogt.style.color = '#6B54FD';
  forogt.style.marginTop = '1%';
  forogt.style.marginLeft = '39%';

  let restModal;

  forogt.addEventListener('click', function () {
    modal.style.display = 'none';


    restModal = document.createElement('div');
    restModal.classList.add('restmodal');
    background.appendChild(restModal);

    const back = document.createElement('p');
    back.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    back.style.fontSize = '30px';
    back.style.margin = '4%';
    restModal.appendChild(back);

    back.addEventListener('click', function () {
      modal.style.display = 'block';
      restModal.remove();
    });

    const restTitle = document.createElement('h1');
    restTitle.innerHTML = 'Reset your password';
    restTitle.style.fontFamily = 'arial';
    restTitle.style.textAlign = 'center';
    restTitle.style.fontSize = '40px';
    restTitle.style.marginTop = '12%';

    restModal.appendChild(restTitle);

    const restEmail = document.createElement('input');
    restEmail.placeholder = 'Enter email';
    restEmail.type = 'email';
    restModal.appendChild(restEmail);

    restEmail.style.height = '10%';
    restEmail.style.width = '70%';
    restEmail.style.marginLeft = '15%';
    restEmail.style.padding = '5px';
    restEmail.style.fontSize = '20px';
    restEmail.style.marginTop = '4%';

    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';

    sendButton.style.height = '9%';
    sendButton.style.width = '70%';
    sendButton.style.marginLeft = '15%';
    sendButton.style.padding = '5px';
    sendButton.style.fontSize = '20px';
    sendButton.style.marginTop = '4%';
    sendButton.style.backgroundColor = 'rgb(4, 186, 26)';
    sendButton.style.border = 'none';

    restModal.append(sendButton);

    sendButton.addEventListener('click', function () {
      const notification = document.createElement('p');
      notification.innerHTML = "Check your email";

      notification.style.textAlign = 'center';
      notification.style.color = 'rgb(4, 186, 26)';
      notification.style.fontSize = '24px';

      restModal.appendChild(notification);

    })


  });

  const inButton = document.createElement('button');
  inButton.textContent = 'Login';
  modal.appendChild(inButton);

  inButton.style.height = '8%';
  inButton.style.width = '70%';
  inButton.style.marginLeft = '15%';
  inButton.style.padding = '5px';
  inButton.style.fontSize = '20px';
  inButton.style.marginTop = '2%';
  inButton.style.backgroundColor = 'rgb(4, 186, 26)';
  inButton.style.border = 'none';

  const signLink = document.createElement('div');
  signLink.style.display = 'flex';
  modal.appendChild(signLink);
  signLink.classList.add('signLink')

  const dont = document.createElement('p');
  dont.textContent = "Don't have an account?";
  signLink.appendChild(dont);
  dont.classList.add('dont');

  const linkss = document.createElement('p');
  linkss.textContent = 'Sign up';
  signLink.appendChild(linkss);
  linkss.classList.add('linkss');

  /// sign up

  let signModal;
  linkss.addEventListener('click', function () {
    modal.style.display = 'none';

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    signModal = document.createElement('div');
    signModal.classList.add('signModal');
    background.appendChild(signModal);

    const signTitle = document.createElement('h1');
    signTitle.innerHTML = 'Sign up';
    signModal.appendChild(signTitle);
    signTitle.classList.add('signTitle');

    const field = document.createElement('div');
    field.classList.add('container');

    signModal.appendChild(field);

    const input1 = document.createElement('input');
    input1.type = 'name';
    input1.placeholder = 'First name';
    input1.classList.add('input1');

    field.appendChild(input1);

    const input2 = document.createElement('input');
    input2.type = 'name';
    input2.placeholder = 'Last name';
    input2.classList.add('input2');

    field.appendChild(input2);

    const signEmail = document.createElement('input');
    signEmail.type = 'email';
    signEmail.placeholder = 'Email';
    signEmail.classList.add('signEmail');

    signModal.appendChild(signEmail);


    ///sign password

    const sp = document.createElement('div');
    sp.classList.add('container');
    signModal.appendChild(sp);

    const signPassword = document.createElement('input');
    signPassword.type = 'password';
    signPassword.placeholder = 'Password';
    signPassword.classList.add('signEmail');

    sp.appendChild(signPassword);

    // add view password
    const view = document.createElement('p');
    view.innerHTML = '<i class="fa-solid fa-eye"></i>';
    view.classList.add('view');
    sp.appendChild(view);

    view.addEventListener('click', function () {
      if (signPassword.type === 'password') {
        signPassword.type = 'text';
      } else {
        signPassword.type = 'password';
      }
    })

    const cp = document.createElement('div');
    cp.classList.add('container');
    signModal.appendChild(cp);

    const confrimPassword = document.createElement('input');
    confrimPassword.type = 'password';
    confrimPassword.placeholder = 'Confrim Password';
    confrimPassword.classList.add('signEmail');

    cp.appendChild(confrimPassword);

    const viewCp = document.createElement('p');
    viewCp.innerHTML = '<i class="fa-solid fa-eye"></i>';
    viewCp.classList.add('view');
    cp.appendChild(viewCp);

    viewCp.addEventListener('click', function () {
      if (confrimPassword.type === 'password') {
        confrimPassword.type = 'text';
      } else {
        confrimPassword.type = 'password';
      }
    })

    const signButton = document.createElement('button');
    signButton.textContent = 'Sign Up';
    signButton.classList.add('signButton');

    signModal.appendChild(signButton);

    signButton.addEventListener('click', function () {
      if (signPassword.value === confrimPassword.value) {
        background.remove();
        console.log('Logged in');
      } else {
        confrimPassword.classList.add('errorInput')
        confrimPassword.value = '';
      }
    });

    const alog = document.createElement('div');
    alog.classList.add('container');
    signModal.appendChild(alog);

    const have = document.createElement('p');
    have.innerHTML = 'Already have an account?';
    alog.appendChild(have);
    have.classList.add('have');

    const lg = document.createElement('p');
    lg.innerHTML = 'Login';
    lg.classList.add('lg');
    alog.appendChild(lg);

    lg.addEventListener('click', function () {
      modal.style.display = 'block';
      signModal.style.display = 'none';
    })

  });

});
intro.appendChild(user);

//     end for users


/////notes
const notesContainer = document.getElementById('notes');
document.body.appendChild(notesContainer);

let notes = [];
let new_id = 0;


const add = document.createElement('button');
add.classList.add('add');
add.innerHTML = '+';

document.body.appendChild(add);

add.addEventListener('click', function () {
  const backModal = document.createElement('div');
  backModal.classList.add('backModal');
  document.body.appendChild(backModal);
  add.remove();

  const addModal = document.createElement('div');
  addModal.classList.add('addModal');

  backModal.appendChild(addModal);

  const titleNote = document.createElement('input');
  titleNote.type = 'title';
  titleNote.placeholder = 'Enter a title';
  titleNote.classList.add('titleNote');

  addModal.appendChild(titleNote);

  const note = document.createElement('textarea');
  note.placeholder = 'Enter a note';
  note.classList.add('notee');

  addModal.appendChild(note);

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('container');

  addModal.appendChild(buttonDiv);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.classList.add('addButton');

  buttonDiv.appendChild(addButton);

  addButton.addEventListener('click', function () {
    backModal.remove();
    document.body.appendChild(add);


    const note1 = document.createElement('div');
    note1.classList.add('note1');
    notesContainer.appendChild(note1);

    const noteTitle = document.createElement('h1');
    noteTitle.classList.add('noteTitle');
    noteTitle.textContent = titleNote.value;
    note1.appendChild(noteTitle);

    const notei = document.createElement('p');
    notei.classList.add('note');
    notei.textContent = note.value;
    note1.appendChild(notei);

    notes.push({
      id: new_id++,
      title: titleNote.value,
      content: note.value,
      date: new Date()
    });

    ////

    const sort = document.createElement('button');
    sort.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>';
    sort.classList.add('sort')
    notesContainer.appendChild(sort);

    sort.addEventListener('click', function () {
      const sortModal = document.createElement('div');
      sortModal.classList.add('sortModal');
      document.body.appendChild(sortModal);

      sortModal.addEventListener('click', function () {
        sortModal.remove()
      })

      /////
      const sort1 = document.createElement('ul');
      sort1.innerHTML = 'Title';
      sortModal.appendChild(sort1);
      sort1.classList.add('sortt');

      ////////////////////////////////////////////////////////////

      sort1.addEventListener('click', function () {
        notesContainer.innerHTML = '';

        notes.sort(function (note1, note2) {
          let title1 = note1.title.toLowerCase();
          let title2 = note2.title.toLowerCase();
          if (title1 < title2) return -1;
          if (title1 > title2) return 1;
          return 0;
        });

        notes.forEach(function (note) {
          let noteDiv = document.createElement('div');
          noteDiv.classList.add('note1');

          let noteTitle = document.createElement('h1');
          noteTitle.classList.add('noteTitle');
          noteTitle.textContent = note.title;

          let noteContent = document.createElement('p');
          noteContent.classList.add('note');
          noteContent.textContent = note.content;

          noteDiv.appendChild(noteTitle);
          noteDiv.appendChild(noteContent);

          notesContainer.appendChild(noteDiv);


          const divv = document.createElement('div');
          divv.classList.add('divv');
          noteDiv.appendChild(divv);

          const removeNote = document.createElement('button');
          removeNote.innerHTML = '<i class="fa-solid fa-trash"></i>';
          removeNote.classList.add('removeNote');

          divv.appendChild(removeNote);

          removeNote.addEventListener('click', function () {
            sort.remove();
            note1.remove();
          });

          // save in console

          const saveButton = document.createElement('button');
          saveButton.innerHTML = '<i class="fa-sharp fa-solid fa-bookmark"></i>';;
          saveButton.classList.add('saveButton');

          divv.appendChild(saveButton);

          const editButton = document.createElement('button');
          editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
          editButton.classList.add('editButton');

          divv.appendChild(editButton);

          const centerNote = document.createElement('button');
          centerNote.innerHTML = '<i class="fa-solid fa-align-center"></i>';
          centerNote.classList.add('centerNote');
          divv.appendChild(centerNote);

          centerNote.addEventListener('click', function () {
            if (notei.style.textAlign === 'center') {
              notei.style.textAlign = 'left';
              centerNote.classList.remove('active');
            } else {
              notei.style.textAlign = 'center';
              centerNote.classList.add('active');
            }
          });

          editButton.addEventListener('click', function () {
            const darkBack = document.createElement('div');
            darkBack.classList.add('darkBack');

            document.body.appendChild(darkBack);

            const editModal = document.createElement('div');
            editModal.classList.add('addModal');

            darkBack.appendChild(editModal);

            const editTitle = document.createElement('input');
            editTitle.type = 'title';
            editTitle.placeholder = 'Edit title';
            editTitle.classList.add('editTitle');

            editModal.appendChild(editTitle);

            const editNote = document.createElement('textarea');
            editNote.placeholder = 'Edit note';
            editNote.classList.add('editNote');

            editModal.appendChild(editNote);

            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('container');

            editModal.appendChild(buttonDiv);

            const edittButton = document.createElement('button');
            edittButton.textContent = 'Edit';
            edittButton.classList.add('edittButton');

            buttonDiv.appendChild(edittButton);

            /// edit function
            edittButton.addEventListener('click', function () {

              if (editTitle.value !== '') {
                noteTitle.textContent = editTitle.value;
              };
              if (editNote.value !== '') {
                notei.textContent = editNote.value;
              }

              darkBack.remove();
            });

          });
        });
      });

      const sort2 = document.createElement('ul');
      sort2.innerHTML = 'Date';
      sortModal.appendChild(sort2);
      sort2.classList.add('sortt');

      sort2.addEventListener('click', function () {

      });

      const sort3 = document.createElement('ul');
      sort3.innerHTML = 'Time';
      sortModal.appendChild(sort3);
      sort3.classList.add('sortt');

      sort3.addEventListener('click', function () {

      });


    });

    /// in note

    const divv = document.createElement('div');
    divv.classList.add('divv');
    note1.appendChild(divv);

    const removeNote = document.createElement('button');
    removeNote.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeNote.classList.add('removeNote');

    divv.appendChild(removeNote);

    removeNote.addEventListener('click', function () {
      sort.remove();
      note1.remove();
    });

    // save in console

    const saveButton = document.createElement('button');
    saveButton.innerHTML = '<i class="fa-sharp fa-solid fa-bookmark"></i>';;
    saveButton.classList.add('saveButton');

    divv.appendChild(saveButton);


    saveButton.addEventListener('click', function () {
      const thisNote = notes.find((n) => n.id == saveButton.dataset.id);
      console.log(titleNote.value);
      console.log(note.value);
    });

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editButton.classList.add('editButton');

    divv.appendChild(editButton);

    const centerNote = document.createElement('button');
    centerNote.innerHTML = '<i class="fa-solid fa-align-center"></i>';
    centerNote.classList.add('centerNote');
    divv.appendChild(centerNote);

    centerNote.addEventListener('click', function () {
      if (notei.style.textAlign === 'center') {
        notei.style.textAlign = 'left';
        centerNote.classList.remove('active');
      } else {
        notei.style.textAlign = 'center';
        centerNote.classList.add('active');
      }
    });

    editButton.addEventListener('click', function () {
      const darkBack = document.createElement('div');
      darkBack.classList.add('darkBack');

      document.body.appendChild(darkBack);

      const editModal = document.createElement('div');
      editModal.classList.add('addModal');

      darkBack.appendChild(editModal);

      const editTitle = document.createElement('input');
      editTitle.type = 'title';
      editTitle.placeholder = 'Edit title';
      editTitle.classList.add('editTitle');

      editModal.appendChild(editTitle);

      const editNote = document.createElement('textarea');
      editNote.placeholder = 'Edit note';
      editNote.classList.add('editNote');

      editModal.appendChild(editNote);

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('container');

      editModal.appendChild(buttonDiv);

      const edittButton = document.createElement('button');
      edittButton.textContent = 'Edit';
      edittButton.classList.add('edittButton');

      buttonDiv.appendChild(edittButton);

      /// edit function
      edittButton.addEventListener('click', function () {

        if (editTitle.value !== '') {
          noteTitle.textContent = editTitle.value;
        };
        if (editNote.value !== '') {
          notei.textContent = editNote.value;
        }

        darkBack.remove();
      });


      const closeButton2 = document.createElement('button');
      closeButton2.textContent = 'Close';
      closeButton2.classList.add('closeButton2');

      buttonDiv.appendChild(closeButton2);

      closeButton2.addEventListener('click', function () {

        darkBack.remove();
        document.body.appendChild(add);
      });

    })

  });

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.classList.add('closeButton');

  buttonDiv.appendChild(closeButton);

  closeButton.addEventListener('click', function () {
    backModal.remove();
    document.body.appendChild(add);
  });


});

