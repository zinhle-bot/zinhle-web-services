// Misc helpers
const $ = (s, d = document) => d.querySelector(s);
const $$ = (s, d = document) => Array.from(d.querySelectorAll(s));

// Year
$('#year').textContent = new Date().getFullYear();

// Animated headline subtle shimmer
setInterval(() => {
  const el = $('#animHeadline');
  el.style.filter = 'drop-shadow(0 3px 8px rgba(255,255,255,.08))';
  setTimeout(() => el.style.filter = 'none', 600);
}, 2400);

// Performance badge approximation
try {
  $('#perf').textContent = navigator.hardwareConcurrency >= 4 ? '90+' : 'Fast';
} catch (e) {
  $('#perf').textContent = 'Fast';
}

// Portfolio filtering
const grid = $('#portfolioGrid');
$$('.filters .btn').forEach(btn => btn.addEventListener('click', () => {
  const f = btn.dataset.filter;
  $$('.filters .btn').forEach(b => b.setAttribute('aria-selected', 'false'));
  btn.setAttribute('aria-selected', 'true');
  $$('#portfolioGrid .card').forEach(card => {
    card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
  });
}));

// Case Study modal
const caseModal = $('#caseModal');
const afterWrap = $('#afterWrap');
$('#slider').addEventListener('input', e => {
  afterWrap.style.width = e.target.value + '%';
});
$$('#portfolioGrid [data-case]').forEach(btn => btn.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  $('#caseTitle').textContent = card.querySelector('h3').textContent;
  $('#caseMeta').textContent = card.querySelector('.row .badge')?.textContent + ' • ' + card.dataset.category;
  caseModal.classList.add('active');
}));
$('#closeCase').addEventListener('click', () => caseModal.classList.remove('active'));

// Lead magnet from download
const leadModal = $('#leadModal');
$$('#portfolioGrid [data-download]').forEach(btn => btn.addEventListener('click', () => leadModal.classList.add('active')));
$('#closeLead').addEventListener('click', () => leadModal.classList.remove('active'));

// Sticky Quote / Calculator
const calcModal = $('#calcModal');
const openCalc = () => calcModal.classList.add('active');
$('#stickyQuote').addEventListener('click', openCalc);
$('#openCalculator').addEventListener('click', openCalc);
$('#closeCalc').addEventListener('click', () => calcModal.classList.remove('active'));
$('#calcForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const type = fd.get('type');
  const c = fd.get('complexity');
  const pages = +fd.get('pages');
  const ints = +fd.get('integrations');
  const hosting = fd.get('hosting') === 'on';
  const support = fd.get('support') === 'on';
  // Very rough estimation model
  const base = type === 'both' ? 1800 : type === 'dev' ? 1200 : 900;
  const mult = c === 'high' ? 2.2 : c === 'medium' ? 1.5 : 1.0;
  const add = (pages * 120) + (ints * 300) + (hosting ? 400 : 0) + (support ? 300 : 0);
  const cost = Math.round((base + add) * mult);
  const weeks = Math.max(2, Math.ceil((pages / 4) + ints + (c === 'high' ? 3 : (c === 'medium' ? 2 : 1))));
  $('#calcResult').innerHTML = `<strong>Estimated:</strong> $${cost.toLocaleString()} • Timeline: ~${weeks} week(s)`;
});

// Exit-intent popup (lead magnet)
let leadShown = false;
const showLead = () => {
  if (!leadShown) {
    leadShown = true;
    leadModal.classList.add('active');
  }
};
document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0) showLead();
});
// Mobile fallback (after 30s)
setTimeout(showLead, 30000);

// Chat widget after 30s
const chat = $('#chatWidget');
const openChat = () => chat.style.display = 'block';
setTimeout(openChat, 30000);
$('#closeChat').addEventListener('click', () => chat.style.display = 'none');
$('#chatForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const msg = input.value.trim();
  if (!msg) return;
  const bubble = document.createElement('div');
  bubble.textContent = msg;
  bubble.style.margin = '6px 0';
  $('#chatContent').appendChild(bubble);
  input.value = '';
});

// Reduce motion prefers
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable shimmer
  clearInterval();
}
