<template>
  <div>
    <h1>Admin Dashboard</h1>
    <AddGameForm />
    <CrewListTable />
    <ScheduleCrewForm />
    <InviteCrewForm />
  </div>
</template>

<script>
import AddGameForm from '../components/AddGameForm.vue'
import CrewListTable from '../components/CrewListTable.vue'
import ScheduleCrewForm from '../components/ScheduleCrewForm.vue'
import InviteCrewForm from '../components/InviteCrewForm.vue'

export default {
  components: {
    AddGameForm,
    CrewListTable,
    ScheduleCrewForm,
    InviteCrewForm
  }
}
</script>

<style>
div {
  padding: 20px;
}
h1 {
  text-align: center;
}
</style>
