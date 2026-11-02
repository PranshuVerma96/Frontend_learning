// some promise code
//fetch('hhtp://google.com').then().catch().finally()
const promiseOne = new Promise(function (resolve, reject) {
  // do an asyn task
  //DB calls, crytography , network realated

  setTimeout(function () {
    console.log("Asyn task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consued");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("asyn 2 task is completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "pranshu", email: "pranshuverma68@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFout = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hiesth", password: 123 });
    } else {
      reject("Error :soemething went worng");
    }
  }, 1000);
});

promiseFout
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the Promise is either resolved either rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: " pranshu ", password: 90 });
    } else {
      reject("Error : js went worng");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAlluser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1/');
//     // console.log(response);

//     const data = await response.json();  // must await here
//     console.log(data);
//   } catch (error) {
//     console.log('E:', error);
//   }
// }
// getAlluser();

fetch("https://jsonplaceholder.typicode.com/users/1/")
  .then((response) => {
    return response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((error) => console.log(error));
