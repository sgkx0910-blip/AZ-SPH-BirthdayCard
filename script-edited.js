const C = window.SITE_CONTENT;

function getPath(obj, path) {
  return path.split('.').reduce((value, key) => value && value[key], obj);
}

document.title = C.pageTitle || document.title;
document.querySelectorAll('[data-content]').forEach(el => {
  const value = getPath(C, el.dataset.content);
  if (value !== undefined) el.textContent = value;
});

if (C.theme) {
  const root = document.documentElement;
  if (C.theme.background) root.style.setProperty('--background', C.theme.background);
  if (C.theme.paper) root.style.setProperty('--paper', C.theme.paper);
  if (C.theme.ink) root.style.setProperty('--ink', C.theme.ink);
  if (C.theme.accent) root.style.setProperty('--accent', C.theme.accent);
}

const cards = document.querySelector('#letter-cards');
(C.letters || []).forEach((letter, index) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.innerHTML = `<small>LETTER ${letter.number || String(index + 1).padStart(2,'0')}<br>FROM</small><strong></strong><small></small><b>OPEN LETTER →</b>`;
  card.querySelector('strong').textContent = letter.from;
  card.querySelectorAll('small')[1].textContent = letter.year || '';
  card.addEventListener('click', () => openLetter(letter));
  cards.appendChild(card);
});

const env = document.querySelector('#envelope');
const btn = document.querySelector('#begin');
function beginSurprise() {
  env.classList.add('open');
  setTimeout(() => document.querySelector('.letters').scrollIntoView({behavior:'smooth'}), 650);
}
env.addEventListener('click', beginSurprise);
btn.addEventListener('click', beginSurprise);

const modal = document.querySelector('#letter-modal');
function openLetter(letter) {
  document.querySelector('#modal-label').textContent = `A LETTER FROM ${letter.from || ''}`;
  document.querySelector('#modal-name').textContent = letter.from || '';
  document.querySelector('#modal-body').textContent = letter.body || '';
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}
function closeLetter() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeLetter));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLetter(); });
