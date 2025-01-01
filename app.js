//variables for login/signup
const backdrop = document.getElementById('backdrop');
const loginForm = document.getElementById('login');
const signUpForm = document.getElementById('sign_up');
const showLoginFormButton1 = document.getElementById('login_btn');
const showLoginFormButton2 = document.getElementById('login_nav');
const showLoginFormButton3 = document.getElementById('login_link');
const showSignUpFormButton = document.getElementById('sign_up_link');
const closeLoginFormButton = document.getElementById('close_login');
const closeSignUpFormButton = document.getElementById('close_sign_up');
//variables for changing images
let model = document.getElementById('model');
let models = ['homeimgs/model.jfif', 'homeimgs/model4.jpg', 'homeimgs/model3.jpg'];
let shop = document.getElementById('shop');
let shops = ['homeimgs/shopimg.jpg', 'homeimgs/shopimg2.jpg', 'homeimgs/shopimg3.jpg'];
let custom = document.getElementById('custom');
let customs = ['homeimgs/custom.jpg', 'homeimgs/custom2.jpg', 'homeimgs/custom3.jpg'];
let news = document.getElementById('news');
let newss = ['homeimgs/newsimg.jpg', 'homeimgs/newsimg2.jpg', 'homeimgs/newsimg3.jpg'];
let modelindex = 0;
let shopindex = 0;
let customindex = 0;
let newsindex = 0;
function changeModelImg() {
    modelindex = (modelindex + 1) % models.length; 
    model.src = models[modelindex];  
}
setInterval(changeModelImg, 5000);

function changeShopImg() {
    shopindex = (shopindex + 1) % shops.length;
    shop.src = shops[shopindex];  
}
setInterval(changeShopImg, 5000);

function changeCustomImg() {
    customindex = (customindex + 1) % customs.length;
    custom.src = customs[customindex];  
}
setInterval(changeCustomImg, 5000);

function changeNewsImg() {
    newsindex = (newsindex + 1) % newss.length;
    news.src = newss[newsindex];  
}
setInterval(changeNewsImg, 5000);






function toggleBackdrop(){
    backdrop.classList.toggle('visible');
}
function showLoginForm(){
    toggleBackdrop();
    loginForm.classList.add('visible');
}
function showLoginForm2(){
    closeSignUpForm();
    toggleBackdrop();
    loginForm.classList.add('visible');
}
function showSignUpForm(){
    closeLoginForm();
    toggleBackdrop();
    signUpForm.classList.add('visible');
}
function closeLoginForm(){
    loginForm.classList.remove('visible');
    toggleBackdrop();
}
function closeSignUpForm(){
    signUpForm.classList.remove('visible');
    toggleBackdrop();
}
function backdropClickHandler(){
    closeLoginForm();
}
backdrop.addEventListener('click', backdropClickHandler);
showLoginFormButton1.addEventListener('click', showLoginForm);
showLoginFormButton2.addEventListener('click', showLoginForm);
showLoginFormButton3.addEventListener('click', showLoginForm2);
showSignUpFormButton.addEventListener('click', showSignUpForm);
closeLoginFormButton.addEventListener('click', closeLoginForm);
closeSignUpFormButton.addEventListener('click', closeSignUpForm);