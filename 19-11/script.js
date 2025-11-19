const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('.list');
const messagge = document.querySelector('#messagge');
const deleteBtn = document.querySelector('#deleteBtn');
const completed = document.querySelector('#completed');
const notCompleted = document.querySelector('#notCompleted');
const showAll = document.querySelector('#showAll');

function aggiornaMessaggio() {
  const totale = list.querySelectorAll('li').length;
  const completate = list.querySelectorAll('li.completata').length;

  document.querySelector('#buttons').style.display =
    totale === 0 ? 'none' : 'block';

  if (totale === 0) {
    messagge.textContent = 'Nessuna attività inserita';
  } else if (completate === 0) {
    messagge.textContent = '';
  } else {
    messagge.textContent = '';
  }
}



function aggiungiAttivita() {
  const testoVal = input.value.trim();
  if (testoVal === '') return;

  const li = document.createElement('li');

  const checkboxCell = document.createElement('div');
  checkboxCell.className = 'checkbox-cell';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'check-completata';
  checkboxCell.appendChild(checkbox);

  const testoCell = document.createElement('div');
  testoCell.className = 'testo-cell';
  const span = document.createElement('span');
  span.className = 'testo';
  span.textContent = testoVal;
  testoCell.appendChild(span);

  const removeCell = document.createElement('div');
  removeCell.className = 'remove-cell';
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.textContent = 'Rimuovi';
  removeCell.appendChild(removeBtn);

  checkbox.addEventListener('change', function () {
    li.classList.toggle('completata', checkbox.checked);
    aggiornaMessaggio();
  });

  span.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
  });

  removeBtn.addEventListener('click', function () {
    li.remove();
    aggiornaMessaggio();
  });

  li.appendChild(checkboxCell);
  li.appendChild(testoCell);
  li.appendChild(removeCell);

  list.appendChild(li);
  input.value = '';
  aggiornaMessaggio();
}

addBtn.addEventListener('click', aggiungiAttivita);

deleteBtn.addEventListener('click', function () {
  list.innerHTML = '';
  aggiornaMessaggio();
});

completed.addEventListener('click', function () {
  const elementi = list.querySelectorAll('li');
  let completate = 0;

  elementi.forEach(li => {
    if (li.classList.contains('completata')) {
      li.classList.remove('nascosto');
      completate++;
    } else {
      li.classList.add('nascosto');
    }
  });

  if (completate === 0) {
    messagge.textContent = 'Non ci sono attività completate da mostrare';
  } else {
    messagge.textContent = '';
  }
});

notCompleted.addEventListener('click', function () {
  const elementi = list.querySelectorAll('li');
  let nonCompletate = 0;

  elementi.forEach(li => {
    if (!li.classList.contains('completata')) {
      li.classList.remove('nascosto');
      nonCompletate++;
    } else {
      li.classList.add('nascosto');
    }

    if (nonCompletate === 0) { 
        messagge.textContent = 'Hai completato tutte le attività!';
    } else {
        messagge.textContent = '';
    }
  });
});

showAll.addEventListener('click', function () {
  const elementi = list.querySelectorAll('li');

  elementi.forEach(li => {
    li.classList.remove('nascosto');
    li.style.display = 'flex';
  });

  messagge.textContent = '';
  aggiornaMessaggio();
});