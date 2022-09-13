const forgotUn = document.getElementById('fun');
const forgotPw = document.getElementById('fpw');
const submit = document.querySelector('.btn');


submit.addEventListener('click', (e) => {
  e.preventDefault();
    const username = document.getElementById('un').value;
    const password = document.getElementById('pw').value;
    if (username === 'user' && password === '123aBc') {
    alert('Login successful!');
    } else {
    alert('Login unsuccessful! Check "Forgot username" and "Forgot password" for more info.')
    }
});

forgotUn.addEventListener('click', () => {
    alert('Username is "user".');
});
forgotPw.addEventListener('click', () => {
    alert('Password is "123aBc", remember it is case sensitive.');
});