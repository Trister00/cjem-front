<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header data-background-color="grey">
              <h4 class="title">Qualite et audit</h4>
              <p class="category">Fiche de processus integration</p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Intitule processus</label>
                    <md-input v-model="processus_integration"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <md-input v-model="date" type="date"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Objectif</label>
                    <md-input v-model="objectif"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Fournisseur</label>
                    <md-input v-model="fournisseur"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Client</label>
                    <md-input v-model="client"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Entrees</label>
                    <md-textarea v-model="ent"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Sorties</label>
                    <md-textarea v-model="sort"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Etude</label>
                    <md-textarea v-model="etu"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Accompagnement</label>
                    <md-textarea v-model="accom"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Ressources</label>
                    <md-textarea v-model="ress"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Performances</label>
                    <md-textarea v-model="perfo"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Documents</label>
                    <md-textarea v-model="doc"></md-textarea>
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
      processus_integration: "",
      objectif: "",
      fournisseur: "",
      client: "",
      ent: "",
      sort: "",
      etu: "",
      accom: "",
      ress: "",
      perfo: "",
      doc: "",
      entrees: [],
      sorties: [],
      etude: [],
      accompagnement: [],
      ressources: [],
      performances: [],
      documents: []
    };
  },
  methods: {
    send() {
      let tmpEntrees = this.ent.split(";");
      tmpEntrees.forEach(item => {
        let t = { text: item };
        this.entrees.push(t);
      });
      let tmpSorties = this.sort.split(";");
      tmpSorties.forEach(item => {
        let t = { text: item };
        this.sorties.push(t);
      });

      let tmpAccompagnement = this.accom.split(";");
      tmpAccompagnement.forEach(item => {
        let t = { text: item };
        this.accompagnement.push(t);
      });

      let tmpRessources = this.ress.split(";");
      tmpRessources.forEach(item => {
        let t = { text: item };
        this.ressources.push(t);
      });

      let tmpPerformances = this.perfo.split(";");
      tmpPerformances.forEach(item => {
        let t = { text: item };
        this.performances.push(t);
      });

      let tmpDocuments = this.doc.split(";");
      tmpDocuments.forEach(item => {
        let t = { text: item };
        this.documents.push(t);
      });

      let object = {
        date: this.date,
        processus_integration: this.processus_integration,
        objectif: this.objectif,
        fournisseur: this.fournisseur,
        client: this.client,
        entrees: this.entrees,
        sorties: this.sorties,
        etude: this.etude,
        accompagnement: this.accompagnement,
        ressources: this.ressources,
        performances: this.performances,
        documents: this.documents
      };
      axios({
        method: "post",
        url: "http://localhost:5000/qa/ficheIntegration",
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

<style>
</style>
