<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header data-background-color="grey">
              <h4 class="title">Lettre Approbation</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Destinataire</label>
                    <md-input v-model="destinataire"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <md-input v-model="date" type="date"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>nom Junior</label>
                    <md-input v-model="nom_junior"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Nom President</label>
                    <md-input v-model="nom_president"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Nom Responsable</label>
                    <md-input v-model="nom_responsable"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>Articles</label>
                    <md-textarea v-model="articlesModel"></md-textarea>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-default" @click="send">Generer le Document</md-button>
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
      destinataire: "",
      nom_president: "",
      nom_responsable: "",
      nom_junior: "",
      articles: [],
      article: [],
      articlesModel: "",
      articleModel: ""
    };
  },
  methods: {
    send() {
      let tmpArticles = this.articlesModel.split(";");
      let tmpItem = [];
      // console.log(tmpArticles);
      tmpArticles.forEach(item => {
        let tmp = item.split(":");
        tmpItem.push(tmp);
        // console.log(tmpItem);
        // tmpItem.forEach(t => {
        //   let f = t.split("/");
        //   // console.log(f);
        // });
        // let t = { text: item };
        // this.entrees.push(t);
      });
      tmpItem.forEach(item => {
        let a = item[1].split("/");
        let tmpA = [];
        a.forEach(item => {
          let t = { text: item };
          tmpA.push(t);
        });
        let o = {
          nom: item[0],
          article: tmpA
        };
        this.articles.push(o);
      });
      console.log(JSON.parse(JSON.stringify(this.articles)));

      let object = {
        date: this.date,
        destinataire: this.destinataire,
        nom_president: this.nom_president,
        nom_junior: this.nom_junior,
        nom_responsable: this.nom_responsable,
        articles: this.articles
      };
      axios({
        method: "post",
        url: "http://localhost:5000/if/lettre_approbation",
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
