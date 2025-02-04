    //property_insurance.js
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    export function checkLogin(callback) {
        const isLoggedIn = getCookie('isLoggedIn');
        // 获取当前页面的 URL 并存储
        const currentUrl = window.location.pathname
        if (currentUrl !== '/login.html') {
          localStorage.setItem('redirectUrl', currentUrl);
        }
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        } else {
            if(callback && typeof callback === 'function') {
                callback()
            }
        }
    }
    export function getPhoneNumber(){
        return getCookie('phoneNumber')
    }
    
    // 不需要在 DOM 加载完成后执行任何操作