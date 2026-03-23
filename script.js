const passwordInput = document.getElementById('password');
const toggleIcon = document.getElementById('toggleIcon');

toggleIcon.addEventListener('click', function () {
  const isPassword = passwordInput.type === 'password';
  
  if (isPassword) {
    passwordInput.type = 'text';
    this.classList.remove('material-symbols-outlined');
    this.textContent = ''; 
    this.style.backgroundImage = "url('images/eye.svg')";
    this.style.width = "20px";
    this.style.height = "20px";
    this.style.backgroundSize = "contain";
    this.style.backgroundRepeat = "no-repeat";
  } else {
    passwordInput.type = 'password';
    this.classList.add('material-symbols-outlined');
    this.style.backgroundImage = "none";
    this.textContent = 'visibility_off';
    this.style.width = "auto";
    this.style.height = "auto";
  }
});