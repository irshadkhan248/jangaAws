<template>
  <q-page>
    <div class="q-pa-md">
        <template>
          <div class="text-h5">Create Company</div>
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
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        ></q-input>
        <!-- <q-select
          filled
          v-model="model"
          use-input
          multiple
          map-options
          emit-value
          option-value="id"
          option-label="name"
          use-chips
          stack-label
          input-debounce="0"
          label="Simple filter"
          :options="options"
          @filter="filterFn"
          style="width: 250px"
        /> -->
        <!-- https://forum.quasar-framework.org/topic/4039/solved-multi-q-select-with-an-array-of-objects/9 -->
         <!-- <q-select
          filled
          v-model="company.users"
          use-input
          multiple
          map-options
          emit-value
          option-value="username"
          option-label="username"
          use-chips
          stack-label
          input-debounce="0"
          label="Simple filter"
          :options="users"
        /> -->
        <q-select
        dense
          multiple
          filled
          label="Users *"
          hint="Select users which you want to give access to."
          color="secondary"
          v-model.trim="company.users"
          :options="users"
          option-label="username"
          option-value="username"
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
      name: null,
      // age: null,
      // accept: false,
      company: { name: "", users: [] },
      // options: ["dimple", "prerna"],
      users: []
    };
  },
  methods: {
    onSubmit() {
      console.log("dgdfgdfgdf", this.company);
      dataCompany.createCompany(this.company, response => {
        console.log("res", response);
        this.$router.push("/Company/viewCompany/");
      });
    },
    getUserDropdown() {
      dataCompany.getAllUsers(this.company, response => {
        console.log("res", response);
        this.users = response;
      });
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  },
  created() {
    this.getUserDropdown();
  }
};
</script>
