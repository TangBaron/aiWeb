// 导航栏交互
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 初始化Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

// 二维码hover效果
const wechatQR = document.querySelector('.wechat img');
wechatQR.addEventListener('mouseenter', () => {
  wechatQR.style.transform = 'scale(1.1)';
});
wechatQR.addEventListener('mouseleave', () => {
  wechatQR.style.transform = 'scale(1)';
});

// 页面滚动动画
const aboutSection = document.querySelector('.about');
const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(aboutSection);

// 关闭移动端导航栏当点击链接
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});
