<template>
  <form>
    <md-card>
      <md-card-header data-background-color="grey">
        <h4 class="title">Creation compte</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="name" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="email" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50">
            <md-field>
              <select v-model="role" required>
                <option disabled value>Choisissez</option>
                <option>presidence et secretariat general</option>
                <option>qualite et audit</option>
                <option>integration et formation</option>
              </select>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-default" @click="send">Ajouter Utilisateur</md-button>
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
      password: "",
      role: ""
    };
  },
  methods: {
    send() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      };
      if (
        this.name !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.role !== ""
      ) {
        axios
          .post("http://localhost:5000/register", newUser)
          .then(res => {
            if (res.status == 200) {
              alert("utilisateur ajoute avec success");
              (this.name = ""),
                (this.email = ""),
                (this.password = ""),
                (this.role = "");
            }
          })
          .catch(err => alert("email already in use"));
      } else {
        alert("Entrer tous les champs");
      }
    }
  }
};
</script>
<style></style>
