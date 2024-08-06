<template>
  <div>
    <h2>User Creation Form (Vue)</h2>
    <form @submit.prevent="createUser">
      <label for="username">Name:</label>
      <input id="username" type="text" v-model="userName" required />
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    createUser() {
      console.log("Creating user:", this.userName);
      // Simulate an API call or any other logic to create user
      // For demonstration, we'll just log the username and reset the input
      alert("User created successfully: " + this.userName);
      this.userName = ""; // Clear input after submission
    },
  },
};
</script>

<style scoped>
/* Optional: Add scoped styles */
form {
  margin-top: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"] {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
