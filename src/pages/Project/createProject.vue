<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="text-h5">Create Project</div>
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
              v-model="projectCompany.companyname"
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
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
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
      projectCompany: { title: "", company: [], users: [] },
      companyname: [],
      users: [],
      company: []
    };
  },
  created() {
    this.userDropdownProject();
  },
  methods: {
    onChange() {
      dataCompany.findCompany(this.projectCompany.companyname._id, response => {
        this.users = response.users;
      });
    },
    userDropdownProject() {
      dataCompany.getAllList(this.projectCompany, response => {
        this.companyname = response;
      });
    },
    onSubmit() {
      this.projectCompany.company = this.projectCompany.companyname._id;
      dataCompany.createProject(this.projectCompany, response => {
        this.$router.push("/project/viewProject");
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
