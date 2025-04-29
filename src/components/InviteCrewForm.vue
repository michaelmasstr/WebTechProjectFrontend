<template>
  <div class="invite-crew-form-container">
    <h2>Invite New Crew Member</h2>
    <form @submit.prevent="submitInvite" class="invite-crew-form">
      <div class="form-group">
        <label for="inviteEmail">Crew Member Email:</label>
        <input type="email" id="inviteEmail" v-model.trim="inviteEmail" placeholder="Enter email address" required>
      </div>
      <button type="submit">Send Invitation</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InviteCrewForm',
  data() {
    return {
      inviteEmail: ''
    };
  },
  methods: {
    validateEmail(email) {
      if (!email) return false;
      return /.+@.+\..+/.test(email); 
    },
    submitInvite() {
      if (!this.validateEmail(this.inviteEmail)) {
        alert('Please enter a valid email address.');
        return;
      }

      console.log(`Sending invitation to: ${this.inviteEmail}`);
      alert(`Invitation sent to ${this.inviteEmail}!`);

      this.inviteEmail = '';
    }
  }
};
</script>

<style scoped>
.invite-crew-form-container {
  max-width: 400px;
  margin: 40px auto; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.invite-crew-form .form-group {
  margin-bottom: 15px;
}

.invite-crew-form label {
  display: block;
  margin-bottom: 5px;
}

.invite-crew-form input[type="email"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 3px;
}

.invite-crew-form button {
  padding: 10px 15px;
  background-color: #17a2b8; 
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
}

.invite-crew-form button:hover {
  background-color: #138496;
}
</style>
