document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    alert(`${username}, Login successful`);
  } else {
    alert('Please enter username and password');
  } 
});