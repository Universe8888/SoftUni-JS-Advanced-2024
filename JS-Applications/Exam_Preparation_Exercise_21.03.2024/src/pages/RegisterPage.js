import { registerUser } from '../api/userService.js';  // Modify this import based on your actual API file paths
import { setSession } from '../utils/sessionStorage.js';  // Modify this import based on your actual utility file paths

// Assuming a utility function to navigate to different routes
import { navigateTo } from '../utils/router.js';

export default class RegisterPage {
  constructor(main) {
    this.main = main;
  }

  register(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeat-password');

    if (password !== repeatPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (email && password) {
      registerUser({ email, password })
        .then(({ accessToken }) => {
          setSession(accessToken);
          navigateTo('/');
        })
        .catch(err => {
          alert('Error registering user. Please try again.');  // Replace with a user-friendly error handling approach
          console.error(err);
        });
    } else {
      alert('All fields are required.');
    }
  }

  render() {
    const registerTemplate = `
      <h2>Register</h2>
      <form id="register-form">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="repeat-password" placeholder="Repeat Password" required />
        <button type="submit">Register</button>
      </form>
    `;

    this.main.innerHTML = registerTemplate;
    document.getElementById('register-form').addEventListener('submit', this.register.bind(this));
  }
}
