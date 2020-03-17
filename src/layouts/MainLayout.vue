<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>Janga</q-toolbar-title>

        <div>v0.1</div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Jagruti Shah</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Company",
          caption: "quasar.dev",
          icon: "school",
          link: "/Company/viewCompany"
        },
        {
          title: "Project",
          caption: "chat.quasar.dev",
          icon: "chat",
          link: "/Project/viewProject"
        },
        {
          title: "Environment",
          caption: "code.quasar.dev",
          icon: "code",
          link: "/Environment/viewEnvironment"
        }
      ]
    };
  }
};
</script>
