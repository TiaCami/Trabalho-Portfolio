
// Toggle menu mobile
const btnMenu = document.querySelector('#btn-menu');
const links = document.querySelector('#nav-links');
if (btnMenu) {
  btnMenu.addEventListener('click', () => {
    links?.classList.toggle('open');
  });
}

// Marca link ativo conforme a URL atual
(function setActiveLink() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
})();

// Validação do formulário de contato
const form = document.querySelector('#contato-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const msg = form.querySelector('#mensagem');
    let ok = true;

    // Limpa estados
    form.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = 'rgba(148,163,184,.25)');

    // Regras
    if (!nome.value.trim()) { nome.style.borderColor = 'var(--danger)'; ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.style.borderColor = 'var(--danger)'; ok = false; }
    if (msg.value.trim().length < 10) { msg.style.borderColor = 'var(--danger)'; ok = false; }

    if (ok) {
      alert('Obrigado! Sua mensagem foi registrada localmente (demonstração visual).');
      form.reset();
    } else {
      alert('Verifique os campos destacados em vermelho.');
    }
  });
}
