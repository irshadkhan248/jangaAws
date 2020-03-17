<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="row">
          <div class="col-6">
            <div class="text-h5">Company</div>
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
                    @input="searchData(1)"
                  ></q-input>
                </div>
              </div>
              <div class="col-4">
                <div class="q-pt-sm">
                  <q-btn to="/Company/create" color="green" size="sm">create</q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <Table
      :columns="columnsCompany"
      :data="companyData"
      :pagination="paginationData"
      :module="companyedit"
      v-on:delete_Refresh="deleteAndRefresh"
    ></Table>
    <!-- :module="company" -->
  </q-page>
</template>
<script>
import Table from "components/Table/Table";
import dataCompany from "../../boot/axios";
// import axios from "axios";
export default {
  components: {
    Table
  },
  data() {
    return {
      company: "",
      searchText: "",
      companyedit: {
        link: "/Company/EditCompany"
      },
      paginationData: {},
      perPage: 10,
      columnsCompany: [
        {
          name: "name",
          required: true,
          label: "name",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "users1",
          align: "left",
          label: "Users",
          field: "calories",
          sortable: true
        }
      ],
      companyData: []
    };
  },
  methods: {
    // this is use for display all data and search pagination
    searchData(pageNo) {
      this.companyData = [];
      // this.formData.page = pageNo;
      this.paginationData.page = pageNo;
      this.paginationData.limit = this.perPage;
      this.paginationData.search = this.searchText;
      console.log("dgdfgdfgdf", this.paginationData);
      dataCompany.search(this.paginationData, response => {
        console.log("res", response);
        this.companyData = response.result;
        for (let i = 0; i < this.companyData.length; i++) {
          console.log("in first loop", this.companyData[i].users);
          this.companyData[i].users1 = "";
          for (let j = 0; j < this.companyData[i].users.length; j++) {
            this.companyData[i].users1 =
              this.companyData[i].users1 +
              " " +
              this.companyData[i].users[j].username +
              " ";
            console.log("jjjjjj", this.companyData);
          }
        }
      });
    },
    // this is use for deleted data
    deleteAndRefresh(data) {
      dataCompany.delete(data, response => {
        console.log("response", response);
        this.searchData(this.page);
      });
      console.log("data in viewCompany", data);
    }
  },
  created() {
    this.searchData(this.page);
  }
};
</script>
