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

class Admin extends User {
  deleteUser(userArrived) {
    users = users.filter((user) => {
      return user.username !== userArrived.username;
    });
  }
}

const userOne = new User("can", "ccc@mail.com");
const userTwo = new User("alper", "xyz@mail.com");
const userThree = new Admin("osman", "xyzt@mail.com");

let users = [userOne, userTwo, userThree];
userThree.deleteUser(userOne);

console.log(userOne, userTwo, userThree);
console.log(users);
