<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="text-h5">Edit Environment</div>
        <q-space></q-space>
      </template>
    </div>
    <div class="q-pl-md q-pr-md">
      <q-card style="width: auto">
        <div class="q-pa-md" style="max-width:100%">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-select
              filled
              v-model="environmentData.company"
              :options="projectname"
              label="Company Name"
              option-label="name"
              option-Value="name"
              @input="getProject()"
              dense
            />
            <q-select
              filled
              v-model="environmentData.project"
              :options="project"
              label="Project Name"
              option-label="title"
              option-Value="title"
              dense
            />
            <div class="q-mb-md">
              <div class="q-mb-lg">
                <label for="type">Theam:</label>
                <q-btn color="primary" class="float-right" @click="Addbox()">Add</q-btn>
              </div>
              <div class="q-mb-md">
                <div v-for="(singleTheme, index) in environmentData.Value" :key="index">
                  <div class="q-mb-sm q-ml-auto">
                    <q-btn color="red " size="sm" icon="clear" class @click="removeBox(index)" />
                  </div>
                  <div class="row q-mb-md">
                    <div class="row-5 q-mr-sm q-mb-sm">
                      <q-input
                        dense
                        filled
                        type="text"
                        name
                        placeholder="Name"
                        v-model="singleTheme.name"
                      />
                    </div>
                    <div class="row-5 q-mr-sm q-mb-sm">
                      <q-input
                        dense
                        filled
                        type="text"
                        placeholder="Value"
                        name
                        v-model="singleTheme.value"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <q-btn label="Submit" type="submit" color="primary"></q-btn>
              <q-btn
                label="Cancel"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
                @click="goToPage()"
              ></q-btn>
            </div>
          </q-form>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import dataCompany from "../../boot/axios";
export default {
  data() {
    return {
      name: null,
      single: null,
      age: null,
      accept: false,
      Company: { name: "", user: "" },
      projectname: "",
      environmentData: {
        name: "",
        Value: []
      },
      project: ""
    };
  },
  created() {
    this.getAllCompany();
    this.getEnv();
  },
  methods: {
    getProject(_id) {
      dataCompany.getByCompany(_id, res => {
        console.log("getByCompany", res);
        this.project = res;
      });
    },
    goToPage() {
      this.$router.push("/Environment/ViewEnvironment");
    },
    onSubmit() {
      console.log("environment data", this.environmentData);
      this.environmentData.project = this.environmentData.project._id;
      dataCompany.updateEnvironment(this.environmentData, response => {
        console.log("response", response);
      });
      this.$router.push("/Environment/viewEnvironment");
      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: "red-5",
      //     textColor: "white",
      //     icon: "warning",
      //     message: "You need to accept the license and terms first"
      //   });
      // } else {
      //   this.$q.notify({
      //     color: "green-4",
      //     textColor: "white",
      //     icon: "cloud_done",
      //     message: "Submitted"
      //   });
      // }
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
    getAllCompany() {
      dataCompany.getAllList({}, response => {
        console.log("response in all company", response);
        this.projectname = response;
      });
    },

    getEnv() {
      var id = this.$route.query.id;
      dataCompany.getEnv(id, response => {
        console.log("responsegsdgs", response);
        this.getProject(response.company._id);
        this.environmentData = response;
      });
    },
    Addbox() {
      this.environmentData.Value.push({});
    },
    // this for remove input
    removeBox(index) {
      this.environmentData.Value.splice(index, 1);
    }
  }
};
</script>
