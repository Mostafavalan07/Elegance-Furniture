document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Please fill out the fields');
        return;
    }
    
    
    console.log('Login using:', { username, password });
    
    alert('You have been logged in successfully !');
});
