<template>
  <div class="container">
    <md-card class="md-card-profile">
      <div class="md-card-avatar">
        <img class="img" :src="cardUserImage" />
      </div>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
        </div>
        <md-button class="md-round md-success" @click="login">Login</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:5000/login", user)
        .then(res => {
          if (res.status == 200) {
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            this.$router.push("/");
          }
        })
        .catch(err => alert("Invalid credintials"));
    }
  }
};
</script>
<style></style>
