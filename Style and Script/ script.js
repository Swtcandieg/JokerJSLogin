let passwordPairs = {
  sarahford: "password",
  sford85: "password2",
};

function check(form) {
  if (passwordPairs[form.userid.value] === form.pswrd.value) {
    window.open("target.html");
    alert("success");
    return false;
  }
}
