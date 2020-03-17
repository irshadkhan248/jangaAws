
<template>
<div class="sublayout-contain">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
         <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="arrow_back"
           @click="$router.go(-1)"
        />
        <q-toolbar-title>Janga</q-toolbar-title>
        <div>v0.1</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</div>
</template>
<script>
export default {
  name: "SubLayout"
};
</script>
<style lang="scss" scoped>
.sublayout-contain{
 .q-page-container{
  padding-top: 0px!important;
 }
}

</style>
