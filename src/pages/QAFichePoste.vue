<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Qualite et audit</h4>
        <p class="category">Fiche de poste</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Responsabilite</label>
              <md-input v-model="responsabilite"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <md-input v-model="date" type="date"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Description</label>
              <md-input v-model="description" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Missions</label>
              <md-textarea v-model="miss"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Criteres</label>
              <md-textarea v-model="crit"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="send">Generer le Document</md-button>
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
      responsabilite: "",
      date: new Date().toISOString().slice(0, 10),
      description: "",
      miss: "",
      crit: "",
      missions: [],
      criteres: []
    };
  },
  methods: {
    send() {
      let tmpMissions = this.miss.split(".");
      tmpMissions.forEach(item => {
        let t = { text: item };
        this.missions.push(t);
      });
      let tmpCriteres = this.crit.split(".");
      tmpCriteres.forEach(item => {
        let t = { crit: item };
        this.criteres.push(t);
      });

      let object = {
        responsabilite: this.responsabilite,
        date: this.date,
        description: this.description,
        missions: JSON.parse(JSON.stringify(this.missions)),
        criteres: JSON.parse(JSON.stringify(this.criteres))
      };
      axios({
        method: "post",
        url: "http://localhost:5000/qa/fichePoste",
        data: object,
        responseType: "blob" // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.docx");
        document.body.appendChild(link);
        link.click();
      });
    }
  }
};
</script>
<style></style>
