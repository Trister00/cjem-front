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
              <md-input v-model="name" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input type="email" v-model="email"></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Old Password</label>
              <md-input type="password" v-model="password" autocomplete="new-password"></md-input>
            </md-field>
          </div>-->
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>New Password</label>
              <md-input type="password" v-model="newpassword" autocomplete="new-password"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised" @click="showDialog = true">Editer</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <div class="md-layout-item md-small-size-100 md-size-100">
        <md-field>
          <label>Old Password</label>
          <md-input type="password" v-model="password" autocomplete="new-password"></md-input>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="updateConfirm">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
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
      password: "",
      newpassword: "",
      showDialog: false,
      active: false,
      value: null
    };
  },
  mounted() {
    this.name = JSON.parse(localStorage.getItem("userInfo")).name;
    this.email = JSON.parse(localStorage.getItem("userInfo")).email;
    // this.password = JSON.parse(localStorage.getItem("userInfo")).password;
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
  },
  methods: {
    updateConfirm() {
      if (this.newpasswordpassword === "") {
        let info = {
          name: this.name,
          email: this.email,
          currentPassword: this.password
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
          password: this.newpassword,
          currentPassword: this.password
        };
        axios
          .post("http://localhost:5000/editUser", info)
          .then(res => {
            if (res.status == 200) {
              alert("Update successfully");
              localStorage.removeItem("userInfo");
              this.$router.push("/login");
            }
            if (res.status == 401) {
              alert("Problem occured");
            }
          })
          .catch(err => console.log(err));
      }
      this.showDialog = false;
    }
    // send() {
    //   if (this.newpasswordpassword === "") {
    //     let info = {
    //       name: this.name,
    //       email: this.email,
    //       currentPassword: this.password
    //     };
    //     axios
    //       .post("http://localhost:5000/editUser", info)
    //       .then(res => {
    //         if (res.status == 200) {
    //           alert("Update successfully");
    //           localStorage.removeItem("userInfo");
    //           this.$router.push("/login");
    //         }
    //       })
    //       .catch(err => console.log(err));
    //   } else {
    //     let info = {
    //       name: this.name,
    //       email: this.email,
    //       password: this.newpassword,
    //       currentPassword: this.password
    //     };
    //     axios
    //       .post("http://localhost:5000/editUser", info)
    //       .then(res => {
    //         if (res.status == 200) {
    //           alert("Update successfully");
    //           localStorage.removeItem("userInfo");
    //           this.$router.push("/login");
    //         }
    //       })
    //       .catch(err => console.log(err));
    //   }
    // }
  }
};
</script>
<style></style>
