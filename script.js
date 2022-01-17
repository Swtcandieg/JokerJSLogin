let passwordPairs = {
  UserName: "Admin",
  Password: "password",
};

function submitButton() {
  if (passwordPairs[form.userid.value] === form.pswrd.value) {
    window.open("target.html");
    alert("success");
    return true;
  }
}
