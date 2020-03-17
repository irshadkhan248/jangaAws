<template>
  <q-page>
    <div class="q-pa-md">
      <template>
        <div class="text-h5">Edit Company</div>
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
              v-model="company.name"
              label="Company Name *"
              hint="Your Company name."
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            ></q-input>
            <q-select
              dense
              multiple
              filled
              inverted
              label="Users *"
              hint="Select values which you want to give access to."
              color="secondary"
              v-model="company.users"
              :options="users"
              option-label="username"
              option-value="username"
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
      name: null,
      age: null,
      accept: false,
      company: { name: "", users: [] },
      users: [],
      id: ""
    };
  },
  methods: {
    //   find api for company
    companyFind() {
      console.log("id", this.id);
      dataCompany.findCompany(this.id, response => {
        console.log("respones", response);
        this.company.name = response.name;
        this.company._id = response._id;
        this.company.users = response.users;
      });
    },
    goToPage() {
      this.$router.push("/Company/ViewCompany");
    },
    // for geted all users
    getUserDropdown() {
      dataCompany.getAllUsers(this.company, response => {
        console.log("res", response);
        this.users = response;
      });
    },
    // on submit call this update api
    onSubmit() {
      console.log("edituer===", this.company);
      dataCompany.editCompany(this.company, response => {
        console.log("res====", response);
        // this.company = response;
        this.$router.push("/Company/viewCompany/");
      });
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.companyFind();
    this.getUserDropdown();
  }
};
</script>
