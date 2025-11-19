const input = document.querySelector('#inputAttivita');
const aggiungiBtn = document.querySelector('#aggiungiBtn');
const lista = document.querySelector('.lista');
const messaggio = document.querySelector('#messaggio');
const svuotaBtn = document.querySelector('#svuotaBtn');
const filtraCompletate = document.querySelector('#filtraCompletate');
const mostraTutte = document.querySelector('#mostraTutte');

function aggiornaMessaggio() {
  const totale = lista.querySelectorAll('li').length;
  messaggio.textContent = totale === 0 ? 'Nessuna attività inserita' : '';
}

function aggiungiAttivita() {
  const testoVal = input.value.trim();
  if (testoVal === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'check-completata';

  const span = document.createElement('span');
  span.className = 'testo';
  span.textContent = testoVal;

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.textContent = 'Rimuovi';

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      li.classList.add('completata');
    } else {
      li.classList.remove('completata');
    }
  });

  span.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
  });

  li.addEventListener('dblclick', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      li.classList.toggle('evidenziata');
    }
  });

 

  li.appendChild(checkbox);
  li.appendChild(span);

  lista.appendChild(li);

  input.value = '';
  aggiornaMessaggio();
}

aggiungiBtn.addEventListener('click', aggiungiAttivita);

svuotaBtn.addEventListener('click', function () {
  lista.innerHTML = '';
  aggiornaMessaggio();
});

filtraCompletate.addEventListener('click', function () {
  const elementi = lista.querySelectorAll('li');
  elementi.forEach(li => {
    if (!li.classList.contains('completata')) {
      li.classList.add('nascosto');
    } else {
      li.classList.remove('nascosto');
    }
  });
});

mostraTutte.addEventListener('click', function () {
  const elementi = lista.querySelectorAll('li');
  elementi.forEach(li => li.classList.remove('nascosto'));
});
