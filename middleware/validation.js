
function validation(username, email, password) {
    let condition;
    // const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
    const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex2 = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    const usersname = username.split("").length;
  
    do {
      if (!username) {
        condition = false;
        console.log("Fill the column username first");
        return;
      }
  
      if (!email) {
        condition = false;
        console.log("Fill the column email first");
        return;
      }
  
      if (!password) {
        condition = false;
        console.log("Fill the column password first");
        return;
      }
  
  
      if (username && email && password) {
  
        if(!email.match(regexMail)){
          condition = false;
          console.log("your email doesn't valid");
          return;
        }
  
  
        if (usersname < 6) {
          condition = false;
          console.log("your username doesn't match the minimum length");
          return;
        }
  
        if (!password.match(regex2)) {
          condition = false;
          console.log("Doesn't match requirement password");
          return;
        }
  
        condition = true;
        return { username, email, password };
      }
    } while (condition);
  }
  
  module.exports = validation;
  