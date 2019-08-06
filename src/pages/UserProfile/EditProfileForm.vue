<template>
  <form>
    <md-card>
      <md-card-header data-background-color="grey">
        <h4 class="title">Editer Profile</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="name"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input type="email" v-model="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Password</label>
              <md-input type="password" v-model="password"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised" @click="send">Editer</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  mounted() {
    this.name = JSON.parse(localStorage.getItem("userInfo")).name;
    this.email = JSON.parse(localStorage.getItem("userInfo")).email;
    this.password = JSON.parse(localStorage.getItem("userInfo")).password;
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
  },
  methods: {
    send() {
      if (this.password === "") {
        let info = {
          name: this.name,
          email: this.email
        };
        axios
          .post("http://localhost:5000/editUser", info)
          .then(res => {
            if (res.status == 200) {
              alert("Update successfully");
              localStorage.removeItem("userInfo");
              this.$router.push("/login");
            }
          })
          .catch(err => console.log(err));
      } else {
        let info = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        axios
          .post("http://localhost:5000/editUser", info)
          .then(res => {
            if (res.status == 200) {
              alert("Update successfully");
              localStorage.removeItem("userInfo");
              this.$router.push("/login");
            }
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>
<style></style>
