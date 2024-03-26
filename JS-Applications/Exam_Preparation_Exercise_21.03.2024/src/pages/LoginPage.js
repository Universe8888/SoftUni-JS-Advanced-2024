import { loginUser } from '../api/userService.js';  // Modify this import based on your actual API file paths
import { setSession } from '../utils/sessionStorage.js';  // Modify this import based on your actual utility file paths

// Assuming a utility function to navigate to different routes
import { navigateTo } from '../utils/router.js';

export default class LoginPage {
  constructor(main) {
    this.main = main;
  }

  login(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      loginUser({ email, password })
        .then(({ accessToken }) => {
          setSession(accessToken);
          navigateTo('/');
        })
        .catch(err => {
          alert('Invalid login attempt. Please try again.');  // Replace with a user-friendly error handling approach
          console.error(err);
        });
    } else {
      alert('Email and Password are required.');
    }
  }

  render() {
    const loginTemplate = `
      <h2>Login</h2>
      <form id="login-form">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    `;

    this.main.innerHTML = loginTemplate;
    document.getElementById('login-form').addEventListener('submit', this.login.bind(this));
  }
}
