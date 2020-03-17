<template>
  <q-layout>
    <q-page-container class="window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-actions class="q-px-md">
              <q-btn
                to="/Company/viewCompany"
                unelevated
                dense
                color="light-green-7"
                size="lg"
                class="full-width"
                label="Login"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">Not reigistered? Created an Account</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>
