<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="text-h5">Edit Project</div>
        <q-space></q-space>
      </template>
    </div>
    <div class="q-pl-md q-pr-md">
      <q-card style="width: auto">
        <div class="q-pa-md" style="max-width:100%">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              dense
              filled
              v-model="projectCompany.title"
              label="Project Name *"
              hint="Your Project title."
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            ></q-input>
            <q-select
              filled
              v-model="projectCompany.company"
              :options="companyname"
              label="Company Name"
              option-label="name"
              option-value="name"
              @input="onChange()"
              dense
            />
            <q-select
              filled
              v-model="projectCompany.users"
              multiple
              :options="users"
              label="Users"
              option-label="username"
              option-value="username"
              dense
            />
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
      selectedValue: "",
      title: null,
      single: null,
      multiple: null,
      projectCompany: { title: "", company: "", users: [] },
      companyname: [],
      users: []
    };
  },
  created() {
    this.userDropdownProject();
    this.getOneProject();
  },
  methods: {
    onChange() {
      console.log("companydropdown", this.projectCompany.companyname._id);
      dataCompany.findCompany(this.projectCompany.companyname._id, response => {
        console.log("res users ", response);
        // this.projectCompany.multiple = response.users;
        this.users = response.users;
      });
    },
    goToPage() {
      this.$router.push("/Project/ViewProject");
    },
    userDropdownProject() {
      dataCompany.getAllList(this.projectCompany, response => {
        console.log("getUSers", this.projectCompany);
        this.companyname = response;
      });
    },
    // onSubmit() {
    //   this.projectCompany.company = this.projectCompany.companyname._id;
    //   dataCompany.createProject(this.projectCompany, response => {
    //     console.log("projectcreated save", this.projectCompany);
    //     this.$router.push("/project/viewProject");
    //   });
    // },
    getOneProject() {
      const id = this.$route.query.id;
      dataCompany.getOneProject(id, response => {
        this.findCompany(response.company._id);
        console.log("response proj", response);
        this.projectCompany = response;
      });
    },
    findCompany(id) {
      dataCompany.findCompany(id, response => {
        console.log("users", response.users);
        this.users = response.users;
      });
    },
    onSubmit() {
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
      this.editProject();
      this.$router.push("/Project/viewProject/");
    },
    editProject() {
      dataCompany.editProject(this.projectCompany, response => {
        console.log("edit response", response);
      });
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>
