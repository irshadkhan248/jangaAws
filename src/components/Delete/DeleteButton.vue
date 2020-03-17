<template>
  <div>
    <q-btn
      label="Delete"
      color="red"
      size="xs"
      class="q-mr-md"
      @click="open()"
    />
    <q-dialog v-model="Delete" persistent :position="position">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-pt-md q-ml-">Are You Sure.You Want To Delete?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Ok"
            color="primary"
            @click="deleteById()"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- <q-modal v-model="opened">
    <q-btn
      color="primary"
      @click="opened = true"
      label="Close"
    />
  </q-modal> -->
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      opened: false,
      Delete: false,
      position: "top"
    };
  },
  methods: {
    open() {
      this.Delete = true;
    },
    deleteById() {
      this.$emit("event_child", this.data);
      console.log("data", this.data);
    }
  }
};
</script>
