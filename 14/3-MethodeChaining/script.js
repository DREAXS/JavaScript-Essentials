class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} giriş yaptı`);
    return this;
  }

  logout() {
    console.log(`${this.username} çıkış yaptı`);
    return this;
  }
}

const userOne = new User('Can', 'ccc@mail.com');
const userTwo = new User('Alper', 'xyz@mail.com');
// console.log( userOne.login());
// console.log(userTwo.logout());
userOne.login().logout().logout();
// Zincirleme olarak kullanabilmek için fonksiyonların nesne tipinde geri dönüş tipi sağlamalı
