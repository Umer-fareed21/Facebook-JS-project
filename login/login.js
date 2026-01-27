
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message,
  });
};

const loginHandler = () => {
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailValue.trim() === "" || passwordValue.trim() === "") {
    return sweety("error", "Something went wrong", "Please Enter all fields!");
  }

  // get previous users from local storage
  let usersFromDB = JSON.parse(localStorage.getItem("users"));
  let isAccountExists = false;

  for (let i = 0; i < usersFromDB.length; i++) {
    let user = usersFromDB[i];

    if (user?.email === emailValue) {
      isAccountExists = true;
      if (user?.password == passwordValue) {
        localStorage.setItem("userData", JSON.stringify(user));
        alert("Login Successfully");
        window.location.href = "/dashboard";
      } else {
        sweety("error", "Login Error", "Please enter correct password!");
      }
      break;
    }
  }

  if (isAccountExists === false) {
    sweety(
      "error",
      "Account not Exists",
      "You don't have an account, Please create your account!",
    );
  }
};

loginBtn.addEventListener("click", loginHandler);
