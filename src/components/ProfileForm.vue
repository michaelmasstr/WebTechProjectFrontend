<template>
  <div class="profile-form-container">
    <h2>Edit Profile</h2>
    <form @submit.prevent="submitForm" class="profile-form">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model.trim="profileData.firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model.trim="profileData.lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="profileData.email" required>
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number (999-999-9999):</label>
        <input type="tel" id="phoneNumber" v-model.trim="profileData.phoneNumber" pattern="\d{3}-\d{3}-\d{4}" placeholder="999-999-9999" required>
      </div>
      <button type="submit">Save Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfileForm',
  data() {
    return {
      profileData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      }
    };
  },
  methods: {
    validatePhoneNumber(phone) {
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      return phoneRegex.test(phone);
    },
    submitForm() {
      if (
        !this.profileData.firstName ||
        !this.profileData.lastName ||
        !this.profileData.email ||
        !this.profileData.phoneNumber ||
        !this.validatePhoneNumber(this.profileData.phoneNumber)
      ) {
        alert('Please fill out all fields correctly.');
        return;
      }

      console.log('Profile Data:', this.profileData);
      alert('Crew Member Created Successfully!');

      this.profileData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      };
    }
  }
};
</script>

<style scoped>
.profile-form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.profile-form .form-group {
  margin-bottom: 15px;
}

.profile-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.profile-form input[type="text"],
.profile-form input[type="email"],
.profile-form input[type="tel"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.profile-form button {
  width: 100%;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.profile-form button:hover {
  background-color: #0056b3;
}
</style> 