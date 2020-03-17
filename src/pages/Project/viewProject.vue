<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="row">
          <div class="col-6">
            <div class="text-h5">Project</div>
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
                    @input="searchProject(1)"
                  ></q-input>
                </div>
              </div>
              <div class="col-4">
                <div class="q-pt-sm">
                  <q-btn to="/Project/createProject" color="green" size="sm">create</q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <Table
      :columns="columnsth"
      :data="projectdata"
      v-on:delete_Refresh="deleteAndRefresh"
      :pagination="paginationData"
      :module="projectedit"
    ></Table>
  </q-page>
</template>
<script>
import Table from "components/Table/Table";
import dataCompany from "../../boot/axios";
export default {
  components: {
    Table
  },
  data() {
    return {
      searchText: "",
      paginationData: {},
      perPage: 10,
      columnsth: [
        {
          name: "title",
          required: true,
          label: "title",
          align: "left",
          sortable: true
        },
        {
          name: "company",
          label: "Company",
          align: "left",
          sortable: true
        },
        {
          name: "users1",
          align: "left",
          label: "Users",
          sortable: true
        }
      ],
      projectedit: {
        link: "/Project/EditProject"
      },
      projectdata: []
    };
  },
  created() {
    this.searchProject(this.page);
  },
  methods: {
    searchProject(pageNo) {
      this.projectdata = [];
      this.paginationData.page = pageNo;
      this.paginationData.limit = this.perPage;
      this.paginationData.search = this.searchText;
      console.log("searchProject", this.paginationData);
      dataCompany.searchProject(this.paginationData, response => {
        console.log("project list", response);
        this.projectdata = response.result;
        for (var i = 0; i < response.result.length; i++) {
          this.projectdata[i].title = response.result[i].title;
          this.projectdata[i]._id = response.result[i]._id;
          this.projectdata[i].company = response.result[i].company.name;
          this.projectdata[i].users1 = "";
          response.result[i].users.forEach(x => {
            this.projectdata[i].users1 =
              this.projectdata[i].users1 + "  " + x.username + "  ";
          });
        }
      });
    },
    deleteAndRefresh(data, callback) {
      dataCompany.deleteProject(data, response => {
        this.searchProject();
      });
    }
  }
};
</script>
