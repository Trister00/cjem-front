<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Lettre adhesion</h4>
              <p class="category">Formulaire</p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Nom Junior Entreprise</label>
                    <md-input v-model="junior_name"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <md-input v-model="date" type="date"></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success" @click="send">Generer le Document</md-button>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      date: new Date().toISOString().slice(0, 10),
      junior_name: ""
    };
  },
  methods: {
    send() {
      let object = {
        date: this.date,
        junior_name: this.junior_name
      };
      axios({
        method: "post",
        url: "http://localhost:5000/sg/lettre",
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
