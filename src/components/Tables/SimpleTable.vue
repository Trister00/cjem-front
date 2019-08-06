<template>
  <div>
    <md-table v-model="files" table-header-color="grey">
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
</template>

<script>
import axios from "axios";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      files: []
    };
  },
  created() {
    axios
      .get("http://localhost:5000/sg/list")
      .then(res => {
        this.files = res.data;
        console.log(this.files);
      })
      .catch(err => console.log(err));
  },
  methods: {
    del(t) {
      let tmp = {
        name: t
      };
      axios
        .post("http://localhost:5000/sg/del", tmp)
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
        url: "http://localhost:5000/sg/download",
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
