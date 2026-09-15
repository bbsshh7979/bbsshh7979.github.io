const form = document.querySelector('#inquiry-form');
let navItem = document.querySelector('.nav-item');
let mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

const serviceArea = '울산 · 양산 · 부산 · 김해';
const pageHeading = document.querySelector('.hero-content h1')?.textContent.trim();
if (pageHeading === '가까운지점') {
  const branchHeroCopy = document.querySelector('.hero-content > span');
  if (branchHeroCopy) branchHeroCopy.textContent = '울산·양산 지점에서 만나보고, 부산·김해까지 방문 시공합니다.';
}
if (pageHeading === '회사소개') {
  const aboutCopy = document.querySelector('.detail-layout .detail-copy');
  if (aboutCopy) aboutCopy.textContent = '방충망완벽주의는 울산과 양산 3개 지점을 기반으로, 울산·양산·부산·김해 지역의 방충망 교체와 제작, 수리와 시공을 진행합니다.';
}
if (document.querySelector('.home-hero')) {
  const homeKicker = document.querySelector('.home-kicker');
  const locationLabel = document.querySelector('.hero-location strong');
  const introCopy = document.querySelector('.intro-copy p:first-child');
  if (homeKicker) homeKicker.textContent = `PERFECT SCREEN · ${serviceArea.toUpperCase()}`;
  if (locationLabel) locationLabel.textContent = serviceArea;
  if (introCopy) introCopy.textContent = '울산과 양산 3개 지점을 기반으로 울산·양산·부산·김해 지역의 방충망 수리와 제작, 시공을 진행합니다.';
}
document.querySelectorAll('.footer-brand small').forEach((copy) => {
  copy.textContent = '울산·양산·부산·김해 시공 가능';
});

const headerInner = document.querySelector('.site-header .header-inner');
if (headerInner && (!headerInner.querySelector('.nav-item') || !headerInner.querySelector('.header-links') || !headerInner.querySelector('.mobile-toggle'))) {
  const nav = headerInner.querySelector('.main-nav');
  const directCallLink = headerInner.querySelector(':scope > .call-link');
  if (nav) {
    nav.innerHTML = '<a href="about.html">회사소개</a><div class="nav-item"><button class="nav-trigger" type="button" aria-expanded="false">주요업무 <span>⌄</span></button><div class="dropdown"><a href="service-mesh.html">미세방충망</a><a href="service-black-steel.html">블랙스텐방충망</a><a href="service-entrance.html">현관방충망</a><a href="service-project.html">프로젝트방충망</a><a href="service-safety.html">안전·방범방충망</a><a href="service-sash.html">샤시 제작 및 수리</a></div></div><a href="works.html">시공사례</a><a href="branches.html">가까운지점</a>';
  }
  if (directCallLink) directCallLink.remove();
  const headerLinks = document.createElement('div');
  headerLinks.className = 'header-links';
  headerLinks.setAttribute('aria-label', 'SNS 및 상담');
  headerLinks.innerHTML = '<a class="sns kakao" href="https://pf.kakao.com/_gxhgsn" target="_blank" rel="noreferrer" aria-label="카카오톡"><svg viewBox="0 0 32 28"><path d="M16 2C8.3 2 2 6.8 2 12.7c0 3.7 2.4 7 6.1 8.9L7 26l5.3-3.2c1.2.3 2.4.5 3.7.5 7.7 0 14-4.8 14-10.7S23.7 2 16 2Z"/><text x="8" y="16.5">TALK</text></svg></a><a class="sns blog" href="https://blog.naver.com/perfect2025" target="_blank" rel="noreferrer" aria-label="네이버 블로그"><svg viewBox="0 0 32 28"><path d="M5 4h22a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"/><text x="8.5" y="18">N</text></svg></a><a class="sns instagram" href="https://www.instagram.com/perfect202524" target="_blank" rel="noreferrer" aria-label="인스타그램"><svg viewBox="0 0 28 28"><rect x="3" y="3" width="22" height="22" rx="6"/><circle cx="14" cy="14" r="5"/><circle cx="20" cy="8" r="1.2"/></svg></a><a class="call-link" href="tel:050714275919">상담전화</a>';
  headerInner.appendChild(headerLinks);
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.className = 'mobile-toggle';
  mobileMenuButton.type = 'button';
  mobileMenuButton.setAttribute('aria-label', '메뉴 열기');
  mobileMenuButton.setAttribute('aria-expanded', 'false');
  mobileMenuButton.textContent = '☰';
  headerInner.appendChild(mobileMenuButton);
}

navItem = document.querySelector('.nav-item');
mobileToggle = document.querySelector('.mobile-toggle');
const trigger = document.querySelector('.nav-trigger');

const showcaseGrid = document.querySelector('.installation-showcase');
if (showcaseGrid) {
  showcaseGrid.classList.add('showcase-grid');
  showcaseGrid.innerHTML = `
    <article class="photo-story photo-story-large">
      <img src="방충망사진/work_6.jpg" alt="방충망 프레임을 제작하는 시공 모습">
      <div><span>FRAME / DETAIL</span><h3>정확한 제작에서<br>시공이 시작됩니다.</h3></div>
    </article>
    <article class="photo-story photo-story-text">
      <span>FIELD / INSTALLATION</span><h3>현장에 맞춘<br>꼼꼼한 시공</h3><p>공간의 구조를 살피고, 오래 사용할 수 있는 방충망을 완성합니다.</p>
    </article>
    <article class="photo-story photo-story-medium">
      <img src="방충망사진/work_10.jpg" alt="창가에서 방충망을 점검하는 시공 모습">
    </article>
    <article class="photo-story photo-story-medium">
      <img src="방충망사진/work_9.jpg" alt="현관에서 방충망 프레임을 설치하는 시공 모습">
    </article>
    <article class="photo-story photo-story-text">
      <span>CARE / FINISH</span><h3>작은 틈까지<br>꼼꼼하게</h3><p>마지막 확인까지 책임지는 방충망완벽주의의 기준입니다.</p>
    </article>
    <article class="photo-story photo-story-wide">
      <img src="방충망사진/work_7.jpg" alt="창가에서 방충망을 시공하는 모습">
      <img src="방충망사진/work_8.jpg" alt="방충망 설치 후 현장을 확인하는 모습">
    </article>`;
}

const serviceRows = document.querySelectorAll('.service-row');
const entrancePhotos = serviceRows[2]?.querySelectorAll('.service-photos img');
if (entrancePhotos?.length === 2) {
  entrancePhotos[0].src = '방충망사진/entrance_1.jpg';
  entrancePhotos[1].src = '방충망사진/entrance_4.jpg';
}

const sashRow = serviceRows[5];
if (sashRow) {
  const emptyPhoto = sashRow.querySelector('.empty-photo');
  if (emptyPhoto) {
    const photoGroup = document.createElement('div');
    photoGroup.className = 'service-photos';
    photoGroup.innerHTML = '<img src="방충망사진/sash_4.jpg" alt="샤시 제작 및 수리 작업"><img src="방충망사진/sash_1.jpg" alt="샤시 제작 및 수리 프레임">';
    emptyPhoto.replaceWith(photoGroup);
  }
}

const caseGrid = document.querySelector('.case-grid');
if (caseGrid) {
  const casePhotos = Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;
    return `방충망사진/case_${number}.jpg`;
  });
  const caseTrack = document.createElement('div');
  const previousButton = document.createElement('button');
  const nextButton = document.createElement('button');
  let currentSlide = 0;
  let autoplay;

  caseGrid.classList.add('case-slider');
  caseGrid.innerHTML = '';
  caseTrack.className = 'case-track';
  previousButton.className = 'case-slider-button previous';
  previousButton.type = 'button';
  previousButton.setAttribute('aria-label', '이전 시공사례');
  previousButton.textContent = '←';
  nextButton.className = 'case-slider-button next';
  nextButton.type = 'button';
  nextButton.setAttribute('aria-label', '다음 시공사례');
  nextButton.textContent = '→';

  casePhotos.forEach((photo, index) => {
    const slide = document.createElement('figure');
    const image = document.createElement('img');
    image.src = photo;
    image.alt = `시공사례 ${index + 1}`;
    image.loading = index < 3 ? 'eager' : 'lazy';
    slide.append(image);
    caseTrack.append(slide);
  });
  caseTrack.append(caseTrack.firstElementChild.cloneNode(true));

  const updateSlider = (step) => {
    currentSlide += step;
    if (currentSlide < 0) currentSlide = casePhotos.length - 1;
    caseTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  caseTrack.addEventListener('transitionend', () => {
    if (currentSlide === casePhotos.length) {
      caseTrack.style.transition = 'none';
      currentSlide = 0;
      caseTrack.style.transform = 'translateX(0)';
      requestAnimationFrame(() => {
        caseTrack.style.transition = '';
      });
    }
  });

  const startAutoplay = () => {
    window.clearInterval(autoplay);
    autoplay = window.setInterval(() => updateSlider(1), 3500);
  };

  previousButton.addEventListener('click', () => {
    updateSlider(-1);
    startAutoplay();
  });
  nextButton.addEventListener('click', () => {
    updateSlider(1);
    startAutoplay();
  });
  caseGrid.addEventListener('mouseenter', () => window.clearInterval(autoplay));
  caseGrid.addEventListener('mouseleave', startAutoplay);
  caseGrid.addEventListener('focusin', () => window.clearInterval(autoplay));
  caseGrid.addEventListener('focusout', startAutoplay);

  caseGrid.append(previousButton, caseTrack, nextButton);
  startAutoplay();
}

const homeWorkGrid = document.querySelector('.work-grid');
if (homeWorkGrid) {
  const workPhotos = [
    ['방충망사진/work_1.jpg', '정확한 실측과 제작'],
    ['방충망사진/work_2.jpg', '창호에 맞춘 꼼꼼한 시공'],
    ['방충망사진/work_3.jpg', '현장에서 완성하는 작업'],
    ['방충망사진/work_4.jpg', '안전하고 깔끔한 설치'],
    ['방충망사진/work_5.jpg', '마지막까지 꼼꼼한 마감']
  ];
  const homeTrack = document.createElement('div');
  const previousButton = document.createElement('button');
  const nextButton = document.createElement('button');
  let currentSlide = 0;
  let autoplay;

  homeWorkGrid.classList.add('home-slider');
  homeWorkGrid.innerHTML = '';
  homeTrack.className = 'home-track';
  previousButton.className = 'home-slider-button previous';
  previousButton.type = 'button';
  previousButton.setAttribute('aria-label', '이전 시공사진');
  previousButton.textContent = '←';
  nextButton.className = 'home-slider-button next';
  nextButton.type = 'button';
  nextButton.setAttribute('aria-label', '다음 시공사진');
  nextButton.textContent = '→';

  workPhotos.forEach(([photo, caption]) => {
    const slide = document.createElement('figure');
    const image = document.createElement('img');
    const label = document.createElement('figcaption');
    image.src = photo;
    image.alt = caption;
    label.textContent = caption;
    slide.append(image, label);
    homeTrack.append(slide);
  });
  homeTrack.append(homeTrack.firstElementChild.cloneNode(true));

  const updateSlider = (step) => {
    currentSlide += step;
    if (currentSlide < 0) currentSlide = workPhotos.length - 1;
    homeTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  };
  homeTrack.addEventListener('transitionend', () => {
    if (currentSlide === workPhotos.length) {
      homeTrack.style.transition = 'none';
      currentSlide = 0;
      homeTrack.style.transform = 'translateX(0)';
      requestAnimationFrame(() => {
        homeTrack.style.transition = '';
      });
    }
  });
  const startAutoplay = () => {
    window.clearInterval(autoplay);
    autoplay = window.setInterval(() => updateSlider(1), 3500);
  };

  previousButton.addEventListener('click', () => {
    updateSlider(-1);
    startAutoplay();
  });
  nextButton.addEventListener('click', () => {
    updateSlider(1);
    startAutoplay();
  });
  homeWorkGrid.addEventListener('mouseenter', () => window.clearInterval(autoplay));
  homeWorkGrid.addEventListener('mouseleave', startAutoplay);
  homeWorkGrid.addEventListener('focusin', () => window.clearInterval(autoplay));
  homeWorkGrid.addEventListener('focusout', startAutoplay);

  homeWorkGrid.append(previousButton, homeTrack, nextButton);
  startAutoplay();
}

const homeLink = mainNav?.querySelector('a[href="index.html"]');
if (mainNav && !homeLink) {
  const link = document.createElement('a');
  link.href = 'index.html';
  link.textContent = '홈';
  mainNav.prepend(link);
}

if (!document.querySelector('footer')) {
  const footerMarkup = `
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="방충망사진/logo.jpg" alt="방충망완벽주의 로고">
          <strong>방충망완벽주의<small>울산·양산·부산·김해 시공 가능</small></strong>
        </div>
        <div class="footer-info">
          <div class="footer-label">사업자정보</div>
          <div>사업자등록번호 240-31-01805<br>울산광역시 울주군 삼남읍 울산역로 274<br><a href="mailto:perfect2025@naver.com">perfect2025@naver.com</a> · 0507-1427-5919</div>
        </div>
        <div class="footer-social">
          <div class="footer-label">바로가기</div>
          <a href="https://pf.kakao.com/_gxhgsn" target="_blank" rel="noreferrer">카카오톡</a>
          <a href="https://blog.naver.com/perfect2025" target="_blank" rel="noreferrer">블로그</a>
          <a href="https://www.instagram.com/perfect202524" target="_blank" rel="noreferrer">인스타그램</a>
        </div>
      </div>
      <p class="copyright">© 2026 방충망완벽주의. All rights reserved.</p>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerMarkup);
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