<template>
  <div>
    <md-table v-model="files" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-danger">Delete</md-button>
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
  // data() {
  //   return {
  //     selected: [],
  //     users: [
  //       {
  //         name: "Dakota Rice",
  //         salary: "$36,738",
  //         country: "Niger",
  //         city: "Oud-Turnhout"
  //       },
  //       {
  //         name: "Minerva Hooper",
  //         salary: "$23,738",
  //         country: "Curaçao",
  //         city: "Sinaai-Waas"
  //       },
  //       {
  //         name: "Sage Rodriguez",
  //         salary: "$56,142",
  //         country: "Netherlands",
  //         city: "Overland Park"
  //       },
  //       {
  //         name: "Philip Chaney",
  //         salary: "$38,735",
  //         country: "Korea, South",
  //         city: "Gloucester"
  //       },
  //       {
  //         name: "Doris Greene",
  //         salary: "$63,542",
  //         country: "Malawi",
  //         city: "Feldkirchen in Kārnten"
  //       },
  //       {
  //         name: "Mason Porter",
  //         salary: "$78,615",
  //         country: "Chile",
  //         city: "Gloucester"
  //       }
  //     ]
  //   };
  //}
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
  }
};
</script>
