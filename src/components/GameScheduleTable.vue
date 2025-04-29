<template>
  <div class="schedule-table-container">
    <h2>Game Schedule</h2>
    <table class="schedule-table">
      <thead>
        <tr>
          <th @click="sortByDate" class="sortable-header">Date <span v-if="sortKey === 'date'">{{ sortAsc ? '▲' : '▼' }}</span></th>
          <th>Time</th>
          <th>Opponent</th>
          <th>Venue</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="sortedGames.length === 0">
          <td colspan="5">No games scheduled.</td>
        </tr>
        <tr v-for="(game, index) in sortedGames" :key="index">
          <td>{{ formatDate(game.date) }}</td>
          <td>{{ game.time }}</td>
          <td>{{ game.opponent }}</td>
          <td>{{ game.venue }}</td>
          <td>{{ game.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GameScheduleTable',
  data() {
    return {
      games: [
        {
          date: '2024-08-15',
          time: '19:00',
          opponent: 'Rival Team Alpha',
          venue: 'Home Stadium',
          role: 'Starting Player'
        },
        {
          date: '2024-08-22',
          time: '20:30',
          opponent: 'City Challengers',
          venue: 'Away Arena',
          role: 'Bench'
        },
        {
          date: '2024-08-10',
          time: '18:00',
          opponent: 'Local Heroes',
          venue: 'Community Field',
          role: 'Starting Player'
        },
        {
          date: '2024-09-01',
          time: '14:00',
          opponent: 'State Champions',
          venue: 'Championship Park',
          role: 'Captain'
        }
      ],
      sortKey: 'date',
      sortAsc: true
    };
  },
  computed: {
    sortedGames() {
      let sorted = [...this.games];
      if (this.sortKey === 'date') {
        sorted.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          if (dateA < dateB) return this.sortAsc ? -1 : 1;
          if (dateA > dateB) return this.sortAsc ? 1 : -1;
          return 0;
        });
      }
      return sorted;
    }
  },
  methods: {
    sortByDate() {
      if (this.sortKey === 'date') {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortKey = 'date';
        this.sortAsc = true;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const [year, month, day] = dateString.split('-').map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return date.toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.schedule-table-container {
  margin: 20px;
  font-family: sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 15px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

.schedule-table thead th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.schedule-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.schedule-table tbody tr:hover {
  background-color: #e9e9e9;
}

.sortable-header {
  cursor: pointer;
  user-select: none;
}

.sortable-header span {
  font-size: 0.8em;
  margin-left: 5px;
}
</style> 