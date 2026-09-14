const form = document.querySelector('#inquiry-form');
const trigger = document.querySelector('.nav-trigger');
const navItem = document.querySelector('.nav-item');
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

const homeLink = mainNav?.querySelector('a[href="index.html"]');
if (mainNav && !homeLink) {
  const link = document.createElement('a');
  link.href = 'index.html';
  link.textContent = '홈';
  mainNav.prepend(link);
}

trigger?.addEventListener('click', () => {
  const open = navItem.classList.toggle('open');
  trigger.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', (event) => {
  if (navItem && !navItem.contains(event.target)) {
    navItem.classList.remove('open');
    trigger?.setAttribute('aria-expanded', 'false');
  }
});

mobileToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('mobile-open');
  mobileToggle.setAttribute('aria-expanded', String(open));
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name') || '고객';
  const status = form.querySelector('.form-status');
  status.textContent = `${name}님, 문의를 확인했습니다. 빠르게 연락드리겠습니다.`;
  form.reset();
});