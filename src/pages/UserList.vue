<template>
  <div class="user-list">
    <h1>User List</h1>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
      <el-table-column prop="role" label="Role"></el-table-column>
      <el-table-column label="Actions" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
      ]
    }
  },
  methods: {
    handleEdit(row) {
      console.log('Edit user:', row)
    },
    handleDelete(row) {
      console.log('Delete user:', row)
    }
  }
}
</script>