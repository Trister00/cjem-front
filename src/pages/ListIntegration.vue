<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="grey">
            <h4 class="title">Liste fichier</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="files" table-header-color="green">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="Action">
                    <md-button class="md-danger" @click="del(item.name)">Delete</md-button>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <md-button class="md-info" @click="down(item.name)">Download</md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";
import axios from "axios";

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  data() {
    return {
      files: []
    };
  },
  created() {
    axios
      .get("http://localhost:5000/if/list")
      .then(res => (this.files = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    del(t) {
      let tmp = {
        name: t
      };
      axios
        .post("http://localhost:5000/if/del", tmp)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.$router.go();
    },
    down(t) {
      let tmp = {
        name: t
      };
      axios({
        method: "post",
        url: "http://localhost:5000/if/download",
        data: tmp,
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
