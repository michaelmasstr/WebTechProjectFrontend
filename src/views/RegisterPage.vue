<template>
  <div class="register-page">
    <h1>Create Account</h1>
    <form @submit.prevent="register" class="register-form">

      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model.trim="formData.firstName" required>
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model.trim="formData.lastName" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="formData.email" required>
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number (999-999-9999):</label>
        <input type="tel" id="phoneNumber" v-model.trim="formData.phoneNumber" pattern="\d{3}-\d{3}-\d{4}" placeholder="999-999-9999" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="formData.confirmPassword" required>
      </div>

      <button type="submit">Create Account</button>
    </form>
    
    <div class="login-link">
      <p>Already have an account? <router-link to="/">Log in here</router-link></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    validatePhoneNumber(phone) {
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      return phoneRegex.test(phone);
    },
    register() {
      if (
        !this.formData.firstName ||
        !this.formData.lastName ||
        !this.formData.email ||
        !this.formData.phoneNumber ||
        !this.formData.password ||
        !this.formData.confirmPassword
      ) {
        alert('Please fill out all fields.');
        return;
      }

      if (!this.validatePhoneNumber(this.formData.phoneNumber)) {
        alert('Invalid phone number format. Please use 999-999-9999.');
        return;
      }

      if (this.formData.password !== this.formData.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      console.log('Registration Data:');
      console.log(`  First Name: ${this.formData.firstName}`);
      console.log(`  Last Name: ${this.formData.lastName}`);
      console.log(`  Email: ${this.formData.email}`);
      console.log(`  Phone: ${this.formData.phoneNumber}`);

      alert('Account created successfully!');

      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

.register-page {
  max-width: 400px; 
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.register-form {
  text-align: left;
  margin-bottom: 20px;
}

.register-form .form-group {
  margin-bottom: 15px;
}

.register-form label {
  display: block;
  margin-bottom: 5px;
}

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="tel"],
.register-form input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 3px;
}

.register-form button {
  padding: 10px 15px;
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
}

.register-form button:hover {
  background-color: #0056b3;
}

.login-link {
  margin-top: 15px;
  font-size: 0.9em;
}

.login-link a {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.login-link a:hover {
  color: #0056b3;
}
</style> 