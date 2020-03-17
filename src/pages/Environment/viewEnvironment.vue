<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="row">
          <div class="col-6">
            <div class="text-h5">Environment</div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-8">
                <div class="q-mr-md">
                  <q-input
                    dense
                    rounded
                    outlined
                    placeholder="Search"
                    v-model="searchText"
                    @input="searchEnvironment(1)"
                  ></q-input>
                </div>
              </div>
              <div class="col-4">
                <div class="q-pt-sm">
                  <q-btn to="/Environment/createEnvironment" color="green" size="sm">create</q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <Table
      :columns="columnsEnvironment"
      :data="dataEnvironment"
      :pagination="paginationData"
      :module="environmentEdit"
      v-on:delete_Refresh="deleteAndRefresh"
    ></Table>
  </q-page>
</template>
<script>
import dataCompany from "../../boot/axios";
import Table from "components/Table/Table";
export default {
  components: {
    Table
  },
  created() {
    this.searchEnvironment(this.page);
    // this.getAllEnvs();
  },
  data() {
    return {
      perPage: 10,
      searchText: "",
      environmentEdit: {
        link: "/Environment/EditEnvironment"
      },
      paginationData: {},
      columnsEnvironment: [
        {
          name: "company",
          required: true,
          label: "company",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "projects",
          align: "left",
          label: "Projects",
          field: "calories",
          sortable: true
        }
      ],
      dataEnvironment: []
      // dataEnvironment: [
      //   {
      //     company: "Wohlig",
      //     Values: "Jagruti,Chintan,Sohan,Raj"
      //   },
      //   {
      //     company: "Janga",
      //     Values: "Jagruti,Chintan,Tushar"
      //   }
      // ]
    };
  },
  methods: {
    searchEnvironment(pageNo) {
      this.projectdata = [];
      this.paginationData.page = pageNo;
      this.paginationData.limit = this.perPage;
      this.paginationData.search = this.searchText;
      console.log("this.projectdata", this.paginationData);
      dataCompany.searchEnvironment(this.paginationData, response => {
        console.log("response", response);
        this.dataEnvironment = response;
        for (var i = 0; i < response.length; i++) {
          this.dataEnvironment[i].company = response[i].company.name;
          this.dataEnvironment[i].projects = response[i].project.title;
        }
      });
    },
    getAllEnvs() {
      dataCompany.getAllEnvs({}, response => {
        console.log("response", response);
        this.dataEnvironment = response;
        for (var i = 0; i < response.length; i++) {
          this.dataEnvironment[i].company = response[i].company.name;
          this.dataEnvironment[i].Values = ``;
          for (var j = 0; j < response[i].Value.length; j++) {
            this.dataEnvironment[i].Values =
              this.dataEnvironment[i].Values +
              ` ` +
              response[i].Value[j].name +
              `:` +
              response[i].Value[j].value +
              ` `;
          }
        }
      });
    },
    deleteAndRefresh(data, callback) {
      dataCompany.deleteEnv(data, response => {
        this.getAllEnvs();
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
input {
  text-align: right;
  height: 32px;
  color: purple;
}
</style>
