const userOne = {
  username: "Alper",
  email: "xyz@mail.com",
  login() {
    console.log(`${this.username} giriş yaptı`);
  },
  logout() {
    console.log(`${this.username} çıkış yaptı`);
  },
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
  username: "Can",
  email: "can_boz@mail.com",
  login() {
    console.log(`${this.username} giriş yaptı`);
  },
  logout() {
    console.log(`${this.username} çıkış yaptı`);
  },
};

console.log(userTwo.email, userTwo.username);
userTwo.login();
