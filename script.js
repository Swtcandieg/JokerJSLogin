let $btn = document.getElementById("submit");
let $form = document.getElementById("form");

function signIn() {
  if ($form.checkValidity()) {
    $btn.classList.add("pending");
    window.setTimeout(function () {
      $btn.classList.add("granted");
    }, 1500);
  }
}

$btn.addEventListener("click", signIn);
