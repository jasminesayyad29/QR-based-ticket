const signUpBtnLink = document.querySelector(".signUpBtn-link");
const signInBtnLink = document.querySelector(".signInBtn-link");
const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
const togglepassword = document.querySelector('#togglepassword');
const password = document.querySelector('#password');

togglepassword.addEventListener('click', function (e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  this.querySelector('i').classList.toggle('fa-eye');
})