<template>
  <div class="add-game-form-container">
    <h2>Add New Game</h2>
    <form @submit.prevent="submitGame" class="add-game-form">
      <div class="form-group">
        <label for="gameDate">Game Date:</label>
        <input type="date" id="gameDate" v-model="gameData.date" required>
      </div>
      <div class="form-group">
        <label for="gameTime">Game Time:</label>
        <input type="time" id="gameTime" v-model="gameData.time" required>
      </div>
      <div class="form-group">
        <label for="opponent">Opponent:</label>
        <input type="text" id="opponent" v-model.trim="gameData.opponent" required>
      </div>
      <div class="form-group">
        <label for="venue">Venue:</label>
        <input type="text" id="venue" v-model.trim="gameData.venue" required>
      </div>
      <button type="submit">Add Game</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddGameForm',
  data() {
    return {
      gameData: {
        date: '',       // YYYY-MM-DD
        time: '',       // HH:MM
        opponent: '',
        venue: ''
      }
    };
  },
  methods: {
    submitGame() {
      // Basic validation check
      if (!this.gameData.date || !this.gameData.time || !this.gameData.opponent || !this.gameData.venue) {
        alert('Please fill out all fields.');
        return; 
      }

      console.log('New Game Data Submitted:', this.gameData);

      alert('New game logged to console!');
      this.gameData = {
        date: '',
        time: '',
        opponent: '',
        venue: ''
      };
    }
  }
};
</script>

<style scoped>
.add-game-form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 15px;
}

.add-game-form .form-group {
  margin-bottom: 15px;
}

.add-game-form label {
  display: block;
  margin-bottom: 5px;
}

.add-game-form input[type="date"],
.add-game-form input[type="time"],
.add-game-form input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.add-game-form button {
  width: 100%;
  padding: 10px;
  background-color: #17a2b8; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-game-form button:hover {
  background-color: #138496; 
}
</style> 