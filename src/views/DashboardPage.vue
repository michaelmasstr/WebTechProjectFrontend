<script>
import ProfileForm from '../components/ProfileForm.vue'
import AvailabilityForm from '../components/AvailabilityForm.vue'
import GameScheduleTable from '../components/GameScheduleTable.vue'
import CrewListTable from '../components/CrewListTable.vue'

export default {
  name: 'DashboardPage',
  components: {
    ProfileForm,
    AvailabilityForm,
    GameScheduleTable,
    CrewListTable
  },
  data() {
    return {
      userProfile: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890'
      },
      isProfileVisible: false 
    };
  },
  methods: {
    toggleProfile() {
      this.isProfileVisible = !this.isProfileVisible;
    }
  }
}
</script>

<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <ProfileForm />
    <AvailabilityForm />
    <GameScheduleTable />
    <CrewListTable :show-actions="false" />

    <div class="profile-section">
      <button @click="toggleProfile" class="profile-toggle-button">
        {{ isProfileVisible ? 'Hide My Profile' : 'View My Profile' }}
      </button>

      <div v-if="isProfileVisible" class="profile-info">
        <h3>My Profile Information</h3>
        <p><strong>First Name:</strong> {{ userProfile.firstName }}</p>
        <p><strong>Last Name:</strong> {{ userProfile.lastName }}</p>
        <p><strong>Email:</strong> {{ userProfile.email }}</p>
        <p><strong>Phone Number:</strong> {{ userProfile.phoneNumber }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.profile-section {
  margin-top: 40px; 
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
}

.profile-toggle-button {
  padding: 10px 15px;
  background-color: #6c757d; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px; 
}

.profile-toggle-button:hover {
  background-color: #5a6268;
}

.profile-info {
  margin-top: 15px;
  padding: 15px;
  border: 1px dashed #ccc;
  background-color: #fff;
}

.profile-info h3 {
  margin-bottom: 10px;
}

.profile-info p {
  margin-bottom: 5px;
}
</style>
