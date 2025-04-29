<template>
  <div class="crew-list-container">
    <h2>Crew List</h2>
    <table class="crew-list-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Role</th>
          <th v-if="showActions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="crewMembers.length === 0">
          <td :colspan="showActions ? 6 : 5">No crew members found.</td>
        </tr>
        <tr v-for="(member, index) in crewMembers" :key="index">
          <td>{{ member.firstName }}</td>
          <td>{{ member.lastName }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.phoneNumber }}</td>
          <td>{{ member.role }}</td>
          <td v-if="showActions">
            <button @click="deleteCrewMember(index)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CrewListTable',
  props: {
    showActions: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      crewMembers: [
        {
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice.s@example.com',
          phoneNumber: '555-123-4567',
          role: 'Captain'
        },
        {
          firstName: 'Bob',
          lastName: 'Johnson',
          email: 'b.johnson@example.com',
          phoneNumber: '555-987-6543',
          role: 'First Mate'
        },
        {
          firstName: 'Charlie',
          lastName: 'Williams',
          email: 'charlie.w@example.com',
          phoneNumber: '555-555-1212',
          role: 'Engineer'
        },
        {
          firstName: 'Diana',
          lastName: 'Brown',
          email: 'diana.b@example.com',
          phoneNumber: '555-321-9876',
          role: 'Deckhand'
        }
      ]
    };
  },
  methods: {
    deleteCrewMember(indexToDelete) {
      const deletedMember = this.crewMembers[indexToDelete];
      const memberName = `${deletedMember.firstName} ${deletedMember.lastName}`;

      this.crewMembers.splice(indexToDelete, 1);

      console.log(`Deleted crew member: ${memberName}`);
      alert('Crew Member Deleted!');
    }
  }
};
</script>

<style scoped>
.crew-list-container {
  margin: 20px;
  font-family: sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 15px;
}

.crew-list-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.crew-list-table th,
.crew-list-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

.crew-list-table thead th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.crew-list-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.crew-list-table tbody tr:hover {
  background-color: #e9e9e9;
}

.delete-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9em;
}

.delete-button:hover {
  background-color: #c82333;
}
</style> 