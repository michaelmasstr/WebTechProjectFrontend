<template>
  <div class="schedule-crew-form-container">
    <h2>Schedule Crew for Game</h2>
    <form @submit.prevent="submitSchedule" class="schedule-crew-form">

      <div class="form-group">
        <label for="gameSelect">Select Game:</label>
        <select id="gameSelect" v-model="selectedGame" required>
          <option disabled value="">Please select a game</option>
          <option v-for="game in availableGames" :key="game.id" :value="game">
            {{ game.date }} - {{ game.opponent }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="crewSelect">Select Crew Member:</label>
        <select id="crewSelect" v-model="selectedCrewMember" required>
          <option disabled value="">Please select a crew member</option>
          <option v-for="member in availableCrew" :key="member.id" :value="member">
            {{ member.firstName }} {{ member.lastName }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="roleInput">Assign Role:</label>
        <input type="text" id="roleInput" v-model.trim="selectedRole" placeholder="Enter role" required>

      </div>

      <button type="submit">Schedule Crew</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'ScheduleCrewForm',
  data() {
    return {
      availableGames: [
        { id: 'g1', date: '2024-08-15', opponent: 'Rival Team Alpha' },
        { id: 'g2', date: '2024-08-22', opponent: 'City Challengers' },
        { id: 'g3', date: '2024-08-10', opponent: 'Local Heroes' },
        { id: 'g4', date: '2024-09-01', opponent: 'State Champions' }
      ],
      availableCrew: [
        { id: 'c1', firstName: 'Alice', lastName: 'Smith' },
        { id: 'c2', firstName: 'Bob', lastName: 'Johnson' },
        { id: 'c3', firstName: 'Charlie', lastName: 'Williams' },
        { id: 'c4', firstName: 'Diana', lastName: 'Brown' }
      ],
      
      selectedGame: null, 
      selectedCrewMember: null, 
      selectedRole: ''
    };
  },
  methods: {
    submitSchedule() {
      if (!this.selectedGame || !this.selectedCrewMember || !this.selectedRole) {
        alert('Please fill out all fields.');
        return; 
      }

      console.log('Scheduling Assignment:');
      console.log(`  Game: ${this.selectedGame.date} vs ${this.selectedGame.opponent} (ID: ${this.selectedGame.id})`);
      console.log(`  Crew Member: ${this.selectedCrewMember.firstName} ${this.selectedCrewMember.lastName} (ID: ${this.selectedCrewMember.id})`);
      console.log(`  Role: ${this.selectedRole}`);

      alert('Crew Scheduled Successfully!');

      this.selectedGame = null;
      this.selectedCrewMember = null;
      this.selectedRole = '';
    }
  }
};
</script>

<style scoped>
.schedule-crew-form-container {
  max-width: 450px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.schedule-crew-form .form-group {
  margin-bottom: 15px;
}

.schedule-crew-form label {
  display: block;
  margin-bottom: 5px;
}

.schedule-crew-form select,
.schedule-crew-form input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.schedule-crew-form button {
  width: 100%;
  padding: 10px 15px;
  background-color: #ffc107;
  color: #212529; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.schedule-crew-form button:hover {
  background-color: #e0a800; 
}
</style> 