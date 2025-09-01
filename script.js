let title = document.getElementById('title');
let username = document.getElementById('username');
let password = document.getElementById('password');
let loginButton = document.getElementById('login-button');
let signupLink = document.getElementById('signup');
let registerText = document.getElementById('register-text');

if (signupLink) {
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();

        if (signupLink.textContent === 'Sign Up') {
            // Switch to Sign Up mode
            title.textContent = 'Sign Up';
            username.placeholder = 'Email';
            password.placeholder = 'Create Password';
            loginButton.textContent = 'Sign Up';
            signupLink.textContent = 'Login';
            registerText.innerHTML = 'Already have an account?';
             registerText.appendChild(signupLink);
        
        } else {
            // Switch back to Login mode
            title.textContent = 'Login';
            username.placeholder = 'Username';
            password.placeholder = 'Password';
            loginButton.textContent = 'Login';
            signupLink.textContent = 'Sign Up';
            registerText.textContent = "Don't have an account? ";
            registerText.appendChild(signupLink);
        }
    });
}
