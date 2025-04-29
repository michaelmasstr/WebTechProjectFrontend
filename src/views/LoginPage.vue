<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    
    <div class="create-account-link">
      <p>Don't have an account? <router-link to="/register">Create one here</router-link></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('Please fill out all fields.');
        return; 
      }

      if (this.email === 'admin@frogcrew.com') {
        this.$router.push('/admin');
      } else {
        this.$router.push('/dashboard');
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  max-width: 300px;
  margin: 50px auto; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center; 
}

.login-form {
  text-align: left; 
  margin-bottom: 20px; 
}

.login-form .form-group {
  margin-bottom: 15px; 
}

.login-form label {
  display: block; 
  margin-bottom: 5px;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  width: 100%; 
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box; 
}

.login-form button {
  padding: 10px 15px;
  background-color: #5cb85c; 
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%; 
}

.login-form button:hover {
  background-color: #4cae4c; 
}

.create-account-link {
  margin-top: 15px; 
  font-size: 0.9em;
}

.create-account-link a {
  color: #007bff; 
  text-decoration: underline;
  cursor: pointer;
}

.create-account-link a:hover {
  color: #0056b3;
}
</style> 