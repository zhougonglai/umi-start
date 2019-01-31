import 'antd-mobile/dist/antd-mobile.css';

const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = image => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach(img => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach(img => {
    loadImages(img);
  });
}

// if('serviceWorker' in navigator && process.env.NODE_ENV === 'development'){
//   window.onload = () => {
//     navigator.serviceWorker.register('./sw.js')
//     .then(register => {
//       // console.log(register)
//       // register.showNotification('title', {body: 'PWA 环境注册成功'});
//     })
//   }
// }
window.onbeforeinstallprompt = event => {
  event.prompt();
  // beforeinstallprompt Event fired
  event.userChoice.then(choiceResult => {
    console.log(choiceResult.outcome);
    if (choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    } else {
      console.log('User added to home screen');
    }
  });
};
