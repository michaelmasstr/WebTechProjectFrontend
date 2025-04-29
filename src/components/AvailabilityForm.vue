<template>
  <div class="availability-form-container">
    <h2>Select Availability</h2>
    <form @submit.prevent="submitAvailability" class="availability-form">
      <div class="form-group">
        <label for="availableDate">Date:</label>
        <input type="date" id="availableDate" v-model="selectedDate" required>
      </div>
      <div class="form-group">
        <label for="availableTime">Time:</label>
        <input type="time" id="availableTime" v-model="selectedTime" required>
      </div>
      <button type="submit">Submit Availability</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AvailabilityForm',
  data() {
    return {
      selectedDate: '', // Will hold YYYY-MM-DD
      selectedTime: ''  // Will hold HH:MM
    };
  },
  methods: {
    submitAvailability() {
      if (!this.selectedDate || !this.selectedTime) {
        alert('Please fill out all fields.');
        return;
      }

      console.log('Selected Date:', this.selectedDate);
      console.log('Selected Time:', this.selectedTime);

      alert("Availability Submitted Successfully!");

      this.selectedDate = '';
      this.selectedTime = '';
    }
  }
};
</script>

<style scoped>
.availability-form-container {
  max-width: 350px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 15px;
  color: #333;
}

.availability-form .form-group {
  margin-bottom: 15px;
}

.availability-form label {
  display: block;
  margin-bottom: 5px;
}

.availability-form input[type="date"],
.availability-form input[type="time"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; 
}

.availability-form button {
  width: 100%;
  padding: 10px;
  background-color: #28a745; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.availability-form button:hover {
  background-color: #218838; 
}
</style> 