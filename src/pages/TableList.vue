<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="grey">
            <h4 class="title">Liste fichier</h4>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="grey"></simple-table>
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
      .get("http://localhost:5000/sg/list")
      .then(res => (this.files = res))
      .catch(err => console.log(err));
  }
};
</script>
