<template>
    <div>
        <div>
           <q-btn color="info" size="xs" to="/Company/EditCompany" class="q-mr-md">Edit</q-btn>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      essentialLinks: [
        {
          title: "Company",
          caption: "quasar.dev",
          icon: "school",
          link: "/Company/viewCompany"
        },
        {
          title: "Environment",
          caption: "code.quasar.dev",
          icon: "code",
          link: "/Environment/viewEnvironment"
        },
        {
          title: "Project",
          caption: "chat.quasar.dev",
          icon: "chat",
          link: "/Project/viewProject"
        }
      ]
    };
  }
};
</script>
