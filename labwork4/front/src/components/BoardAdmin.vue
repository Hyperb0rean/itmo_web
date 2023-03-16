<template>
  <div v-if="isAdmin" class="all">
    <div class="container">
      <div class="alert alert-info admin" role="alert" style="text-align:center">
        Admin panel
      </div>
    </div>
    <div class="table-responsive table-bordered">
      <table class="table-hover" style="width: 100%">
        <thead class="thead-light">
          <tr style="text-align:center">
            <th>User id</th>
            <th>Email</th>
            <th>Username</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user" class="res-table-column;" style="text-align:center">
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td v-if="user.roles[0].name == 'ROLE_USER'"><button @click="deleteUser(user.id)" @mouseup="getAllUsers()" class="btn btn-danger"
                style="width: 100%">Delete person</button></td>
            <td v-else>Can't delete admin</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  <div v-if="!isAdmin">
    <h1>sorry bro this is admin-only club</h1>
  </div>

</template>

<script>
import AdminService from "../services/admin.service";

export default {
  name: "Admin",
  data() {
    return {
      users: []

    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isAdmin() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.getAllUsers();
  },
  methods: {
    deleteUser(userId) {
      AdminService.deleteUser(userId);
      this.getAllUsers();
    },

    getAllUsers() {
      AdminService.getAll().then(
        (response) => {
          this.users = response.data;
        }
      )
        .catch(err => console.error(err))
    }
  }
};
</script>

<style>
td {
  padding: 5px 5px 5px 5px;
}

.admin {
  margin-top: 20px;
}
</style>
