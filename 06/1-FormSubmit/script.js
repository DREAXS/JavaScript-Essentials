const form = document.querySelector(".signupForm");
const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  // Sayfanın yenilenmesini engelleyen method
  e.preventDefault();
  // console.log('Form gönderildi');
  // console.log(username.value);
  console.log(form.username.value);
});
