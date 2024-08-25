class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    return `${this.username} giriş yaptı`;
  }

  logout() {
    return `${this.username} çıkış yaptı`;
  }
}

const userOne = new User("Can", "ccc@mail.com");
const userTwo = new User("Alper", "xyz@mail.com");
console.log(userOne.login());
console.log(userTwo.logout());
