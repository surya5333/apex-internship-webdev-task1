function showMessage() {
  alert("Hello! Thanks for clicking.");
}
function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (name && email) {
    alert(`Thank you, ${name}! We'll contact you at ${email}.`);
  } else {
    alert("Please fill out all fields correctly.");
  }
}
