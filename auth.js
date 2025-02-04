// auth.js
export function isLoggedIn() {
  return document.cookie.includes('isLoggedIn=true');
}

export function redirectToLogin(redirectUrl) {
  localStorage.setItem('redirectUrl', redirectUrl);
  window.location.href = '../login.html';
}
export function checkAuth(isSecondaryPage) {
    if(window.location.pathname === '/index.html' || window.location.pathname === '/'){
        return;
    }
      if (!isLoggedIn()) {
      const currentUrl = window.location.href;
        redirectToLogin(currentUrl);
      }
  }